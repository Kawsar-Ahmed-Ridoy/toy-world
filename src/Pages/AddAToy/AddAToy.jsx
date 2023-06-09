import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddAToy = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const displayName = form.sellerName.value;
    const email = form.sellerEmail.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const gander = form.gander.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addAToy = {
      productName,
      displayName,
      email,
      photo,
      price,
      rating,
      gander,
      quantity,
      description
    };
    console.log(addAToy);

    fetch("http://localhost:5000/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addAToy)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Toy Add Successfully");
        }
      });
  };
  return (
    <div className="mb-16 max-w-screen-xl mx-auto">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
         Add A Toy
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="flex justify-around  align-middle flex-wrap ">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 mt-5">
          <input
            name="productName"
            type="name"
            placeholder="Product Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            className="input input-bordered w-full"
            defaultValue={user?.displayName}
            required
          />
          <input
            name="sellerEmail"
            type="text"
            placeholder="Seller Email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            required
          />
          <input
            name="photo"
            type="text"
            placeholder="Product Photo URL"
            className="input input-bordered w-full"
            required
          />

          <div className="flex justify-between flex-wrap ">
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered w-48"
              required
            />

            <input
              name="rating"
              type="number"
              placeholder="Rating"
              min="1"
              max="5"
              className="input input-bordered w-48"
              required
            />
          </div>
          <span className="text-center text-primary font-bold">Category</span>
          <div className="flex justify-between ">
            <div className="">
              <input
                name="gander"
                type="radio"
                value="Sports Car"
                className="radio "
                required
              />
              <label htmlFor="">Sports Car</label>
            </div>
            <div className="">
              <input
                name="gander"
                type="radio"
                value="Mini Fire Truck"
                className="radio"
                required
              />
              <label htmlFor="">Mini Fire Truck</label>
            </div>
            <div className="">
              <input
                name="gander"
                type="radio"
                value="Mini Police Car"
                className="radio"
                required
              />
              <label htmlFor="">Mini Police Car</label>
            </div>
          </div>

          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            className="input input-bordered w-full"
            required
          />
          <input
            name="description"
            type="text"
            placeholder="Description"
            className="input input-bordered w-full"
            required
          />
          <input
            className="btn btn-primary text-accent w-full"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
