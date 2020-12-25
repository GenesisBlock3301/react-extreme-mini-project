import React from 'react'

const Home = ()=>{
  return(
      <div>
          <div>
              <i className="fas fa-shopping-cart"></i>
          </div>
          <h1>Home Component</h1>
          <div className="cart-wrapper">
              <div className="image-wrapper item">
                  <img style={{width:100,height:100}} src="images/photo.jpg" alt=""/>
              </div>
              <div className="text-wrapper item">
                  <span>I-Phone</span>
                  <span>Price: $1000</span>
              </div>
              <div className="btn-wrapper item">
                  <button>Add To Cart</button>
              </div>
          </div>
      </div>
  )
};
export default Home;