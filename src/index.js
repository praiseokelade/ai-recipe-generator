function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "<strong>Step 1</strong> Preheat an air fryer to 325 degrees F (165 degrees C) according to manufacturer's instructions.",
    autoStart: true,
    delay: 1.5,
  });
}

let recipeIngredients = document.querySelector("#recipe-ingredients");
recipeIngredients.addEventListener("submit", generateRecipe);
