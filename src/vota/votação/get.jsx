import axios from "axios";
import React from "react";



const Dados = () => {
  const [posts, setPosts] = React.useState([]);
  const dataurl = "http://192.168.7.132:8000/Turma/";

  const getPosts = async () => {

    try {
      const response = await axios.get(dataurl)
      const data = response.data;
      setPosts(data)

    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {

    getPosts();

  }, []);


  return (
    <div>
      <h1>Todas as turmas</h1>
      {posts.length === 0 ? (
        <p>Carregando</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card" style={{ width: "18rem" }}>
            <img src={post.imagem} className="card-img-top" alt={post.alt} />
            <div className="card-body">
              <h5 className="card-title">{post.titulo}</h5>
              <p className="card-text">{post.descricao}</p>
              <a href="#" className="btn btn-primary">Ir para algum lugar</a>
            </div>
          </div>
        ))
      )}

    </div>
  );

}

export default Dados;




