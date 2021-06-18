import styled from 'styled-components';
import FooterBackgroundImage from '../../../assets/img/footer_image.jpg';

export const Content = styled.div`
  position: relative;
  padding: 4rem 0 0;

  div:last-child {
    position: relative;
  }

  .footerTempCards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .imageFooterBackground {
    span {
      object-fit: cover;
      width: 100%;
      height: 326px;

      @media (min-height: 960px) {
        height: 486px;
      }

      position: fixed;

      background: linear-gradient(
          180deg,
          #f2f2f2 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        url(${FooterBackgroundImage});

      filter: contrast(1.75);
      filter: saturate(0);
    }
  }
`;
