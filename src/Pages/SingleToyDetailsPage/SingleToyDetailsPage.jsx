import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleToyDetailsPage = () => {
    const paramId = useParams()
    const [singleToy, setSingleToy] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categoryDetails')
          .then((res) => res.json())
          .then((data) => {
            const singleData = data.find((d) => d.id == paramId.id);
            setSingleToy(singleData);
          });
      }, []);
      const { img, name, price, quantity, rating, description, category} = singleToy;
      console.log(singleToy);
      return (
        <div>
          <div className="my-8">
            <h2 className="text-center text-4xl font-bold text-primary font-mono ">
              Single Toy Details Page
            </h2>
            <p className="text-center  text-gray-500">__________________</p>
          </div>
          <div className="flex flex-wrap shadow-xl rounded-xl mb-12">
            <div className="sm:w-1/2 w-full">
              <img className="w-full h-[550px]" src={img} alt="" />
            </div>
            <div className="w-1/2 p-6 font-bold flex flex-col text-gray-600">
              <p className="mb-2">Category: {category} </p>
              <p className="mb-2">Product Name: {name} </p>
              <p className="mb-2">Price: {price} </p>
              <p className="mb-4">Description: {description}</p>
              <p>Quantity: {quantity}</p>
              <p className="mb-2">Rating: {rating} </p>
            </div>
          </div>
        </div>
      );
};

export default SingleToyDetailsPage;
