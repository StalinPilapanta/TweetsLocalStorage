const listaTweets = document.getElementById('lista-tweets');

eventListeners();


function eventListeners(e) {

    //cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);


}

function agregarTweet(e) {
    e.preventDefault();

    // leer el valor de textArea

    const tweet = document.getElementById('tweet').value;
    // crear boton de borrar

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //crear elemento

    const li = document.createElement('li');
    li.innerText = tweet;
    // anade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);

    console.log(tweet);
}