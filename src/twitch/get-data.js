export default function (game) {
  return fetch(`https://api.twitch.tv/kraken/search/games?q=${data}&type=suggest`)
    .then((res) => res.json())
    .then((response) => response.games);
}
