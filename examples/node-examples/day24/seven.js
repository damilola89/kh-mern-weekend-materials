
let items = [10, 20, 30, 40, 50];
print(items);

let anotherItems = items.map((item, index) => item * 2);
print(anotherItems);

function print(items) {
    items.forEach((item, index) => console.log(`Item: ${item} at Index: ${index}`));
    console.log('____________________________')
}