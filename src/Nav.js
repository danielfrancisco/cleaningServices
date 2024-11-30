import { useEffect, useState } from "react";
import './Styles/nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX,} from '@fortawesome/free-solid-svg-icons'
import companyLogo from './companyLogo.jpg'
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
     const location = useLocation()

    const[navLinks, setNavLinks] = useState([
       'Basic and Deep cleanig','Natural Stone Cleaning', 'Wood Floor Cleaning','About Us', 
    ])

    const[dropDown, setDropDown] = useState({
         icon: faBars, height:'100px'      
    })

    useEffect(()=>{
      setDropDown({...dropDown, icon: faBars, height:'100px'})
    },[location])

   function dropDownEvent(){
           if(dropDown.icon.iconName==='bars'){
            setDropDown({...dropDown, icon: faX, height:'70vh'})
              
           }else{
            setDropDown({...dropDown, icon: faBars, height:'100px'})
           }
    }

   return (
    <>
     <div id='Nav' style={{height:dropDown.height}}>
        <FontAwesomeIcon icon={dropDown.icon} id="bars" onClick={dropDownEvent}/>
        
        <Link to={'/'}>
        <img src='https://platinumstarservices.com/wp-content/uploads/2023/11/platinum-star-cleaning-logo-2.jpg' id='logo'/>
        </Link>
        
        {navLinks.map((link, index)=>
         <Link to={link.replace(/\s+/g, "")} className="links"  key={index}>{link}</Link>
         )}
        
     </div>
     
     </>
  );
}


