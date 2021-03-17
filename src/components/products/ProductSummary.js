import React from 'react'

const ProductSummary = ({product}) => {
    return (
        <div className="card z-depth-0 product summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{product.name}</span>
                <p>Price: {product.price}</p>
                <p className="grey-text">Add to Cart</p>
            </div>
        </div>
    )
}

export default ProductSummary;