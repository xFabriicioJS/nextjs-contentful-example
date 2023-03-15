import { createClient } from "contentful";

const client = createClient({
  space: "4bid1fi3v0mg",
  accessToken: "khRkLntAW8oRZL9W6l2GmEtTMBB8PZtS3a6hGlw2a9o",
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
  const response = await client.getEntry("711diO6w9MovvbOFVjyjH4");

  return response.fields;
};

export default getBlogPosts;
