"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms برای هر کاراکتر
  pause?: number; // مکث بعد از کامل شدن متن
}

function TypewriterText({
  text,
  speed = 90,
  pause = 1500,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId: number;

    const type = () => {
      // هنوز در حال اضافه کردن کاراکترها
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index += 1;
        timeoutId = window.setTimeout(type, speed);
      } else {
        // متن کامل شد → یک مکث، بعد از اول شروع کن
        index = 0;
        timeoutId = window.setTimeout(type, pause);
      }
    };

    type();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [text, speed, pause]);

  return (
    <span className="relative inline-flex items-center">
      <span>{displayed}</span>
      {/* کرسر ساده با چشمک زدن */}
      <span className="ml-[2px] inline-block h-4 w-[2px] translate-y-[1px] bg-yellow-400 animate-pulse" />
    </span>
  );
}

export default TypewriterText;
