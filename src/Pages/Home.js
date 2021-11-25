
import { Col,Row } from "react-bootstrap";
import InfoImage from "../components/InfoImage";
import ThreeCard from "../components/ThreeCard";


function Home() {
    return ( <>
   
  <div className="home">
  <h2>Programming Sit</h2>
  
  <p> With progress and development and to achieve the vision, we created this site to learn programming</p>
  
  </div>
 
   <InfoImage />
    
    
    <ThreeCard/>
    
    </> );
}

export default Home;