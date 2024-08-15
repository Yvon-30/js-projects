document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const filterAll = document.getElementById('filterAll');
    const filterCompleted = document.getElementById('filterCompleted');
    const filterIncomplete = document.getElementById('filterIncomplete');

    // Load tasks from local storage
    document.addEventListener('DOMContentLoaded', loadTasks);

    // Add task event listener
    addTaskBtn.addEventListener('click', addTask);

    // Mark task as completed event listener
    taskList.addEventListener('click', markTaskAsCompleted);

    // Filter tasks event listeners
    filterAll.addEventListener('click', filterTasks);
    filterCompleted.addEventListener('click', filterTasks);
    filterIncomplete.addEventListener('click', filterTasks);

    /**
     * Adds a task to the task list and saves it to local storage.
     *
     * @return {void} This function does not return anything.
     */
    function addTask() {
        const task = taskInput.value.trim();
        if (task) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `${task} <button class="btn btn-danger btn-sm delete-task"><span class="fa fa-trash"></span></button>`;
            
            // Assign a unique ID to the task
            li.setAttribute('data-id', new Date().getTime());
    
            taskList.appendChild(li);
    
            saveTask({ id: li.getAttribute('data-id'), text: task });
            taskInput.value = '';
    
            // Show success message
            alert('Task added successfully!');
        }
    }

    /**
     * Removes a task from the task list and saves it to local storage.
     *
     * @param {Event} e - The click event.
     * @return {void} This function does not return anything.
     */
    function deleteTask(e) {
        if (e.target.classList.contains('delete-task')) {
            const taskItem = e.target.parentElement;
            
            // Remove the task from local storage
            if (confirm('Are you sure you want to delete this task?')) {
                taskItem.remove();
                removeTask(taskItem.getAttribute('data-id'));
            }
        }
    }
    /**
     * Filters the task list based on the selected filter option.
     *
     * @return {void} This function does not return anything.
     */
    function filterTasks() {
        const filter = this.id;
        const tasks = document.querySelectorAll('li');
        
        tasks.forEach(task => {
            switch (filter) {
                case 'filterAll':
                    task.style.display = 'block';
                    break;
                case 'filterCompleted':
                    task.style.display = task.classList.contains('completed') ? 'block' : 'none';
                    break;
                case 'filterIncomplete':
                    task.style.display = !task.classList.contains('completed') ? 'block' : 'none';
                    break;
                default:
                    task.style.display = 'block';
            }
        });
    }

    // Mark task as completed event listener
    taskList.addEventListener('click', deleteTask);

    /**
     * Saves a task to local storage.
     *
     * @param {string} task - The task to save to local storage.
     * @return {void} This function does not return anything.
     */
    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    /**
     * Loads tasks from local storage and displays them in the task list.
     *
     * @return {void} This function does not return anything.
     */
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.setAttribute('data-id', task.id);  // Assigner l'ID unique
            li.innerHTML = `${task.text} <button class="btn btn-danger btn-sm delete-task"><span class="fa fa-trash"></span></button>`;
            taskList.appendChild(li);
        });
    }

    /**
     * Removes a task from local storage.
     *
     * @param {string} task - The task to remove from local storage.
     * @return {void} This function does not return anything.
     */
    function removeTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});