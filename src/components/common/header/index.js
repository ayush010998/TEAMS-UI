import React from 'react'
import "./header.css";


function Header() {
  return (<div className='header'>
    <div className='header-menu'>
    <i class="fi fi-rr-layout-fluid"></i>
    </div>
    <div className='header-leftFold'>
       <label className='header-label'>Microsoft Teams</label>
    </div>
    <div className='header-rightFold'>
       <div className='header-search'>
       <i class="fi fi-rr-search"></i>
       <input placeholder='Search'/>
       </div>
       <div className='header-profile'>
        <div className='header-options'>
        <i class="fi fi-rr-menu-dots"></i>
        </div>
        <img className='header-avatar' src='https://cdn-icons.flaticon.com/png/128/4333/premium/4333640.png?token=exp=1658221287~hmac=c32867c54e562da24d3a8e61d92af1e2'/>
       </div>
    </div>
  </div>
    
  )
}

export default Header