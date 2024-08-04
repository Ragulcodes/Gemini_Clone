import React from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'


const sidebar = () => {
  return (
    <div className='sidebar'> 
    <div className="top">
      <img src={assets.menu_icon} alt="menu" />
      </div>
      <div className="bottomm">
        </div>      
    </div>
  )
}

export default sidebar

