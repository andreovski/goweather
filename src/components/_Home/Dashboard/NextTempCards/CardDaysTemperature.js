import RainIcon from '../../../../assets/climateIcons/rain.svg';
import { Container } from './styles';

function TemperatureInDaysCard() {
  return (
    <>
      <Container>
        <span>21/11</span>
        <span>22º</span>
        <span>
          <img src={RainIcon} alt="#" />
        </span>
      </Container>
    </>
  );
}

export default TemperatureInDaysCard;
