import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content text-container">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description text-container">
                  We prioritize the provision of secure transportation solutions
                  for our customers. Our goal is to ensure that every ride is
                  not only convenient but also safe and reliable. With a strong
                  commitment to passenger safety, we continually strive to
                  implement the latest technologies and best practices in the
                  transportation industry. Our dedicated team works tirelessly
                  to guarantee that each journey is a seamless and secure
                  experience for all our clients, maintaining our reputation as
                  a trusted and dependable service provider.
                </p>

                <p className="section__description text-container">
                  Our dedication to safety extends beyond mere transportation;
                  it's a cornerstone of our service philosophy. We rigorously
                  maintain our fleet of vehicles, ensuring they adhere to the
                  highest safety standards. From regular maintenance checks to
                  employing experienced and responsible drivers, we leave no
                  stone unturned in our efforts to provide a secure and
                  comfortable travel experience. With a focus on proactive
                  safety measures and customer well-being, we aim to instill
                  confidence and peace of mind in every journey our customers
                  undertake with us..
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
