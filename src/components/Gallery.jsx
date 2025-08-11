import React from 'react'
import { useEffect, useState } from "react";
import Nav from './Nav';

const Gallery = () => {
   const [gallery, setGallery] = useState([]);

  useEffect(() => {
   
    fetch('/gallary.json')
      .then(res => res.json())
      .then(setGallery);
  }, []);

    if(!gallery || gallery.length===0){
        return (
          <div className="text-2xl">Data not found</div>
        )
    }
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-orange-300 via-white to-green-300">
      <Nav />
      <div className="p-4 columns-1 sm:columns-2 md:columns-5 gap-4 mt-20">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid rounded-lg overflow-hidden bg-white shadow relative group cursor-pointer"
          >
            <img
              src={item.url}
              alt={item.Name}
              className="w-full h-auto block"
              loading="lazy"
            />
            <div
              className="
                absolute inset-0
                bg-black/20 bg-opacity-60
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                flex flex-col justify-center items-center
                text-white
                p-4
                text-center
              "
            >
              <h3 className="text-lg font-semibold mb-2">{item.Name}</h3>
              <p className="text-sm">{item.Disc}</p>
              <a className="hover:text-teal-400 p-2" href={item.wikiUrl} target="_blank" rel="noopener noreferrer">Read More &#8594;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
