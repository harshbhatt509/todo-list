let listName = ''
let taskName = ''
let currentAddElement = '';

const form = document.querySelector('.newListForm')
const addButton = document.querySelector('#add')
const addSubmitButton = document.querySelector('#addSubmit')
const closeFormButton = document.querySelector('#closeForm')
const addTaskButton = document.querySelector('#addTask')
const deleteTask = document.querySelector('#delete')
const listNameInput = document.querySelector('#listname')
const listContainer = document.querySelector('.listContainer')
const newTaskForm = document.querySelector('.newTaskForm')
const taskNameInput = document.querySelector('#taskName')
const addTaskSubmitButton = document.querySelector('#addTaskSubmit')
const closeTaskFormButton = document.querySelector('#closeTaskForm')
const card = document.querySelector('.card')
const body = document.querySelector('body');
const header = document.querySelector('.headerContainer')

function addNewTask(taskList) {
   console.log('hello')
   const taskContainer = document.createElement('div')
   taskContainer.classList.add('taskContainer')
   const task = document.createElement('p')
   task.innerText = taskName
   task.classList.add('task')
   const markdownButton = document.createElement('button')
   markdownButton.classList.add('markdown-btn')
   markdownButton.textContent = 'markdown'
   markdownButton.id = 'markdown'

   markdownButton.addEventListener('click', () => {
      task.style.textDecoration = 'line-through'
      task.style.color = 'red'
      markdownButton.style.display = 'none'
   })

   taskContainer.appendChild(task)
   taskContainer.appendChild(markdownButton)

   currentAddElement.appendChild(taskContainer)
   
}


function createCard() {
   const card = document.createElement('div')
   card.classList.add('card')

   const cardHeading = document.createElement('h1')
   cardHeading.classList.add('cardHeading')
   cardHeading.innerText = listName

   const taskList = document.createElement('div')
   taskList.classList.add('taskList')

   const cardButtons = document.createElement('div')
   cardButtons.classList.add('cardButtons')

   const deleteButton = document.createElement('i')
   deleteButton.classList.add('material-icons', 'icon-btn')
   deleteButton.id = 'delete'
   deleteButton.textContent = 'delete'

   const addButton = document.createElement('i')
   addButton.classList.add('material-icons', 'icon-btn', 'addIcon')
   addButton.id = 'addTask'
   addButton.textContent = 'add'

   cardButtons.appendChild(deleteButton)
   cardButtons.appendChild(addButton)

   // appending card children
   card.appendChild(cardHeading)
   card.appendChild(taskList)
   card.appendChild(cardButtons)

   listContainer.appendChild(card)
   
   addButton.addEventListener('click', () => {
      newTaskForm.style.display = 'flex'
      currentAddElement = taskList
   }) 


   
   deleteButton.addEventListener('click', () => {
      listContainer.removeChild(card)
   })

   
   
}

addTaskSubmitButton.addEventListener('click', (e) => {
   e.preventDefault()
   addNewTask()
   newTaskForm.style.display = 'none'
})

closeTaskFormButton.addEventListener('click', (e) => {
   e.preventDefault()
   newTaskForm.style.display = 'none'
})

addButton.addEventListener('click', () => {
   form.style.display = 'flex'
   header.style.filter= 'blur(5px)'
   listContainer.style.filter = 'blur(5px)'
})

addSubmitButton.addEventListener('click', (e) => {
   e.preventDefault()
   createCard()
   form.style.display = 'none'
   header.style.filter= 'none'
   listContainer.style.filter = 'none'
})
closeFormButton.addEventListener('click', (e) => {
   e.preventDefault()
   form.style.display = 'none'
   header.style.filter= 'none'
   listContainer.style.filter = 'none'
})

listNameInput.addEventListener('input', (e) => {
   listName = e.target.value
})
taskNameInput.addEventListener('input', (e) => {
   taskName = e.target.value
})


