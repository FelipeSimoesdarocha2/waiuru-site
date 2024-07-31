import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding-top: 85px;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-top: 0;
  }

  @media (max-width: 560px) {
    gap: 0;
  }

  .bg_news {
    height: auto;
    width: 100%;
  }

  .first_child {
    z-index: 1;
  }

  .first_child .ilustra {
    @media (max-width: 560px) {
      display: none;
    }
  }

  .last_child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    margin-top: 40px;
    z-index: 1;
    max-width: 520px;

    @media (max-width: 1101px) {
      align-items: center;
      margin-top: 0;
    }

    @media (max-width: 560px) {
      gap: 32px;
    }
  }

  .last_child .typography {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .last_child .typography h2 {
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

  .last_child .typography p {
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

  .last_child .ilustra_mobile {
    display: none;

    @media (max-width: 560px) {
      display: flex;
    }
  }
`;
