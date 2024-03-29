function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1.5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userIngredients = document.querySelector("#user-ingredients");
  let apiKey = `017e2af483beec2b2e23fafdtf1f298o`;
  let prompt = `Use the ${userIngredients.value} to generate a quick and easy recipe`;
  let context = `You are a food lover that has travelled all over the world cooking and eating different delicacies. Please make sure to use the user's ingredients in the recipe. ALWAYS display the ingredients and instructions in basic HTML with a <br /> between EACH line. Do NOT display the recipe as one full paragraph.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let loadingSign = document.querySelector("#recipe");
  loadingSign.classList.remove("hidden");
  loadingSign.innerHTML = `Generating a delicious recipe using ${userIngredients.value} 😋...`;
  axios.get(apiUrl).then(showRecipe);
}

let recipeIngredients = document.querySelector("#recipe-ingredients");
recipeIngredients.addEventListener("submit", generateRecipe);
