const form = document.querySelector("#form");
const enter_input = document.querySelector(".input-text");
const add_btn = document.querySelector(".add-btn");
const todo_con = document.querySelector(".todo-container");
const todo_list = document.querySelector(".todo-list");
const done_con = document.querySelector(".checked")
const done_todo = document.querySelector(".done-todo");
const done_list = document.querySelector(".done-list");
const show_btn = document.querySelector(".show");
events();
function events() {
    form.addEventListener("submit", addTodo)
    show_btn.addEventListener("click",showHideDoneTodo)
}
function addTodo(e) {

    const inputText = enter_input.value.trim();
    if (inputText == null || inputText == "") {
        alert("Please add new a item");
    } else {
        createNewTodo()
    }
    e.preventDefault();
    
}
function createNewTodo() {
    const list = document.createElement("li");
    list.className = "list";
    const check_input = document.createElement("input");
    check_input.type = "checkBox";
    check_input.className = "checkbox"
    const todo_input = document.createElement("input");
    todo_input.type = "text";
    todo_input.className = "todo";
    todo_input.setAttribute("disabled", "");
    todo_input.value = enter_input.value;
    const delete_btn = document.createElement("div");
    delete_btn.className = "delete-btn";
    delete_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    list.append(check_input)
    list.append(todo_input);
    list.append(delete_btn);
    todo_list.append(list)
    enter_input.value = "";
    delete_btn.addEventListener("click", deletTodo);
    check_input.addEventListener("click", (e) => {

        if (e.target.checked) {
            check_input.parentElement.classList.add("checked");
            done_todo.append(check_input.parentElement);


        } else {
            check_input.parentElement.classList.remove("checked")
            todo_list.append(check_input.parentElement)
    
        }
        
    })

    random_bg_color();
}

function deletTodo(e) {
    e.target.parentElement.parentElement.remove();

}

function showHideDoneTodo(){
   
    if (done_todo.style.display === 'none') {
        done_todo.style.display = 'block';
        show_btn.textContent = 'Hide';
      } else {
        done_todo.style.display = 'none';
        show_btn.textContent = 'Show';
      } 
    
}

function random_bg_color() {
    let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
    let a;
    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14)
            let y = hex[x]
            a += y
        }
        return a;

    }
    let Color1 = populate("#");
    let Color2 = populate("#");
    var angle = "to right";
    let gradient = "linear-gradient(" + angle + "," + Color1 + "," + Color2 + ")";
    document.body.style.background = gradient;

}
random_bg_color();
