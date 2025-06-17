const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle completed on click
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '×';
    removeBtn.classList.add('removeBtn');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});
