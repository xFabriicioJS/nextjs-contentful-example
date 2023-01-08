import styles from "../styles/Home.module.css";
import getBlogPosts from "../src/utils";

export default function Home({ posts }) {
  return (
    <div className={styles.main}>
      <ul className={styles.blogPosts}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <p>~ by {post.fields.authorName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.getInitialProps = async () => {
  const posts = await getBlogPosts();

  return { posts };
};
