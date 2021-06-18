import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  padding: 0.875rem 0.5rem;

  width: 4.5rem;
  height: 8.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: var(--white);
  border-radius: 12px;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);

  span:nth-child(1) {
    line-height: 1.25rem;
  }

  span:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span:nth-child(3) {
    white-space: nowrap;
    line-height: 1.25rem;

    img {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
