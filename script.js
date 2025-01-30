document.getElementById('add-btn').addEventListener('click', addTask);

let currentEditTask = null;

function addTask() {
  const taskInput = document.getElementById('todo-input');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  if (currentEditTask) {
    // Editing existing task
    currentEditTask.querySelector('span').textContent = taskText;
    currentEditTask = null;
    document.getElementById('add-btn').textContent = 'Add Task'; // Reset button text
  } else {
    // Adding a new task
    const taskList = document.getElementById('todo-list');
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
      taskInput.value = span.textContent;
      currentEditTask = li;  // Store the task being edited
      document.getElementById('add-btn').textContent = 'Save Task'; // Change button text to 'Save'
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  }

  taskInput.value = ''; // Clear input field
  taskInput.focus();    // Focus back on input field
}
