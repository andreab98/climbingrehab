import { useNav } from "../hooks/useNav"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

const ContactUs = () => {
  const contactUsRef = useNav("Contact Us");
  const mapTitle = "Real Health Rehab Map";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.9734311334228!2d-74.57628450215299!3d40.65251606670124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bdeed97b0a6b%3A0x62de41a39233b16a!2sReal%20Health%20Rehab!5e0!3m2!1sen!2sus!4v1675061200066!5m2!1sen!2sus";

  return (
    <section ref={contactUsRef} id="contactusSection">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Stack gap={2}>
              <div><h1>CONTACT</h1></div>
              <div>24/7 customer service</div>
              <div>Instagram: @climbing.rehab</div>
              <div>Email: climbing.rehab@gmail.com</div>
              <div>Office: 665 Martinsville Rd Suite 219, Basking Ridge, NJ 07920</div>
              <div>Office phone number: (908) 484-7600</div>
            </Stack>
          </Col>
          <Col md="auto">
            <iframe
              title={mapTitle}
              src={mapUrl}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs
