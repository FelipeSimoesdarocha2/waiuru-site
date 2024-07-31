import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1180px;
  padding: 65px 24px 0;
  gap: 40px;

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
    margin-top: 0;

    img {
      display: none;
    }
  }

  @media (max-width: 560px) {
    img {
      display: flex;
      max-width: 286px;
    }
  }

  img {
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 23px;
  margin-top: 40px;
  z-index: 1;
  max-width: 520px;

  @media (max-width: 1101px) {
    align-items: center;
    align-self: center;
    margin-top: 0;
  }

  @media (max-width: 560px) {
    gap: 32px;
    max-width: 272px;
  }

  p {
    color: var(--blue-gray);
    font-size: 22px;
    font-weight: 400;
    max-width: 453px;

    @media (max-width: 1101px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Typography = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1101px) {
    align-items: center;
  }

  strong {
    color: var(--purple);
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    text-align: start;
    text-transform: uppercase;

    @media (max-width: 1101px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
    text-align: start;

    @media (max-width: 1101px) {
      font-size: 40px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 32px;
    }

    @media (max-width: 560px) {
      font-size: 24px;
    }
  }
`;
