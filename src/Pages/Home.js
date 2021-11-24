
import { Col,Row } from "react-bootstrap";
import CarouselInfo from "../components/CarouselInfo";
import ThreeCard from "../components/ThreeCard";


function Home() {
    return ( <>
   
  <div className="home">
  <h2>Programming Sit</h2>
  
  <p> With progress and development and to achieve the vision, we created this site to learn programming</p>
  
  </div>
 
   <CarouselInfo />
    
    
    <ThreeCard/>
    </> );
}

export default Home;