class Ator {
    constructor(id, nome){
        this.nome = nome
        this.id = id
    }
}

class Diretor {
    constructor(id, nome){
        this.nome = nome
        this.id = id
    }
}

class Filme {
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }
    
    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }
    
    getCard = () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-around;");

        let divGenero = document.createElement("div");
        divDetalhes.appendChild(divGenero);
        divGenero.appendChild(document.createTextNode(this.genero));
        divGenero.setAttribute("style", "flex-grow:1;");

        let divAnoProducao = document.createElement("div");
        divDetalhes.appendChild(divAnoProducao);
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divAnoProducao.setAttribute("style", "flex-grow:1;");

        let divClassificacao = document.createElement("div");
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divClassificacao);
        divClassificacao.setAttribute("style", "flex-grow:1;");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
    


    

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);

        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card
    }

    getCardDetalhes = () => {
        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class","card-detalhes");
        cardDetalhes.setAttribute("style","display:flex; padding: 2rem;");

        let imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class","card-img-detalhes");
        imgDetalhes.setAttribute("src",this.cartaz);
        
        let cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class","card-body-detalhes");
        cardBodyDetalhes.setAttribute("style","margin-left: 2rem;");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "detalhes-title");
        hCardTitle.appendChild(document.createTextNode(this.titulo));

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("Style","display:flex; justify-content:space-around; flex-direction: column");

        let divAno = document.createElement("div");
        divAno = document.createElement("h6");
        divAno.appendChild(document.createTextNode("ANO DE PRODUÇÃO: "));

        let divGenero = document.createElement("div");
        divGenero = document.createElement("h6");
        divGenero.appendChild(document.createTextNode("GÊNERO DO FILME: "));

        let divDuracao = document.createElement("div");
        divDuracao = document.createElement("h6");
        divDuracao.appendChild(document.createTextNode("DURAÇÃO DO FILME: "));

        let divDirecao = document.createElement("div");
        divDirecao = document.createElement("h6");
        divDirecao.appendChild(document.createTextNode("DIREÇÃO DO FILME: "));

        let divElenco = document.createElement("div");
        divElenco = document.createElement("h6");
        divElenco.appendChild(document.createTextNode("ELENCO DO FILME: "));

        let divAvaliacao = document.createElement("div");
        divAvaliacao = document.createElement("h6");
        divAvaliacao.appendChild(document.createTextNode("AVALIAÇÃO DO FILME: "));

        let divSinopse = document.createElement("div");
        divSinopse = document.createElement("h6");
        divSinopse.appendChild(document.createTextNode("SINOPSE DO FILME: "));

        let btnFechar = document.createElement("button");
        btnFechar.setAttribute("id", "btnFechar");
        btnFechar.appendChild(document.createTextNode("Fechar"));

        let btnSalvar = document.createElement("button");
        btnSalvar.setAttribute("id", "btn-salvar");
        btnSalvar.appendChild(document.createTextNode("Salvar"));

        let btnExcluir = document.createElement("button");
        btnExcluir.setAttribute("id", "btn-excluir");
        btnExcluir.appendChild(document.createTextNode("Excluir"));

        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        divSinopse.appendChild(document.createTextNode(this.sinopse));
       
        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divAvaliacao);
        divDetalhes.appendChild(divSinopse);
        divDetalhes.appendChild(btnFechar);
        divDetalhes.appendChild(btnSalvar);
        divDetalhes.appendChild(btnExcluir);

        cardDetalhes.appendChild(imgDetalhes);
        cardDetalhes.appendChild(cardBodyDetalhes);

        cardBodyDetalhes.appendChild(hCardTitle);
        cardBodyDetalhes.appendChild(divDetalhes);

        return cardDetalhes;
    }   
}