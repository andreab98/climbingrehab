import { useNav } from "../hooks/useNav"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import styles from '../styles/Home.module.css';
import {homePromises} from '../constants/home';
const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection">
      <Container className={styles.containerhome}>
        <Col className={styles.colhome}>
          <Row className={styles.rowhomename}>
              Climbing.Rehab
          </Row>
          <Row className={styles.rowlist}>
            <Stack gap={2}>
              {homePromises.map(promise =>
                <li key={promise.title}><strong>{promise.title}</strong>{promise.text}</li>
              )}
            </Stack>
          </Row>
        </Col>
      </Container>
    </section>
  )
}

export default Home
