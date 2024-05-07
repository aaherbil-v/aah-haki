import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const div = document.createElement('div');
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    block.textContent = data[0].title;
    // Do something with the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
  block.append(div);
}
