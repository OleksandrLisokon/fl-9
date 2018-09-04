const rootNode = document.getElementById('root'),
    addInput = document.querySelector('.input-add-item'),
    addBtn = document.querySelector('.add-btn'),
    todoList = document.querySelector('.todo-list'),
    inputDiv = document.querySelector('.add-item'),
    MAX_ITEMS = 10;
let itemCount = 1;

addInput.addEventListener('change', () => {
    if (addInput.value !== '') {
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }
})

addBtn.onclick = () => {
    let itemText = addInput.value;
    addItem(itemText);
    addInput.value = '';
    addBtn.disabled = true;
    itemCount++;
}

function addItem(itemText) {
    if (itemCount >= MAX_ITEMS) {
        addBtn.disabled = true;
        document.querySelector('.heading').textContent = 'Maximum item per list are created';
        } else {
            addBtn.disabled = false;
            document.querySelector('.heading').textContent = 'TODO Cat List';
        
            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'li');
            listItem.setAttribute('draggable', true);

            let text = document.createElement('span');
            text.appendChild(document.createTextNode(itemText));

            let checkBtn = document.createElement('button');
            checkBtn.setAttribute('class', 'check-box');
            let checkIcon = document.createElement('i');
            checkIcon.setAttribute('class', 'material-icons');
            checkIcon.appendChild(document.createTextNode('check_box_outline_blank'));
            checkBtn.appendChild(checkIcon);

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('class', 'delete-btn');
            let delIcon = document.createElement('i');
            delIcon.setAttribute('class', 'material-icons');
            delIcon.appendChild(document.createTextNode('delete'));
            deleteBtn.appendChild(delIcon);

            listItem.appendChild(checkBtn);
            listItem.appendChild(text);
            listItem.appendChild(deleteBtn);   
            
            todoList.appendChild(listItem);
            
            checkBtn.onclick = () => {
                checkIcon.textContent = 'check_box';
            };
            deleteBtn.onclick = () => {
                listItem.remove();
                itemCount--;
            };
    }
}

let drag = null;

todoList.addEventListener('dragstart', e => {
    drag = e.target;    
});

todoList.addEventListener('dragover', e => {
    if (e.target.className === 'li') {
        e.preventDefault();        
        e.dataTransfer.dropEffect = 'move'; 
    }
});

todoList.addEventListener('drop', e => {
    if (e.target.className === 'li') {
        e.preventDefault();
        todoList.insertBefore(drag, e.target);
    }
});




