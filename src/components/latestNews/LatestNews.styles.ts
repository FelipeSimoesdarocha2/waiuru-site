import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1210px;

  @media (max-width: 560px) {
    margin-bottom: 60px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;

    @media (max-width: 1101px) {
      max-width: 800px;
    }

    @media (max-width: 991px) {
      flex-direction: column;
      gap: 50px;
    }
  }

  .title {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: start;

    @media (max-width: 1101px) {
      font-size: 30px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 22px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }

  .header > div {
    border-radius: 8px;
    max-width: 350px;
  }

  .header > div input {
    border-color: var(--light-ash);
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    row-gap: 30px;
    @media (max-width: 1101px) {
      grid-template-columns: repeat(2, 1fr);
      width: auto;
    }

    @media (max-width: 991px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
