let req = new XMLHttpRequest();
req.addEventListener("load", place);
req.open('GET', 'https://api.github.com/users/b4nnt3r');
req.send();

function place() {
  let data = JSON.parse(this.responseText);

  let template = `
  <div class="title">
  <header>
  <h1>${data.name}</h1>
  </header>
  </div>
  <article>
    <div class="me">
      <h2>The Basics</h2>
      <p>Name: </p>${data.name}<br>
      <p>Github URL: </p><a href=${data.html_url}>${data.login}</a><br>
      <p>ID: </p>${data.id}<br>
      <p>Company: </p>${data.company}<br>
      <p>Website:</p> <a href=${data.blog}>${data.blog}</a><br>
    </div>
    <div class="story">
      <h2>The Story</h2>
      <div class="bio">
      ${data.bio}
      </div>
    </div>
    <div class="image">
    <img src="${data.avatar_url}">
    </div>

  </article>
  `;

  document.querySelector('.cont').innerHTML += template;

  console.log(req);
}
