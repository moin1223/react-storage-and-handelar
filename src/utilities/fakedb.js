const addtoDb = (id) =>{
  let shoppingCart = {}
    const storedCard = localStorage.getItem('shopping-cart')
    if(storedCard){
        shoppingCart = JSON.parse(storedCard)
    }

    const quantity = shoppingCart[id]
    if(quantity){
       const newQuantity = quantity + 1
       shoppingCart[id] = newQuantity

    }
    else{
     shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const removeformDb = id =>{
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            }
        }
    
}
const deleteCart = () =>{
    localStorage.removeItem('shopping-cart');
}
   
export {addtoDb, removeformDb, deleteCart}





