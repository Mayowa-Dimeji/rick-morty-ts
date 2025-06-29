const Card = ({ name, image, status, species }: any) => {
  return (
    <section>
      <section className="min-w-[200px] max-w-xs shrink-0 backdrop-blur-md bg-white/30 dark:bg-black/25 flex flex-col shadow-lg rounded-lg p-2   gap-5">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <section className="card-body flex flex-col items-center gap-2">
          <h2 className="card-title">{name}</h2>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
        </section>
      </section>
    </section>
  );
};

export default Card;
