import TemperatureCard from '../TemperatureCard';
import TemperatureInHoursCard from '../TemperatureInHoursCard';
import SearchInput from '../SearchInput';
import { Container, Content, Main, LocationIcon } from './styles';

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
            <TemperatureInHoursCard />
            <TemperatureInHoursCard />
            <TemperatureInHoursCard />
          </div>
          <TemperatureCard />
          <div className="temperatureCards">
            <TemperatureInHoursCard />
            <TemperatureInHoursCard />
            <TemperatureInHoursCard />
          </div>
        </Content>
      </Main>
    </Container>
  );
}

export default Dashboard;
