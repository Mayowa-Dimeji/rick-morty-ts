import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
};

export default function Play() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const generateTrivia = async () => {
      const cached = localStorage.getItem("cachedCharacters");
      let characters;

      if (cached) {
        characters = JSON.parse(cached);
      } else {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        characters = data.results.slice(0, 5);
        localStorage.setItem("cachedCharacters", JSON.stringify(characters));
      }

      const newQuestions = buildQuestionsFromCharacters(characters);
      setQuestions(newQuestions);
    };

    generateTrivia();
  }, []);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = questions[currentIndex].correctAnswer;
    if (answer === correct) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  if (!questions.length) return <div className="p-4">Loading trivia...</div>;

  if (showResult)
    return (
      <div className="p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Game Over!</h2>
        <p className="text-lg">
          You scored {score} out of {questions.length}
        </p>
        <a href="/play" className="bg-green-600 text-white px-4 py-2 rounded">
          Play Again
        </a>
      </div>
    );

  const current = questions[currentIndex];

  return (
    <section className="flex flex-col">
      <div className="flex justify-end p-6">
        <a
          href="/"
          className="flex font-orbitron text-xl border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 p-6"
        >
          Back
        </a>{" "}
      </div>
      <div className="p-8 max-w-xl mx-auto space-y-6">
        <h2 className="text-xl font-semibold">{current.question}</h2>
        <div className="grid gap-4">
          {current.answers.map((answer) => {
            const isCorrect = answer === current.correctAnswer;
            const isSelected = selectedAnswer === answer;

            return (
              <button
                key={answer}
                onClick={() => handleAnswer(answer)}
                disabled={!!selectedAnswer}
                className={`px-4 py-2 rounded border 
                ${
                  isSelected
                    ? isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-blue-600 hover:bg-blue-700"
                }
                text-white`}
              >
                {answer}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-gray-400">
          Question {currentIndex + 1} of {questions.length}
        </p>
      </div>
    </section>
  );
}

// === Question Generation ===
function buildQuestionsFromCharacters(characters: any[]): Question[] {
  const questions: Question[] = [];

  characters.forEach((char: any, index: number) => {
    // Species
    const speciesOptions = getUniqueOptions(char.species, getRandomSpecies, 4);
    questions.push({
      id: index * 3 + 1,
      question: `What species is ${char.name}?`,
      answers: speciesOptions,
      correctAnswer: char.species,
    });

    // Status
    const statusOptions = getUniqueOptions(char.status, getRandomStatus, 3);
    questions.push({
      id: index * 3 + 2,
      question: `What is the status of ${char.name}?`,
      answers: statusOptions,
      correctAnswer: char.status,
    });

    // Origin
    const originOptions = getUniqueOptions(
      char.origin.name,
      getRandomOrigin,
      3
    );
    questions.push({
      id: index * 3 + 3,
      question: `Where is ${char.name} originally from?`,
      answers: originOptions,
      correctAnswer: char.origin.name,
    });
  });

  return shuffleArray(questions);
}

// === Helpers ===
function getUniqueOptions(
  correct: string,
  generator: () => string,
  total: number
): string[] {
  const options = new Set([correct]);
  while (options.size < total) {
    options.add(generator());
  }
  return shuffleArray(Array.from(options));
}

function getRandomSpecies() {
  const species = [
    "Human",
    "Alien",
    "Robot",
    "Cronenberg",
    "Mytholog",
    "Parasite",
    "Animal",
    "Unknown",
  ];
  return species[Math.floor(Math.random() * species.length)];
}

function getRandomStatus() {
  return ["Alive", "Dead", "unknown"][Math.floor(Math.random() * 3)];
}

function getRandomOrigin() {
  const origins = [
    "Earth (C-137)",
    "Earth (Replacement Dimension)",
    "Abadango",
    "Gazorpazorp",
    "Blips and Chitz",
    "Froopyland",
    "unknown",
  ];
  return origins[Math.floor(Math.random() * origins.length)];
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
