function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe example",
    loop: false,
    autoStart: true,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");

recipeFormElement.addEventListener("submit", generateRecipe);
