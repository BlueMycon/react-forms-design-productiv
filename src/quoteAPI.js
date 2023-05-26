import axios from "axios";

const QUOTE_API_BASE_URL = "https://inspo-quotes-api.herokuapp.com"

export default async function getRandomQuote() {
  const response = await axios.get(`${QUOTE_API_BASE_URL}/quotes/random`)
  console.log("reponse",response)
  return response.data.quote;
}