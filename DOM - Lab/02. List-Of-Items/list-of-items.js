function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    let items = document.getElementById('items');
    let li = document.createElement("li");
    li.textContent = newItemText;
    items.appendChild(li)
}
