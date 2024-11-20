let tasks = document.querySelector(".tasks");
let eleInput = document.querySelector(".enter-task");



let str = localStorage.getItem("list");
let list = [];
if(str){
    list.split("")
}  

update();


function update(){
    localStorage.setItem("list", list);
    //empty tasks
    tasks.innerHTML = "";


    for (let i = 0; i < list.length; i++) {
        let text = list[i];
        let li = document.createElement("li");
        li.innerHTML = '<div class ="text-countainer"> ' + text + '</div>'
            + '<button class="edit-btn">Edit</button>' + '<i class="fas fa-trash delete"></i>';

        tasks.append(li);

        let btnDelete = li.querySelector(".delete");
        btnDelete.addEventListener("click", function(){
            list.splice(i, 1);
            update();
        });

        let edit = li.querySelector(".edit-btn");
        edit.addEventListener("click", function () {
            let inp = prompt("Enter new value", list[i]);
            list[i] = inp;
            update();
        });

    }
}

function add(){
    let text = eleInput.value;
    if(text == ""){
        alert("Please enter any task");
        return;
    }

    eleInput.value = "";
    
    list.unshift(text);
    update();
}