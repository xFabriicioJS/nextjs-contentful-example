import styles from "../styles/Home.module.css";
import getBlogPosts from "../src/utils";
import { useEffect } from "react";
import Image from "next/image";

export default function Home({ post }) {
  return <div className={styles.main}>
    <div>
      <h1> R/GA</h1>
      <div>
        <img src={'https:' + post?.mainImage?.fields.file.url} alt={post?.title} width={900} height={500} />
      </div>
      <h1>{post?.title}</h1>
      <p>{post?.creationDate}</p>
      <p>{post?.author}</p>
      <p>{post?.paragraph}</p>
      <h2>{post?.heading}</h2>
    </div>
  </div>;
}

Home.getInitialProps = async () => {
  const post = await getBlogPosts();

  return { post };
};