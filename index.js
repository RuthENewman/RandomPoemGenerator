const titleText = document.getElementById('title');
const authorText = document.getElementById('author');
const contentText = document.getElementById('content');
const randomButtonDiv = document.querySelector('.randomButton');

const no_cors = "https://cors-anywhere.herokuapp.com/";

function getPoem() {
  fetch(no_cors+'https://www.poemist.com/api/v1/randompoems')
    .then(response => response.json())
    .then(data => {
      let fivePoems = data;
      let currentPoem = fivePoems[0];
      titleText.textContent = currentPoem.title;
      contentText.textContent = currentPoem.content;
      authorText.textContent = currentPoem.poet.name;
      console.log(currentPoem);
    })

}

randomButtonDiv.addEventListener('click', getPoem)

getPoem();
