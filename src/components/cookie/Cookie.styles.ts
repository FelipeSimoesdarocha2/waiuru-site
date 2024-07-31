import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;

  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
  padding: 10px 32px;
  background: var(--intense-yellow);

  @media (max-width: 1101px) {
    gap: 26px;

    .cookie {
      width: 32px;
    }
  }

  @media (max-width: 991px) {
    gap: 20px;
  }

  @media (max-width: 560px) {
    gap: 10px;
    .cookie {
      width: 18px;
    }
  }

  button {
    padding: 10px 24px;
    background: var(--midnight-purple);
    border-radius: 30px;

    @media (max-width: 560px) {
      padding: 8px 10px;
    }
  }

  button p {
    color: var(--white);
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;

export const Typography = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    @media (max-width: 560px) {
      width: 250px;
      height: 60px;
    }

   img {
    position: absolute;
    left: 63px;
    top: -16px;
    bottom: 0;

    @media (max-width: 1101px) {
      display: none;
    }
  }

   a {
    color: var(--midnight-purple);
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    text-decoration-line: underline;
    white-space: nowrap;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
      white-space: normal;
    }
  }
`;
