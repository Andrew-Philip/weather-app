export const getGeolocation = async() => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    return new Promise((success, error) => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    })
    .then(res => {
        const coords = [res.coords.latitude, res.coords.longitude];
        return coords.join(',');
    })
}


