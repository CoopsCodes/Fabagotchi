// actions are what triggers the state to be changed
export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}
