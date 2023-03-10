const hamburger = document.querySelector('.navbar__hamb');
const navMenu = document.querySelector('.navbar__menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.navbar__menu__link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/** ************************************ */
/** ***********************************8 */
const cards = [
  {
    title: 'Tonic',
    info: ['facebook', 'backend', '2015'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['css', 'html', 'javascript'],
    image: 'images/desktop/tonic-project-desktop.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Multi-Post Stories',
    info: ['facebook', 'full stack dev', '2015'],
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'images/desktop/multi-post-stories-project.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Facebook 360',
    info: ['facebook', 'backend', '2015'],
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'images/desktop/facebook-360-project.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Uber Navigation',
    info: ['UBER', ' Lead Developer', '2015'],
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <span class='description-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt animi consequuntur consectetur voluptate accusantium facilis, fuga non minus, </span>",
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: 'images/desktop/uber-navigation-project.png',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
];

const btns = document.querySelectorAll('.works button');
const bgModal = document.querySelector('.bg-modal');

function popUp(index) {
  const {
    title, info, description, skills, image,
  } = cards[index];
  const [info1, info2, info3] = info;

  const skillsHtml = skills
    .map((s) => `<li class="highlight font-1">${s}</li>`)
    .join('');

  bgModal.innerHTML = `
  <div class="modal-content">
        <div class="modal-header">
          <h3 class="tonic">${title}</h3>
          <span class="close-button">+</span>
        </div>
        <ul class="ul-box1 flex0">
          <li class="canopy">${info1}</li>
          <li><img src="images/Counter.png" alt="counter" /></li>
          <li class="light">${info2}</li>
          <li><img src="images/Counter.png" alt="counter" /></li>
          <li class="light">${info3}</li>
        </ul>
        <a href="#"
          ><img src="${image}" alt="Snapshoot-Portfolio" class="snapshot"
        /></a>
        <div class="flex-99">
          <div class="flex-98">
            <p class="description-2 flex0">
            ${description}
            </p>
          </div>
          <div>
            <ul class="ul-box2 flex0">
            

             ${skillsHtml}

            </ul>
            <hr class="solid-1">
            <div class="buttons">
              <button type="button" class="live-btn">
                see live
                <i class='fas fa-check'></i>
              </button>
              <button type="button" class="live-btn">
                see source
                <i class='fab fa-github'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  `;
  bgModal.style.display = 'flex';
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popUp(index);
  });
});
/** ***** END OF POP-UP WINDOW ** */

/** ****** ADD VALIDATE CONTACT FORM ***** */
const form = document.getElementById('form');
const email = document.getElementById('mail');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    message.push('E-mail has to be in lowercase letters !!!');
  }
  if (message.length > 0) {
    error.innerText = message.join(', ');
  }
});
/** ****** END OF VALIDATE CONTACT FORM ***** */