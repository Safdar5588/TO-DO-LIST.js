
let tasks = document.querySelector(".tasks");
let eleInput = document.querySelector(".enter-task");


let str = localStorage.getItem("list");
let list = [];
if (str) {
    list = str.split(","); 
}

function update(){
    localStorage.setItem("list",list)
    
    tasks.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let text = list[i];
        let li = document.createElement("li");
        li.innerHTML = '<div class="text-container">' + text + '</div>'
        +'<button class="edit-btn">Edit</button>' + '<i class="fas fa-trash delete"></i>';
        
        tasks.appendChild(li)

        let btnDelete = li.querySelector(".delete");
        btnDelete.addEventListener("click", function () {
            list.splice(i, 1);
            update();
        });

        let edit = li.querySelector(".edit-btn");
        edit.addEventListener("click", function () {
            let inp = prompt("Enter new value" ,list[i])
            list[i] = inp;
            update();
        });
    }
}

let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", function(){
    let text = eleInput.value;
    if (text == "") {
        alert("Please enter any task")
    }
    eleInput.value = ""
    list.unshift(text)
    
    update(); 
});

update();

let width = window.innerWidth;
console.log(width)


let body = document.querySelector('body')

body.addEventListener("resize", function(){
    console.clear()
    let width = window.innerWidth;
    console.log(width);
})





