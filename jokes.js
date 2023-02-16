let btn = document.getElementById("btn");

const jokes = async () => {
  const url = "https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart";

  let response = await fetch(url);
  let json = await response.json();
  return json;
};

const startJoke = () => {
  let joke = jokes();
  joke.then((data) => fetchJokes(data)).catch((error) => console.log(error));
};

startJoke();

btn.addEventListener("click", () => {
  startJoke();
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

  document.getElementById("jokeBody").innerHTML = showJokes;
};
