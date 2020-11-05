const image = document.querySelector("#pokemon_sprite");
const visor = document.querySelector(".visor");
const name_span = document.querySelector("#name");
const date_span = document.querySelector("#date");
const pokeball_loading = document.querySelector(".pokeball");
const pokemon_div = document.querySelector(".pokemon");

const getPokemonDolar = () => {
  pokeball_loading.classList.add("loading");
  pokemon_div.classList.add("hidden");

  setTimeout(() => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL")
      .then(async (r) => {
        const response = await r.text();
        const obj = JSON.parse(response);
        const dolar = obj.rates.BRL;
        const date = obj.date;
        const [year, month, day] = date.split("-");
        const datetime = `${day}/${month}/${year}`;
        const dolar_ajustado = Number(dolar) * 100;
        const pokemon = parseInt(dolar_ajustado);

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then(async (r) => {
            const response = await r.text();
            const poke = JSON.parse(response);
            const name = poke.name;
            const sprite = poke.sprites.other["official-artwork"].front_default;
            image.src = sprite;
            image.alt = `imagem de ${name}`;
            image.title = `${name}`;
            name_span.textContent = `#${pokemon} - ${name} (R$ ${
              pokemon / 100
            })`;
            date_span.textContent = datetime;
            pokemon_div.classList.remove("hidden");
            pokeball_loading.classList.remove("loading");
          })
          .catch((e) => console.error("Boo..." + e));
      })
      .catch((e) => console.error("Boo..." + e));
  }, 1000);
};

getPokemonDolar();

visor.addEventListener("click", getPokemonDolar);
