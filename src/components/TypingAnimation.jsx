import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypingAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    // Inside useEffect the element is already mounted, so no jQuery/document.ready needed.
    const options = {
      strings: [
        "Oops! It looks like you're lost. <br /> ^1000" +
        "Sorry about that. <br /> ^1000" +
        "Let me try and help. <br /> ^1000" +
        '<a href="/" class="llll">Go to Home</a> ^1000'
      ],
      typeSpeed: 0,
      showCursor: false,
      contentType: 'html', // Ensure that HTML is processed correctly
    };

    const typed = new Typed(textRef.current, options);

    // Clean up Typed.js when the component unmounts
    return () => typed.destroy();
  }, []);

  return (
    <div className="text" ref={textRef}></div>
  );
}

export default TypingAnimation;
