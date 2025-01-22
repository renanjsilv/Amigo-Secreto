// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
const adicionarAmigo = () => {
    // Obtém o valor do campo de input, removendo espaços em branco no início e fim
    const amigo = document.getElementById('amigo').value.trim();
    // Verifica se o campo está vazio
    if (amigo === '') {
        alert('Por favor, insira um nome'); // Exibe um alerta se o campo estiver vazio
        return; // Sai da função
    }

    amigos.push(amigo); // Adiciona o nome do amigo ao array
    document.getElementById('amigo').value = ''; // Limpa o campo de input
    atualizarListaAmigos(); // Atualiza a lista de amigos na tela
};

// Função para atualizar a lista de amigos na tela
const atualizarListaAmigos = () => {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtém o elemento da lista
    listaAmigos.innerHTML = ''; // Limpa a lista

    // Percorre o array de amigos e cria um item de lista para cada um
    amigos.forEach((amigo, indice) => {
        const itemLista = document.createElement('li'); // Cria um elemento de lista
        itemLista.textContent = amigo; // Define o texto do item de lista como o nome do amigo
        listaAmigos.appendChild(itemLista); // Adiciona o item de lista à lista na tela
    });
};

// Função para sortear um amigo secreto
const sortearAmigo = () => {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione ao menos um amigo para realizar o sorteio.'); // Exibe um alerta se não houver amigos
        return; // Sai da função
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Sorteia um índice aleatório
    const amigoSorteado = amigos[indiceSorteado]; // Obtém o amigo sorteado

    const resultado = document.getElementById('resultado'); // Obtém o elemento de resultado
    resultado.innerHTML = `O amigo secreto é: ${amigoSorteado}`; // Exibe o resultado na tela
};

// Função para recomeçar o sorteio, limpando a lista e o resultado
const recomecar = () => {
    amigos = []; // Limpa o array de amigos
    document.getElementById('listaAmigos').innerHTML = ''; // Limpa a lista de amigos na tela
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado na tela
};

// Adiciona os event listeners aos botões
document.getElementById('adicionar-amigo').addEventListener('click', adicionarAmigo);
document.getElementById('sortear-amigo').addEventListener('click', sortearAmigo);
