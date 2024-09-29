const tasklist = document.getElementById('task-list');
const newTaskInout = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

//Event listener to the  add task button
addTaskButton.addEventListener('click' , addTask);

//function to add task
function addTask(){
    const newTask = newTaskInout.value.trim();
    //what should happen if the button is clicked
    if(newTask){
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.textContent = newTask;
        taskElement.innerHTML +='<span class = "delete-button">Delete </span>';
        tasklist.appendChild(taskElement);
        newTaskInout.value = "";
        taskElement.querySelector('.delete-button').addEventListener('click',deleteTask);
  taskElement.style.marginTop=2+'rem';
        taskElement.addEventListener('click',toggleComplete);
    }
}

function deleteTask(event){
    const taskElement = event.target.parentNode;
    tasklist.removeChild(taskElement);
}

function toggleComplete(event){
    const taskElement = event.target;
    taskElement.classList.toggle('completed');
}