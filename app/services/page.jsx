"use client"
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const services = [
  {
    id: 1,
    title: 'Web Design',
    img: 'https://o.remove.bg/downloads/6ee249b7-e223-43cf-86df-3db186d6a3b6/istockphoto-1362508194-612x612-removebg-preview.png',
  },
  {
    id: 2,
    title: 'UI Design',
    img: 'https://o.remove.bg/downloads/fabbae9c-1b51-4b63-95b6-b2af96ce0bf4/Web-development_-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG-removebg-preview.png',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    img: 'https://o.remove.bg/downloads/9bd93a52-a36c-4d16-b599-9efe3db21689/image-removebg-preview.png',
  },
  {
    id: 4,
    title: 'UX Design',
    img: 'https://o.remove.bg/downloads/9bd93a52-a36c-4d16-b599-9efe3db21689/image-removebg-preview.png',
  },
  {
    id: 5,
    title: 'Graphic Design',
    img: 'https://o.remove.bg/downloads/9bd93a52-a36c-4d16-b599-9efe3db21689/image-removebg-preview.png',
  },
  {
    id: 6,
    title: 'Logo Design',
    img: 'https://o.remove.bg/downloads/9bd93a52-a36c-4d16-b599-9efe3db21689/image-removebg-preview.png',
  },
]


const icons = [
  {
    id: 1,
    img: 'https://animesh-rawat.web.app/assets/img/skills/html.svg',
  },
  {
    id: 2,
    img: 'https://animesh-rawat.web.app/assets/img/skills/css.svg',
  },
  {
    id: 3,
    img: 'https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png',
  },
  {
    id: 4,
    img: 'https://img.icons8.com/?size=512&id=13677&format=png',
  },
  {
    id: 5,
    img: 'https://img.icons8.com/?size=512&id=4VVL78edhbW9&format=png',
  },
  {
    id: 6,
    img: 'https://img.icons8.com/?size=512&id=iWw83PVcBpLw&format=png',
  },
]

const Services = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="grid grid-row-3 gap-5 container mx-auto p-7">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
        {services.map((service) => {
          return (
            <div className="border-2 border-stone-700 text-white p-4">
              <div className="flex flex-col gap-5">
                <p className="font-Oswald text-3xl">{service.title}</p>
                <small className="font-DMSans text-sm text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugit! Vel ipsa a eos repellat, nam natus soluta asperiores culpa ipsum, eligendi beatae tempora. Officia omnis ab ipsum. Sed, non!</small>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        <div className="flex flex-col gap-3 border-2 border-stone-700 text-white p-4">
          <p className="text-white font-Oswald text-2xl">10+</p>
          <small className="text-neutral-300 font-Oswald text-base">PROJECTS COMPLETED</small>
        </div>
        <div className="flex flex-col gap-3 border-2 border-stone-700 text-white p-4">
          <p className="text-white font-Oswald text-2xl">6+</p>
          <small className="text-neutral-300 font-Oswald text-base">MONTHS OF EXPERIENCE</small>
        </div>
      </div>

      <div className="flex justify-around pt-5"> {/* Container for floating icons */}
        {icons.map((icon) => {
          const distanceX = mousePosition.x - icon.x;
          const distanceY = mousePosition.y - icon.y;

          return (
            <img
              key={icon.id}
              src={icon.img}
              alt=""
              className="floating-icon animate-pulse"
              style={{
                transform: `translate(${distanceX * 0.02}px, ${distanceY * 0.02}px)`,
              }}
            />
          );
        })}
      </div>
    </section>
  )
}

export default Services