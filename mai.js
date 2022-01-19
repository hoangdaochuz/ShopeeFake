let searchBtn = document.querySelector(".header-search-box-icon");
let searchBox = document.querySelector(".header__search")
console.log(searchBox)
searchBtn.onclick = function(){
    //console.log("ok");
    searchBox.classList.toggle("appear");
}
