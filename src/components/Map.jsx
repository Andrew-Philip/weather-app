import contentCSS from '../static/Content.module.css'

import {
    GoogleMap,
    useLoadScript,
    Marker
} from '@react-google-maps/api';

export default function Map({latitude, longitude, cName}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyBRBwV5SkLrZc0PnLD1VAOcO11rtoAeLhU"
    });

    if (!isLoaded) return <div>Loading...</div>
    return(<GoogleMap zoom={10} 
        center={{lat: latitude, lng: longitude}} 
        mapContainerClassName={contentCSS.map}>
        <Marker position={{lat: latitude, lng: longitude}}/>
    </GoogleMap>)
}
