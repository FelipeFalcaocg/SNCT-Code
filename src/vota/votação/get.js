import axios from "axios";
import React from "react";

const dataurl = "http://192.168.7.132:8000/Turma/";

function createData(id,imagem,titulo,descricao) {
    return(
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{titulo}}</h5>
    <p class="card-text">{{descricao}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="1" class="card-link">Card link</a>
    <a href="2"class="card-link">Another link</a>
  </div>
    </div>
    );
}
function Dados() {
    const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(dataurl).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  console.log(post)
  return (
    <div>
        {post.map((itens) =>{
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{itens.titulo}</h5>
            <p class="card-text">{itens.descricao}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="1" class="card-link">Card link</a>
            <a href="2"class="card-link">Another link</a>
          </div>
            </div>

        })}
    </div>
  );
    
}

export default Dados;




