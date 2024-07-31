import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 0 60px;
  overflow: hidden;

  .slider {
    gap: 1rem !important;
  }

  @media (max-width: 991px) {
    padding: 0;
  }

  .spacer50 {
    width: 100%;
    height: 50px;
  }

  h2 {
    color: var(--dark-charcoal);
    font-size: 38px;
    font-weight: 600;
    line-height: 140%;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 30px;
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

  .first_child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 73px;

    position: relative;
    width: 100%;

    padding: 34px 0 0;

    @media (max-width: 560px) {
      gap: 73px;
      padding: 0;
    }
  }

  .first_child .typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 27px;
  }

  .first_child .typography p {
    color: var(--blue-gray);
    font-size: 20px;
    font-weight: 500;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      color: var(--slate-blue);
      font-size: 14px;
      font-weight: 400;
      max-width: 272px;
    }
  }

  .first_child .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 37px;
    width: 100%;
    max-width: 1160px;

    @media (max-width: 1101px) {
      justify-content: center;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  .first_child .actions .control {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 190px;
  }

  .first_child .actions .control button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 85px;
    height: 85px;
    border-radius: var(--radius-circle);
    background-color: var(--light-azure);
  }

  .first_child .actions .control button:hover {
    box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.13);
    transition: all var(--transition-1);
    background-color: var(--purple);

    svg path {
      fill: #fff;
      fill-opacity: 1;
    }
  }

  .last_child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1160px;

    @media (max-width: 1101px) {
      margin-left: 130px;
    }

    @media (max-width: 991px) {
      margin-left: 24px;
    }

    * {
      outline: none !important;
    }

    .selected {
      & > div {
        background-color: var(--purple);
        transition: background-color 500ms ease;
        h2,
        p {
          color: var(--white);
        }
      }
    }
  }

  .carousel .slider-wrapper.axis-horizontal .slider {
    display: flex;
  }

  .carousel .slider .animated {
  }

  .action_mobile {
    display: none;

    @media (max-width: 560px) {
    }
  }

  .animated {
    transform: none !important;
  }
`;

const introGradientLeft = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const introGradientDown = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`;

export const AnimatedH2 = styled.h2`
  color: var(--dark-sapphire);
  font-size: 38px;
  font-weight: 600;
  line-height: 140%;
  text-align: center;

  background: linear-gradient(266deg, #11181c 20%, rgba(17, 24, 28, 0) 45%),
    linear-gradient(94deg, var(--black) 12%, var(--purple) 11%, #9873ff 50%, var(--purple) 100%);

  background-size: 590% 100%;
  background-clip: text;
  background-repeat: no-repeat;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &.active {
    animation: ${introGradientLeft} 1.8s ease backwards;
  }

  @media (max-width: 560px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    max-width: 272px;

    background: linear-gradient(180deg, #11181c 20%, rgba(17, 24, 28, 0) 45%),
      linear-gradient(223deg, var(--black) 12%, var(--purple) 11%, #9873ff 50%, var(--purple) 100%);
    background-size: 620% 100%;
    background-clip: text;
    background-repeat: no-repeat;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &.active {
      animation: ${introGradientDown} 1.8s ease backwards;
    }
  }
`;
