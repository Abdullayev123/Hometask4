// Declaring elements
const form = document.querySelector("form");
const input = document.querySelector(".user_Input");
const addBTN = document.querySelector(".add_Btn");
const taskList = document.querySelector(".task_Lists");

// Adding event listener
form.addEventListener("submit", (e) => {
  // dont sending request
  e.preventDefault();
  // Getting input value
  // Checking if input is not empty
  if (!input.value) {
    return;
  }
  // creating a new taskBox
  const taskBox = document.createElement("div");
  taskBox.classList.add("task_Box");
  // creating a new task
  taskBox.innerHTML = `
        <li class="task">
          ${input.value}
        </li>
      <div class="delete_Btn"><button>Delete</button></div>
    `;
  // appending taskBox to taskList
  taskList.appendChild(taskBox);
  // Delete task
  // declaring taskBox inner delete button
  const deleteBtn = taskBox.querySelector(".delete_Btn");
  deleteBtn.addEventListener("click", () => {
    taskBox.remove();
  });

  // clearing input field
  input.value = "";
});
