const menu = [
    {name: "Margherita", price: 100},
    {name: "Calabresa", price: 100},
    {name: "Mozzarella", price: 100},
    {name: "Portuguese", price: 100},
    {name: "Chicken n' Catupiry", price: 100}
]

const cashInReg = 1000
const orderQueue = []

function addPizza(pizza){
    menu.push(pizza)
}

function placeOrder(order){
    let orderPizza = menu.find(pizza => pizza.name === order)
    cashInReg += orderPizza.price
    let newOrder = {pizza: orderPizza, startus: "Ordered"}
    orderQueue.push(newOrder)
    return newOrder
}