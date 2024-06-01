import React from "react";
import Banner from "../components/Banner";
import Tags from "../components/Tags";
import Announcement from "../components/Announcement";
import PostSection from "../components/PostSection";

const Home = () => {
  return (
    <>
      <Banner />
      <Tags />
      <Announcement />
      <PostSection />
    </>
  );
};

export default Home;
