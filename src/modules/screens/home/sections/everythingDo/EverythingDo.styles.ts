import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 69px;
  padding: 60px 24px;

  @media (max-width: 1101px) {
    gap: 30px;
    padding: 40px 24px;
  }

  .title {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;

    @media (max-width: 560px) {
      font-size: 20px;
      font-weight: 700;
      line-height: 130%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 65px;

  @media (max-width: 1101px) {
    align-items: center;
    flex-direction: column-reverse;
  }

  @media (max-width: 560px) {
    img {
      max-width: 280px;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  max-width: 655px;

  @media (max-width: 1101px) {
    align-items: center;
  }

  @media (max-width: 560px) {
    gap: 28px;
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 34px;
    font-weight: 600;
    line-height: 140%;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .description {
    color: var(--black);
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      color: var(--slate-blue);
      font-size: 14px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1101px) {
    justify-content: center;
  }

  @media (max-width: 560px) {
    padding: 0;
    gap: 7px;
    max-width: 320px;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: var(--radius-midle);
    border: 1px solid var(--pink);

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .item p {
    color: var(--pink);
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 560px) {
      font-size: 12px;
      padding: 3px 6px;
    }
  }
`;
