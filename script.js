
function generatePoem(event) {
  event.preventDefault();

  const instructionsInput = document.querySelector(".instructions");
  const prompt = instructionsInput.value;
  const context = "You are a French poet. Write a short poem in French about the following topic";
  const apiKey = "oafbe8035b88726c0e80be71t4409330";
  const poemDiv = document.querySelector(".poem");

  poemDiv.innerHTML = "Generating poem...";

  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      new Typewriter(".poem", {
        strings: data.answer,
        autoStart: true,
        delay: 50,
        cursor: "",
      });
    })
    .catch(error => {
      poemDiv.innerHTML = "Sorry, there was an error generating the poem. Please try again.";
      console.error("Error:", error);
    });
}

const poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);
