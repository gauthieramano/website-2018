let myInit = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  mode: "cors",
  cache: "default",
  body: JSON.stringify({ fichier: "bonjour", contenu: "au revoir" }),
};

// fetch("http://localhost:3030/canal", myInit).then(response => {
fetch("https://app.proj6ct.com/canal", myInit).then((response) => {
  console.log(response.json());
});
