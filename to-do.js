
let eleInput = document.getElementsByClassName("enter-task")[0];


function add() {

    let enter = eleInput.value
    let text = document.querySelector(".tasks")
    if (enter == "") {
        alert("Please enter any task");
        return;
    }

    let newElement = document.createElement("li")
    newElement.innerHTML = '<div class ="text-countainer"> ' + enter + '</div>'
        + '<button class="edit-btn">Edit</button>' + '<i class="fas fa-trash delete"></i>'
    let btnDelete = newElement.querySelector(".delete");
    let edit = newElement.querySelector(".edit-btn")
    btnDelete.addEventListener("click", function () {
        newElement.remove()
    });
    edit.addEventListener("click", function () {
        let inp = prompt("enter new value", enter);
        enter = inp;
        let text = newElement.querySelector(".text-countainer")
        text.innerHTML = enter

    })

    // console.log(text)
    text.appendChild(newElement)

    eleInput.value = ""

}






