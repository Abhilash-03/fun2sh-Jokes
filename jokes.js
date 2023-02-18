let btn = document.getElementById("btn");
let jokeBody = document.getElementById("jokeBody");
let select = document.getElementById('selectOption');

const changeCategory = async()=>{
  let choose = select.value;
  const url = `https://v2.jokeapi.dev/joke/${choose}?type=twopart`;
  let response = await fetch(url);
  let json = await response.json();
  return fetchJokes(json);
}

select.addEventListener('click', changeCategory);

const jokes = async () => {
  try {
    changeCategory();
  } 
  catch (err) {
    err = "";
    err += `
    <blockquote class="blockquote mb-0">
     <div class = "main">
     <p class="text-center headPart">"404"- Data not found! 😞</p>
     <p class="text-center smallPart">📶Check your internet connection...</p>
     </div>
   </blockquote>
    `;
    jokeBody.innerHTML = err;
  }
};

jokes();

btn.addEventListener("click", (e) => {
  jokes();
});


const fetchJokes = (data) => {
  let showJokes = "";
  showJokes += `<blockquote class="blockquote mb-0">
     <h5 class="card-title">Category-<span class="catgry">${data.category}</span></h5>
     <div class = "main">
     <p class="text-center">"${data.setup}"</p>
     <p  class="text-center">"${data.delivery}"</p>
     </div>
   </blockquote>`;

  jokeBody.innerHTML = showJokes;
};

