import styled from 'styled-components';

import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';
import { FiWind, FiDroplet } from 'react-icons/fi';

export const Container = styled.div`
  width: 26rem;
  height: 11rem;
  max-width: 26rem;
  max-height: 11rem;
  padding: 0.75rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--white);
  border-radius: 12px;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

  > span {
    color: var(--gray-600);
  }

  @media (max-width: 920px) {
    order: 2;
  }
`;

export const WeatherMainInformations = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  span {
    font-size: 4rem;
    font-weight: 600;
  }

  img {
    width: 79px;
    height: 64px;
  }
`;

export const WeatherExtraInformations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;

    grid-gap: 0.3rem;
  }

  .maxMinDegree,
  .humidyAndWind {
    display: flex;
    grid-gap: 0.6rem;

    svg {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.123rem;
    }
  }
`;

export const MaximumDegreeIcon = styled(MdArrowUpward)``;

export const MinimumDegreeIcon = styled(MdArrowDownward)``;

export const HumidityIcon = styled(FiWind)``;

export const WindIcon = styled(FiDroplet)``;
