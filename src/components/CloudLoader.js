import './CloudLoader.css'

const CloudLoader = () => {
    
    return(
        <div className="weather-loader">
            <div className="container">
                <img className="loader" src={require("../assets/editor-0.6s-189px.png")} alt="" />
            </div>
                <div className="shadow"></div>
        </div>
        
    )
}

export default CloudLoader;