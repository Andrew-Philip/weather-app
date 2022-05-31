import '../static/CloudLoader.css'

const CloudLoader = () => {
    
    return(
        <div className="weather-loader">
            <div className="container">
                <img className="loader" src={require("../assets/cloud-loader.png")} alt="" />
            </div>
                <div className="shadow"></div>
        </div>
        
    )
}

export default CloudLoader;