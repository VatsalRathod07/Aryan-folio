import React from 'react'

const About = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-7 gap-10 items-center">
        <div className="flex flex-col gap-3 items-start">
          <div className="flex flex-col gap-2">
            <p className="font-Bayon text-5xl text-white">Aryan Gohil</p>
            <small className="text-neutral-200 font-Oswald">Graphic Design / Web Design</small>
          </div>
          <p className="font-DMSans text-neutral-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum voluptate maxime tempora perspiciatis
            labore voluptatum ab recusandae eaque adipisci, vel repellat accusamus eius facilis
            reprehenderit excepturi odio nobis temporibus.
          </p>

          <div className="flex items-center gap-4">
            <img src="https://img.icons8.com/?size=512&id=zfHRZ6i1Wg0U&format=png" alt="" className="w-10 object-cover" />
            <img src="https://img.icons8.com/?size=512&id=13677&format=png" alt="" className="w-10 object-cover" />
            <img src="https://img.icons8.com/?size=512&id=4VVL78edhbW9&format=png" alt="" className="w-10 object-cover" />
            <img src="https://img.icons8.com/?size=512&id=iWw83PVcBpLw&format=png" alt="" className="w-10 object-cover" />
            {/* <img src="https://animesh-rawat.web.app/assets/img/skills/html.svg" alt="" className="w-10 object-cover" />
          <img src="https://animesh-rawat.web.app/assets/img/skills/css.svg" alt="" className="w-10 object-cover" />
          <img src="https://animesh-rawat.web.app/assets/img/skills/javascript.svg" alt="" className="w-10 object-cover" />
          <img src="https://img.icons8.com/?size=512&id=20906&format=png" alt="" className="w-10 object-cover" />
          <img src="https://animesh-rawat.web.app/assets/img/skills/react.svg" alt="" className="w-10 object-cover" />
          <img src="https://img.icons8.com/?size=2x&id=4PiNHtUJVbLs&format=png" alt="" className="w-10 object-cover" />
          <img src="https://animesh-rawat.web.app/assets/img/skills/sass.svg" alt="" className="w-10 object-cover" />  */}
          </div>
        </div>
        <div className="border-neutral-600 border-2 overflow-hidden">
          <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rS7zCH1JT424njvgNv8h" alt="" className="w-full object-cover p-1 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default About