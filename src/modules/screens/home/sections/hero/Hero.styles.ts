import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  padding: 60px 0 40px;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 0;
    padding: 60px 24px;
  }

  img {
    z-index: 1;
  }

  @media (max-width: 560px) {
    img {
      max-width: 228px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  max-width: 520px;
  margin-top: 40px;
  z-index: 1;

  @media (max-width: 1101px) {
    align-items: center;
    margin-top: 0;
  }

  @media (max-width: 560px) {
    gap: 32px;
    max-width: 272px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  strong {
    color: var(--purple);
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;

    @media (max-width: 1101px) {
      text-align: center;
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

    @media (max-width: 1101px) {
      text-align: center;
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
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;
