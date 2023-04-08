import { useNav } from "../hooks/useNav";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  const aboutMeRef = useNav("About Me")

  return (
    <section ref={aboutMeRef} id="aboutmeSection">
      <Container className={styles.containeraboutme}>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Image
              src={require("../images/aboutme.png")}
              rounded
            />
          </Col>
          <Col xs={6}>
            <Stack gap={2}>
              <div><h1>About Me</h1></div>

              <div><h4>PROFESSIONAL LIFE:</h4></div>
              <div><p>I graduated from Seton Hall University with a Doctorate in Physical Therapy after completing a Bachelor’s degree in Biology. I have worked in the following settings: sub-acute care and outpatient/sports orthopedics, where I have encountered patients encompassing a multitude of physical and neurological presentations and limitations. Most of my mentorship is based on combining manual therapy with an individual exercise program to tailor to the patient’s specific goals.</p></div>

              <div><h4>CLIMBING LIFE:</h4></div>
              <div><p>I am an avid rock climber based in the NJ/NY/PA area. I first got into climbing in 2019 and quickly became obsessed with the sport. My favorite part of climbing is definitely the problem solving aspect of things, and the fact that people can have such wildly different beta work for them, thus making climbing such an inclusive sport that tailors to all types of body shapes and differing strengths.</p></div>

              <div><h4>WHY CLIMBING REHAB?</h4></div>
              <div><p>I have seen how the medical system bounces climbers from one “specialist” to another without understanding our sport. I know firsthand how important climbing can be and will apply the latest climbing-based research into my treatment to get you back on the wall as soon as possible. This is my passion project that started out as a humble Instagram page looking to provide pro-bono information to the climbing community (and still do!). A sincere thank you to everyone who takes the time to reach out and allows me to make healthcare more accessible to the climbing community.</p></div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe
