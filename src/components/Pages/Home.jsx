import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
import HomeService from "../Layout/HomeService";
import HomeCount from "../Layout/HomeCount";

const Home = () => {
  return (
    <Layout>
      <>
        <HomeBanner />
        <HomeService />
        <HomeCount />
      </>
    </Layout>
  );
};

export default Home;
