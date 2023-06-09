import React from 'react';

const Banner = () => {
    return (
        <div className="mb-16">
      <>
        <div style={{ height: "93vh" }} className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="bg-secondary opacity-30 absolute h-full w-full"></div>
            <img src='https://i.ibb.co/9YVQpLF/maxresdefault.jpg' alt="" className="w-full" />

            <div
              style={{ height: "90vh" }}
              className="absolute flex justify-center align-middle w-full text-center 
        font-serif text-white "
            >
              <div className='my-auto container p-4'>
              <h2 className="text-5xl uppercase leading-tight font-mono font-extrabold">
              Welcome to Toy World <br /> Where Imagination <br /> Comes to Life!
              </h2>
              <p>Explore a world of endless fun and imagination at Toy World! We offer a wide range of captivating toys and games that inspire creativity, curiosity, and joy in children of all ages. Discover the perfect playtime companions, from classic favorites to the latest trends, designed to engage, educate, and entertain. With our commitment to quality and safety, you can trust that every toy in our collection is carefully selected to bring smiles to little faces and create unforgettable memories. Step into Toy World and unlock a world of boundless possibilities for playtime adventures. Start exploring today!</p>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-primary border-none text-accent">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle bg-primary border-none text-accent">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="bg-secondary opacity-30 absolute h-full w-full"></div>
            <img src='https://i.ibb.co/SRMJk3R/best-car-toys-kids.jpg' alt="" className="w-full" />
            <div
              style={{ height: "90vh" }}
              className="absolute flex justify-center align-middle w-full text-center 
        font-serif text-white "
            >
              <div className='my-auto container p-4'>
              <h2 className="text-5xl uppercase leading-tight font-mono font-extrabold">
              Welcome to Toy World <br /> Where Imagination <br /> Comes to Life!
              </h2>
              <p>Explore a world of endless fun and imagination at Toy World! We offer a wide range of captivating toys and games that inspire creativity, curiosity, and joy in children of all ages. Discover the perfect playtime companions, from classic favorites to the latest trends, designed to engage, educate, and entertain. With our commitment to quality and safety, you can trust that every toy in our collection is carefully selected to bring smiles to little faces and create unforgettable memories. Step into Toy World and unlock a world of boundless possibilities for playtime adventures. Start exploring today!</p>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-primary border-none text-accent">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle bg-primary border-none text-accent">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="bg-secondary opacity-30 absolute h-full w-full"></div>
            <img src='https://i.ibb.co/X5rrxCP/maxresdefault-1.jpg' alt="" className="w-full" />
            <div
              style={{ height: "90vh"}}
              className="absolute flex justify-center align-middle w-full text-center 
        font-serif text-white "
            >
              <div className='my-auto container p-4'>
              <h2 className="text-5xl uppercase leading-tight font-mono font-extrabold">
              Welcome to Toy World <br /> Where Imagination <br /> Comes to Life!
              </h2>
              <p>Explore a world of endless fun and imagination at Toy World! We offer a wide range of captivating toys and games that inspire creativity, curiosity, and joy in children of all ages. Discover the perfect playtime companions, from classic favorites to the latest trends, designed to engage, educate, and entertain. With our commitment to quality and safety, you can trust that every toy in our collection is carefully selected to bring smiles to little faces and create unforgettable memories. Step into Toy World and unlock a world of boundless possibilities for playtime adventures. Start exploring today!</p>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-primary border-none text-accent">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle bg-primary border-none text-accent">
                ❯
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
    );
};

export default Banner;