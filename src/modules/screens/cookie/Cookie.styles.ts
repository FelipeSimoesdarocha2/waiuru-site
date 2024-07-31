import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  gap: 95px;
  padding-top: 80px;
  margin: 40px 0;

  @media (max-width: 1101px) {
    gap: 70px;
  }

  @media (max-width: 560px) {
    gap: 50px;
  }

  .first_child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 86px;
    width: 100%;
    height: 86px;
    max-width: 790px;
    max-height: 972px;
    border-radius: 100px;
    background: var(--light-azure);
    padding: 2rem;

    @media (max-width: 1101px) {
      gap: 44px;
      width: auto;
      padding: 0 2rem;
    }

    @media (max-width: 560px) {
      gap: 22px;
      height: 62px;
    }
  }

  .first_child p {
    font-size: 20px;
    color: var(--neutral-charcoal);
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-weight: 600;
      font-size: 14px;
    }
  }

  .first_child text {
    font-size: 18px;
    color: var(--dark-charcoal);
    font-weight: 400;
    cursor: pointer;
    position: relative;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-weight: 500;
    }
  }

  .first_child text::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: var(--neutral-charcoal);
  }

  .last_child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 38px;
    max-width: 1160px;
    padding: 0 2rem;

    @media (max-width: 580px) {
      gap: 28px;
    }
  }

  .last_child .typography {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 42px;

    @media (max-width: 560px) {
      gap: 28px;
    }
  }

  .last_child .typography h2 {
    color: var(--black);
    font-size: 38px;
    font-weight: 700;
    text-align: center;

    @media (max-width: 1101px) {
      font-size: 30px;
    }

    @media (max-width: 991px) {
      font-size: 22px;
    }

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }

  .last_child .typography .sub_title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;

    @media (max-width: 1101px) {
      gap: 14px;
    }
  }

  .last_child .typography .sub_title p {
    color: var(--black);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  .last_child .typography .sub_title strong {
    color: var(--black);
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    white-space: nowrap;

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  .last_child .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .last_child .content .inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .last_child .content .inner .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .last_child .content .inner .item p {
    color: var(--black);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  .last_child .content .outer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  .last_child .content .outer p {
    color: var(--black);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  .last_child .content .outer .contact {
    display: inline;
  }

  .last_child .content .outer .contact text {
    font-size: 18px;
    color: var(--dark-charcoal);
    text-decoration-line: underline;
    font-weight: 400;
    width: auto;
    margin-left: 10px;

    @media (max-width: 1101px) {
      font-size: 16px;
    }

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-weight: 500;
    }
  }

  .last_child .content .outer .contact text a {
    display: inline;
    width: auto;
  }
`;
