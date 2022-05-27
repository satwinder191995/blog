async function newFormHandler(event) {
  event.preventDefault();
console.log("sunny")
  const title = document.querySelector('input[name="post-title"]').value;
  const article = document.querySelector("#post-url").value;
console.log("sunny");
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      article}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
