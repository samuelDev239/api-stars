


function buscar() {
    input = document.getElementById('#caixanome')

 per = input
var url = 'https://swapi.dev/api/'

fetch(url)
.then(function(response){
    return response.json()
})
console.log(per)
}

