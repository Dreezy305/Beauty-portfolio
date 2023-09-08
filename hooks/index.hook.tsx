"use client"
import { useEffect, useState } from "react";

function useTypewriter(text: any, speed: any) {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: any;

    if (index < text.length) {
      timer = setTimeout(() => {
        setOutput((prevOutput) => prevOutput + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [text, speed, index]);

  return output;
}

export default useTypewriter;
