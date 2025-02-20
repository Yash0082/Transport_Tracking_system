import Navbar from "../Components/Navbar";
import Carousal from "../Components/Carousal";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import "./css/Home.css";

const Home = () => {
    return(
        <>
        
            <a href="SignUp">Sign Up</a>
            <a href="logIn">LogIn</a>
            <Navbar/>
            <Carousal/>
            <Cards/>
            <Footer/>
        </>
    );
};

export default Home;