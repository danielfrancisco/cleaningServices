import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Pages/Home';
import DeepCleaning from './Pages/DeepCleaning';
import WoodFloorCleaning from './Pages/WoodFloorCleaning'
import NaturalStoneCleaning from './Pages/NaturalStoneCleaning';
import AboutUs from './Pages/About';
import FreeEstimate from './Pages/FreeEstimate.js';

export default function App(){
    return(
        <>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BasicandDeepcleanig" element={<DeepCleaning />} />
            <Route path="/WoodFloorCleaning" element={<WoodFloorCleaning />} />
            <Route path="/NaturalStoneCleaning" element={<NaturalStoneCleaning />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/FreeEstimate" element={<FreeEstimate />} />
        </Routes>
        </>
    )
}