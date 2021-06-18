import mostlyCloudIcon from '../../../../assets/climateIcons/mostlycloudy.svg';

import { Container } from './styles';

function ExtraTempCards() {
  return (
    <Container>
      <header>
        <span>
          <p>São Paulo</p>
          <p>Brazil</p>
        </span>
      </header>
      <main>
        <span>22º</span>
      </main>
      <footer>
        <img src={mostlyCloudIcon} alt="#" />
      </footer>
    </Container>
  );
}

export default ExtraTempCards;
