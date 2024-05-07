const textContent = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => data[0].title)
  .catch(() => 'There was a problem with the fetch operation');

export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');
  div.textContent = textContent;
  block.append(div);
}
