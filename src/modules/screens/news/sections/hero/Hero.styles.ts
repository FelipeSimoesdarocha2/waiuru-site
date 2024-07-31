import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding: 80px 0;

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
    padding: 60px 0;
  }

  .ilustra {
    z-index: 1;
    @media (max-width: 560px) {
      max-width: 220px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 40px;
  max-width: 520px;
  z-index: 1;

  @media (max-width: 1101px) {
    align-items: center;
    margin-top: 0;
  }

  @media (max-width: 560px) {
    gap: 32px;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 270px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 560px) {
    max-width: 272px;
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

  p {
    color: var(--blue-gray);
    font-size: 20px;
    font-weight: 400;

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
