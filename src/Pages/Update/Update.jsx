import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadData = useLoaderData();

    const handleUpdate = (e)=>{
        e.preventDefault()
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToys = {price, quantity, description}

        fetch(`https://toy-world-server-kawsar-ahmed-ridoy.vercel.app/myToys/${loadData?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                toast.success('Updated Successfully')
            }
        })

    }

  return (
    <div className="mb-16">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          Update
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>

        <div className="hero">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={loadData?.price}
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={loadData?.quantity}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={loadData?.description}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
      </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Update;
