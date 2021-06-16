import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
  width: 100%;

  display: flex;
  justify-content: center;

  input {
    height: 2.5rem;
    width: 25rem;

    padding: 1.5rem;
    font-size: 1.123rem;

    background: var(--white);
    border: 0.5px solid var(--gray-600);
    border-radius: 12px;

    outline-color: var(--gray-600);
  }
`;
