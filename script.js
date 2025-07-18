const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask(taskInput.value, taskDate.value);
  taskInput.value = '';
  taskDate.value = '';
});

function addTask(text, date) {
  const li = document.createElement('li');

  const taskText = document.createElement('span');
  taskText.textContent = `${text} — ${new Date(date).toLocaleString()}`;
  li.appendChild(taskText);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '✅';
  completeBtn.title = 'Mark as completed';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '✏️';
  editBtn.title = 'Edit task';
  editBtn.onclick = () => {
    const newText = prompt('Edit task text:', text);
    const newDate = prompt('Edit date/time:', date);
    if (newText && newDate) {
      taskText.textContent = `${newText} — ${new Date(newDate).toLocaleString()}`;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.title = 'Delete task';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);

  taskList.appendChild(li);
}
