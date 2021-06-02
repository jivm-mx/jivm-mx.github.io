const postsbk = [{
  title: 'MIT',
  content: 'great place to hang out',
},
{
  title: 'cricket',
  content: 'takes a long time to master',
},
{
  title: 'marmalade',
  content: 'chunky is the best',
},
{
  title: 'Good Article',
  content: 'Death of Planning',
},
{
  title: 'Cooking',
  content: 'scrambled eggs on toast',
},
];

const url = 'https://pollysnips.s3.amazonaws.com/posts.json';

function renderPosts(posts) {
  const len = posts.length; // posts is an array
  let html = '';

  for (let i = 0; i < len; i += 1) {
    html += `${'<li class="post">'
            + '<h2>'}${posts[i].title}</h2>`
            + `<h3>${posts[i].content}</h3>`;
  }

  const container = document.getElementById('container');
  container.innerHTML = `<ul>${html}</ul>`;
}

// Get data from remote url using fetch
async function getPosts(u) {
  const response = await fetch(u);
  let posts = '';

  if (response.status !== 200) {
    posts = postsbk;
  } else {
    posts = await response.json();
  }

  renderPosts(posts);
}

getPosts(url);
