import React from "react";
import useTitle from "../../hooks/useTitle";
import Banner from "../Home/Banner/Banner";

const Blog = () => {
  useTitle("blog");
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto py-16 lg:py-28">
        <div className="title text-center">
          <p className="font-bold theme-color py-5 text-xl">Our Blogs</p>
          <h1 className="text_2xl md: text-3xl lg:text-6xl font-bold  pb-24">
            News & <span className="theme-color"> Updates</span>
          </h1>
        </div>
        <div className="blog-area grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
            <div className="card-body">
              <h2 className="card-title theme-color text-center text-lg lg:text-2xl">Difference between sql and nosql?</h2>
              <p className="text-white">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
          </div>
          <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
            <div className="card-body">
              <h2 className="card-title theme-color text-center text-lg lg:text-2xl">What is JWT, and how does it work?</h2>
              <p className="text-white">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
            </div>
          </div>
          <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
            <div className="card-body">
              <h2 className="card-title theme-color text-center text-lg lg:text-2xl">What is the difference between javascript and NodeJS?</h2>
              <p className="text-white">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
          </div>
          <div className="card w-full bg-secondary-color shadow-xl hover:shadow-2xl">
            <div className="card-body">
              <h2 className="card-title theme-color text-center text-lg lg:text-2xl">How does NodeJS handle multiple requests at the same time?</h2>
              <p className="text-white"> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
