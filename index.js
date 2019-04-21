const titleText = document.getElementById('title');
const authorText = document.getElementById('author');
const contentText = document.getElementById('content');
const randomButtonDiv = document.querySelector('.randomButton');
const authorTitle = document.querySelector('.poet');
const poemDiv = document.querySelector('.poem');

const no_cors = "https://cors-anywhere.herokuapp.com/";

function getPoem() {
  fetch(no_cors+'https://www.poemist.com/api/v1/randompoems')
    .then(response => response.json())
    .then(data => {
      let fivePoems = data;
      let currentPoem = fivePoems[0];
      poemDiv.style.display = 'block';
      titleText.textContent = currentPoem.title;
      authorText.textContent = currentPoem.poet.name;
      thisPoemContent = currentPoem.content;
      formattedContent = thisPoemContent.replace( /\.(\s+)/g, '<br /><br />');
      contentText.innerHTML = formattedContent;
    })

}

randomButtonDiv.addEventListener('click', getPoem)

getPoem();
