import { languages } from "../utils/languages";
import { cn } from "../utils/cn";

export default function Languages({ wrongGuessesArray }) {
  const wrongGuessCount = wrongGuessesArray.length;

  const languageElements = languages.map((lang, index) => {
    const isDead = wrongGuessCount > index;
    const styles = {
      backgroundColor: isDead ? "grey" : lang.backgroundColor,
      color: isDead ? "white" : lang.color,
    };
    return (
      <li key={lang.name}>
        <div
          style={styles}
          className={cn(
            "badge min-w-20 p-4 font-medium tracking-wide text-[#F9F4DA]",
            isDead && "after:content-['💀']",
          )}
        >
          {lang.name}
        </div>
      </li>
    );
  });

  return (
    <div className="">
      <ul className="mt-6 flex max-w-[420px] flex-wrap justify-center gap-2">
        {languageElements}
      </ul>
    </div>
  );
}
