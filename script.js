const button =document.querySelector('.add');
const list = document.querySelector('#lists');
const todos = document.querySelectorAll('li');
const todo = list.children;

button.addEventListener('click',function(e){
    const addTodo =document.createElement('li');
    addTodo.classList.add('todo');
    // addTodo.innerText =`list${todo.lingth +1}`;
    list.appendChild(addTodo);
    
    
})