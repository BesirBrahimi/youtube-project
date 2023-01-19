let subMenu = document.getElementById('subMenu');
function toggleMenu(){
    subMenu.classList.toggle('open-menu')
}

const btnOpen = document.getElementById('btn-sidebar')
const asideLinks = document.getElementById('aside-links')
const bigPost = document.getElementById('photo-of-big-post')
const firstPost = document.getElementById('first-post')
const videoTitle = document.querySelector('.video-title h3')

btnOpen.addEventListener('click', function(){
asideLinks.classList.toggle('hidden');
})


const allPosts = [
  {
    name: "Adhurimet e zemres - Hoxhe Enis Rama",
    src: "./assets/enisi4.jpg",
    chanel: "Qendra per Studime Islame",
    date: "2021.10.12"
},
{
    name: "Cristiano Ronaldo - top 50 golas for Man United",
    src: "./assets/ronaldo.jpg",
    chanel: "FCMUFC",
    date: "2022.20.12"
},
{
    name: "Seriali HETUESIA - Episodi 65(NEW)",
    src: "./assets/hetuesia.jpg",
    chanel: "RTV Dukagjini",
    date:"2022.02.11"
},
{
    name: "Pertej cicerimes 253 - Me hoxhen Ekrem Avdiu",
    src: "./assets/ekremi.jpg",
    chanel: "Peace TV",
    date:"2022.02.11"
},
{
    name: "Reload - 30.12.2022",
    src: "./assets/reload.jpg",
    chanel: "RTV Dukagjini",
    date:"2022.02.11"
},
{
  name: "Ne konak - Me hoxhen Enis Rama",
  src: "./assets/konak.jpg",
  chanel: "Peace TV",
  date: "2022.02.22"
},
{
    name: "Lajmet 11:00 - 28.12.2022 - Klan Kosova",
    src: "./assets/klan-lajmet.jpg",
     chanel: "Klan Kosova",
    date:"2022.02.11"
},
{
    name: "Barrikadat ne veri, Kurti: kjo gjendje sdo te durohet me.",
    src: "./assets/Kurti.jpg",
    chanel: "RTV Dukagjini",
    date:"2022.02.11"
},
    
];

const getParentOfAllVideos = document.querySelector(".youtube-posts");
const convertDataTohtml = [];

// function updateVideoItem(item){
//     console.log("item");
// };

allPosts.forEach(m => {
    let post;
    console.log(post);

    post = `<div class="youtube-post">
    <div class="post-photo">
      <a  onclick="sessionStorage.setItem('imgUrl','${m.src}'), sessionStorage.setItem('videoTitle', 
      '${m.name}')" href=""> 
      
      <img src="${m.src}" alt="" /> 
      </a>
    </div>
    <div class="post-description">
      <h3>${m.name}</h3>
      <div class="post-chanel">
        <p>${m.chanel}</p>
        <div class="post-views">
          <p>17k views</p>
          <p>${m.date}</p>
        </div>
      </div>
    </div>
  </div>`;

  convertDataTohtml.push(post);
});
getParentOfAllVideos.innerHTML = convertDataTohtml.join('');


bigPost.src = sessionStorage.getItem("imgUrl");
videoTitle.innerHTML = sessionStorage.getItem("videoTitle");


const field = document.querySelector('textarea');
const backUp = field.getAttribute('placeholder')
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const photo = document.getElementById('photo')
const submit = document.querySelector('#submit')
// const comments = document.querySelector('#comment-box')
const comments = document.getElementById('comment-box');

// array to store the comments
const comments_arr = [];

// to generate html list based on comments array
const display_comments = () => {
  let list = '<ul>';
   comments_arr.forEach(comment => {
    list += `<li class='li-js'>
     <h5>Besir Brahimi </h5> 
     <img src="./assets/besiri.jpg" id="photo" alt="" />
     ${comment}
     <div class="like-dislike">
     <i class="fa-regular fa-thumbs-up"></i>
     <i class="fa-regular fa-thumbs-down"></i>
     </div>
     </li>`;
  })
  list += '</ul>';
  comments.innerHTML = list;
}

clear.onclick = function(event){
  event.preventDefault();
  // reset the array  
   comments_arr.length = 0;
  // re-genrate the comment html list
  display_comments();
}
submit.onclick = function(event){
    event.preventDefault();
    const content = field.value;
    if(content.length > 0){ // if there is content
      // add the comment to the array
      comments_arr.push(content);
      // re-genrate the comment html list
      display_comments();
      // reset the textArea content 
      field.value = '';
    }
}