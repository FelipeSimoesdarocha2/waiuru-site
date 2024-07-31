import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;

  .decore_left {
    position: absolute;
    left: 0;
    top: 17%;
  }

  @media (max-width: 560px) {
    & > :last-child {
      display: none;
    }
    padding-bottom: 60px;
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 100%;
  height: 100%;
  margin: 100px 0;

  @media (max-width: 1101px) {
    align-items: center;
    flex-direction: column-reverse;
    gap: 50px;
    margin: 0;
    padding: 50px 0;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    padding: 60px 24px;
    margin: 0;
  }

  figure {
    position: relative;
  }

  .decore_screenshot {
    position: absolute;
    left: -39%;
    bottom: 23%;
    outline: none !important;
    pointer-events: none;

    @media (max-width: 560px) {
      display: none;
    }
  }

  .screenshot {
    position: relative;
    z-index: 1;

    @media (max-width: 560px) {
      display: none;
    }
  }

  .screenshot_container_mobile {
    display: none;

    @media (max-width: 560px) {
      display: flex;
    }
  }

  .screen {
    width: 700px;
    @media (max-width: 1318px) {
      width: 500px;
    }
    @media (max-width: 560px) {
      display: none;
    }
  }
  .screen_mobile {
    width: 90%;
  }
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;

  p {
    color: var(--grayish-charcoal);
    font-size: 12px;
    font-weight: 400;
    line-height: 170%;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 43px;
  width: 100%;
  max-width: 537px;
  padding-top: 55px;
  padding-bottom: 155px;

  @media (max-width: 1101px) {
    padding: 0;
  }

  @media (max-width: 560px) {
    gap: 32px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1101px) {
    align-items: center;
    justify-content: center;
    gap: 28px;
  }

  strong {
    color: var(--purple);
    font-size: 20px;
    text-transform: uppercase;

    @media (max-width: 1101px) {
      font-size: 18px;
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
    line-height: 130%;

    @media (max-width: 1101px) {
      font-size: 40px;
    }

    @media (max-width: 991px) {
      font-size: 32px;
    }

    @media (max-width: 560px) {
      font-size: 24px;
    }
  }

  p {
    color: var(--slate-blue);
    font-size: 22px;

    @media (max-width: 1101px) {
      font-size: 20px;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
      text-align: center;
      max-width: 272px;
    }
  }
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media (max-width: 1101px) {
    gap: 22px;
  }

  @media (max-width: 560px) {
    align-items: center;
    justify-content: center;
    gap: 0;
  }

  .actions {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 560px) {
      display: flex;
    }
  }

  button p {
    font-size: 14px;
  }

  .link_typography {
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;

    @media (max-width: 1101px) {
      justify-content: center;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  .link_typography strong {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 14px;
    }

    @media (max-width: 991px) {
      line-height: normal;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .link_typography p {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 14px;
    }

    @media (max-width: 991px) {
      line-height: normal;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .link_typography a {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    text-align: center;
    text-decoration-line: underline;

    @media (max-width: 1101px) {
      font-size: 14px;
    }

    @media (max-width: 991px) {
      line-height: normal;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .platform {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100%;

    @media (max-width: 1101px) {
      justify-content: center;
      gap: 14px;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  .platform img {
    width: 82px;

    @media (max-width: 1101px) {
      width: 62px;
    }

    @media (max-width: 991px) {
      width: 42px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;

  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 1101px) {
    padding: 10px 24px;
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 560px) {
    gap: 43px;
  }

  .decore {
    position: absolute;
    left: 0;
    top: 120px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 104px;

    position: relative;

    @media (max-width: 1101px) {
      gap: 50px;
    }
  }

  .inner .decore_trail {
    position: absolute;
    right: -100px;
    bottom: -30px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .inner .title {
    color: var(--dark-charcoal);
    font-size: 38px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
    max-width: 795px;

    @media (max-width: 1101px) {
      font-size: 30px;
    }

    @media (max-width: 991px) {
      font-size: 22px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
      color: var(--dark-sapphire);
      max-width: 236px;
    }
  }

  .inner .set_screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    width: 100%;
    height: 100%;

    @media (max-width: 1101px) {
    }

    @media (max-width: 991px) {
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  .inner .set_screen .title_action {
    color: var(--slate-blue);
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 20px;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  .inner .set_screen .tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;

    border-radius: 62px;
    background: var(--soft-lilac);

    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  width: 100%;
  height: 100%;
  max-width: 1162px;
  padding: 60px 0;

  @media (max-width: 1101px) {
    gap: 70px;
    padding: 50px 24px 0;
  }

  @media (max-width: 991px) {
    gap: 60px;
    padding: 30px 24px 0;
  }

  @media (max-width: 560px) {
    gap: 50px;
    padding: 10px 24px 20px;
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
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
      max-width: 226px;
    }
  }

  .grid_list {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 28px 20px;

    width: 100%;
    height: 100%;
    padding: 0 24px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  .grid_list .itens {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .grid_list .itens img {
    width: 38px;

    @media (max-width: 1101px) {
      width: 32px;
    }

    @media (max-width: 991px) {
      width: 26px;
    }

    @media (max-width: 560px) {
      width: 20px;
    }
  }

  .grid_list .itens p {
    color: var(--grayish-charcoal);
    font-size: 22px;
    font-weight: 600;
    line-height: 160%;
    width: 100%;
    max-width: 511px;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
      font-weight: 500;
      max-width: 204px;
    }
  }
`;
