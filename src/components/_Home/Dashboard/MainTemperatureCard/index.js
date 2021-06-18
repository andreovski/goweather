import mostlyCloudIcon from '../../../../assets/climateIcons/mostlycloudy.svg';

import {
  Container,
  WeatherMainInformations,
  WeatherExtraInformations,
  MaximumDegreeIcon,
  MinimumDegreeIcon,
  HumidityIcon,
  WindIcon,
} from './styles';

function TemperatureCard() {
  return (
    <Container>
      <span>Refreshed Now</span>
      <WeatherMainInformations>
        <span>19º</span>
        <img src={mostlyCloudIcon} alt="Mostly Cloud" />
      </WeatherMainInformations>
      <WeatherExtraInformations>
        <div className="maxMinDegree">
          <span>
            <MaximumDegreeIcon />
            <p>21º</p>
          </span>
          <span>
            <MinimumDegreeIcon />
            <p>21º</p>
          </span>
        </div>
        <div className="humidyAndWind">
          <span>
            <HumidityIcon />
            <p>19%</p>
          </span>
          <span>
            <WindIcon />
            <p>13 km/h</p>
          </span>
        </div>
      </WeatherExtraInformations>
    </Container>
  );
}

export default TemperatureCard;
