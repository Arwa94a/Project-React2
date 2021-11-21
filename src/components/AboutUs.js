import aboutus from "../Images/aboutus.png"
function AboutUs() {
  return (
    <div class="card   aboutus" width="100px"style={{ border:"3px solid black"}}>
      <img src={aboutus} class="card-img" alt="..." class="rounded mx-auto d-block " />
      <div class="card-img-overlay ">
        <h5 class="card-title1">About Us</h5>
        <p class="card-text1">
          With progress and development and to achieve the vision, we created this site to learn programming
        </p>
      </div>
    </div>
  )
}

export default AboutUs
