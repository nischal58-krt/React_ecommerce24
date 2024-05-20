import React from 'react'

function BreadCrum(props) {
  return (
    <div className="bg-[#F6F5FF]">
        <div className="mx-auto max-w-[210px] py-10">
          <p className="text-[20px] font-bold md:text-[36px]">{props.title}</p>
          <div className="flex flex-wrap gap-2 text-xs md:text-base">
            <a href="" className=" hover:text-secondary">
              Home
            </a>
            <a href="" className=" hover:text-secondary">
              Pages
            </a>
            <a href="" className=" hover:text-secondary">
              {props.heading}
            </a>
          </div>
        </div>
      </div>
  )
}

export default BreadCrum