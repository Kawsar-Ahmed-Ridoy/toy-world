import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SIngleToy = () => {
  const paramId = useParams();
  const [singleToy, setSingleToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addAToy")
      .then((res) => res.json())
      .then((data) => {
        const singleData = data.find((d) => d._id == paramId.id);
        setSingleToy(singleData);
    });
}, []);
  const { photo, productName, price, quantity, rating, description, gander, email, displayName } = singleToy;
  return (
    <div>
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          Single Toy Details
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="flex flex-wrap shadow-xl rounded-xl mb-12">
        <div className="sm:w-1/2 w-full">
          <img className="w-full h-[550px]" src={photo} alt="" />
        </div>
        <div className="w-1/2 p-6 font-bold flex flex-col text-gray-600">
          <h1 className="text-4xl mb-2">Product Name: {productName} </h1>
          <p className="mb-2">Seller Name: {displayName}</p>
          <p className="mb-2">Seller Email: {email} </p>
          <p className="mb-2">Category: {gander} </p>
          <p className="mb-2">Price: {price} </p>
          <p className="mb-4">Description: {description}</p>
          <p>Quantity: {quantity}</p>
          <p className="mb-2">Rating: {rating} </p>
        </div>
      </div>
    </div>
  );
};

export default SIngleToy;
