const Cards = ({ questions, selectedId, handleClick }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-start gap-6 mx-20 md:mt-[13%]">
      {questions.map((question) => (
        <div
          // className="w-full h-40 px-8 py-10 border-2 border-black rounded-sm text-center cursor-pointer"
          className={
            question.id === selectedId
              ? "w-full h-40 px-8 py-10 rounded-sm text-center cursor-pointer bg-red-600 text-white font-extralight"
              : "w-full h-40 px-8 py-10 border-2 border-black rounded-sm text-center cursor-pointer"
          }
          onClick={() => handleClick(question.id)}
          key={question.id}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Cards;
