const loveUsing = [
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "React Native",
];

const learning = ["Swift", "TensorFlow.js", "Rust"];
const wantToLearn = ["Go", "Kotlin"];
export const Using = () => {
  return (
    <div>
      <h3 className="text-2xl font-extrabold text-slate-50 sm:text-3xl tracking-tight mt-8">
        <span className="block underline underline-offset-2 decoration-2 decoration-rose-600">
          I Love Using:
        </span>
      </h3>
      <ul className="mt-4 flex flex-wrap">
        {loveUsing.map((item, i) => (
          <li
            key={item}
            className="text-lg font-semibold text-slate-50 sm:text-xl tracking-wide mr-2"
          >
            {item}
            {i !== loveUsing.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-extrabold text-slate-50 sm:text-3xl tracking-tight mt-8">
        <span className="block underline underline-offset-2 decoration-2 decoration-rose-600">
          I&apos;m Currently Learning:
        </span>
      </h3>
      <ul className="mt-4 flex flex-wrap">
        {learning.map((item, i) => (
          <li
            key={item}
            className="text-lg font-semibold text-slate-50 sm:text-xl tracking-wide mr-2"
          >
            {item}
            {i !== learning.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-extrabold text-slate-50 sm:text-3xl tracking-tight mt-8">
        <span className="block underline underline-offset-2 decoration-2 decoration-rose-600">
          I Want To Learn:
        </span>
      </h3>
      <ul className="mt-4 flex flex-wrap">
        {wantToLearn.map((item, i) => (
          <li
            key={item}
            className="text-lg font-semibold text-slate-50 sm:text-xl tracking-wide mr-2"
          >
            {item}
            {i !== wantToLearn.length - 1 && <span>,</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};
