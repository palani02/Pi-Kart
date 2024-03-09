import React from 'react';
import './UserComponent.css';

function UserComponent() {
  return (
    <div>
      <div className="user">
        <div className="user-header">
          <div className='user-nav'>
            <div className='user-nav-left'>
              <a href="#" className="user-dashboard">Dashboard</a>
            </div>
            <div className='user-nav-right'>
            <a href="#" className="user-trackorders">Track Orders</a>
              <a href="#" className='user-settings'>Profile Settings</a>
              <a href="#" className='user-logout'>Logout</a>
            </div>
          </div> 
        </div>
        <div className='user-body'>Content to be displayed</div>
      </div>
    </div>
  )
}

export default UserComponent;
