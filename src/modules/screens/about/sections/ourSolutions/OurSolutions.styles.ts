import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 68px;

  position: relative;
  width: 100%;
  margin-top: 164px;
  max-width: 1400px;
  overflow: hidden;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;

    margin-top: 0;
  }

  .first_child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 51px;
    padding-left: calc(5vw);

    @media (max-width: 1101px) {
      align-items: center;
      padding: 10px 24px;
    }
  }

  .first_child h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 400;
    line-height: 140%;
    max-width: 640px;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 991px) {
      max-width: 664px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
      max-width: 236px;
    }
  }

  .first_child h2 span {
    font-weight: 700;
  }

  .first_child .typography {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 35px;
    max-width: 660px;

    @media (max-width: 560px) {
      align-items: center;
    }
  }

  .first_child .typography .list {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    @media (max-width: 1101px) {
      padding: 0px 8px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .first_child .typography .list .item {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 4px 15px;
    border-radius: 100px;
    border: 1px solid var(--pink);

    @media (max-width: 560px) {
      border: 1px solid var(--purple);
    }
  }

  .first_child .typography .list .item p {
    color: var(--pink);
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    white-space: nowrap;

    @media (max-width: 560px) {
      color: var(--purple);
      font-size: 10px;
      font-weight: 600;
    }
  }

  .first_child .typography .paragraph {
    color: var(--black);
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;

    @media (max-width: 1101px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
      letter-spacing: normal;
      max-width: 272px;
    }
  }

  .last_child {
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: 560px) {
      width: 100%;
    }
  }

  .big_cloud {
    position: absolute;
    top: -150px;

    @media (max-width: 1101px) {
      transform: none;
      position: relative;
      top: auto;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  .big_cloud_mobile {
    display: none;
    position: relative;
    left: 1000;

    @media (max-width: 560px) {
      display: block;
    }
  }
`;
