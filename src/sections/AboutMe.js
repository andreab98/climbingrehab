import { useNav } from "../hooks/useNav";
import Image from 'react-bootstrap/Image';
import {
  professionalLifeText,
  whyClimbingRehabText,
  climbingLifeText
} from '../constants/aboutMe';
const AboutMe = () => {
  const aboutMeRef = useNav("About Me")

  return (
    <section ref={aboutMeRef} id="aboutmeSection">
      <div className="container mt-5">
        <div className="row g-4">
          <h1>About Me</h1>
          <div className="col-md-5 align-items-center">
            <h5>Profeessional Life:</h5>
            <p>{professionalLifeText}</p>
            <h5>Climbing Life:</h5>
            <p>{climbingLifeText}</p>
          </div>
          <div className="col-md-3 d-flex align-items-center">
            <div className="mx-auto">
              <Image
                src={require("../images/aboutme.png")}
                rounded
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-3 align-items-center">
            <h5>Why Climbing Rehab?</h5>
            <p>{whyClimbingRehabText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
