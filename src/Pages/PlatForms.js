import App from "../App.css";
import tuwiaq1000 from "../Images/tuwiaq1000.jpg"
import academy from "../Images/academy.png"
import sater from "../Images/sater.jpg"
import microsoft from "../Images/microsoft.jpg"
import drones from "../Images/drones.png"
import coderhub from "../Images/coderhub.png"
import { Col, Row } from "react-bootstrap";
function PlatForm() {
    return ( <>
    <Row>
        <Col>
        <div className="card1">
        <div className="front">
            <header>
                <img src={tuwiaq1000}/>
            </header>
            <h3>Tuwaiq 1000</h3>
           
            <span>Hover to see Details</span>
        </div>
        <div className="back">
            <p>The largest training camp of its kind in the world ending in employment, to simultaneously train 1,000 young men and women across 13 regions in the Kingdom, in partnership with the Ministry of Communications and Information Technology.</p>
        </div>
    </div>
        </Col>
        <Col>
        <div className="card1">
        <div className="front">
            <header>
                <img src={academy}/>
            </header>
            <h3>Apple Academy</h3>
           
            <span>Hover to see Details</span>
        </div>
        <div className="back">
            <p>A partnership between Apple and Tuwaiq Academy to provide aspiring entrepreneurs, developers and designers with the tools and training to help them launch startups and find and create jobs in the iOS app economy, regardless of their scientific or technical background.</p>
        </div>
    </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <div className="card1">
        <div className="front">
            <header>
                <img src={sater}/>
            </header>
            <h3>SATR</h3>
           
            <span>Hover to see Details</span>
        </div>
        <div className="back">
            <p>The largest Arabic platform for teaching programming and modern technologies. Includes several courses, pathways and applied projects, with 50,000 Saudis participating in the pilot phase.</p>
        </div>
    </div>
        </Col>
        <Col>
        <div className="card1">
        <div className="front">
            <header>
                <img src={microsoft}/>
            </header>
            <h3>Microsoft</h3>
           
            <span>Hover to see Details</span>
        </div>
        <div className="back">
            <p>Microsoft’s academy and innovation center in Riyadh will support Saudi Arabia's digital transformation journey</p>
        </div>
    </div>
        </Col>
    </Row>
    <Row>
        <Col>
        
    <div className="card1">
        <div className="front">
            <header>
                <img src={coderhub}/>
            </header>
            <h3>CoderHub</h3>
           
            <span>Hover to see Details</span>
        </div>
        <div className="back">
            <p>The first Arab platform specialized in programming challenges to encourage programmers develop their skills, together with rankings and honors to recognize top coders in various programming languages.</p>
        </div>
    </div>
        </Col>
        <Col>
        <div className="card1">
        <div className="front">
            <header>
                <img src={drones}/>
            </header>
            <h3>Drones Platform</h3>
           
            <span>Hover to see Details</span>
        </div>
        <div className="back">
            <p>A digital platform to provide training and authorized flight locations to drone enthusiasts.</p>
        </div>
    </div>
        </Col>
    </Row>
    


    

    

    


    
    </> );
}

export default PlatForm;