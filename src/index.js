function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    loop: false,
    autoStart: true,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#ingredients");
  let ingredients = ingredientsInput.value;
  let apiKey = "21f1caaedf3t0e238fc991db4d2f34bo";
  let prompt = `Generate a short recipe based on the ingredients provided in ${ingredients}. Give the ingredients and the method.`;
  let context =
    "Provide a short recipe which must include all the ingredients provided in the following structure: heading, ingredients, method. Use basic HTML. The recipe should be short and concise. Do not include html or body tags. Do not include any other information apart from the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Generating recipe ...";

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");

recipeFormElement.addEventListener("submit", generateRecipe);
