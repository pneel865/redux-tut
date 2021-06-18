import React from 'react'

function Home(props) {
    return (
        <div>
            <div className="add-to-cart img">
                <img src="https://img.icons8.com/nolan/64/fast-cart.png"/>



            </div>

           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;