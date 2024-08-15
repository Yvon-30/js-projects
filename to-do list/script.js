    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const alertContainer = document.getElementById('alert-container');

    // Event listener for add task
    document.getElementById('add-task').addEventListener('click', addTask);

    // Event listener for delete task
    taskList.addEventListener('click', deleteTask);

    /**
     * Displays an alert message.
     * @param {string} message - The message to display.
     * @param {string} type - The type of alert (success, warning, or danger).
     * @returns {undefined}
     */
    function showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        alertContainer.appendChild(alert);

        setTimeout(() => alert.remove(), 3000);
    }

    /**
     * Adds a new task to the task list.
     *
     * @return {undefined}
     */
    function addTask() {
        const task = taskInput.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `${task} <button class="btn btn-danger btn-sm delete-task"><span class="fa fa-trash"></span></button>`;
            taskList.appendChild(li);
            showAlert('Task added successfully!', 'success');
            taskInput.value = '';
        } else {
            showAlert('Please enter a task!', 'warning');
        }
    }

    /**
     * Removes a task from the task list.
     *
     * @param {Event} e - The click event.
     * @return {undefined}
     */
    function deleteTask(e) {
        if (e.target.classList.contains('delete-task')) {
            e.target.parentElement.remove();
            showAlert('Task removed successfully!', 'danger');
        }
    }
