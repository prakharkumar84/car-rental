import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Car Rental Hub</h2>
              <p className="section__description">
                At Car Rental Hub, we aim to provide a seamless and convenient
                car booking experience for all your travel needs. With a wide
                range of vehicles from top manufacturers, we ensure that your
                journey is comfortable, safe, and memorable. Our user-friendly
                platform and dedicated customer service team make renting a car
                a hassle-free process.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2 width">
                  <i className="ri-checkbox-circle-line"></i> Wide selection
                  range.
                </p>

                <p className="section__description d-flex align-items-center gap-2 width">
                  <i className="ri-checkbox-circle-line"></i> Easy online
                  booking.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2 width">
                  <i className="ri-checkbox-circle-line"></i> Dedicated customer
                  support.
                </p>

                <p className="section__description d-flex align-items-center gap-2 width">
                  <i className="ri-checkbox-circle-line"></i> Affordable pricing
                  plans.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="About Us" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
