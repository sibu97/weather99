import React from 'react'
import '../assets/css/navbar.css'
import Icon from '../assets/images/icons8-rain-cloud.gif'
import { WiRefresh } from "react-icons/wi";

const Navbar = ({setStartDate,setState,setCity,setLocation}) => {


  return (
    <div className='brand'>
         <div className="flex justify-between bg-[#000000] bg-opacity-50 w-screen p-2 items-center refr">      
                    <img alt='brndlogo' c src={Icon} className="App-log" style={{backgroundColor:'black',}} />
                    <h1 style={{color:'ButtonShadow',fontFamily:'sans-serif',fontSize:'30px'}}>Weather Report</h1>
          </div>

          <div onClick={()=>{setStartDate("");setState("");setCity("");setLocation("")}} className="refr1">
                  <WiRefresh style={{height:'50px',width:'50px',color:'white'}} /> 
                  <h1>Refresh </h1>    
          </div>

      </div>
  )
}

export default Navbar;