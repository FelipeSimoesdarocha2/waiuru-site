import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;

  .hero {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    align-self: center;
    width: 100%;
    height: 100%;
    /* max-width: 1160px; */
    margin: 100px 0;

    @media (max-width: 1101px) {
      align-items: center;
      flex-direction: column-reverse;
      gap: 50px;
      padding: 0 10px 54px;
    }

    @media (max-width: 991px) {
      padding: 50px 24px;
      margin: 0;
    }

    @media (max-width: 560px) {
      flex-direction: column;
      padding: 60px 24px;
    }
  }

  .hero .link_url {
    display: none;

    @media (max-width: 560px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;

      width: 100%;
    }
  }

  .hero .link_url .title {
    color: var(--grayish-charcoal);
    font-size: 10px;
    font-weight: 400;
    line-height: 170%;
    letter-spacing: normal;
    text-align: start;
  }

  .hero .link_url .tab_link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    width: 100%;
  }

  .hero figure {
    position: relative;
  }

  .hero figure .decore {
    position: absolute;
    left: -39%;
    bottom: 23%;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .hero .screen .screenshot {
    position: relative;
    z-index: 1;
  }

  .hero .screen {
    width: 700px;
    @media (max-width: 560px) {
      display: none;
    }
  }

  .hero .screen_mobile {
    display: none;
    @media (max-width: 560px) {
      display: contents;
    }
  }

  .hero .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 43px;

    width: 100%;
    height: 100%;
    max-width: 586px;

    @media (max-width: 560px) {
      gap: 32px;
    }
  }

  .hero .inner .typography {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: 560px) {
      align-items: center;
      justify-content: center;
      gap: 28px;
      max-width: 272px;
    }
  }

  .hero .inner .typography strong {
    color: var(--purple);
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: normal;
    text-align: start;
    text-transform: uppercase;
    width: 100%;

    @media (max-width: 1101px) {
      text-align: center;
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  .hero .inner .typography h2 {
    color: var(--dark-sapphire);
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: normal;
    text-align: start;
    width: 100%;

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

  .hero .inner .typography p {
    color: var(--slate-blue);
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
    text-align: start;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 20px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  .hero .inner .link {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 17px;
    width: 100%;

    @media (max-width: 1101px) {
      gap: 22px;
    }

    @media (max-width: 560px) {
      align-items: center;
      justify-content: center;
      gap: 0;
    }
  }

  .hero .inner .actions {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 560px) {
      display: flex;
    }
  }

  .hero .inner .link button p {
    font-size: 14px;
  }

  .hero .inner .link .link_typography {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    width: 100%;

    @media (max-width: 1101px) {
      justify-content: center;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  .hero .inner .link .link_typography strong {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: normal;
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

  .hero .inner .link .link_typography p {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: normal;
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

  .hero .inner .link .link_typography a {
    color: var(--dark-sapphire);
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: normal;
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

  .hero .inner .link .download {
    display: flex;
    align-items: center;
    justify-content: flex-start;
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

  .hero .inner .link .download img {
    width: 82px;

    @media (max-width: 1101px) {
      width: 62px;
    }

    @media (max-width: 991px) {
      width: 42px;
    }
  }

  .content_screen {
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
  }

  .content_screen .decore {
    position: absolute;
    left: 0;
    top: 120px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .content_screen .inner {
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

  .content_screen .inner .decore_content {
    position: absolute;
    right: -100px;
    bottom: -30px;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .content_screen .inner .title {
    color: var(--dark-charcoal);
    font-size: 38px;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: normal;
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

  .content_screen .inner .set_screen {
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

  .content_screen .inner .set_screen .title_action {
    color: var(--slate-blue);
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
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

  .content_screen .inner .set_screen .tabs {
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

  .benefits {
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
      padding: 10px 24px 60px;
    }
  }

  .benefits h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: normal;
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
      max-width: 226px;
    }
  }

  .benefits .grid_list {
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

  .benefits .grid_list .itens {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .benefits .grid_list .itens img {
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

  .benefits .grid_list .itens p {
    color: var(--grayish-charcoal);
    font-size: 22px;
    font-weight: 600;
    line-height: 160%;
    letter-spacing: normal;
    text-align: start;
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

  .form_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    width: 100%;
    height: 100%;
    max-width: 1160px;
    padding: 60px 24px;

    @media (max-width: 1101px) {
      gap: 50px;
      padding: 30px 24px 60px 24px;
    }

    @media (max-width: 560px) {
      gap: 50px;
    }
  }

  .form_container .typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
  }

  .form_container .typography h2 {
    color: var(--dark-charcoal);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: normal;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 30px;
      max-width: 750px;
    }

    @media (max-width: 991px) {
      font-size: 22px;
      max-width: 70%;
    }

    @media (max-width: 560px) {
      color: var(--dark-sapphire);
      font-size: 18px;
      font-weight: 700;
      line-height: 130%;
    }
  }

  .form_container .typography p {
    color: var(--slate-blue);
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    max-width: 800px;

    @media (max-width: 1101px) {
      font-size: 20px;
      text-align: center;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }
`;
