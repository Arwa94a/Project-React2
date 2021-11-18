import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import youtube1 from "../Images/youtube1.png"
function Footer() {
    return ( <>
    
    <Footer>
    <section >
        <p>Follow us<i class="fas fa-chevron-right"></i></p>
        <a href="https://www.instagram.com/Tuwaiq_2030/"><img src={instagram} alt=""/></a>
        <a href="https://twitter.com/Tuwaiq_2030"><img src={twitter} alt=""/></a>
        <a href="https://www.youtube.com/channel/UCR0MZV9O8WHAwyMPv0M8m-A" ><img src={youtube1} alt=""/></a>
    </section>

    </Footer>
    
    </> );
}

export default Footer;