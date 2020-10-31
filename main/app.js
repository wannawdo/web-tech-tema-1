function removeOrderItem(orderInfo, position){
    if(!Array.isArray(orderInfo.items))
    throw "Items should be an array"
    orderInfo.items.forEach(element => {
        if(!element.price && !element.quantity)
        throw "Malformed item"
    });
    if(position>=orderInfo.items.length)
    throw "Invalid position"
    else
    {
        const found = orderInfo.items[position];
        orderInfo.items.splice(position, 1);
        orderInfo.total = orderInfo.total - found.price * found.quantity;
    }
    return orderInfo
}


const app = {
    removeOrderItem
};

module.exports = app;