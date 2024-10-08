import React from "react";
import Layout from "../Layout/Layout";
import "./SingleProduct.css";
import { FaWhatsappSquare } from "react-icons/fa";

const SingleProduct = () => {
  return (
    <Layout>
      <div className="SingleProductWrapper">
        <div className="SingleProductImage">
          <img
            src="https://www.keralaayurveda.biz/images/blogimage/dasamoolajeerakarishta.png"
            alt=""
          />
        </div>
        <div className="SingleProductDetails">
          <h1>
            Dasamoola-jeerakarishta <br /> Herbal Wine
          </h1>
          <h3>100₹</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut
            quae dicta aperiam ullam omnis doloribus, qui atque alias sint
            autem? Laudantium in sed temporibus non voluptatem aspernatur
            expedita. Est?
          </p>
          
          <button className="orderBtn">
            <FaWhatsappSquare className="waIcon"/>
            Order on <br /> Whatsapp
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
