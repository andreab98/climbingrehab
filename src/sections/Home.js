import { useNav } from "../hooks/useNav"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import styles from '../styles/Home.module.css';

const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection">
      <Container className={styles.containerhome}>
        <Col className={styles.colhome}>
          <Row className={styles.rowhomename}>
              Dr. Miguel Zevallos
          </Row>
          <Row className={styles.rowspace}></Row>
          <Row>
            <Stack gap={2}>
              <li><strong>MAKE</strong> your goals my priority</li>
              <li><strong>EDUCATE</strong> you on your injury and how to prevent it from happening again.</li>
              <li><strong>OFFER</strong> a 100% personalized and flexible treatment program for your specific needs.</li>
              <li><strong>REDUCE</strong> the medical f luff: if one session is all you need then that is a compliment to my work</li>
            </Stack>
          </Row>
        </Col>
      </Container>
    </section>
  )
}

export default Home
