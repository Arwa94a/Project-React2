
import { Col,Row } from "react-bootstrap";
import CarouselInfo from "../components/CarouselInfo";
import ThreeCard from "../components/ThreeCard";
import AboutUs from "../components/AboutUs";

function Home() {
    return ( <>
    <AboutUs />
   <CarouselInfo />
    
    
    <ThreeCard/>
    </> );
}

export default Home;