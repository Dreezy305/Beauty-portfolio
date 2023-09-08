"use client"
import React, { useEffect, useState } from 'react';

function TypingAnimation({texts = "Lorem ipsum dummy text blabla.", className}: {texts: string; className: string}) {
//   const [i, setI] = useState(0);
  const [words, setWords] = useState("")
  const txt = texts;
  const speed = 50;

  useEffect(() => {
    function typeWriter() {
        let i =  0
      if (i < txt.length) {
        const w = txt.charAt(i);
        setWords(w)
        i++
        // setI(i + 1);
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter(); // Start the typing animation when the component mounts

    return () => {};
  }, []); // Only re-run the effect when the 'i' state changes

  return (
    <span className={className}>
     
        {words}
      
    </span>
  );
}

export default TypingAnimation;