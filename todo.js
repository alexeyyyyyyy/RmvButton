addItem.onclick = createItem;
item.onkeyup = function (e) {
    if(e.key === "Enter") {
        createItem();
    }
}
item.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace' && e.target === this && todoList.lastElementChild) {
        todoList.removeChild(todoList.lastElementChild);
    }
});

function createItem(event) {
    const text = item.value.trim();
    if(text) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(text));


        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            li.remove();
        };
        li.appendChild(removeButton);

        todoList.appendChild(li);
    }
    item.value = "";
}

