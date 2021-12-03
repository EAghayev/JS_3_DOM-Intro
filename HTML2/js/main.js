let showBtn = document.getElementById("showBtn")
let hideBtn = document.getElementById("hideBtn")


showBtn.onclick = function(){
    let sidebar = document.getElementById("sidebar")
    sidebar.classList.add("open")
}

hideBtn.onclick = function(){
    let sidebar = document.getElementById("sidebar")
    sidebar.classList.remove("open")
}

