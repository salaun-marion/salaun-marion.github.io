import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import '../styles/accordion.css';
import Legend from './Legend';
import { itemsData, style } from '../constants/constants';

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
  const [styleCircu, setStyleCircu] = useState(style);
  const [playerStyle, setPlayerStyle] = useState({
    display: 'none',
  });
  const [itemSelect, setItemSelect] = useState(null);

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

      // To launch the video for item number 2
      if (i !== 2) {
        setStyleCircu(styleCircu);
        setPlayerStyle({ display: 'none' });
      } else {
        setStyleCircu({});
        setPlayerStyle({ display: 'flex' });
      }
    };

    items.forEach((item, i) => {
      item.clicked = false;
      item.addEventListener('click', () => {
        expand(item, i);
        setItemSelect(i);
      });
    });
  });

  return (
    <>
      <div className="group">
        {itemsData.map((item) => (
          <div
            key={item.index}
            className="item"
            style={
              item.index === 2
                ? styleCircu
                : {
                    backgroundImage: item.backgroundImage,
                    backgroundRepeat: item.backgroundRepeat,
                    backgroundSize: item.backgroundSize,
                  }
            }
          >
            {item.isVideo && (
              <ReactPlayer
                url="https://vimeo.com/1034941029/36868d0626"
                loop={true}
                playing={true}
                height={'75vh'}
                width={'100%'}
                style={playerStyle}
              />
            )}
          </div>
        ))}
      </div>
      {itemsData.map((item) => {
        if (itemSelect === item.index) {
          return (
            <Legend
              key={item.index}
              description={item.description}
              url={item.url}
            />
          );
        }
        return null;
      })}
    </>
  );
}
