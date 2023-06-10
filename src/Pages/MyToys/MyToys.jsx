import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  const [loadeData, setLoadeData] = useState([]);

  useEffect(() => {
    fetch(`https://toy-world-server-kawsar-ahmed-ridoy.vercel.app/myToys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setLoadeData(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-world-server-kawsar-ahmed-ridoy.vercel.app/myToys/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Deleted Successfully");
              const remaining = loadeData.filter((data) => data._id !== _id);
              setLoadeData(remaining);
            }
          });
        Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
      }
    })

  };

  return (
    <div className="container mx-auto mb-4">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          My Toys
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      {loadeData.length ? (
        <table className="table w-full">
          <tbody>
            {loadeData?.map((data) => (
              <tr key={data._id}>
                <th>
                  <label>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn font-bold"
                    >
                      X
                    </button>
                  </label>
                </th>
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
                        <div className="text-sm opacity-50">{data.email}</div>
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
                  <span className="badge badge-ghost badge-sm font-bold">
                    Rating: {data.rating}
                  </span>
                </td>
                <td>Description: {data.description}</td>
                <th>
                  <Link to={`/update/${data._id}`}>
                    <button className="btn btn-warning btn-xs">update</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="font-bold text-center text-4xl  mb-8">
          You Have No Toys!
        </div>
      )}
    </div>
  );
};

export default MyToys;
