function manageItem() {
    let items = []

    function add(item) {
        items.push(item);
        return items
    }

    function remove() {
        items.pop();
        return items;
    }

    function display() {
        return items;
    }

    return {
        addItem: add,
        removeItem: remove,
        listItem: display,
    }
}

const item1 = manageItem();
console.log(item1.addItem("rohit"));
console.log(item1.addItem("rahul"));
console.log(item1.addItem("komal"));
console.log(item1.addItem("santosh"));
console.log(item1.removeItem());
console.log(item1.listItem());



