// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Check if the input field is not empty
    if (taskInput.value.trim() !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;

        // Create a delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            listItem.remove();
        };

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}
