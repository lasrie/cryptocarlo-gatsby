import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { InlineWidget } from "react-calendly";

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
          <InlineWidget url="https://calendly.com/lasse-riess/kostenloses-erstgespraech" />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
