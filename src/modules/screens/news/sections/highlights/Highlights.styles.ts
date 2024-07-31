import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding-top: 90px;
  padding-bottom: 190px;
  max-width: 100vw;
  overflow: hidden;

  @media (max-width: 560px) {
    padding-top: 0;
    padding-bottom: 60px;
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
      font-weight: 700;
      line-height: 130%;
      max-width: 236px;
    }
  }
  .title strong {
    color: var(--purple);
  }

  .carrousel_inner {
    display: flex;
    width: auto;
    max-width: 99.5vw;
  }
`;
