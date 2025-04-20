let tarefas = []
function adicionarTarefa() {
    const mensagem = document.getElementById("mensagem")
    const inputTarefa = document.getElementById("inputTarefa")
    let inputValor = inputTarefa.value.trim()
    
    if (inputValor === "") {
        let mensagemErro = "Erro! digite uma tarefa!"
        mensagem.textContent = mensagemErro
    }
    
    else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        tarefas.push (inputValor)
        renderizarTarefa ()
    }
}
   function renderizarTarefa () { 
        let listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""
         
        for (let i = 0; i < tarefas.length; i++){
            let item = document.createElement("li")
            item.textContent = tarefas[i]
            
            let botaoConcluido = document.createElement("button")
            botaoConcluido.className = "concluido"
            botaoConcluido.onclick = () => concluidoItem(botaoConcluido)
            
            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"
            botaoRemover.onclick = () => removerItem(i)
            const removerImg = document.createElement("img")
            removerImg.src = "excluir.png"
            botaoRemover.appendChild(removerImg)
            
            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.onclick = () => editarItem(i)
            const editarImg = document.createElement("img")
            editarImg.src = "https://img.icons8.com/m_outlined/200/228BE6/edit.png"
            botaoEditar.appendChild(editarImg)
            
            let containerBotoes = document.createElement("div")
            containerBotoes.className = "botoes-tarefa"

            containerBotoes.appendChild(botaoConcluido)
            containerBotoes.appendChild(botaoEditar)
            containerBotoes.appendChild(botaoRemover)

            item.appendChild(containerBotoes)
            
            listaTarefas.appendChild(item)
        }
        
    inputTarefa.value = ""
}

function removerItem(i) {
    tarefas.splice(i, 1)
    renderizarTarefa()
}

function editarItem(i) {
    let tarefaEditada = prompt ("Edite a tarefa:")
    if (tarefaEditada.trim() !== "") {
    tarefas [i] = tarefaEditada
    renderizarTarefa()
    }
}

function concluidoItem(botaoConcluido) {
    if (botaoConcluido.querySelector("img")) return;
    
    const imagem = document.createElement("img");
    imagem.src = "https://cdn.pixabay.com/photo/2016/10/10/01/49/hook-1727484_1280.png";
    botaoConcluido.appendChild(imagem);
    
    const itemTarefa = botaoConcluido.closest("li");
    itemTarefa.classList.add("tarefa-concluida");
}