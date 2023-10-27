import axios from "axios";
import React from "react";
import grupo from "../../Componentes/assets/Grupo.png";

const Dados = () => {
  const [posts, setPosts] = React.useState([]);
  const dataurl = "http://127.0.0.1:8000//Turma/";

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
      <p className="display-6 text-center text-wrap ">Festival de Aplicativos da Iniciativa CODE</p>
      <p className="display-7 text-center text-wrap">Página de votação</p>
      <div class="container">
         <div class="row">
      {posts.length === 0 ? (
        <p>Carregando</p>
      ) : (
        posts.map((post) => (
          <div className="col-sm pb-4 h-40 w-30">
          <div key={post.id} className="card" style={{ width: "18rem" }}>
            <img src={post.imagem} className="card-img-top" alt={post.alt} />
            <div className="card-body">
              <h5 className="card-title">{post.titulo}</h5>
              <p className="card-text">{post.descricao}</p>
              <a href="#" className="btn btn-primary">votar</a>
            </div>
          </div>
          </div>
        ))
      )}
      </div>
      </div>
    </div>
  );

}

export default Dados;




