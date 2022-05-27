import { useEffect, useState } from "react";
import '../App.css';
import LocationData from "./LocationData";
import headerCSS  from '../static/Header.module.css';
import {BsCloudSunFill} from 'react-icons/bs'

const Header = () => {
    const [value, setValue] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

    const handleInput = (e) => {
        const newSearch = e.target.value;
        setValue(newSearch);
        e.target.value ? setIsEmpty(false) : setIsEmpty(true);
    };

    return(
        <>
        <nav className={headerCSS.container}>
            WEATHER BIG BANG APP         
            <div className={headerCSS.box}>
                <BsCloudSunFill className={headerCSS.decoration}/>
                <input className={headerCSS.searchbar} name="search" type="text" placeholder="..." onChange={handleInput}/>
            </div>   
            <div>Tooltip info</div>
        </nav>
            <LocationData value={value} isEmpty={isEmpty}></LocationData>
        </> 
    )
}

export default Header;
