import React from "react";
import Header from "../components/home/Header";
import Banner from "../components/home/Banner";


function Home() {
  return (
    <>
     <Header/>
     
     <Banner/>
      <div id="box" className="bg-slate-500 sm:bg-purple-400 h-20 w-40 border  border-black mt-10" >

      </div>
      <p className="font-josefin">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat,
        officia, consequatur numquam repellendus fugit corrupti dolores,
        obcaecati recusandae maiores rerum maxime eligendi accusantium esse
        voluptatibus! Nesciunt dolorem unde odit.
      </p>

      <p className="font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        amet voluptate, hic corporis nesciunt suscipit incidunt at modi aliquam
        illo.
      </p>
    </>
  );
}

export default Home;
