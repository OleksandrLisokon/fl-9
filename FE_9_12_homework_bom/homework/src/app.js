const rootNode = document.getElementById(`root`),
        heading = document.createElement(`h1`),
        input = document.createElement(`input`),
        addBtn = document.createElement(`button`),
        cancelBtn = document.createElement(`button`),
        saveBtn = document.createElement(`button`),
        ZERO = 0;

        input.setAttribute(`type`, `text`);
        addBtn.innerText = `Add new task`;
        cancelBtn.innerText = `Cancel`;
        saveBtn.innerText = `Save changes`;
        saveBtn.disabled = true;

let todoItems = [];


let id,
    description = ``;

if (localStorage.getItem('todoItems')) {
    todoItems = JSON.parse(localStorage.getItem('todoItems'));
} else {
    todoItems = [];
}

window.addEventListener(`hashchange`, () => {
    if (window.location.hash === `#add`) {
        addPage();
    } else if (window.location.hash === `#modify/${id}`) {
        modifyPage();
    } else {
        mainPage();
    }
});

mainPage();

function mainPage () {
    rootNode.innerHTML = ``;
    window.location.hash = ``;
    heading.innerText = `Simple TODO application`;
    rootNode.appendChild(heading);
    rootNode.appendChild(addBtn);

    addBtn.addEventListener(`click`, () => {
        window.location.hash = `#add`;
    });

    const list = document.createElement(`ul`);

    if (todoItems.length) {
        for (let task of todoItems) {
            const listItem = document.createElement(`li`);
            listItem.setAttribute(`id`, `${task.id}`);
            const checkBtn = document.createElement(`img`);
            const itemText = document.createElement(`span`);
            itemText.innerText = task.description;
            const deleteBtn = document.createElement(`img`);
            deleteBtn.setAttribute(`src`, `assets/img/remove-s.jpg`);

            if (task.isDone) {
                checkBtn.setAttribute(`src`, `assets/img/done-s.png`);
                itemText.style.backgroundColor = 'gray';
            } else {
                checkBtn.setAttribute(`src`, `assets/img/todo-s.png`);
            }

            checkBtn.addEventListener(`click`, () => {
                task.isDone = true;
                localStorage.setItem('todoItems', JSON.stringify(todoItems));
                list.appendChild(listItem);
                mainPage();
            });

            itemText.addEventListener(`click`, () => {
                id = task.id;
                window.location.hash = `#modify/${id}`;
            });

            deleteBtn.addEventListener(`click`, () => {
                id = task.id;
                todoItems.splice(id, 1);
                localStorage.setItem('todoItems', JSON.stringify(todoItems));
                listItem.remove();
                mainPage();
            });

            listItem.appendChild(checkBtn);
            listItem.appendChild(itemText);
            listItem.appendChild(deleteBtn);

            list.appendChild(listItem);
        }

        rootNode.appendChild(list);
    } else {
        let empty = document.createElement(`p`);
        empty.innerText = `TODO is empty`;
        rootNode.appendChild(empty);
    }
}

function addPage () {
    rootNode.innerHTML = ``;
    heading.innerText = `Add task`;
    rootNode.appendChild(heading);
    input.value = ``;
    description = ``;
    rootNode.appendChild(input);
    const list = document.createElement(`ul`),
        listItem = document.createElement(`li`);
    listItem.appendChild(cancelBtn);
    listItem.appendChild(saveBtn);
    list.appendChild(listItem);
    rootNode.appendChild(list);

    cancelBtn.addEventListener(`click`, () => {
        window.location.hash = ``;
    });

    input.addEventListener(`input`, () => {
        description = input.value.trim();
        saveBtn.disabled = false;
    });

    saveBtn.addEventListener(`click`, () => {
        addItem(description);
        mainPage();
    });
}

function modifyPage () {
    rootNode.innerHTML = ``;
    heading.innerText = `Modify item`;
    rootNode.appendChild(heading);
    input.value = description;
    rootNode.appendChild(input);
    const list = document.createElement(`ul`),
        listItem = document.createElement(`li`);
    listItem.appendChild(cancelBtn);
    listItem.appendChild(saveBtn);
    list.appendChild(listItem);
    rootNode.appendChild(list);
    saveBtn.disabled = true;

    cancelBtn.addEventListener(`click`, () => {
        window.location.hash = ``;
    });

    input.addEventListener(`onchange`, () => {
        description = input.value.trim();
        saveBtn.disabled = false;
    });
}

function addItem (description) {
    const itemID = '' + (new Date()).getTime();
    let item = {description, id: itemID, isDone: false};
    todoItems.push(item);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    return todoItems;
}

