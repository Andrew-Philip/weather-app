import { useEffect, useState } from "react";
import '../App.css';
import LocationData from "./LocationData";
import headerCSS  from '../static/Header.module.css';
import {BsCloudSunFill} from 'react-icons/bs'

const Header = () => {
    const [value, setValue] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

    const handleInput = (e) => {
        setTimeout(() => {
            const newSearch = e.target.value;
            setValue(newSearch);
        }, 2500)
    };

    return(
        <>
        <nav className={headerCSS.container}>   
            <div className={headerCSS.box}>
                <BsCloudSunFill className={headerCSS.decoration}/>
                <input onInput={(e) => 
                    e.target.value ? setIsEmpty(false) : setIsEmpty(true)} 
                    className={headerCSS.searchbar} 
                    name="search" 
                    type="text" 
                    placeholder="Pais, region, estado..." 
                    onChange={handleInput}/>
            </div>   
        </nav>
            <LocationData value={value} isEmpty={isEmpty}></LocationData>
        </> 
    )
}

export default Header;
