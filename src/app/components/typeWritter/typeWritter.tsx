import { useEffect, useState } from "react";

interface TTypeWriter {
  title: string;
  subtitle: string;
  className?: { title: string; subtitle: string };
}

const DELAY_MS = 100;

function TypeWriter({ title, subtitle, className }: TTypeWriter) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [subtitleDisplayText, setSubtitleDisplayText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < title.length) {
        setDisplayText(displayText + title[index]);
        setIndex(index + 1);
      }
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [index, title, displayText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayText === title && subtitleIndex < subtitle.length) {
        setSubtitleDisplayText(subtitleDisplayText + subtitle[subtitleIndex]);
        setSubtitleIndex(subtitleIndex + 1);
      }
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [subtitleIndex, subtitleDisplayText, subtitle, title, displayText]);

  return (
    <>
      <p className={className?.title}>{displayText}</p>
      <p className={className?.subtitle}>{subtitleDisplayText}</p>
    </>
  );
}

export default TypeWriter;
