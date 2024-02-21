import React from 'react'
import './FooterComponent.css'
function FooterComponent() {
  return (
    <div className='footer'>
      <div className="footer-content">
      <ul className='footer-about'>
      <li className='footer-about-title'>ABOUT</li>
      <li><a href=''>Contact Us</a></li>
      <li><a href=''>About Us</a></li>
      <li><a href=''>Careers</a></li>
      </ul>
<ul className='footer-help'>
  <li className='footer-help-title'>HELP</li>
<li><a href=''>Payments</a></li>
<li><a href=''>Shipping</a></li>
<li><a href=''>Cancellation & Returns</a></li>
<li><a href=''>FAQ</a></li>
<li><a href=''>Report Infringement</a></li>
</ul>
<ul className='footer-policy'>
  <li className='footer-policy-title'>CONSUMER POLICY</li>
<li><a href=''>Cancellation & Returns</a></li>
<li><a href=''>Terms Of Use</a></li>
<li><a href=''>Security</a></li>
<li><a href=''>Privacy</a></li>
<li><a href=''>Sitemap</a></li>
<li><a href=''>Grievance Redressal</a></li>
<li><a href=''>EPR Compliance</a></li>
</ul>      
    </div>
    <div className="footer-section">
      <div className="line"></div>
      <div className='footer-end'>
        <button className='footer-seller'>Became a Seller</button>
        <button className='footer-helpcenter'>Help Center</button>
      </div>
    </div>
    </div>
  )
}

export default FooterComponent