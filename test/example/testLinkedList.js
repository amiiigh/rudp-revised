var LinkedList = require('../../lib/LinkedList');

var list = new LinkedList(function (packetA, packetB) {
    return packetA - packetB;
});


list.insert(9)
console.log(list.currentValue())
list.insert(8)
console.log(list.currentValue())
list.insert(5)
console.log(list.currentValue())
list.insert(6)
console.log(list.currentValue())
list.insert(2)
console.log(list.currentValue())
list.insert(8)
console.log(list.currentValue())
list.insert(9)
console.log(list.currentValue())
list.insert(1)
list.insert(3)
console.log(list.currentValue())
console.log(list.toArray())
console.log(list.currentValue())
list.seek()
console.log(list.nextValue())
console.log(list.currentValue())
list.seek()
console.log(list.currentValue())
list.seek()
console.log(list.currentValue())
list.seek()
console.log(list.currentValue())
list.seek()
console.log(list.currentValue())
list.seek()
console.log(list.currentValue())
list.seek()
console.log(list.currentValue())
list.seek()
