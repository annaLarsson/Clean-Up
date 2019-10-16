const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector('#filter');
const taskInput =document.querySelector('#task');
const send = document.querySelector('#send');
//Ladda alla event
loadEventListner();

//function för ladda
function loadEventListner(){
    //lägg till uppgifts händelse
    form.addEventListener('submit', addTask);
    // ta bort uppgifts händelse
    taskList.addEventListener('click', removeTask);
    //Rensa med knapp
    clearBtn.addEventListener('click',clearTasks );
    //skicka listan
    send.addEventListener('click',sendList);
}

let todo = [];
//function for Add task
function addTask(e){ 
    if(taskInput.value === ""){
        alert("Add a task!")
    }

// skapa ett list element
const li = document.createElement('li');
//lägg till class
li.className = 'collection-item';
//skapa text node och lägg till i listan
li.appendChild(document.createTextNode(taskInput.value));

//lägg till input i en array
todo.push(taskInput.value);
//console.log(todo);

//skapa link element
const link = document.createElement('a');
//lägg till class
link.className ='delete-item scondery-content';
//lägg till icon
link.innerHTML ='<i class=remove>DELETE X</i>';
//lägg till länk i lista
li.appendChild(link);


// lägg till li i ul
taskList.appendChild(li);
console.log(taskList);
//rensa input
taskInput.value ='';

    e.preventDefault();
}
//function för att ta bort uppgift
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      if(confirm('Är du säker?')) {
        e.target.parentElement.parentElement.remove();
      }
    }
  }
  // ta bort alla uppgifter
  function clearTasks(){
    //taskList.innerHTML = ''; 
    
    //snabbare
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
  }
  //function för skicka lista
  function sendList(e){      
   console.log(todo);
  }