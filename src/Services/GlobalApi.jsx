import axios from "axios";

const key = "abf472ce2c4148718d8c2fcd8568838a";
const axiosCreate = axios.create({ baseURL: "https://api.rawg.io/api" });

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);

export default { getGenreList, getAllGames };
