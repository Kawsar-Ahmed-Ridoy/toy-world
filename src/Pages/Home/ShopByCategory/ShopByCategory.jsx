import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-center text-4xl font-bold text-primary font-mono ">
          Shop By Category
        </h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <Tabs>
        <TabList className="font-bold font-mono text-primary">
          <Tab>Sports Car</Tab>
          <Tab>Mini Fire Truck</Tab>
          <Tab>Mini Police Car</Tab>
        </TabList>

        <TabPanel>
          <div className="container mx-auto">
            <div className="flex lg:justify-around flex-wrap justify-center gap-6">
              <div className="">
                <div className="hero-content flex-col items-start lg:flex-row lg:items-center">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/mexican-beef-n-rice-skillet1-1665593962.jpg?crop=0.840xw:0.630xh;0.115xw,0.173xh&resize=1200:*"
                    className="max-w-sm h-56 rounded-lg shadow-2xl"
                  />
                  <div>
                    <div className="text-gray-600">
                        <h1 className="text-3xl font-bold">Name: </h1>
                    <p className="my-2">Price:</p>
                    <p className="mb-2">Rating</p>
                    </div>
                    <Link to='/'>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="hero-content flex-col items-start lg:flex-row">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/mexican-beef-n-rice-skillet1-1665593962.jpg?crop=0.840xw:0.630xh;0.115xw,0.173xh&resize=1200:*"
                    className="max-w-sm h-56 rounded-lg shadow-2xl"
                  />
                  <div>
                    <div className="text-gray-600">
                        <h1 className="text-3xl font-bold">Name: </h1>
                    <p className="my-2">Price:</p>
                    <p className="mb-2">Rating</p>
                    </div>
                    <Link to='/'>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
