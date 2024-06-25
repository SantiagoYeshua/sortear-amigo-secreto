let nomeAmigo = [];
function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;

    if(nomeAmigo.includes(amigo)){
        alert('Nome já inserido!');
        return;
    }

    if(amigo == ''){
        alert('Insira um nome!');
        return;
    }

    nomeAmigo.push(amigo);
    console.log(nomeAmigo);

    document.getElementById('lista-amigos').textContent = nomeAmigo;
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    if(nomeAmigo.length < 4){
        alert('Adicione no minimo 4 participantes!');
        return;
    }
    
    embaralha(nomeAmigo);
    sorteados = document.getElementById('lista-sorteio');
    console.log(nomeAmigo);
    
    for(let i = 0; i < nomeAmigo.length; i++){
        if(i == nomeAmigo.length - 1){
            sorteados.innerHTML = sorteados.innerHTML + nomeAmigo[i] + ' --> ' + nomeAmigo[0] + '<br>';
        } else{
            sorteados.innerHTML = sorteados.innerHTML + nomeAmigo[i] + ' --> ' + nomeAmigo[i+1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    nomeAmigo = [];
}