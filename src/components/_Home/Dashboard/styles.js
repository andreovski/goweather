import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Main = styled.div`
  .currentLocation {
    padding: 2.5rem 0;
    display: flex;
    flex-direction: column;

    align-items: center;
    grid-gap: 0.7rem;

    span {
      text-align: center;
    }

    p {
      font-size: 1.123rem;
      line-height: 1.5rem;
    }
  }

  .temperatureCards {
    display: flex;

    :first-child {
      @media (max-width: 920px) {
        order: 1;
      }
    }
    :last-child {
      @media (max-width: 920px) {
        order: 3;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    grid-gap: 1rem;
  }
`;

export const LocationIcon = styled(MdLocationOn)`
  font-size: 2rem;
  color: var(--main);
`;
