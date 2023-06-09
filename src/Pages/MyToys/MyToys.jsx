import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext)
const [loadeData, setLoadeData] = useState([])

  const url = `http://localhost:5000/myToys?email=${user.email}`

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setLoadeData(data))
  },[url])

  return (
    <div className="container mx-auto mb-4">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          My Toys
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <table className="table w-full">
        <tbody>
          {loadeData?.map((data) => (
            <tr key={data._id}>
              <th>
                <label>
                  <button className="btn font-bold">X</button>
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
                <button className="btn btn-warning btn-xs">update</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
