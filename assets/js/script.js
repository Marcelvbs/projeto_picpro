//Selecionando ul (LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

//Adicionando escutador de eventos
listaOpcoes.addEventListener("click", indentificarOpcoes)

//Executando ação depois do click 
function indentificarOpcoes(event){
    
    //Identificando onde ocorreu o click
    const elemento  = event.target

    //Verificando se é um li 
    if(elemento.tagName == "LI"){

        //Recuperando o ID
        const id = elemento.id
        
        //Selecionando uma seção utilizando o ID(ESCOLHA DO USUÁRIO)
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)

        //Removendo classe mostrar
        removeClasseMostrar()
        
        //Adicionar uma classe
        secaoEscolha.classList.add("mostrar")
    }
}

//Função para remover as classes das Divs
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")

    }
}