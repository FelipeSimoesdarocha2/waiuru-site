import bg_content from 'assets/images/home/bg@content.svg';

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 127px;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 500px;
  background-blend-mode: multiply;
  background-image: url(${bg_content.src});
  background-clip: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, transparent, #f9f9f9, #f9f9f9);
  }

  @media (max-width: 2500px) {
    background-size: contain;
  }

  @media (max-width: 1101px) {
    gap: 0;
    background-image: none;
    padding: 60px 0;
    margin-top: 0;

    &::before {
      display: none;
    }
  }

  @media (max-width: 900px) {
    padding: 60px 0 0;
  }

  @media (max-width: 560px) {
    gap: 74px;
    padding: 60px 0 100px;
  }

  @media (max-width: 450px) {
    padding: 60px 0 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 1101px) {
    gap: 80px;
  }

  @media (max-width: 991px) {
    gap: 70px;
  }

  @media (max-width: 560px) {
    gap: 50px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 560px) {
    gap: 28px;
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;
    max-width: 792px;

    @media (max-width: 1101px) {
      max-width: 714px;
    }

    @media (max-width: 560px) {
      font-size: 24px;
      font-weight: 700;
      line-height: 130%;
      max-width: 272px;
    }
  }

  p {
    color: var(--slate-blue);
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    text-align: center;
    max-width: 913px;

    @media (max-width: 1101px) {
      max-width: 714px;
    }

    @media (max-width: 560px) {
      line-height: normal;
      font-size: 14px;
      max-width: 272px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 43px;
  width: 100%;
  height: 100%;
  padding: 0 calc(5vw);

  @media (max-width: 1101px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const Problems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 454px;
  padding: 64px 44px;
  border-radius: 20px;
  background: var(--white);
  box-shadow: 0px 14px 44px 0px rgba(0, 0, 0, 0.13);
  z-index: 1;

  @media (max-width: 1101px) {
    max-width: none;
    padding: 50px 40px;
  }

  @media (max-width: 560px) {
    align-items: center;
    gap: 14px;
    padding: 44px 24px;
  }

  .typography {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 1101px) {
      gap: 10px;
    }

    @media (max-width: 560px) {
      gap: 14px;
    }
  }

  .typography h2 {
    color: var(--purple);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;

    @media (max-width: 560px) {
      font-size: 17px;
    }
  }

  .typography span {
    width: 100%;
    height: 5px;
    max-width: 278px;
    border-radius: 60px;
    background: #9974ff;

    @media (max-width: 1101px) {
      height: 4px;
    }

    @media (max-width: 991px) {
      height: 2px;
    }

    @media (max-width: 560px) {
      height: 2px;
      max-width: 162px;
    }
  }
`;

export const List_Problems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Item_Problems = styled.div`
  width: fit-content;
  &:nth-child(odd) {
    border-radius: 5px;
    background: var(--light-gray);

    @media (max-width: 560px) {
      background: none;
    }
  }

  span {
    padding: 2px 15px;
    max-width: 310px;

    @media (max-width: 1101px) {
      max-width: none;
      padding: 10px;
    }

    @media (max-width: 560px) {
      padding: 0;
    }
  }

  span p {
    color: var(--black);
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
    max-width: 300px;

    @media (max-width: 1101px) {
      color: var(--slate-blue);
      font-weight: 500;
      max-width: none;
    }

    @media (max-width: 560px) {
      font-size: 14px;
      max-width: 220px;
    }
  }
`;

export const Solutions = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 776px;
  padding: 64px 44px;
  border-radius: 20px;
  background: var(--deep-lavender-purple);
  box-shadow: 0px 14px 44px 0px rgba(0, 0, 0, 0.13);
  z-index: 1;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 28px;

    img {
      display: none;
    }
  }

  @media (max-width: 1101px) {
    max-width: none;
    padding: 54px 34px;
  }

  @media (max-width: 991px) {
    align-items: center;
    width: 100%;

    img {
      display: block;
    }
  }

  @media (max-width: 560px) {
    gap: 20px;
    padding: 44px 24px;
  }

  .last_child_content {
    display: flex;
    flex-direction: column;
    gap: 28px;
    z-index: 1;
    width: 100%;
  }

  .last_child_content .last_child_typography {
    display: flex;
    flex-direction: column;

    @media (max-width: 1101px) {
      gap: 10px;
    }

    @media (max-width: 560px) {
      gap: 14px;
    }
  }

  .last_child_content .last_child_typography h2 {
    color: var(--white);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;

    @media (max-width: 560px) {
      font-size: 17px;
    }
  }

  .last_child_content .last_child_typography span {
    width: 100%;
    height: 5px;
    max-width: 562px;
    border-radius: 60px;
    background: var(--intense-yellow);

    @media (max-width: 1101px) {
      height: 4px;
      max-width: 278px;
    }

    @media (max-width: 991px) {
      height: 2px;
    }

    @media (max-width: 560px) {
      height: 2px;
      max-width: 162px;
    }
  }

  .last_child_content .list_solutions {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  .last_child_content .list_solutions:nth-child(even) {
    border-radius: 5px;
    background: rgba(220, 220, 220, 0.1);
    backdrop-filter: blur(2px);

    @media (max-width: 560px) {
      background: none;
      backdrop-filter: none;
    }
  }

  .last_child_content .list_solutions .item_paragraf {
    padding: 2px 15px;

    @media (max-width: 1101px) {
      max-width: none;
      padding: 10px;
    }

    @media (max-width: 560px) {
      padding: 0;
    }
  }

  .last_child_content .list_solutions .item_paragraf p {
    color: var(--white);
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
    max-width: 376px;

    @media (max-width: 1101px) {
      font-weight: 500;
      max-width: 612px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  img {
    position: absolute;
    right: 0px;
    bottom: 35px;
    width: 394.035px;

    @media (max-width: 1400px) {
      position: static;
      width: 350px;
    }

    @media (max-width: 1101px) {
      width: 320px;
    }

    @media (max-width: 991px) {
      width: 270px;
    }

    @media (max-width: 560px) {
      width: 170px;
    }
  }
`;

export const Video_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 73px;
  height: 400px;
  position: relative;
  width: 100%;
  padding: 0 calc(5vw);
  background-color: var(--purple);
  margin-top: 300px;
  margin-bottom: 400px;

  @media (min-width: 2000px) {
    height: 600px;
  }

  @media (max-width: 1300px) {
    margin-bottom: 280px;
  }

  @media (max-width: 1101px) {
    flex-direction: column-reverse;
    gap: 60px;
    padding: 0;
  }

  @media (max-width: 560px) {
    margin-bottom: 400px;
  }

  .bg_wave {
    position: absolute;
    width: 100%;
    @media (min-width: 560px) {
      display: none;
    }
  }
  .wave_top {
    background: linear-gradient(to top, transparent, #f9f9f9);
    position: absolute;
    width: 110%;
    top: -276px;
    @media (min-width: 2620px) {
      top: -229px;
      display: none;
    }
    @media (max-width: 2220px) {
      top: -229px;
      display: block;
    }
    @media (max-width: 2000px) {
      top: -240px;
    }
    @media (max-width: 1430px) {
      top: -247px;
    }
    @media (max-width: 1299px) {
      top: -130px;
    }
    @media (max-width: 1230px) {
      top: -170px;
    }
    @media (max-width: 1101px) {
      background: none;
    }
    @media (max-width: 900px) {
      top: -90px;
    }
    @media (max-width: 560px) {
      display: none;
    }
  }
  .wave_bottom {
    width: 110%;
    position: absolute;
    background: linear-gradient(to bottom, var(--purple), var(--purple), #fff, #fff, #fff, #fff);

    @media (min-width: 2620px) {
      bottom: -581px;
      display: none;
    }
    @media (max-width: 2620px) {
      bottom: -581px;

      display: block;
    }
    @media (max-width: 2220px) {
      bottom: -581px;
    }
    @media (max-width: 2000px) {
      bottom: -400px;
    }
    /* @media (max-width: 1430px) {
        bottom: -400px;
      } */
    @media (max-width: 1299px) {
      bottom: -280px;
    }
    @media (max-width: 1230px) {
      bottom: -280px;
    }
    @media (max-width: 900px) {
      bottom: -193px;
    }
    @media (max-width: 640px) {
      bottom: -130px;
    }
    @media (max-width: 560px) {
      display: none;
    }
  }
`;

export const Video_Typography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 2;

  @media (max-width: 560px) {
    gap: 24px;
  }

  h2 {
    color: var(--white);
    font-size: 34px;
    font-weight: 600;
    line-height: 140%;
    width: 100%;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 20px;
      font-weight: 700;
      line-height: 130%;
    }
  }

  p {
    color: var(--white);
    font-size: 20px;
    line-height: 170%;
    max-width: 552px;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 14px;
      line-height: normal;
      max-width: 272px;
    }
  }
`;
