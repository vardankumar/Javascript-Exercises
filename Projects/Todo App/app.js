let todos = []

const handleTask = () => {
    let task = document.getElementById('task_input').value
    todos.push(task)
    console.log(todos)
    let newtask = document.createElement('li')
    newtask.classList.add('todo')
    newtask.textContent = todos.shift()
    document.getElementById('tasks').appendChild(newtask)
}