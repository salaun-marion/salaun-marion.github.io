import gsap from 'gsap';
import React, {  useEffect, useRef, useState } from 'react';
import '../styles/accordion.css';

function useEffectOnce(effect) {
    const effectFn = useRef(effect)
    const destroyFn = useRef()
    const effectCalled = useRef(false)
    const rendered = useRef(false)
    const [, refresh] = useState(0)
  
    if (effectCalled.current) {
      rendered.current = true
    }
  
    useEffect(() => {
      if (!effectCalled.current) {
        destroyFn.current = effectFn.current()
        effectCalled.current = true
      }
  
      refresh(1)
  
      return () => {
        if (rendered.current === false) return
        if (destroyFn.current) destroyFn.current()
      }
    }, [])
}


export default function Accordion(){

    useEffectOnce(() => {
        const items = document.querySelectorAll('.item')

        const expand = (item, i) => {
            items.forEach((it, ind) => {
                if (i === ind) return
                it.clicked = false
            })
            gsap.to(items, {
                width: item.clicked ? '15vw' : '8vw',
                duration: 2,
                ease: 'elastic(0.5, .9)'
            })
            item.clicked = !item.clicked
            gsap.to(item, {
                width: item.clicked ? '48vw' : '15vw',
                duration: 2.5,
                ease: 'elastic(0.5, .9)'
            })
        }
        items.forEach((item, i) => {
            item.clicked = false
            item.addEventListener('click', () => expand(item, i))
        })
       
    });   

    return (
        <div className="group">
            <div className="item" style={{"backgroundImage": "url(images/Blob.png)"}}></div>            
            <div className="item" style={{"backgroundImage": "url(images/GenderPayGap.png)"}}></div>
            <div className="item" style={{"backgroundImage": "url(images/Circurement.png)"}}></div>
        </div>
    )
}
