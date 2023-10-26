let image_container=document.querySelector(".image_container");
let search_btn=document.getElementById("search_btn");
let search_keyword=document.getElementById("search_keyword");
let show_more_btn_container=document.querySelector(".show_more_btn_container")
let show_more=document.querySelector(".show_more")
let page=1;
// var id=client_id=kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0

// ----------------function for api fetch----------------->

let fetchApi=async ()=>{
   
    let response= await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search_keyword.value}&limit=${20}&client_id=kVeJ9_FubrJNuP7sxiJx4M9Dc49gg5vSRaZMhr2VTj0`);
    let images=await response.json();
    console.log(images);
    // setTimeout(()=>{
    //     displayimages(images.results);
    // },2000)
    return images;
}


// -----------------search operation--------------------->
search_btn.addEventListener("click",async()=>{
   let images= await fetchApi();
   displayimages(images.results);

})


//----------show more-------------------->

show_more.addEventListener("click",()=>{

    addMoreimages();

 })




//-----------function for disaplying result----------------->
function displayimages(images){
    console.log(images)
    let newContainer=document.createElement("div");
    images.forEach((ele) => {

        let container=document.createElement("div");
        container.setAttribute("class","container")
        container.innerHTML=`<img src="${ele.urls.regular}" alt="">
        <div class="des">${ele.alt_description} </div>
        <div class="likes"><i class="fa fa-heart" aria-hidden="true" style="color:red"></i><span class="like-count">${ele.likes}</span></div>`
        newContainer.appendChild(container);
        
    });
    image_container.innerHTML=newContainer.innerHTML;
    // let show_more=document.createElement("button");
    // show_more.setAttribute("class","show_more");
    // show_more.innerText="show more"
    // show_more_btn_container.innerHTML=``;
    
   
}

async function addMoreimages(){
   page++;
let morephotos= await fetchApi();
morephotos.results.forEach((ele) => {

    let container=document.createElement("div");
    container.setAttribute("class","container")
    container.innerHTML=`<img src="${ele.urls.regular}" alt="">
    <div class="des">${ele.alt_description} </div>
    <div class="likes"><i class="fa fa-heart" aria-hidden="true" style="color:red"></i><span class="like-count">${ele.likes}</span></div>`
    image_container.appendChild(container);
    
});


}