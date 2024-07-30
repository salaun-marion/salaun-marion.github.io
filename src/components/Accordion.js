import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/accordion.css';

function useEffectOnce(effect) {
  const effectFn = useRef(effect);
  const destroyFn = useRef();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, refresh] = useState(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    refresh(1);

    return () => {
      if (rendered.current === false) return;
      if (destroyFn.current) destroyFn.current();
    };
  }, []);
}

export default function Accordion() {
  const [clickCounts, setClickCounts] = useState(Array(4).fill(0));

  useEffectOnce(() => {
    const items = document.querySelectorAll('.item');

    const expand = (item, i) => {
      items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
      });
      gsap.to(items, {
        width: item.clicked ? '15vw' : '8vw',
        duration: 2,
        ease: 'elastic(0.5, .9)',
      });
      item.clicked = !item.clicked;
      gsap.to(item, {
        width: item.clicked ? '48vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(0.5, .9)',
      });
    };
    items.forEach((item, i) => {
      item.clicked = false;
      item.addEventListener('click', () => expand(item, i));
    });
  });

  const handleClick = (index) => {
    console.log('CLICKCOUNTS', clickCounts);
    const newClickCounts = [...clickCounts];

    newClickCounts[index] += 1;
    console.log('NEWCLICKCOUNTS', newClickCounts);
    setClickCounts(newClickCounts);

    if (newClickCounts[1] === 2) {
      window.location.href = `https://github.com/salaun-marion/GenderPayGap`;
    }
    if (newClickCounts[3] === 2) {
      window.location.href = `https://github.com/salaun-marion/board-counter`;
    }
  };

  return (
    <div className="group">
      <div
        className="item"
        style={{ backgroundImage: 'url(images/Blob.png)' }}
      ></div>
      <div
        className="item"
        style={{ backgroundImage: 'url(images/GenderPayGap.png)' }}
        onClick={() => handleClick(1)}
      ></div>
      <div
        className="item"
        style={{
          backgroundImage: 'url(images/Circurement.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div
        className="item"
        style={{
          backgroundImage: 'url(images/board.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        onClick={() => handleClick(3)}
      ></div>
    </div>
  );
}
