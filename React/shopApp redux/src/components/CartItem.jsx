import React from 'react'
import { AiFillDelete } from "react-icons/ai"
function CartItem({ item, itemIndex }) {
    return (
        <div>
            <div>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div>
                    <p>{item.price}</p>
                    <div>

                        <AiFillDelete />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem