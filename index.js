let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

const btnOpen = document.getElementById("btn-sidebar");
const aside = document.querySelector(".asideParent");
const openAside = document.querySelector(".aside-toggle-menu");
const asideShow = document.getElementsByClassName(".aside");
const show = document.getElementsByClassName("show");
const main = document.getElementsByName("main");
const header = document.getElementsByName("header");
const youtubeOptions = document.getElementsByClassName("youtube-options");
const youtubeOptionsId = document.getElementById("youtube-options");
const classHidden = document.getElementsByClassName("hidden");
const asideLinks = document.getElementById("aside-links");
const photoPost = document.getElementById("photo-post");
const flexContainer = document.getElementById("flex-container");
const flexContainer1 = document.getElementById("flex-container1");
const flexContainer2 = document.getElementById("flex-container2");
const flexContainer3 = document.getElementById("flex-container3");
const classFlexContainer = document.getElementsByClassName("flex-container");
const homeAside = document.getElementsByClassName("home-aside");
const hiddenTab = document.getElementsByClassName("hidden-tab");
const mainId = document.getElementById("main-width");
const headerId = document.getElementById("header");
const tabLists1 = document.getElementById("tab-lists1");
const tabLists2 = document.getElementById("tab-lists2");
const tabVideos2 = document.getElementById("tab-id2");
const tabLists3 = document.getElementById("tab-lists3");
const tabVideos3 = document.getElementById("tab-id3");
const tabLists4 = document.getElementById("tab-lists4");
const tabVideos4 = document.getElementById("tab-id4");
const tabLists5 = document.getElementById("tab-lists5");
const tabVideos5 = document.getElementById("tab-id5");
const tabLists6 = document.getElementById("tab-lists6");
const tabVideos6 = document.getElementById("tab-id6");
const postsId = document.getElementById("youtube-posts");
const postsYoutube = document.getElementsByClassName("youtube-posts");

btnOpen.addEventListener("click", function () {
  asideLinks.classList.toggle("show");
  flexContainer.classList.toggle("home-aside2");
  flexContainer.classList.toggle("flex-container");
  flexContainer1.classList.toggle("home-aside2");
  flexContainer1.classList.toggle("flex-container");
  flexContainer2.classList.toggle("home-aside2");
  flexContainer2.classList.toggle("flex-container");
  flexContainer3.classList.toggle("home-aside2");
  flexContainer3.classList.toggle("flex-container");
  mainId.classList.toggle("main-short");
  youtubeOptionsId.classList.toggle("youtube-options-short");
  youtubeOptionsId.classList.toggle("ul-options-short");
  headerId.classList.toggle("header-short");
});

const allPosts = [
  {
    cat: "religion",
    name: "Muslimani ideal - Hoxhe Enis Rama",
    src: "./assets/rama.jpg",
    date: "2021.10.12",
    photoChanel: "./assets/ideal3.jpg",
    chanel: "Qendra per Studime Islame",
  },
  {
    name: "Adem Ramdani & Gold Ag - Era ramazan",
    src: "./assets/goldi.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/ideal3.jpg",
    chanel: "Muslimani Ideal",
    cat: "music",
  },
  {
    name: "Pertej cicerimes 253 - Me hoxhen Ekrem Avdiu",
    src: "./assets/ekremi.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/ideal3.jpg",
    chanel: "Muslimani Ideal",
    cat: "religion",
  },
  {
    cat: "gaming",
    name: "Cristiano Ronaldo - top 50 golas for Man United",
    src: "./assets/ronaldo.jpg",
    date: "2022.20.12",
    photoChanel: "./assets/ideal1.webp",
    chanel: "Manchester United",
  },
  {
    cat: "music",
    name: "Nusret Kurtishi - Selame nga Shkupi",
    src: "./assets/nusreti1.jpg",
    date: "2022.20.12",
    photoChanel: "./assets/ideal1.webp",
    chanel: "Nusret Kurtishi",
  },
  {
    cat: "gaming",
    name: "Seriali HETUESIA - Episodi 65(NEW)",
    src: "./assets/hetuesia.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
  },
  {
    cat: "music",
    name: "Nusret Kurtishi - Selame nga Kudsi",
    src: "./assets/nusreti2.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "Nusret Kurtishi",
  },
  {
    name: "Ne konak - Me hoxhen Enis Rama ",
    src: "./assets/konak.jpg",
    date: "2022.02.22",
    photoChanel: "./assets/peace2.jpg",
    chanel: "Peace TV",
    cat: "religion",
  },
  {
    cat: "religion",
    name: "Live Exclusive:Andrew Tate disccusion with Mohammed Hijab",
    src: "./assets/debati.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/ideal2.png",
    chanel: "Peace TV",
  },
  {
    name: "Hoxhollaret me ndryshe - Enis Rama",
    src: "./assets/Enisi1.jpg",
    date: "2022.01.22",
    photoChanel: "./assets/peace2.jpg",
    chanel: "Peace TV",
    cat: "religion",
  },
  {
    name: "Adem Ramadani - Qabe moj e bukur je",
    src: "./assets/ademi1.jpg",
    date: "2022.01.22",
    photoChanel: "./assets/peace2.jpg",
    chanel: "Peace TV",
    cat: "music",
  },
  {
    name: "Reload - 30.12.2022",
    src: "./assets/reload.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "gaming",
  },
  {
    name: "Lajmet 11:00 - 28.12.2022 - Klan Kosova",
    src: "./assets/klan-lajmet.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/Klan_Kosova.png",
    chanel: "Klan Kosova",
    cat: "gaming",
  },
  {
    name: "Barrikadat ne veri, Kurti: kjo gjendje sdo te durohet me.",
    src: "./assets/Kurti.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/Klan_Kosova.png",
    chanel: "Klan Kosova",
    cat: "gaming",
  },
  {
    name: "Debat Plus me Ermal Pandurin - Zhbllokimi i veriut",
    src: "./assets/debatplus.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "gaming",
  },
  {
    name: " Best photos in 2022 ",
    src: "./assets/photos2022.jpg",
    date: "2022.09.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "films",
  },
  {
    name: "Best movies in 2022",
    src: "./assets/movie.jpg",
    date: "2022.02.22",
    photoChanel: "./assets/peace2.jpg",
    chanel: "Filma 24",
    cat: "films",
  },
  {
    name: "Hoxhollaret me ndryshe - Enis Rama",
    src: "./assets/Enisi1.jpg",
    date: "2022.01.22",
    photoChanel: "./assets/peace2.jpg",
    chanel: "Peace TV",
    cat: "uploaded",
  },
  {
    name: "Barrikadat ne veri, Kurti: kjo gjendje sdo te durohet me.",
    src: "./assets/Kurti.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/Klan_Kosova.png",
    chanel: "Klan Kosova",
    cat: "films",
  },
  {
    name: "Debat Plus me Ermal Pandurin - Zhbllokimi i veriut",
    src: "./assets/debatplus.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "films",
  },
  {
    name: "Cristiano Ronaldo - top 50 golas for Man United",
    src: "./assets/ronaldo.jpg",
    date: "2022.20.12",
    photoChanel: "./assets/ideal1.webp",
    chanel: "Manchester United",
    cat: "uploaded",
  },
  {
    name: "Seriali HETUESIA - Episodi 65(NEW)",
    src: "./assets/hetuesia.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "films",
  },
  {
    name: "Seriali HETUESIA - Episodi 65(NEW)",
    src: "./assets/hetuesia.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "meditation",
  },
  {
    name: "Live Exclusive:Andrew Tate disccusion with Mohammed Hijab",
    src: "./assets/debati.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/ideal2.png",
    chanel: "Peace TV",
    cat: "uploaded",
  },
  {
    name: "Barrikadat ne veri, Kurti: kjo gjendje sdo te durohet me.",
    src: "./assets/Kurti.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/Klan_Kosova.png",
    chanel: "Klan Kosova",
    cat: "meditation",
  },
  {
    name: "Debat Plus me Ermal Pandurin - Zhbllokimi i veriut",
    src: "./assets/debatplus.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "meditation",
  },
  {
    name: "Debat Plus me Ermal Pandurin - Zhbllokimi i veriut",
    src: "./assets/debatplus.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/dukagjin.jpg",
    chanel: "RTV Dukagjini",
    cat: "uploaded",
  },
  {
    name: "Adem Ramdani & Gold Ag - Era ramazan",
    src: "./assets/goldi.jpg",
    date: "2022.02.11",
    photoChanel: "./assets/ideal3.jpg",
    chanel: "Muslimani Ideal",
    cat: "uploaded",
  },
  {
    name: "Adem Ramadani - Qabe moj e bukur je",
    src: "./assets/ademi1.jpg",
    date: "2022.01.22",
    photoChanel: "./assets/peace2.jpg",
    chanel: "Peace TV",
    cat: "meditation",
  },
];

const getParentOfAllVideos = document.querySelector(".youtube-posts");
const convertDataToHTML = [];

allPosts.forEach((m) => {
  let post;

  post = `<div class="youtube-post ${m.cat}">
  <div class="photo-post">
    <a onclick="sessionStorage.setItem('imgUrl','${m.src}'), sessionStorage.setItem('videoTitle', 
    '${m.name}')" href="./app.html">
      <img
        class="photo1"
        src="${m.src}"
        alt="Fitim Musliu"
      />
    </a>
  </div>
  <div class="photo-description">
    <div class="photo-chanell">
      <img class="chanell" src="${m.photoChanel}" alt="" />
    </div>
    <div class="description-post" id="description-post">
      <a class="titulli" onclick="sessionStorage.setItem('videoTitle', 'Muslimani ideal - Hoxhe Enis Rama')">
      ${m.name}
      </a>
      <div class="name-views-time">
        <p>${m.chanel}</p>
        <p>233 views - ${m.date}</p>
      </div>
    </div>
  </div>
</div>`;

  convertDataToHTML.push(post);
});
getParentOfAllVideos.innerHTML = convertDataToHTML.join("");

const religion = document.querySelector(".navbar.religion");
// console.log(speaking);
Allvideos = document.querySelectorAll(".youtube-post");
//  console.log(Allvideos);
religion.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("religion")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const films = document.querySelector(".navbar.films");
films.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("films")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});
const music = document.querySelector(".navbar.music");
music.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("music")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});
const gaming = document.querySelector(".navbar.gaming");
gaming.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("gaming")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});

const uploaded = document.querySelector(".navbar.uploaded");
uploaded.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("uploaded")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});
const meditation = document.querySelector(".navbar.meditation");
meditation.addEventListener("click", function () {
  Allvideos.forEach((m) => {
    if (m.classList.contains("meditation")) {
      m.style.display = "block";
    } else {
      m.style.display = "none";
    }
  });
});



















// const allTabs = [
//     {
//         key: "All",
//         cat: "All",
//         posts: [
//             {
//                 name: "Reload - 30.12.2022",
//                 src: "./assets/reload.jpg",
//                 date:"2022.02.11",
//                 photoChanel: "./assets/dukagjin.jpg",
//                 chanel: "RTV Dukagjini"
//             },
//             {
//                 name: "Lajmet 11:00 - 28.12.2022 - Klan Kosova",
//                 src: "./assets/klan-lajmet.jpg",
//                 date:"2022.02.11",
//                 photoChanel: "./assets/Klan_Kosova.png",
//                 chanel: "Klan Kosova"
//             },
//             {
//                 name: "Barrikadat ne veri, Kurti: kjo gjendje sdo te durohet me.",
//                 src: "./assets/Kurti.jpg",
//                 date:"2022.02.11",
//                 photoChanel: "./assets/Klan_Kosova.png",
//                 chanel: "Klan Kosova"
//             },

//         ]
//     },
//     {
//         key: "Public speaking",
//         cat: "Speaking",
//         posts: [{
//             name: "Barrikadat ne veri, Kurti: kjo gjendje sdo te durohet me.",
//             src: "./assets/Kurti.jpg",
//             date:"2022.02.11",
//             photoChanel: "./assets/Klan_Kosova.png",
//             chanel: "Klan Kosova"
//         },
//         {
//             name: "Debat Plus me Ermal Pandurin - Zhbllokimi i veriut",
//             src: "./assets/debatplus.jpg",
//             date:"2022.02.11",
//             photoChanel: "./assets/dukagjin.jpg",
//             chanel: "RTV Dukagjini"
//         },
//         {
//             name: " Best photos in 2022 ",
//             src: "./assets/photos2022.jpg",
//             date:"2022.09.11",
//             photoChanel: "./assets/dukagjin.jpg",
//             chanel: "RTV Dukagjini"
//         },

//         ]
//     },
//     {
//         key: "Animated films",
//         cat: "films",
//         posts: [{
//             name: "Debat Plus me Ermal Pandurin - Zhbllokimi i veriut",
//             src: "./assets/debatplus.jpg",
//             date:"2022.02.11",
//             photoChanel: "./assets/dukagjin.jpg",
//             chanel: "RTV Dukagjini"
//         },
//         {
//             name: " Best photos in 2022 ",
//             src: "./assets/photos2022.jpg",
//             date:"2022.09.11",
//             photoChanel: "./assets/dukagjin.jpg",
//             chanel: "RTV Dukagjini"
//         },
//         {
//             name: "Hoxhollaret me ndryshe - Enis Rama",
//             src: "./assets/Enisi1.jpg",
//             date:"2022.01.22",
//             photoChanel: "./assets/peace2.jpg",
//             chanel: "Peace TV"
//         },
//     ]
//     },
//     {
//         key: "Meditation Music",
//         cat: "Music",
//         posts: [
//             {
//                 name: "Muslimani ideal - Hoxhe Enis Rama",
//                 src: "./assets/rama.jpg",
//                 date: "2021.10.12",
//                 photoChanel: "./assets/ideal3.jpg",
//                 chanel: "Qendra per Studime Islame"
//             },
//             {
//                 name: "N'konak - Me hoxhen Enis Rama ",
//                 src: "./assets/konak.jpg",
//                 date: "2022.02.22",
//                 photoChanel: "./assets/peace2.jpg",
//                 chanel: "Peace TV"
//             },
//             {
//                 name: "Cristiano Ronaldo - top 50 golas for Man United",
//                 src: "./assets/ronaldo.jpg",
//                 date: "2022.20.12",
//                 photoChanel: "./assets/ideal1.webp",
//                 chanel: "Manchester United"
//             },
//         ]
//     },
//     {
//         key: "Computer Gaming",
//         cat: "Game"
//     },
//     {
//         key: "Meditation music and pop music",
//         cat: "Pop music"
//     },
//     {
//         key: "Recently uploaded",
//         cat: "Recently"
//     },
// ]

// const getParentOfAllCat = document.getElementById('youtube-options');

// const convertTabsToHTML = [];

// allTabs.forEach(t =>{
//     console.log(t.cat);
//     let Cat;

//     tabs = `<a  onclick="sessionStorage.setItem('tabs','${t.posts}')> ${t.cat}</a>`

//     // getParentOfAllCat.sessionStorage.getItem('tabs')

//     convertTabsToHTML.push(tabs);
// })
// getParentOfAllCat.innerHTML = convertTabsToHTML.join('');

// tabLists2.addEventListener('click', function(){
//     tabVideos2.classList.toggle('hidden-tab');
//     // postsYoutube.style.display = 'none';
//     // mainId.classList.remove('youtube-posts')
//     postsId.classList.add('hidden-tab');
//     postsId.classList.remove('hidden-tab3');
//     postsId.classList.remove('hidden-tab4');
//     // postsId.classList.add('hidden-tab');
// })
// tabLists3.addEventListener('click', function(){
//     tabVideos3.classList.toggle('hidden-tab3');
//     postsId.classList.add('hidden-tab3');
//     postsId.classList.remove('hidden-tab');
//     postsId.classList.remove('hidden-tab4');
// })
// tabLists4.addEventListener('click', function(){
//     tabVideos4.classList.toggle('hidden-tab4');
//     // postsId.classList.add('hidden-tab4');
//     postsId.classList.remove('hidden-tab');
//     postsId.classList.remove('hidden-tab3');
//     // postsId.classList.remove('hidden-tab');
// })
// tabLists5.addEventListener('click', function(){
//     tabVideos5.classList.toggle('hidden-tab5');
//     postsId.classList.toggle('hidden-tab5');
//     postsId.classList.remove('hidden-tab');
//     postsId.classList.remove('hidden-tab3');
//     postsId.classList.remove('hidden-tab4');
// })
// tabLists6.addEventListener('click', function(){
//     tabVideos6.classList.toggle('hidden-tab6');
//     postsId.classList.toggle('hidden-tab6');
//     postsId.classList.remove('hidden-tab5');
//     postsId.classList.remove('hidden-tab');
//     postsId.classList.remove('hidden-tab3');
//     postsId.classList.remove('hidden-tab4');
//     postsId.classList.remove('hidden-tab2');
// })

// photoPost.style.width = '200px';
// postsYoutube.style.width = '1000px'

// if(btnOpen.contains){
//     document.querySelector('main').style.width='80%';
//     document.querySelector('header').style.width='84%';
// } else {
//     document.querySelector('main').style.width='87%';
//     document.querySelector('header').style.width='90%';
// }
// document.querySelector('.flex-container')[0].style.flexDirection= 'row';
// aside.style.width = '0px';
// main.style.marginLeft = '0px'
// flexContainer[0].style.flexDirection = 'row';
// document.getElementsByClassName("flex-container")[0].style.flexDirection = "row";

// asideShow.classList.remove('flex-container');
// asideShow.classList.add('home-aside2');

// // homeAside.style.flexDirection = "row";
// homeAside[0].style.flexDirection = 'row';
// homeAside[1].style.flexDirection = 'row';
// homeAside[2].style.flexDirection = 'row';
// homeAside[3].style.flexDirection = 'row';
// asideShow.classList.remove("home-aside");
// asideShow.classList.add("home-aside2")

// flexContainer[0].style.flexDirection="row";
// flexContainer[1].style.flexDirection="row";
// flexContainer[2].style.flexDirection="row";
// flexContainer[3].style.flexDirection="row";

// let isRow = true;
// let myContainer = document.getElementById("flex-container");
// if(isRow) {
//   myContainer.style.flexDirection = "row";
//  }else {
//  myContainer.style.flexDirection = "column";
// }

// document.getElementById("Sample").innerHTML="The flex direction for the container div is    changed to row-reverse";

// flexContainer[1].classList.toggle('home-aside2');
// flexContainer.classList.toggle('home-aside2');
// flexContainer.classList.toggle('home-aside2');
// flexContainer.classList.toggle('flex-container');
// flexContainer[1].classList.remove('flex-container');
// asideShow.classList.toggle("home-aside2")
// const gridElement = document.querySelector("#root");
// gridElement.style["grid-template-columns"] = "repeat(3, 1fr)";
// body.select("#grid").style("grid-template-columns", "repeat(3, 1fr)");
// d3.select("#grid").style("-ms-grid-columns", "(1fr)[3]");

// document.querySelector('main').style.width='80%';
// document.querySelector('header').style.width='84%';

// main.style.display = 'grid'
// photoPost.style.width = '100px';
// youtubeOptions.style.width = '200px';
// header.style.width = '87%';
// homeAside.style.display = 'flex';
// main.style.width = '1000px'
//     if(homeAside){
//         let elAside = homeAside.style.display;
//         if(elAside == 'flex'){
//             homeAside.style.display = 'inline-block';
//         } else {
//             homeAside.style.display = 'flex';
//         }
//     }
// })

// btnOpen.onclick = function(){

//     // show.style.display = 'block';
//     aside.classList.toggle('show');
//     aside.classList.toggle('aside');
//     aside.classList.remove('hidden');
//     // asideShow.style.display = 'flex';
//     // show.style.display = 'block';
//     // aside.classList.toggle('hidden');
//     // aside.classList.remove('hidden');
//     // classHidden.style.visibility = 'visible';
//     // main.classList.toggle('short-container');
// }

// btnOpen.addEventListener('click', function(){
//     // classHidden.style.display = 'block';
//     // this.hidden.style.display = 'block';
//     // aside.classList.remove('hidden');
//     // show.style.display = 'show';
//     aside.classList.toggle('show');
//     // aside.classList.remove('hidden');
//     // asideShow.style.display = 'block';
//     // classHidden.style.display = 'block';
//     aside.style.display = 'block';
//     header.style.width = '300px';

//     // photoPost.style.width = '100px'
//     // youtubeOptions.style.width = '240px'
//     // aside.classList.remove('aside');
//     // asideShow.style.display = 'flex';
//     // aside.style.display = 'block';
//     // show.style.display = 'block';
//     // aside.classList.toggle('show');
//     // main.style.width = '1000px';
//     // aside.classList.toggle('aside');
//     // aside.classList.toggle('hidden');
//     // aside.classList.remove('hidden')
//     // classHidden.style.display = 'block'
//     // show.style.display = 'block';
//     // show.classList.toggle('hidden')
//     // classHidden.style.display = 'none'
//     // asideShow.style.display = "none"
// })

// btnOpen.addEventListener('click', function(){
//     openAside.style.display = 'block';
//     openAside.classList.toggle('hidden-aside');
//     // aside.style.width = '200px';
//     // header.style.width = '1000px';
//     // main.style.width = '1000px'
//     // youtubeOptions.style.width = '300px';
//     // photoPost.style.width = '120px'
// })

// import firstImg from  './assets/ronaldo.jpg'
// import chanelFirstImg from './assets/peace2.jpg'

// let youtubePost = document.getElementById("description-post")
// let youtubePostImage = document.getElementById("photo-post")

//   const youtubePosts = [
//     {
//     videoImg : "./assets/ronaldo.jpg",
//     title : 'ronaldo scores',
//     chanelName : 'Cristiano Ronaldo',
//     // chanelImg : chanelFirstImg,
//     viewsAndTime : '111 views - 2 years ago'

// },
// {
//     videoImg : "./assets/ronaldo.jpg",
//     title : 'ronaldo scores 1',
//     chanelName : 'Cristiano Ronaldo 2',
//     // chanelImg : chanelFirstImg,
//     viewsAndTime : '111 views - 2 years ago 222'

// }

// ]

// youtubePosts.forEach((item) => {
//     let li = document.createElement("li");
//     let image = document.createElement("img");

//     li.innerText = item.title;
//     image.src = item.videoImg

//     youtubePost.appendChild(li);
//     youtubePostImage.appendChild(image)

//   });
