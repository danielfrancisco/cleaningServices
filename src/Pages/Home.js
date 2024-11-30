import { useState } from 'react';
import '../Styles/home.scss'
import { Link } from 'react-router-dom';

function Home() {
const[icons,setIcons] = useState([
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NketIIlFQtk7JYAiMcr2DY73fh_VnrsTUQ&s',
  'https://static.vecteezy.com/system/resources/previews/014/640/056/non_2x/cleaning-glass-line-round-corner-background-icons-vector.jpg',
  'https://cdn.create.vista.com/api/media/small/377554016/stock-vector-illustration-male-worker-industrial-cleaner-janitor-cleaning-floor-vacuum-cleaner',
  'https://img.freepik.com/premium-vector/spray-bottle-icon_933463-73870.jpg'
])

  return (
    <>
    <div id="backgroundContainer">
    <div id='backgroundImage'>
    </div>
    <div id='homeContainer'>
    <h2 id='title'>Professional Cleaning Services</h2>
    <p>Do you want more time to enjoy life? 
      Leave the cleaning to 
     us.
      Our services are flexible and personalized to suit your needs.
      Call today and take advantage of our expert home cleaning services!
    </p>

    <Link to={'FreeEstimate'} style={{textDecoration:'none', color:'white',}}>
      <button id="request">
        Request a Free Estimate
      </button>
    </Link>

    <h2 id='number' className='number'> 954-749-3867</h2>
    <h2 id='number2' className='number'>954-328-7191</h2>
     </div>
     </div>
    

    {/* {icons.map((icon,index)=><img className='icons' src={icon} key={index}/>)} */}
    </>
  );
}

export default Home;
