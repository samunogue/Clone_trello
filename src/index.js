var flexbox_cards = document.querySelector(".flexbox_cards")
var main_html = document.querySelector("main")
var botao_criar_modal_card = document.querySelector(".botao_adicionar_card")
function criar_card(titulo){
    var corpo = document.createElement("div");
    var div_titulo = document.createElement("div");
    var titulo_card = document.createElement("p");
    var botao_adicionar_tarefa = document.createElement("button")
    var botao_excluir_card = document.createElement("button");
    corpo.classList.add("card")
    div_titulo.classList.add("titulo_card")
    botao_excluir_card.classList.add("botao_excluir_card")
    botao_adicionar_tarefa.classList.add("botao_adicionar_tarefa")
    botao_adicionar_tarefa.innerHTML = "+ tarefa"
    botao_excluir_card.innerHTML = "X"
    titulo_card.innerHTML = titulo
    corpo.appendChild(div_titulo)
    div_titulo.appendChild(titulo_card)
    div_titulo.appendChild(botao_excluir_card)
    corpo.appendChild(botao_adicionar_tarefa)
    flexbox_cards.insertBefore(corpo, botao_criar_modal_card)

    botao_excluir_card.addEventListener("click", function(){
        flexbox_cards.removeChild((this.parentElement).parentElement)
        salvar_cards()
    })

    botao_adicionar_tarefa.addEventListener("click", function(){
        var div = document.createElement("div")
        var input = document.createElement("input")
        var botao_criar_tarefa = document.createElement("button")
        div.classList.add("modal_criar_tarefa")
        input.classList.add("input_criar_tarefa")
        botao_criar_tarefa.classList.add("botao_criar_tarefa")
        botao_criar_tarefa.innerHTML = "Criar tarefa"
        div.appendChild(input)
        div.appendChild(botao_criar_tarefa)
        this.parentNode.insertBefore(div, botao_adicionar_tarefa)
        
        botao_criar_tarefa.addEventListener("click", function(){
            if(input.value !== ""){
                var elemento = document.createElement("div")
                var conteudo = document.createElement("li")
                var botao_excluir_tarefa = document.createElement("button")
                botao_excluir_tarefa.classList.add("botao_excluir_tarefa")
                elemento.classList.add("conteudo_card")
                conteudo.innerHTML = input.value
                botao_excluir_tarefa.innerHTML = "x"
                elemento.appendChild(conteudo)
                elemento.appendChild(botao_excluir_tarefa)
                corpo.insertBefore(elemento, botao_adicionar_tarefa)
                corpo.removeChild(div)
                salvar_cards()

                botao_excluir_tarefa.addEventListener("click", function(){
                    corpo.removeChild(this.parentElement)
                    salvar_cards()
                })
            }
        })
    })
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
    corpo.classList.add("modal_adicionar_card")
    botao_criar_card.classList.add("botao_criar_card")
    input.classList.add("input_criar_card")
    main_html.appendChild(corpo)

    botao_criar_card.addEventListener("click", function(){
        if(input.value !== ""){
            criar_card(input.value)
            main_html.removeChild(corpo)
            salvar_cards() 
        }else{ alert("campo de titulo vazio")}
    })
}
function criar_cards_carregados(titulo, array_tarefas){
    var corpo = document.createElement("div");
    var div_titulo = document.createElement("div");
    var botao_excluir_card = document.createElement("button")
    var titulo_card = document.createElement("p");
    var botao_adicionar_tarefa = document.createElement("button")
    corpo.classList.add("card")
    div_titulo.classList.add("titulo_card")
    botao_adicionar_tarefa.classList.add("botao_adicionar_tarefa")
    botao_excluir_card.classList.add("botao_excluir_card")
    botao_excluir_card.innerHTML = "X"
    botao_adicionar_tarefa.innerHTML = "+ tarefa"
    titulo_card.innerHTML = titulo
    corpo.appendChild(div_titulo)
    div_titulo.appendChild(titulo_card)
    div_titulo.appendChild(botao_excluir_card)
    corpo.appendChild(botao_adicionar_tarefa)
    flexbox_cards.insertBefore(corpo, botao_criar_modal_card)

    botao_excluir_card.addEventListener("click", function(){
        flexbox_cards.removeChild((this.parentElement).parentElement)
        salvar_cards()
    })

    array_tarefas.forEach(Element => {
        var elemento = document.createElement("div")
        var conteudo = document.createElement("li")
        var botao_excluir_tarefa = document.createElement("button")
        elemento.classList.add("conteudo_card")
        botao_excluir_tarefa.classList.add("botao_excluir_tarefa")
        conteudo.innerHTML = Element
        botao_excluir_tarefa.innerHTML = "x"
        elemento.appendChild(conteudo)
        elemento.appendChild(botao_excluir_tarefa)
        corpo.insertBefore(elemento, botao_adicionar_tarefa)

        botao_excluir_tarefa.addEventListener("click", function(){
            corpo.removeChild(this.parentElement)
            salvar_cards()
        })
    })

    botao_adicionar_tarefa.addEventListener("click", function(){
        var div = document.createElement("div")
        var input = document.createElement("input")
        var botao_criar_tarefa = document.createElement("button")
        botao_criar_tarefa.innerHTML = "Criar tarefa"
        div.classList.add("modal_criar_tarefa")
        input.classList.add("input_criar_tarefa")
        botao_criar_tarefa.classList.add("botao_criar_tarefa")
        div.appendChild(input)
        div.appendChild(botao_criar_tarefa)
        this.parentNode.insertBefore(div, botao_adicionar_tarefa)
        
        botao_criar_tarefa.addEventListener("click", function(){
            if(input.value !== ""){
                var elemento = document.createElement("div")
                var conteudo = document.createElement("li")
                var botao_excluir_tarefa = document.createElement("button")
                elemento.classList.add("conteudo_card")
                botao_excluir_tarefa.classList.add("botao_excluir_tarefa")
                botao_excluir_tarefa.innerHTML = "x"
                conteudo.innerHTML = input.value
                elemento.appendChild(conteudo)
                elemento.appendChild(botao_excluir_tarefa)
                corpo.insertBefore(elemento, botao_adicionar_tarefa)
                corpo.removeChild(div)
                salvar_cards()

                botao_excluir_tarefa.addEventListener("click", function(){
                    corpo.removeChild(this.parentElement)
                    salvar_cards()
                })
            }
        })
    })
}

function salvar_cards(){
    var cards = document.querySelectorAll(".card")
    var tarefas_card = []
    cards.forEach(Element => {
        var elementos_card = Element.children
        var tarefas = []
        for(i=0; i<elementos_card.length; i++){
            if(elementos_card[i].getAttribute("class")  ==  "conteudo_card" || elementos_card[i].getAttribute("class")  ==  "titulo_card"){
                tarefas.push(elementos_card[i])
            }
        }
        tarefas_card.push(tarefas)
    })
    var cards_filtrado = []
    tarefas_card.forEach(Element => {
        var card_filtrado = []
        var div_titulo = Element[0].children
        var titulo = div_titulo[0].innerHTML
        var tarefas = []
        for(i=1;i<Element.length; i++){
            var div_conteudo = Element[i].children
            tarefas.push(div_conteudo[0].innerHTML)
        }
        card_filtrado.push(titulo)
        card_filtrado.push(tarefas)
        cards_filtrado.push(card_filtrado)
    })
    localStorage.setItem("cards", JSON.stringify(cards_filtrado))
}
function carregar_cards(){
    var cards = JSON.parse(localStorage.getItem("cards"))
    cards.forEach(Element => {
        var titulo = Element[0]
        var tarefas = Element[1]
        criar_cards_carregados(titulo, tarefas)        
    })
}


