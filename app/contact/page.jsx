import React from 'react'

const Contact = () => {
  return (
    <section className="container mx-auto p-4 lg:p-7">
      <div className="grid grid-cols-2 gap-3 items-center">
        <div>
          <img src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/rS7zCH1JT424njvgNv8h" alt="" className="w-[600px]"/>
        </div>

        <div className="flex flex-col gap-5">
          <input type="text" className="p-2 border border-neutral-500 bg-transparent rounded-md focus:outline-none"/>
          <input type="email" className="p-2 border border-neutral-500 bg-transparent rounded-md focus:outline-none"/>
          <textarea name="" id="" cols="30" className="p-2 border border-neutral-500 bg-transparent rounded-md focus:outline-none"></textarea>
        </div>
      </div>
    </section>
  )
}

export default Contact