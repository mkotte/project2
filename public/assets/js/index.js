// initializing function
const init = () => {
    fetch("/api/tasks").then(data => data.json()).then(dataObj => createTasks(dataObj))
}

// Creating tasks and assigning them to the proper cards/columns
const createTasks = (data) => {
    for (let i = 0; i < data.length; i++){ 
        
        let taskWrapper = document.createElement('div');
        taskWrapper.setAttribute('class', 'task-wrapper');
        document.querySelector(`.task-list-${data[i].card_id}`).appendChild(taskWrapper)

        // const taskList1 = document.querySelector('.task-list-1') 
        // console.log(taskList1)
        let taskTitle = document.createElement('h3')
        taskTitle.setAttribute('class', 'task-title')
        taskTitle.textContent = data[i].title;
        taskWrapper.appendChild(taskTitle);
        let taskDescription = document.createElement('p');
        taskDescription.setAttribute('class', 'task-description')
        taskDescription.textContent = data[i].description;
        taskWrapper.appendChild(taskDescription); 
        const taskList1 = document.querySelector('.task-list-1')
        console.log(taskList1)
    
    }
    makeSortable();
}

// drag and drop function
const makeSortable = () => {
    const taskList1 = document.querySelector('.task-list-1')
    const taskList2 = document.querySelector('.task-list-2')
    const taskList3 = document.querySelector('.task-list-3')
    const taskList4 = document.querySelector('.task-list-4')
    const taskList5 = document.querySelector('.task-list-5')

    // console.log(taskList1)
    new Sortable(taskList1, {
        group: 'shared',
        animation: 150,
        onEnd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
            evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
            evt.clone // the clone element
            evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
            console.log(evt.newIndex)
        }
    });

    new Sortable(taskList2, {
        group: 'shared',
        animation: 150,
        onEnd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
            evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
            evt.clone // the clone element
            evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
            console.log(evt.newIndex)
        }
    });

    new Sortable(taskList3, {
        group: 'shared',
        animation: 150,
        onEnd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
            evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
            evt.clone // the clone element
            evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
            console.log(evt.newIndex)
        }
    });

    new Sortable(taskList4, {
        group: 'shared',
        animation: 150,
        onEnd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
            evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
            evt.clone // the clone element
            evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
            console.log(evt.newIndex)
        }
    });

    new Sortable(taskList5, {
        group: 'shared',
        animation: 150,
        onEnd: function (/**Event*/evt) {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
            evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
            evt.clone // the clone element
            evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
            console.log(evt.newIndex)
        }
    });

}

// TODO: add event listeners (bottom) for button presses (i.e. login, project boards etc)

init();