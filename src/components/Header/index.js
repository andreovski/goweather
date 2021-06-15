import { Container } from './styles';
import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Go Weather" />
      </header>
    </Container>
  );
}

export default Header;
