let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");
let navFavoritos = document.querySelector("#nav-favoritos");

btnBuscarFilme.onclick = () =>{
   if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=81b79755&s="+inputBuscarFilme.value, {mode:"cors"})
        .then((resp)=>resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme=new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    item.Type,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes)
        })
    }
    mostrarFilmes.styledisplay = "none";
    return false;
}

let listaFilmes =  document.querySelector("#lista-filmes");
let mostrarFilmes = document.querySelector("#mostrar-filme");

let listarFilmes = async (filmes) => { 
    listaFilmes.style.display = 'flex';
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick= async()=>{
                listaFilmes.style.display = 'none';
                detalhesFilme(filme.id);
            }
        })
    }
}

let detalhesFilme = async (id) =>{
    console.log(id)
    fetch("http://www.omdbapi.com/?apikey=81b79755&i="+id)
    .then((resp)=>resp.json())
    .then((resp)=>{
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        );
        console.log(filme.getCardDetalhes());
        mostrarFilmes.style.display = 'flex';
        mostrarFilmes.appendChild(filme.getCardDetalhes());

        console.log(filme);

        document.querySelector("#btnFechar").onclick = () =>{
            document.querySelector("#lista-filmes").style.display = "flex";
            document.querySelector("#mostrar-filme").innerHTML = "";
            document.querySelector("#mostrar-filme").style.display = "none";
        }
        
        document.querySelector("#mostrar-filme").style.display = "flex";

        document.querySelector("#btn-salvar").onclick = () =>{
            salvarFilme(filme);
        }
        
        document.querySelector("#btn-excluir").onclick = () =>{
            desfavoritarFilme(filme);
        }


        let filmesString = localStorage.getItem("favoritos");
        document.querySelector("favoritos").innerhtml = "";
        let filmes = JSON.parse(filmesString);
        filmes = JSON.stringify(filmes);

    });

}

let desfavoritarFilme = (filme) =>{
    let filmesString = localStorage.getItem("favoritos");
    let filmes = null;
    if(filmesString){
        filmes = JSON.parse(filmesString);
        for(let i = 0; i < filmes.length; i++){
            if(filmes[i].id === filme.id){
                filmes.splice(i, 1);
                break;
            }
        }
    }

    filmes = JSON.stringify(filmes);
    localStorage.setItem("favoritos", filmes);
}

let salvarFilme = (filme) =>{
    let filmesString = localStorage.getItem("favoritos");
    let filmes = null;
    if(filmesString){
        filmes = JSON.parse(filmesString);
        filmes.push(filme);
    }
    else{
        filmes = [filme];
    }
    filmes = JSON.stringify(filmes);
    localStorage.setItem("favoritos", filmes);
}

function listarFavoritos(){
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector("#mostrar-filme").style.display = "none";
    document.querySelector("#mostrar-filme").style.display = "none";
    let favoritos = localStorage.getItem("favoritos");
    favoritos = JSON.parse(favoritos);
    let filmes = new Array();
    favoritos.forEach((item) =>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    });
    listarFilmes(filmes);
}

navFavoritos.onclick = () => {
    listarFavoritos();
}