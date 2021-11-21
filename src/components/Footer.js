import { Container } from "react-bootstrap";

function Footer() {
    return ( <>
    <Container class="footer">
      <div class="wrapper">
         
         <div class="icon twitter">
            <div class="tooltip">
               Twitter
            </div>
            <span><i class="fab fa-twitter "> </i></span>
         </div>
         <div class="icon instagram">
            <div class="tooltip">
               Instagram
            </div>
            <span><i class="fab fa-instagram"></i></span>
         </div>
        
         <div class="icon youtube">
            <div class="tooltip">
               YouTube
            </div>
            <span><i class="fab fa-youtube"> </i></span>
         </div>
      </div>
      </Container>
   
    
    </> );
}

export default Footer;