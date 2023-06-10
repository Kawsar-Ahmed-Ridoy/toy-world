import React, { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [shopCategory, setShopCategory] = useState([]);

  useEffect(() => {
    fetch("https://toy-world-server-kawsar-ahmed-ridoy.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setShopCategory(data));
  }, []);

  useEffect(()=>{
    Aos.init()
  },[])

  const handleClick = () => {
    if (!user) {
      toast.success("You have to log in first to view details");
    }
  };

  

  return (
    <div className="container mx-auto mb-16">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          Shop By Category
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <Tabs  data-aos = 'fade-right'>
        <TabList className="font-bold font-mono text-primary text-center 2xl:text-start">
          {shopCategory?.map((category, i) => (
            <Tab key={i}>{category.category}</Tab>
          ))}
        </TabList>

        {shopCategory?.map((category, i) => (
          <TabPanel className="rounded" key={i}>
            <div className="flex flex-wrap justify-center gap-6">
              {category?.items?.map((cat) => (
                <div className=" shadow-2xl rounded-2xl" key={cat.id}>
                  <div className="hero-content flex-col items-start lg:flex-row lg:items-center">
                    <img
                      src={cat.img}
                      className="w-80 h-56 rounded-lg shadow-2xl"
                    />
                    <div>
                      <div className="text-gray-600">
                        <h1 className="text-3xl font-bold">Name: {cat.name}</h1>
                        <p className="my-2">Price: {cat.price}</p>
                        <Rating
                          placeholderRating={cat?.rating}
                          emptySymbol={
                            <AiOutlineStar className="text-xl"></AiOutlineStar>
                          }
                          placeholderSymbol={
                            <AiFillStar className="text-amber-400 text-xl"></AiFillStar>
                          }
                          readonly
                        />
                      </div>
                      <Link to={`/singleToyPageDetails/${cat?.id}`}>
                        <button
                          onClick={handleClick}
                          className="btn btn-primary"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
