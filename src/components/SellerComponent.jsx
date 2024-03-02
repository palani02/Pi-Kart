import React from 'react'
import './SellerComponent.css'
function SellerComponent() {
  return (
    <div>
    <div className="seller">
      <div className="seller-header">
        <div className='seller-nav'>
          <div className='seller-nav-left'>
            <a href="#" className="seller-dashboard">Dashboard</a>
            {/* current products , 
            add products
            revenue 
            edit products
            delete products */}
          </div>
          <div className='seller-nav-right'>
            <a href="#" className='seller-settings'>Profile Settings</a>
            <a href="#" className='seller-logout'>Logout</a>
          </div>
        </div> 
      </div>
      <div className='seller-body'>products to be displayed</div>
    </div>
  </div>
  )
}

export default SellerComponent