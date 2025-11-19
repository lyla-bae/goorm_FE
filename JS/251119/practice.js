fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP 에러임, status = " + response.status);
    }
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
