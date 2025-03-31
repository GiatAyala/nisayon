document.addEventListener("DOMContentLoaded", () => {
    const pokemonList = ["פיקאצ'ו", "צ'רמנדר", "סקווירטל"];
    const listContainer = document.getElementById("pokemon-list");
    if (listContainer) {
        pokemonList.forEach(pokemon => {
            const li = document.createElement("li");
            li.textContent = pokemon;
            listContainer.appendChild(li);
        });
    }
});