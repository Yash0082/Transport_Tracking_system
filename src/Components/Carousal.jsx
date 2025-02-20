import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/carousal.css";


const Carousel = () => {
  return (
    

        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

            {/* Carousel Indicators (Dots) */}
            <div className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
            </div>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./Images/4.jpg" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                <img src="./Images/2.jpg" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                <img src="./Images/3.jpg" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    
  );
};

export default Carousel;
