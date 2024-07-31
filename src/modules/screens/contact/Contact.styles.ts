import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
opacity: 0;
transform: translateX(50px);
}

100% {
opacity: auto;
transform: translateX(0px);
}
`;

const fadeInMobile = keyframes`
0% {
opacity: 0;
transform: translateY(-50px);
}

100% {
opacity: 1;
transform: translateY(0);
}
`;

const introGradient = keyframes`
0% {
background-position: 100% 0%;
}
100% {
background-position: 0% 0%;
}
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 80px;

  @media (max-width: 560px) {
    padding-top: 60px;
    gap: 0;
  }

  .bg_hero {
    outline: none !important;
    position: absolute;
    top: -60px;
    left: 0;

    @media (max-width: 1101px) {
      display: none;
    }
  }

  .decore_to_right {
    outline: none !important;
    position: absolute;
    top: 30px;
    right: 0;

    @media (max-width: 1101px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  max-width: 1160px;
  margin-top: 60px;
  z-index: 1;

  @media (max-width: 1101px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  @media (max-width: 560px) {
    margin-top: 60px;
    gap: 0;
  }

  .ilustra_mobile_container {
    display: flex;
    justify-content: center;
  }

  .ilustra_mobile {
    max-width: 300px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media (max-width: 560px) {
    align-items: center;
    gap: 50px;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 100%;
  height: 553px;
  max-width: 440px;
  padding: 10px 50px;
  border-radius: 20px;
  background: var(--gray-lilac);

  @media (max-width: 1101px) {
    height: auto;
  }

  @media (max-width: 560px) {
    width: auto;
    padding: 40px 0;
    margin: 0 24px;
    border-radius: 10px;
  }

  .form_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
    height: 100%;
    padding: 32px 0;

    @media (max-width: 560px) {
      gap: 24px;
      padding: 0 24px;
    }
  }

  .values {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 100%;

    @media (max-width: 560px) {
      gap: 28px;
    }
  }

  .inner {
    width: 100%;
    height: 100%;
  }

  .actions {
    width: 100%;
  }

  .actions button {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 100%;
    max-height: 141px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid var(--soft-lavender);
    background: var(--white);

    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    text-align: start;
    resize: none;

    &:focus {
      outline: none;
      border-color: var(--purple);
      caret-color: var(--purple);
      box-shadow: 0px 0px 3px var(--purple);
      transition: all 200ms;
    }

    @media (max-width: 560px) {
      max-height: 111px;
    }
  }
`;

export const Submit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 100%;
  height: 100%;
  padding: 32px 0;

  @media (max-width: 560px) {
    gap: 24px;
    padding: 0 24px;
  }

  .submit_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 59px;
    height: 100%;

    @media (max-width: 560px) {
      gap: 24px;
    }
  }

  .submit_typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    height: 100%;

    @media (max-width: 560px) {
      gap: 14px;
    }
  }

  .submit_typography h2 {
    color: var(--black-primary);
    font-size: 26px;
    font-weight: 600;
    line-height: 30px;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 22px;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
      letter-spacing: normal;
    }
  }

  .submit_typography p {
    color: var(--black-primary);
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
      line-height: 140%;
    }

    @media (max-width: 560px) {
      font-size: 12px;
      letter-spacing: normal;
    }
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  animation: ${fadeIn} 0.4s ease backwards;
  -webkit-animation: ${fadeIn} 0.4s ease backwards;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;

  @media (max-width: 1101px) {
    align-items: center;
    animation: ${fadeInMobile} 0.4s ease backwards;
    -webkit-animation: ${fadeInMobile} 0.4s ease backwards;
  }

  h2 {
    color: var(--dark-sapphire);
    font-size: 48px;
    font-weight: 700;
    line-height: 130%;
    text-align: start;
    width: 100%;

    background: linear-gradient(269deg, #11181c 20%, rgba(17, 24, 28, 0) 45%),
      linear-gradient(90deg, var(--black) 0%, var(--purple) 11%, #9873ff 50%, var(--purple) 100%);
    animation-delay: 0.5s;
    animation: ${introGradient} 1.8s ease backwards;
    background-size: 300% 100%;
    background-clip: text;
    background-repeat: no-repeat;
    -moz-background-clip: text;
    -webkit-animation-delay: 0.5s;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${introGradient} 1.8s ease backwards;

    @media (max-width: 1101px) {
      text-align: center;
      background-size: 450% 100%;
    }

    @media (max-width: 991px) {
      background-size: 550% 100%;
    }

    @media (max-width: 560px) {
      font-size: 24px;
      background-size: 500% 100%;
    }
  }

  p {
    color: var(--slate-blue);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.16px;
    text-align: start;
    width: 100%;
    max-width: 272px;

    @media (max-width: 1101px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      letter-spacing: normal;
    }
  }
`;
