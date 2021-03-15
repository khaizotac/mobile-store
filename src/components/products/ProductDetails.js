import React from 'react';

const ProductDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Product Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas in consequatur blanditiis similique vero odio animi temporibus quam maiores fugit, sunt veniam doloribus repellat, perspiciatis ex ea explicabo architecto. Soluta.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                <div>Create by Benjamin</div>
                <div>15th Mar, 2021</div>
            </div>
            </div>
        </div>
    )
}

export default ProductDetails
