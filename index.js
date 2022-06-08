var flexbox_cards = document.querySelector(".flexbox_cards")
var main_html = document.querySelector("main")
function criar_card(titulo){
    var corpo = document.createElement("div");
    var div_titulo = document.createElement("div");
    var titulo_card = document.createElement("p");
    var botao_adicionar_tarefa = document.createElement("button")
    corpo.classList.add("card")
    div_titulo.classList.add("titulo_card")
    titulo_card.innerHTML = titulo
    botao_adicionar_tarefa.classList.add("botao_adicionar_tarefa")
    botao_adicionar_tarefa.innerHTML = "+ tarefa"
    corpo.appendChild(div_titulo)
    div_titulo.appendChild(titulo_card)
    corpo.appendChild(botao_adicionar_tarefa)
    flexbox_cards.appendChild(corpo)
}
function criar_tarefa(conteudo){
    var div_conteudo = document.createElement("div");
    var conteudo = document.createElement("p");
    div_conteudo.classList.add("conteudo_card")
    conteudo.innerHTML = conteudo
    div_conteudo.appendChild(conteudo)
}
function criar_modal_para_card(){
    var corpo = document.createElement("div")
    var titulo = document.createElement("h2")
    var input = document.createElement("input")
    var botao_criar_card = document.createElement("button")
    titulo.innerHTML = "Digite o titulo do Card"
    botao_criar_card.innerHTML = "Criar Card"
    corpo.appendChild(titulo)
    corpo.appendChild(input)
    corpo.appendChild(botao_criar_card)
    main_html.appendChild(corpo)

    botao_criar_card.addEventListener("click", function(){
        if(input.value !== ""){
            criar_card(input.value) 
        }else{ alert("campo de titulo vazio")}
    })
}
function criar_modal_para_tarefa(){
    var div = document.createElement("div")
    var input = document.createElement("input")
    var botao_criar_tarefa = document.createElement("button")
    botao_criar_tarefa.innerHTML = "Criar tarefa"
    div.appendChild(input)
    div.appendChild(botao_criar_tarefa)
}

