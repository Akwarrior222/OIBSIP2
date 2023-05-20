// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const task = {
      text: taskText,
      completed: false,
      addedAt: new Date()
    };
    tasks.push(task);
    taskInput.value = "";
    showTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

// Function to mark a task as complete
function completeTask(index) {
  tasks[index].completed = true;
  showTasks();
}

// Function to show tasks
function showTasks() {
  const pendingList = document.getElementById("pending-list");
  const completedList = document.getElementById("completed-list");
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    listItem.textContent = task.text;

    if (task.completed) {
      completedList.appendChild(listItem);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(i));
      listItem.appendChild(deleteButton);
    } else {
      pendingList.appendChild(listItem);
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", () => completeTask(i));
      listItem.appendChild(completeButton);
    }
  }
}

// Show initial tasks
showTasks();
