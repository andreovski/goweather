import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
  padding: 0.8rem 0;
  width: 10rem;
  height: 12rem;

  background: var(--white);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span,
  footer {
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  header {
    span {
      p:first-child {
        font-size: 1.5rem;
      }

      p:last-child {
        font-size: 0.875rem;
        line-height: 1.8rem;
      }
    }
  }

  main {
    span {
      font-size: 2.25rem;
      font-weight: 600;
    }
  }

  footer {
    img {
      width: auto;
      height: 3.5rem;
    }
  }
`;
