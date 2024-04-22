import React from 'react'

function Banner(props) {
  return (
    <div className={`${props.background} bg-banner-1| bg-cover bg-center bg-no-repeat `}>
      <div className='container py-[116px] sm:py-[130px] md:py-[148 px] lg:py-[148px] xl:py-[188px] xxl:py-[210px]'>
      <p className='text-[18px] font-bold text-secondary'>{props.label}</p>
      <p className='text-[28px]  font-bold sm:text-[33px] md:text-[37px] lg:text-[42px] xl:text-[47px] xxl:text-[53px]'>
      {props.heading}</p>
      <p>
       {props.description}
      </p>
      <button to={props.redirectUrl} className='btn mt-4'>Shop now </button>

      </div>
    </div>
  //  <img src='/assests/banner2.png'></img>
  )
}

export default Banner