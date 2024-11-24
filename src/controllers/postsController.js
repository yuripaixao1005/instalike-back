import { getTodosPosts } from "../models/postsmodels";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}
