// Assets
import notFound from 'assets/images/404/bg@content.png';

import styled from 'styled-components';

const transforms = {
  1800: `calc(20% + 70px)`,
  1700: `calc(16% + 100px)`,
  1600: `calc(12% + 130px)`,
  1500: `calc(8% + 160px)`,
  1400: `calc(4% + 190px)`,
  1350: `calc(0% + 230px)`,
  1300: `calc(0% + 220px)`,
  1250: `calc(7% + 110px)`,
  1200: `calc(7% + 100px)`,
  1150: `calc(7% + 90px)`,
  1050: `calc(6% + 88px)`,
  900: `calc(5% + 90px)`,
  850: `calc(6% +50px)`,
  700: `calc(2% + 90px)`,
  600: `calc(2% + 70px)`,
  560: `calc(1% + 55px)`,
  450: `60px`,
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-color: var(--light-smoke);
  background-blend-mode: multiply;
  background-image: url(${notFound.src});
  background-clip: border-box;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  position: static;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  transform: translate(0%, 28%);

  @media (max-width: 1800px) {
    transform: translate(0%, ${transforms[1800]});
  }
  @media (max-width: 1700px) {
    transform: translate(0%, ${transforms[1700]});
  }
  @media (max-width: 1600px) {
    transform: translate(0%, ${transforms[1600]});
  }
  @media (max-width: 1500px) {
    transform: translate(0%, ${transforms[1500]});
  }
  @media (max-width: 1400px) {
    transform: translate(0%, ${transforms[1400]});
  }
  @media (max-width: 1350px) {
    transform: translate(0%, ${transforms[1350]});
  }
  @media (max-width: 1300px) {
    transform: translate(0%, ${transforms[1300]});
  }
  @media (max-width: 1250px) {
    transform: translate(0%, ${transforms[1250]});
  }
  @media (max-width: 1200px) {
    transform: translate(0%, ${transforms[1200]});
  }
  @media (max-width: 1150px) {
    transform: translate(0%, ${transforms[1150]});
  }
  @media (max-width: 1050px) {
    transform: translate(0%, ${transforms[1050]});
  }
  @media (max-width: 900px) {
    transform: translate(0%, ${transforms[900]});
    gap: 24px;
  }
  @media (max-width: 850px) {
    transform: translate(0%, ${transforms[850]});
  }
  @media (max-width: 700px) {
    transform: translate(0%, ${transforms[700]});
  }
  @media (max-width: 600px) {
    transform: translate(0%, ${transforms[600]});
  }
  @media (max-width: 560px) {
    transform: translate(0%, ${transforms[560]});
    gap: 10px;
  }
  @media (max-width: 450px) {
    transform: translate(0%, ${transforms[450]});
  }
`;

export const Typography = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #490d67;
    font-size: 80px;
    font-weight: 500;

    @media (max-width: 1101px) {
      font-size: 60px;
    }

    @media (max-width: 991px) {
      font-size: 42px;
    }

    @media (max-width: 800px) {
      font-size: 32px;
    }

    @media (max-width: 560px) {
      font-size: 22px;
      line-height: 22px;
    }
  }

  h2 {
    color: var(--black);
    font-size: 40px;
    font-weight: 300;
    white-space: nowrap;

    @media (max-width: 1101px) {
      font-size: 32px;
    }

    @media (max-width: 991px) {
      font-size: 24px;
    }

    @media (max-width: 800px) {
      font-size: 18px;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }
  }

  p {
    color: var(--black);
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 800px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 8px;
    }
  }

  strong {
    color: var(--black);
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 1101px) {
      font-size: 18px;
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }

    @media (max-width: 800px) {
      font-size: 14px;
    }

    @media (max-width: 560px) {
      font-size: 8px;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 30px;
  background: #53389d;

  @media (max-width: 991px) {
    padding: 6px 16px;
  }

  @media (max-width: 560px) {
    padding: 6px 15px;
  }

  p {
    color: var(--white);
    font-size: 30px;
    font-weight: 400;

    @media (max-width: 1100px) {
      font-size: 24px;
    }

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 800px) {
      font-size: 16px;
    }

    @media (max-width: 560px) {
      font-size: 10px;
    }
  }
`;
