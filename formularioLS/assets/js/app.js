const listaTweets = document.getElementById('lista-tweets');

eventListeners();


function eventListeners(e) {

    //cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweets);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);

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

    // agregar tweet al localstorage
    agragarTweetLocalStorage(tweet);

    console.log(tweet);
}

//Elimina el tweet del DOM
function borrarTweets(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();

        borrarTweetLocalStorage(e.target.parentElement.innerText);

    }
}

// Mostrar datos de LocalStorage en la lista

function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
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
    });
}

function agragarTweetLocalStorage(tweet) {
    let tweets;
    // agragar al localstorage
    tweets = obtenerTweetsLocalStorage();

    //anadir el nuevo tweet
    tweets.push(tweet)

    //convertir de string a arreglo para localstorage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que existan elementos en localStorage, retorna un arreglo
function obtenerTweetsLocalStorage() {

    let tweets;
    // revisar los valores de loca storage

    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets
}

//Eliminar tweet del localStorage

function borrarTweetLocalStorage(tweet) {

    let tweets, tweetsBorrar;

    //Elimina la X del tweet
    tweetsBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetsBorrar === tweet) {
            tweets.splice(index, 1)
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
    console.log(tweets);
}