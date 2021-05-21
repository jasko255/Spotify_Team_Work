  // Script for input range styling  duration song and volume
  window.onload = function () {
    const el = document.querySelector(".range");
    const el2 = document.querySelector(".volume")
    el.addEventListener("change", (e) => {

      el.style.setProperty("--value", el.value);
      el.style.setProperty("--min", el.min === "" ? "0" : el.min);
      el.style.setProperty("--max", el.max === "" ? "100" : el.max);
      el.style.setProperty("--value", el.value);
    });
    el2.addEventListener('change', (e) => {
      el2.style.setProperty("--value", el2.value);
      el2.style.setProperty("--min", el2.min === "" ? "0" : el2.min);
      el2.style.setProperty("--max", el2.max === "" ? "100" : el2.max);
      el2.style.setProperty("--value", el2.value);
    })

  };

  
  
const userinput = document.getElementById('userInput')

  // let cerca = function(){
  //   // fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${userInput}`)
  //   fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
  //   .then(response => response.json())
  //   .then(search => {
  //       console.log('cose',search)
  //       const parent = document.getElementById('results')
  //       parent.innerHTML = search.map(search => 
  //           `<div class="card col-4" >
  //           <img src="${search.img}" class="card-img-top" alt="...">
  //           <div class="card-body">
  //             <h5 class="card-title">${book.title}</h5>
  //             <p class="card-text">Price ${book.price}</p>
  //             <a href="#" class="btn btn-primary">Go somewhere</a>
  //           </div>
  //         </div>`).join('')


  //       })}
  //       cerca()

  window.onload = function () {
    console.log("the page is loaded")
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
      
        .then(result => result.json()) 
       
        .then(albums => { 
            console.log(albums)
             albumCollection = albums 
            renderAlbum(albums)

            })
        }


  