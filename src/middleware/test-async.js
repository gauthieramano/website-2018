(async () => {
  const rawResponse = await fetch("http://localhost:3030/canal", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fichier: "bonjour", content: "au revoir" }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();
