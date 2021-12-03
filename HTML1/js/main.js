// console.log(document)


// let title = document.getElementById("title")

// title.onclick = function(){
//     alert("P201")
// }

// title.onclick = function(){
//     alert("P101")
// }

// // title.innerHTML  = "<b>Hello</b>"

// title.style.color="red"
// title.style.fontSize="25px"

// let elements = document.getElementsByClassName("text")

// let pElements = document.getElementsByTagName("p")

// let elementsArr = [...pElements]

// console.log("inner texts:")
// elementsArr.forEach(x=>console.log(x.innerHTML))


// console.log(pElements)

// let titleBold  = document.querySelector("#title b")
// console.log(titleBold)
// titleBold.style.color = "green"

// let text = document.querySelectorAll(".text")
// console.log(text)

// function show(){
//     alert("P201")
// }

// let fullNameInput = document.querySelector("#fullNameInput")
let fullNameInput = document.getElementById("fullNameInput")

fullNameInput.value = "Hikmet Abbasov"

let createBtn = document.getElementById("createBtn")

// createBtn.onclick = function(){
//     let li = document.createElement("li")
//     li.innerText = fullNameInput.value
//     li.className = "list-group-item"

//     let icon = document.createElement("i")
//     icon.className = "fas fa-times"
//     icon.style.float="right"
//     icon.style.cursor="pointer"
//     icon.onclick = function(){

//         let checkDelete = confirm("silmek isteyirsinizmi?")

//         if(checkDelete){
//             li.remove()
//         }

//     }
//     li.appendChild(icon)
//     fullNameInput.value = ""

//     let nameList = document.getElementById("nameList");
//     nameList.appendChild(li)
//     console.log(li)

// }

function showSalam(){
    console.log("salam")
}

let counter=0;
createBtn.addEventListener("click",function(){
    counter++;
    this.innerText = "Click "+counter
})

createBtn.addEventListener("click",function(){
    let li = document.createElement("li")
    li.innerText = fullNameInput.value
    li.className = "list-group-item"

    let icon = document.createElement("i")
    icon.className = "fas fa-times"
    icon.style.float="right"
    icon.style.cursor="pointer"
    icon.onclick = function(){

        let checkDelete = confirm("silmek isteyirsinizmi?")

        if(checkDelete){
            li.remove()
        }

    }
    li.appendChild(icon)
    fullNameInput.value = ""

    let nameList = document.getElementById("nameList");
    nameList.appendChild(li)
    console.log(li)
})



