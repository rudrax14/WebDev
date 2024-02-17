import React from 'react'

function Product({ product }) {
    return (
        <div>
            <div>
                <div>
                    <h3>{product.title}</h3>
                </div>
                <div>
                    <p>{product.description}</p>
                </div>
                <div>
                    <img src={product.image} alt={product.title} />
                </div>
                <div>
                    <p>{product.price}</p>
                </div>
                <button>
                    {
                        true ? 'Remove from Cart' : 'Add to Cart'
                    }
                </button>
            </div>
        </div>
    )
}

export default Product