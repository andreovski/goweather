import TemperatureCard from './MainTemperatureCard';
import TemperatureInHoursCard from './NextTempCards/CardHoursTemperature';
import TemperatureInDaysCard from './NextTempCards/CardDaysTemperature';
import SearchInput from '../SearchInput';

import { Container } from '../../../styles/global';
import { Content, Main, LocationIcon } from './styles';

function Dashboard() {
  return (
    <Container>
      <SearchInput />

      <Main>
        <div className="currentLocation">
          <LocationIcon fontSize="32px" />
          <span>
            <h2>Curitiba</h2>
            <p>Brazil</p>
          </span>
        </div>
        <Content>
          <div className="temperatureCards">
            <span>
              <p>Next hours</p>
            </span>
            <div>
              <TemperatureInHoursCard />
              <TemperatureInHoursCard />
              <TemperatureInHoursCard />
            </div>
          </div>
          <TemperatureCard />
          <div className="temperatureCards">
            <span>
              <p>Next days</p>
            </span>
            <div>
              <TemperatureInDaysCard />
              <TemperatureInDaysCard />
              <TemperatureInDaysCard />
            </div>
          </div>
        </Content>
      </Main>
    </Container>
  );
}

export default Dashboard;
