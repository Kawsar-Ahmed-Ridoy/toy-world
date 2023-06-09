import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddAToy = () => {

const {user} = useContext(AuthContext)
const {displayName, email} = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const gander = form.gander.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const productDetails = {
      productName,
      displayName: sellerName,
      email: sellerEmail,
      photo,
      price,
      rating,
      gander,
      quantity,
      description
    };
    console.log(productDetails);
  };
  return (
    <div className="mb-16 max-w-screen-xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className=" text-4xl font-bold mt-8">Add A Toy</h1>
        <span>______________</span>
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
            defaultValue={displayName}
            required
          />
          <input
            name="sellerEmail"
            type="text"
            placeholder="Seller Email"
            className="input input-bordered w-full"
            defaultValue={email}
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
