var flexbox_cards = document.querySelector(".flexbox_cards")
var main_html = document.querySelector("main")
var botao_criar_modal_card = document.querySelector(".botao_adicionar_card")
var elementos; var dropzones

function criar_modal_para_card() {
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

    botao_criar_card.addEventListener("click", function () {
        if (input.value !== "") {
            criar_cards(input.value, [])
            main_html.removeChild(corpo)
            salvar_cards()
        } else { alert("campo de titulo vazio") }
    })
}
function criar_cards(titulo, array_tarefas) {
    var corpo = document.createElement("div");
    var div_titulo = document.createElement("div");
    var botao_excluir_card = document.createElement("button")
    var titulo_card = document.createElement("p");
    var botao_adicionar_tarefa = document.createElement("button")
    var conteudo_card = document.createElement("div")
    corpo.classList.add("card")
    div_titulo.classList.add("titulo_card")
    botao_adicionar_tarefa.classList.add("botao_adicionar_tarefa")
    botao_excluir_card.classList.add("botao_excluir_card")
    conteudo_card.classList.add("dropzone")
    botao_excluir_card.innerHTML = "X"
    botao_adicionar_tarefa.innerHTML = "+ tarefa"
    titulo_card.innerHTML = titulo
    corpo.appendChild(div_titulo)
    div_titulo.appendChild(titulo_card)
    div_titulo.appendChild(botao_excluir_card)
    corpo.appendChild(conteudo_card)
    corpo.appendChild(botao_adicionar_tarefa)
    flexbox_cards.insertBefore(corpo, botao_criar_modal_card)

    botao_excluir_card.addEventListener("click", function () {
        flexbox_cards.removeChild((this.parentElement).parentElement)
        salvar_cards()
    })
    if (array_tarefas.length > 0) {
        array_tarefas.forEach(Element => {
            var elemento = document.createElement("div")
            var conteudo = document.createElement("li")
            var botao_excluir_tarefa = document.createElement("button")
            elemento.setAttribute("draggable", "true")
            elemento.classList.add("conteudo_card")
            botao_excluir_tarefa.classList.add("botao_excluir_tarefa")
            conteudo.innerHTML = Element
            botao_excluir_tarefa.innerHTML = "x"
            elemento.appendChild(conteudo)
            elemento.appendChild(botao_excluir_tarefa)
            conteudo_card.appendChild(elemento)

            botao_excluir_tarefa.addEventListener("click", function () {
                conteudo_card.removeChild(this.parentElement)
                salvar_cards()
            })
        })
    }

    botao_adicionar_tarefa.addEventListener("click", function () {
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

        botao_criar_tarefa.addEventListener("click", function () {
            if (input.value !== "") {
                var elemento = document.createElement("div")
                var conteudo = document.createElement("li")
                var botao_excluir_tarefa = document.createElement("button")
                elemento.setAttribute("draggable","true")
                elemento.classList.add("conteudo_card")
                botao_excluir_tarefa.classList.add("botao_excluir_tarefa")
                botao_excluir_tarefa.innerHTML = "x"
                conteudo.innerHTML = input.value
                elemento.appendChild(conteudo)
                elemento.appendChild(botao_excluir_tarefa)
                conteudo_card.appendChild(elemento)
                corpo.removeChild(div)
                salvar_cards()

                botao_excluir_tarefa.addEventListener("click", function () {
                    var pai = this.parentElement
                    pai.parentElement.removeChild(pai)
                    salvar_cards()
                })
            }
        })
    })
}

function salvar_cards() {
    var cards = document.querySelectorAll(".card")
    var cards_filtrado = []
    cards.forEach(Element => {
        var card = []
        var filhos_card = Element.children
        var div_titulo = filhos_card[0].children
        var titulo = div_titulo[0].innerHTML
        var filhos = Element.children[1].children
        var tasks = []
        for (i = 0; i < filhos.length; i++) {
            var div_conteudo = filhos[i]
            var filhos_div = div_conteudo.children
            tasks.push(filhos_div[0].innerHTML)
        }
        card.push(titulo)
        card.push(tasks)
        cards_filtrado.push(card)
    })
    localStorage.setItem("cards", JSON.stringify(cards_filtrado))
    drag_drop()
}
function carregar_cards() {
    var cards = JSON.parse(localStorage.getItem("cards"))
    cards.forEach(Element => {
        var titulo = Element[0]
        var tarefas = Element[1]
        criar_cards(titulo, tarefas)
    })
    salvar_cards()
}

//selecionando os cards e os dropzone
function drag_drop(){
    elementos = document.querySelectorAll(".conteudo_card")
    dropzones = document.querySelectorAll(".dropzone")
    //adicionando os eventos de Dropzone
    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
        dropzone.addEventListener('drop', drop)
    })
    elementos.forEach(elemento => {
        elemento.addEventListener('dragstart', dragstart)
        elemento.addEventListener('drag', drag)
        elemento.addEventListener('dragend', dragend)
    })
}
function dragstart() {
    dropzones.forEach(dropzone => { dropzone.classList.add("acender") })
    this.classList.add("movendo")
}
function drag() {
}
function dragend() {
    dropzones.forEach(dropzone => { dropzone.classList.remove("acender") })
    this.classList.remove("movendo")
    salvar_cards()
}
function dragenter() {
}
function dragover() {
    const card_selecionado = document.querySelector(".movendo")
    this.appendChild(card_selecionado)    
}
function dragleave() {
}
function drop() {
}


