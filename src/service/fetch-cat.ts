export const fetchCat = async () => {
  const response = await  fetch("https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_siCilSoUUorGAiF6dswiu1wAJP8sUSov8GM71k4Wzhz8jfyGgv5MrDpNvePpwzny")
  const data = await response.json()
  return data;
  
}