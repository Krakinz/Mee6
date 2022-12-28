var mongoose = require("mongoose");
var dBoardSchema = new mongoose.Schema({
  ID: String,
  profile: String,
  username: String,
  bite: Number,
  blush: Number,
  bonk: Number,
  bored: Number,
  confused: Number,
  cry: Number,
  cuddle: Number,
  dance: Number,
  goodnight: Number,
  happy: Number,
  highfive: Number,
  hug: Number,
  kill: Number,
  kiss: Number,
  nervous: Number,
  pat: Number,
  poke: Number,
  poke: Number,
  punch: Number,
  sad: Number,
  scream: Number,
  slap: Number,
  smile: Number,
  stare: Number,
  wave: Number,
  wink: Number,
  yeet: Number,
  yes: Number,
  sticker: Number,
  tinyurl: Number,
  toimg: Number,
  tourl: Number,
  youtube: Number,
  bassbost: Number,
  echo: Number,
  flanger: Number,
  nightcore: Number,
  phaser: Number,
  reverse: Number,
  slow: Number,
  speed: Number,
  subboost: Number,
  superslow: Number,
  superspeed: Number,
  surround: Number,
  vaporwave: Number,
  vibrato: Number,
  balance: Number,
  buy: Number,
  daily: Number,
  fish: Number,
  gamble: Number,
  inv: Number,
  pay: Number,
  rob: Number,
  store: Number,
  work: Number,
  zoo: Number,
  antilink: Number,
  broadcast: Number,
  delete: Number,
  demote: Number,
  group: Number,
  promote: Number,
  kick: Number,
  setdesc: Number,
  seticon: Number,
  tagall: Number,
  image: Number,
  neko: Number,
  pinterest: Number,
  waifu: Number,
  wallpaper: Number,
  advice: Number,
  anime: Number,
  fact: Number,
  google: Number,
  joke: Number,
  manga: Number,
  meme: Number,
  quote: Number,
  reddit: Number,
  yt8d: Number,
  ytbassboost: Number,
  ytecho: Number,
  ytflanger: Number,
  ytnightcore: Number,
  ytphaser: Number,
  ytreverse: Number,
  ytslow: Number,
  ytspeed: Number,
  ytsubboost: Number,
  ytsuperslow: Number,
  ytsuperspeed: Number,
  ytsurround: Number,
  ytvaporwave: Number,
  ytvibrato: Number,
  help: Number,
  vlkyre: Number,
  _anime: Number,
  _download: Number,
  _filter: Number,
  _game: Number,
  _group: Number,
  _image: Number,
  _search: Number,
  _ytfilter: Number,
});
module.exports = mongoose.model("dBoard", dBoardSchema);
