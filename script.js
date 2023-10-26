let image_container=document.querySelector(".image_container");
let search_btn=document.getElementById("search_btn");
let search_keyword=document.getElementById("search_keyword");
let show_more_btn_container=document.querySelector(".show_more_btn_container")
let page=1;
// var id=client_id=kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0


search_btn.addEventListener("click",async ()=>{
    let response= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search_keyword.value}&client_id=kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0`);
    let images=await response.json();
    console.log(images);
    setTimeout(()=>{
        displayimages(images.results);
    },2000)

})

function displayimages(images){
    console.log(images)
    let newContainer=document.createElement("div");
    images.forEach((ele) => {

        let container=document.createElement("div");
        container.setAttribute("class","container")
        container.innerHTML=`<img src="${ele.urls.regular}" alt="">
        <div class="des">${ele.alt_description} </div>
        <div class="likes"><i class="fa fa-heart" aria-hidden="true" style="color:red"></i>${ele.likes}</div>`
        newContainer.appendChild(container);
        
    });
    image_container.innerHTML=newContainer.innerHTML;
    let show_more=document.createElement("button");
    show_more.setAttribute("class","show_more");
    show_more.innerText="show more"
    show_more_btn_container.innerHTML=`<button class="show_more">show more</button>`;
    show_more.addEventListener("click",()=>{



    })
}