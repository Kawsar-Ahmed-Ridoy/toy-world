import React from "react";
import useTitle from "../../hooks/useTitle";
const Blog = () => {
  useTitle('Blog')
  return (
    <div className="mb-16 mt-12  max-w-screen-xl mx-auto">
      <div className="my-8 text-center">
        <h2 className="text-4xl font-bold text-primary font-mono">BLOG</h2>
        <p className=" text-gray-500 mb-6">__________________</p>
      </div>
      <div className="flex justify-around text-center align-middle flex-wrap actual-receipt">
        <div className="card w-96 bg-base-100 shadow-xl mb-6 text-gray-700">
          <div className="card-body ">
            <h2 className="card-title text-2xl">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              Access token: A credential issued to a client after
              authentication, allowing it to access protected resources. It has
              a short expiration time and is included in each request for
              authorization. Refresh token: A credential issued alongside the
              access token, with a longer expiration time. It is used to obtain
              a new access token when the current one expires, without
              reauthentication. Storage on the client-side: Access tokens are
              typically stored securely in memory or secure HTTP-only cookies.
              Refresh tokens should be stored securely in mechanisms like local
              storage or encrypted databases to prevent unauthorized access.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6 text-gray-700">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              Compare SQL and NoSQL databases?
            </h2>
            <p>
              SQL Databases: SQL databases use tables with fixed schemas to
              store structured data, providing strong consistency and support
              for complex queries and transactions. They are suitable for
              applications with structured data, complex relationships, and the
              need for data integrity. NoSQL Databases: NoSQL databases are
              flexible, schema-less databases that excel at handling large
              volumes of unstructured or semi-structured data. They offer
              scalability, high performance, and horizontal scaling, making them
              ideal for modern web applications and big data scenarios. NoSQL
              databases support various data models and are commonly used in
              distributed systems and applications requiring high availability
              and horizontal scaling.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6 text-gray-700">
          <div className="card-body">
            <h2 className="card-title text-2xl">
              What is express js? What is Nest JS?
            </h2>
            <p>
              Express.js: Express.js is a fast and minimalist web application
              framework for Node.js. It provides a simple and flexible set of
              features for building web applications and APIs. With Express.js,
              developers can handle routes, middleware, and HTTP requests easily
              and efficiently. Nest.js: Nest.js is a progressive, scalable, and
              highly extensible Node.js framework for building efficient and
              modular applications. It combines elements of object-oriented
              programming, functional programming, and reactive programming.
              Nest.js provides a robust architecture, dependency injection, and
              a powerful CLI, making it suitable for building complex
              server-side applications.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6 text-gray-700">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p>
              MongoDB's aggregate is a powerful framework for performing data
              aggregation operations on MongoDB collections. It allows for
              advanced data processing, transformation, and analysis by
              combining multiple stages, such as grouping, filtering, sorting,
              and projecting, into a single pipeline. Aggregation pipelines in
              MongoDB operate on documents and can perform complex operations to
              retrieve, transform, and summarize data based on specified
              criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
