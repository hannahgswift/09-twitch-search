// This function should return a new HTML element object
// To represent a game
//
// This function should not modify elements outside of
// the new element that you create and return
//
// The "game" argument will be an object that looks like
// {
//   name: 'StarCraft II',
//   popularity: 2619,
//   _id: 490422,
//   giantbomb_id: 0,
//   box: {
//     large: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-272x380.jpg',
//     medium: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-136x190.jpg',
//     small: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-52x72.jpg',
//     template: 'https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-{width}x{height}.jpg',
//   },
//   logo: {
//     large: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-240x144.jpg',
//     medium: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-120x72.jpg',
//     small: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-60x36.jpg',
//     template: 'https://static-cdn.jtvnw.net/ttv-logoart/StarCraft%20II-{width}x{height}.jpg',
//   },
//   _links: {},
// }

export default function createGameElement(game) {

  const container = document.createElement('div');
  container.classList.add('game-item');
  container.innerHTML = `
    <div class="game-item">
    <div class="pic-container">
      <img src="${pic}" alt="">
    </div>
      <h3 class="game-item__name">${name}</h3>
      <h5 class="game-item__popularity">${popularity}</h5>
    </div>
  `;

  const pic = document.createElement('img');
  pic.classList.add('game-item__pic');
  pic.alt = game.name;
  pic.src = game.box.large;
  container.appendChild(pic);

  const name = document.createElement('h3');
  name.classList.add('game-item__name');
  container.appendChild(name);
  name.innerText = game.name;

  const popularity = document.createElement('h4');
  popularity.classList.add('game-item__popularity');
  container.appendChild(popularity);
  popularity.innerText = game.popularity;


  console.log(container);
  return container;
}
