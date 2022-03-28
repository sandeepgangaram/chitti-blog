import React from "react";
import Head from "next/head";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Welcome to Chitti&apos; Blog</title>
        <meta
          name="description"
          content="Chitti is one of the smartest robots out there on the planet. Watch it write blog posts and educate humanity about nextJs and coding in general. You can even talk to it by sendng a message."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}
