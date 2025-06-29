const Card = ({ name, image, status, species }: any) => {
  return (
    <section>
      <section className="min-w-[200px] max-w-xs backdrop-blur-md bg-white/30 dark:bg-black/25 flex flex-col h-full shadow-lg rounded-lg p-4 hover:animate-pulse hover:scale-105 gap-5">
        <figure>
          <img src={image} alt={name} className="rounded-md" />
        </figure>
        <section className="card-body flex flex-col items-center gap-2 flex-1">
          <h2 className="card-title ">{name}</h2>
          <p className="">Status: {status}</p>
          <p className="">Species: {species}</p>
        </section>
      </section>
    </section>
  );
};

export default Card;
