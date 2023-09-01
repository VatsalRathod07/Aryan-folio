import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const works = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689491793/catalog/1680475500301520896/ffvkqcw414o6qlefjxzb.jpg',
  },
  {
    id: 2,
    image: 'https://miro.medium.com/v2/resize:fit:916/1*z2BaY_MTgmcjgLfNyGQJ4g.png',
  },
  {
    id: 3,
    image: 'https://cdn.dribbble.com/userupload/3187329/file/still-168ad7c34a2a4cc41146ba3c2d04be4e.png?resize=400x0',
  },
  {
    id: 4,
    image: 'https://lollypop.design/wp-content/uploads/2023/04/tinywow_Scene-1_20415612.webp',
  },
  {
    id: 5,
    image: 'https://uploads-ssl.webflow.com/621d2ed207575c12272d3694/62320702efbbfb961052859d_61f887cd739d486e6065903b_image%2520(3).png',
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1684864555/catalog/1661060909300297728/rq2grlm1x9wmg8vpdgy2.jpg',
  },
]

const Work = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 p-7 gap-10">
        {works.map((work) => {
          return (
            <div key={work.id}>
              <div className="overflow-hidden">
                <img src={work.image} alt={work.title} className="w-full object-cover h-[300px] hover:scale-110 transition ease-linear duration-500"/>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Work