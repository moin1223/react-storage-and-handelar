import React from 'react';
import { addtoDb,removeformDb,deleteCart} from '../../utilities/fakedb';
import './cosmetic.css'


const Cosmetic = (props) => {
    const {id, name,balance} = props.cosmetic;
    const addtoCart = id =>{
        addtoDb(id)
    }
    const removeformCart = id =>{
        removeformDb(id)
    }
    const removeCart = id =>{
        deleteCart(id)
    }
    return (
        <div className='cosmetic'>
            <h1>Name: {name}</h1>
            <span>balance:{balance}</span>
            <br />
            <span>id: {id}</span>
            <br />
            <button onClick={()=>addtoCart(id)}>Add to Cart</button>
            <button onClick={()=>removeformCart(id)}>Remove from Cart</button>
            <button onClick={()=>removeCart(id)}>Delet Cart</button>
            
        </div>
    );
};

export default Cosmetic;