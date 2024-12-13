import React, { useState, useEffect } from 'react';
import '../styles/presentation.css';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default function Presentation() {
  return (
    <div className="paragraph">
      <p>
        {' '}
        Hello ! My name is Marion,
        <br></br>
        junior swiss knife front-end developer, love{' '}
        <span className="code">coding websites</span>,
        <span className="red"> c</span>
        <span className="orange">o</span>
        <span className="yellow">l</span>
        <span className="green">o</span>
        <span className="blue">r</span>
        <span className="purple">s </span>
        and minimalism.
      </p>
      <br></br>
      <p className="responsive">
        <Typewriter text="I am responsive too." delay={100} />
      </p>
    </div>
  );
}
