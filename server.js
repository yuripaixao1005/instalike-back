import express from "express";

const posts = [
  {
    descricao: "Uma foto test",
    fotos: "http://placecats.com/millie/300/150",
    id: 1,
  },
  {
    descricao: "Um lindo pôr do sol na praia",
    fotos: "https://picsum.photos/id/237/300/200",
    id: 2,
  },
  {
    descricao: "uUm gato fazendo  panqueca",
    fotos: "https://picsum.photos/id/237/300/200",
    id: 3,
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostporID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}
app.get("/posts/:id", (req, res) => {
  const index = buscarPostporID(req.params.id);
  res.status(200).json(posts[index]);
});
