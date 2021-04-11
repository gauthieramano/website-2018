(async () => {
  // const rawResponse = await fetch("http://localhost:3030/canal", {
  const rawResponse = await fetch("https://app.proj6ct.com/canal", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fichier: "bonjour", contenu: "au revoir" }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();
