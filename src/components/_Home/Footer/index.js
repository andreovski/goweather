import React from 'react';
import ExtraTempCards from './FooterTempCards';

import { Container } from '../../../styles/global';
import { Content } from './styles';

function Footer() {
  return (
    <Content>
      <div className="imageFooterBackground">
        <span />
      </div>
      <Container>
        <h2>🌤 Others Location</h2>
        <div className="footerTempCards">
          <ExtraTempCards />
          <ExtraTempCards />
          <ExtraTempCards />
          <ExtraTempCards />
          <ExtraTempCards />
          <ExtraTempCards />
        </div>
      </Container>
    </Content>
  );
}

export default Footer;
