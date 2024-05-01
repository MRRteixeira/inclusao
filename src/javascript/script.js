document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function search() {
    var searchTerm = document.getElementById("searchInput").value;
    console.log("Você pesquisou por: " + searchTerm);
  }

  //barra de pesquisa//

  const data = [
    {
     title: "alimentos",
     description: "Alimento é aquilo que os seres vivos comem e bebem para a sua subsistência. "
    },
    
    {
    title: "alfabeto",
    description:"Alfabeto ou Abecedário é uma forma de escrita de signos e significados classificada como segmental."
    },

    {
     title: "numeros", 
     description: "Números são conceitos matemáticos que representam medida, ordem ou quantidade. "
    },
  ];

const cardcontainer = document.querySelector("card-container");
const pesquisaInput = document.querySelector("#pesquisaInput");

const displayData = data => {
    cardcontainer.innerHTML = "";
    data.forEach(e => {
        cardContainer.innerHTML += `
        <div class = "card">
        <h3>${e.title}</h3>
        <p> ${e.description} </p>
        </div>
        `

    })
}

pesquisaInput.addEventListener("keyup", (e) =>{
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search);
})

window.addEventListener("load",displayData.bind(null,data))