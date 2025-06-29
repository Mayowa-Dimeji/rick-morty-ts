const Play = () => {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-12 h-full w-full gap-10">
      <h1 className="text-2xl flex-1">Play Game</h1>
      <p className="text-center max-w-2xl font-medium flex flex-col gap-2 ">
        Welcome to Multiverse Mayhem! Hi, I'm May, and I'm currently working on
        this exciting trivia game project. This game will feature dynamic and
        engaging trivia questions, all powered by a serverless API designed to
        integrate with machine learning models. While I'm still exploring
        options, I'm considering utilizing AWS services or models like Amazon
        Bedrock to enhance the gameplay experience. This is a live project, and
        I'm constantly updating it to introduce new features and improvements.
        Stay tuned for more, and feel free to check out the progress on my
        <a
          href="https://github.com/Mayowa-Dimeji/rick-morty-ts.git"
          className="text-blue-500 hover:underline active:text-blue-700 transition-colors duration-300"
        >
          GitHub
        </a>
      </p>
    </section>
  );
};

export default Play;
