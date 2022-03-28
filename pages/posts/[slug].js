import React from "react";
import Head from "next/head";
import PostContent from "../../components/posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostDetailPage;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, //here rebuilding after deployment will be much faster than the other pages where we have to go through all pages therefore slowing down the request time
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  console.log(slugs);
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,

    //fallback: true or 'blocking'//Now data will be fetched on demand every page as we are passing an empty array of paths
  };
}
