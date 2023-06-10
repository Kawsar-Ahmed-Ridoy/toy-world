import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys')
    const {user} = useContext(AuthContext)
  const loadeData = useLoaderData();

  const handleClick = () => {
    if (!user) {
      toast.success("You have to log in first to view details");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
  };
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          All Toys
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="form-control mb-2">
        <form onSubmit={handleSubmit} className="input-group justify-center">
          <input
            name="search"
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
      <table className="table w-full">
        <tbody>
          {loadeData?.map((data) => (
            <tr key={data._id}>
              <td>
                <div className="flex items-center justify-around space-x-3">
                  <div className="flex gap-2 items-center">
                    <div className="avatar">
                      <div className="rounded w-24 h-24">
                        {data?.photo && (
                          <img
                            src={data.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.displayName}</div>
                    </div>
                  </div>
                  <div className="font-bold">
                    <p>Product Name: {data.productName}</p>
                    <p>Category: {data.gander}</p>
                  </div>
                </div>
              </td>
              <td>
                <span className="font-bold">Quantity: {data.quantity}</span>
                <br />
                <span className="badge badge-ghost badge-sm font-bold">
                  Price: ${data.price}
                </span>
                <br />
              </td>
              <th>
                <Link to={`/toy/${data._id}`}>
                  <button onClick={handleClick} className="btn btn-primary">View Details</button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
