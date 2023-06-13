document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var addTaskButton = document.getElementById('addTaskButton');
    var taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', function() {
      var taskText = taskInput.value;
      if (taskText) {
        var listItem = document.createElement('li');
        var taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
  
        taskCheckbox.addEventListener('change', function() {
          if (this.checked) {
            listItem.classList.add('completed');
          } else {
            listItem.classList.remove('completed');
          }
        });
  
        var taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
  
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          listItem.remove();
        });
  
        listItem.appendChild(taskCheckbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
  
        taskInput.value = '';
      }
    });
  });