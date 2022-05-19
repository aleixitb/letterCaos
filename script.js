const url = 'https://random-word-api.herokuapp.com/word?number=1';

/*
async function getApi(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = response.json();

        console.log("data:", data)

    } catch (e) { 
        
        console.log(e) 
    }
}
*/

var section = document.querySelector("main > section");

function getWordFromApi() {

    let word = [];

    let Http = new XMLHttpRequest();
    Http.open("GET", url, false) // false for synchronous request ???????
    Http.send( null );

    //Http.onreadystatechange = function() { 
    //    if (Http.readyState == 4 && Http.status == 200) {
            return Http.responseText
    //    }
    //}
}

var word = getWordFromApi();

section.innerHTML = word
console.log("word: ", word);