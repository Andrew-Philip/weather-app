import contentCSS from '../static/Content.module.css'
import {
    GoogleMap,
    useLoadScript,
    Marker
} from '@react-google-maps/api';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default function Map({latitude, longitude}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:API_KEY
    
    });

    if (!isLoaded) return <div>Loading...</div>
    return(<GoogleMap zoom={10} 
        center={{lat: latitude, lng: longitude}} 
        mapContainerClassName={contentCSS.map}>
        <Marker position={{lat: latitude, lng: longitude}}/>
    </GoogleMap>)
}
