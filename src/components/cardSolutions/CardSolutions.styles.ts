import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Component = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-content: center;
  row-gap: 18px;
  column-gap: 18px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  padding: 0 10px;
  z-index: 1;
  animation: ${openAnimation} 0.5s ease;

  @media (max-width: 560px) {
    overflow: hidden;
  }

  .item_close {
    width: 100%;
    height: 100%;
    max-width: 276px;
    max-height: 443px;

    @media (max-width: 560px) {
      max-width: 190px;
    }
  }

  .item_open {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
    height: 100%;
    max-width: 862px;
    max-height: 441px;
    border-radius: 12px;
    background: var(--light-gray);
    overflow: hidden;
    animation: ${openAnimation} 0.5s ease;
    transition: animation 1s;
  }

  .outer_open {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    width: 100%;
    height: 100%;
    height: 441px;
    max-width: 268px;

    background: linear-gradient(225deg, var(--royal-indigo) -9.79%, var(--dusky-purple) 251.04%);
  }

  .outer_close {
    overflow: hidden;
  }

  .outer_close figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 217px;

    border-radius: 12px 12px 0px 0px;
    background: linear-gradient(225deg, var(--royal-indigo) -9.79%, var(--dusky-purple) 251.04%);
  }

  .outer_close .typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 226px;

    padding: 20px 25px;
    background: var(--light-gray);
    border-radius: 0px 0px 12px 12px;
  }

  .outer_close .typography_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 22px;

    width: 100%;
    height: 100%;
  }

  .outer_close .typography h2 {
    color: var(--purple);
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: normal;
    text-align: start;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 22px;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  .outer_close .typography p {
    color: var(--grayish-charcoal);
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    text-align: start;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  .paragraph {
    color: var(--black);
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 560px) {
      color: var(--grayish-charcoal);
      font-size: 12px;
      font-weight: 600;
    }
  }

  .outer_close .typography .actions {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    width: 100%;
    right: 20px;
    border-radius: 50%;
  }

  .outer_close .typography .actions button:hover {
    border-radius: 50%;
    box-shadow: 0px 0px 7px 2px #edefef;
  }

  .inner_card {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 36px;
    padding: 30px 0px;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .inner_card .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 25px;

    width: 100%;
    height: 100%;
    max-width: 460px;
  }

  .inner_card .typography {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;

    width: 100%;
  }

  .inner_card .typography_content h2 {
    color: var(--purple);
    font-size: 42px;
    line-height: 140%;

    @media (max-width: 1101px) {
      font-size: 38px;
    }

    @media (max-width: 991px) {
      font-size: 34px;
    }

    @media (max-width: 560px) {
      font-size: 30px;
      line-height: normal;
      letter-spacing: normal;
    }
  }

  .inner_card .typography_content p {
    color: var(--purple);
    font-size: 18px;

    @media (max-width: 560px) {
      display: none;
    }
  }

  .inner_card .actions {
    width: 100%;

    @media (max-width: 560px) {
      display: none;
    }
  }

  .control {
    position: absolute;
    bottom: 0px;
    top: auto;
    right: 20px;
    border-radius: 50%;
    overflow: hidden;
  }

  .control:hover {
    box-shadow: 0px 0px 7px 2px #ededed;
  }
`;
