import aboutus from "../Images/aboutus.png"
function AboutUs() {
  return (
    <div class="card bg-dark text-white  m-5" width="100px">
      <img src={aboutus} class="card-img" alt="..." class="rounded mx-auto d-block" style={{opacity:0.4}}  />
      <div class="card-img-overlay ">
        <h5 class="card-title">About Us</h5>
        <p class="card-text">
        With progress and development and to achieve the vision, we created this site to learn programming
        </p>
        
      </div>
    </div>
  )
}

export default AboutUs
