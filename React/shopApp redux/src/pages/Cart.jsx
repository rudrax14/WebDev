import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        if (Array.isArray(cart)) {
            setTotalAmount(
                cart.reduce((acc, curr) => acc + curr.price, 0)
            );
        } else {
            // Handle the case where cart is not an array
            setTotalAmount(0);
        }
    }, [cart]);
    return (
        <div>
            {cart.length > 0 ? (
                <div>
                    <div>
                        <h2>Cart</h2>
                        {cart.map((item, index) => (
                            <CartItem key={item.id} item={item} itemIndex={index} />
                        ))}
                    </div>
                    <div>
                        <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Item: {cart.length}</span>
                            </p>
                        </div>
                        <div>
                            <p>Total Amount: {totalAmount}</p>
                            <button>
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <h2>Cart Empty</h2>
                    </div>
                    <Link to="/">Shop Now</Link>
                </>
            )}
        </div>
    );
}

export default Cart;
