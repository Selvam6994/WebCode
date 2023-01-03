let api_key ="AIzaSyDXNSC3aIU48GlVnElGxBDt8Eh79qndFXk";
let videos_api ="https://www.googleapis.com/youtube/v3/videos?";

let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDXNSC3aIU48GlVnElGxBDt8Eh79qndFXk"

fetch(url)
.then(res=>res.json())
.then(rawdata=>{
let data = rawdata.items;

let cardData = document.querySelector(".video");
console.log(data);

 data.map((ele)=>{

let videoCard = document.createElement("a");
videoCard.setAttribute("href",`https://www.youtube.com/watch?v=${ele.id}`);
videoCard.setAttribute("class","card");
cardData.append(videoCard);

let thumbnail = document.createElement("img");
thumbnail.setAttribute("src",`${ele.snippet.thumbnails.high.url}`);
thumbnail.setAttribute("class","card-img-top");
videoCard.append(thumbnail);

let videoInfo = document.createElement("div");
videoInfo.setAttribute("class","card-body");
videoCard.append(videoInfo);

let icon = document.createElement("img");
icon.setAttribute("src",`${ele.snippet.thumbnails.high.url}`);
icon.setAttribute("class","channelIcon");
videoInfo.append(icon);
 
let info = document.createElement("div");
info.setAttribute("class","channelInfo");
videoInfo.append(info);

let content = document.createElement("h6");
content.setAttribute("class","card-text");
content.innerHTML=`${ele.snippet.title}`;
info.append(content);

let channelTitle = document.createElement("span");
channelTitle.innerHTML=`${ele.snippet.channelTitle}`
info.append(channelTitle);
})
});

let search = document.querySelector(".searchBtn");
let searchInput = document.querySelector(".searchBar");
let searchLink = "https://www.youtube.com/results?search_query=";

search.addEventListener("click",()=>{
    if(searchInput.value.length){
        location.href=searchLink+searchInput.value;
    }

})