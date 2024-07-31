import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  width: 100%;
  height: 100%;
  padding: 60px 24px;

  @media (max-width: 991px) {
    gap: 40px;
  }

  @media (max-width: 560px) {
    gap: 28px;
    padding: 60px 0px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;

  @media (max-width: 991px) {
    max-width: 691px;
  }

  @media (max-width: 560px) {
    gap: 28px;
    max-width: 236px;
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
    }
  }

  p {
    color: var(--blue-gray);
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 70px;
  z-index: 1;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 560px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export const Lottie = styled.div`
  width: 100%;
  max-width: 500px;

  @media (max-width: 560px) {
    max-width: 400px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding-top: 41px;

  @media (max-width: 1101px) {
    align-items: center;
    gap: 50px;
    padding-top: 0;
  }

  @media (max-width: 560px) {
    flex-direction: column-reverse;
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (max-width: 1101px) {
    gap: 14px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  p {
    color: var(--slate-blue);
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
    text-align: start;

    @media (max-width: 560px) {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .item img {
    @media (max-width: 560px) {
      width: 20px;
    }
  }
`;
