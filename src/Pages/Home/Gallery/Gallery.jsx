import React, { useEffect, useState } from "react";

const Gallery = () => {
    const [gallery, setGallery] = useState([])

    useEffect(()=>{
        fetch('gallery.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    },[])

  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          Gallery
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="flex justify-around align-middle flex-wrap gap-10">
        {
            gallery?.map(gal => <div className="card w-72 bg-base-100 shadow-xl" key={gal.id}>
            <figure >
              <img
                className="rounded-2xl h-60 w-full"
                src={gal.img}
                
                alt="Shoes"
              />
            </figure>
          </div>)
        }
      </div>
    </div>
  );
};

export default Gallery;
