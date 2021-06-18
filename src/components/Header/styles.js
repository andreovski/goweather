import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  header {
    padding: 1.25rem;

    max-width: 1120px;
    max-height: 80px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      cursor: pointer;
    }
  }

  &:after {
    content: '';
    width: 100%;
    border-bottom: solid 0.5px var(--gray-400);
    position: absolute;
  }
`;
