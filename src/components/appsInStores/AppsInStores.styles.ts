import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 65px;
  width: 100%;
  padding: 60px 24px;

  @media (max-width: 560px) {
    gap: 50px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media (max-width: 560px) {
    gap: 28px;
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;

    @media (max-width: 1101px) {
      font-size: 30px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 22px;
    }

    @media (max-width: 560px) {
      font-size: 24px;
      font-weight: 700;
      line-height: 130%;
      max-width: 272px;
    }
  }
`;

export const Header_Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

export const Header_Content = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  p {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  img {
    width: 48px;

    @media (max-width: 560px) {
      width: 38px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media (max-width: 1101px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 592px;
  padding: 18px 22px 18px 18px;
  border-radius: 8px;
  background: var(--light-gray);

  @media (max-width: 560px) {
    flex-direction: column;
    width: auto;
  }

  .qrCode {
    max-width: 154px;
    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const Card_Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 0px;
  align-self: stretch;

  @media (max-width: 560px) {
    align-items: center;
    gap: 20px;
  }

  h2 {
    color: var(--purple);
    font-size: 22px;
    font-weight: 700;
    line-height: 140%;

    @media (max-width: 560px) {
      max-width: 165px;
      text-align: center;

      color: var(--dark-sapphire);
      font-size: 18px;
    }
  }

  .arrow_down {
    width: 22px;
    display: none;
    transform: rotate(270deg);

    @media (max-width: 560px) {
      display: flex;
    }
  }
`;

export const Action = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: var(--purple);
  border-radius: 60px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 560px) {
    display: none;
  }

  p {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
  }
`;
