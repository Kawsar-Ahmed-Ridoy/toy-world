import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div
        style={{ height: "90vh" }}
        className="flex  justify-center align-middle w-full text-center  "
      >
        <div className="my-auto ">
          <img  src="https://i.ibb.co/tmWsmY5/pasted-image-0.png" alt="" />
          <Link to={"/"}>
            <button className="btn btn-warning hover:opacity-90 ">Back To Home Page</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;