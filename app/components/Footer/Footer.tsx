import React from 'react'
import Link from 'next/link'
import { BrandBehance,BrandLinkedin, BrandTwitter, BrandInstagram } from 'tabler-icons-react';

 function Footer({ location }: { location?:string }): JSX.Element {
  return (
    <footer className={`${location === "others" ? "block" : "hidden"}`}>
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h6 className="text-center font-LotaSemiBold font-semibold text-2xl leading-6">Get In Touch Or Just Say Hi</h6>
          <p className="font-LotaRegular text-xl leading-6 font-normal">Email: Ohiabeauty26@gmail.com</p>
          <div className="flex flex-row items-center justify-center space-x-3">
            <a href="https://www.behance.net/ohiabeauty" target="_blank" rel="noreferrer" className="cursor-pointer">
            <BrandBehance
    size={48}
    strokeWidth={2}
    color={'#fff'}
    className="cursor-pointer"
  />
            </a>
       <a target="_blank" rel="noreferrer" className="cursor-pointer" href="https://www.linkedin.com/in/beautyohia/"><BrandLinkedin
    size={48}
    strokeWidth={2}
    color={'#fff'}
    className="cursor-pointer"
  /></a>   
  
  <a target="_blank" rel="noreferrer" className="cursor-pointer" href="https://twitter.com/OhiaBeauty">
  <BrandTwitter
    size={48}
    strokeWidth={2}
    color={'#fff'}
    className="cursor-pointer"
  />
  </a>
  
  <a target="_blank" rel="noreferrer" className="cursor-pointer" href="https://twitter.com/OhiaBeauty">
  <BrandInstagram
    size={48}
    strokeWidth={2}
    color={'#fff'}
    className="cursor-pointer"
  />
  </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer