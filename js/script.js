let inputBuscarFilme = document.querySelector("#input-buscar-filme")
let btnBuscarFilme = document.querySelector("#btn-buscar-filme")
console.log(btnBuscarFilme.innerHTML)

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes")
    listaFilmes.innerHTML = ""
    document.querySelector("#mostrar-filme").innerhtml = "";
    document.querySelector("#mostrar-filme").getElementsByClassName.display = "none";
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard())
            filme.getBtnDetalhes().onclick = () => {
                detalhesFilme(filme.id);
            }
        })
    }
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes =  new Array()
        fetch("http://www.omdbapi.com/?apikey=323c70d9&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp)=> {
            resp.Search.forEach((item) => {
                console.log(item)
                let filme=new Filme(
                    item.imdbId,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                )
                filmes.push(filme)
            })
            listarFilmes(filmes)
        });
    }
    return false
}

let detalhesFilme = async (id) => {
    fetch("http://www.omdbapi.com/?apikey=323c70d9&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Gender.split(","),
            resp.Runtime,
            resp.Poster,
            resp.plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating,
        )
        document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme())
        document.querySelector("#lista-filmes").getElementsByClassName.display = "none";
        document.querySelector("#mostrar-filme").getElementsByClassName.display = "flex";

        //Chamar metodo para gerar card com detalhes do filme.

        //Ocultar div #lista-filmes.
    });
}