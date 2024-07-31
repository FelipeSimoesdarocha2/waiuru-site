// React
import { Fragment, useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';

// Styles
import * as S from './Carousel.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { CardMaterial } from 'components/cardMaterial';

// Hook
import { useResidents } from './useCarousel';

const NewsSection = () => {
  const t = useTranslations();
  const { depositions } = useResidents();
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [ref] = useInView({
    triggerOnce: true,
  });

  const nextSlide = () => {
    setCurrentSlide(prevIndex => (prevIndex + 1) % depositions.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prevIndex => (prevIndex - 1 + depositions.length) % depositions.length);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 560 || false);
  }, [setIsMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <S.Container>
      <div className="first_child" ref={ref}>
        <div className="spacer50"></div>
        {!isMobile && (
          <div className="actions">
            <div className="control"></div>
            <h2>{t('register.carousel.title')}</h2>
            <div className="control">
              <button onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.7449 24.5C36.7449 24.9061 36.5836 25.2956 36.2964 25.5827C36.0093 25.8699 35.6198 26.0312 35.2137 26.0312H17.4726L24.0478 32.6034C24.1902 32.7457 24.3031 32.9147 24.3802 33.1008C24.4572 33.2868 24.4969 33.4861 24.4969 33.6875C24.4969 33.8888 24.4572 34.0882 24.3802 34.2742C24.3031 34.4602 24.1902 34.6292 24.0478 34.7716C23.9054 34.914 23.7364 35.0269 23.5504 35.104C23.3644 35.181 23.165 35.2207 22.9637 35.2207C22.7623 35.2207 22.563 35.181 22.377 35.104C22.1909 35.0269 22.0219 34.914 21.8795 34.7716L12.692 25.5841C12.5494 25.4419 12.4363 25.2729 12.3591 25.0869C12.2819 24.9008 12.2422 24.7014 12.2422 24.5C12.2422 24.2986 12.2819 24.0991 12.3591 23.9131C12.4363 23.7271 12.5494 23.5581 12.692 23.4159L21.8795 14.2284C22.1671 13.9408 22.557 13.7793 22.9637 13.7793C23.3703 13.7793 23.7603 13.9408 24.0478 14.2284C24.3353 14.5159 24.4969 14.9059 24.4969 15.3125C24.4969 15.7191 24.3353 16.1091 24.0478 16.3966L17.4726 22.9687H35.2137C35.6198 22.9687 36.0093 23.1301 36.2964 23.4172C36.5836 23.7044 36.7449 24.0939 36.7449 24.5Z"
                    fill="black"
                    fillOpacity="0.3"
                  />
                </svg>
              </button>
              <button onClick={nextSlide}>
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2395 24.5C12.2395 24.9061 12.4008 25.2956 12.6879 25.5827C12.9751 25.8699 13.3646 26.0312 13.7707 26.0312H31.5118L24.9366 32.6034C24.7942 32.7457 24.6813 32.9147 24.6042 33.1008C24.5272 33.2868 24.4875 33.4861 24.4875 33.6875C24.4875 33.8888 24.5272 34.0882 24.6042 34.2742C24.6813 34.4602 24.7942 34.6292 24.9366 34.7716C25.0789 34.914 25.248 35.0269 25.434 35.104C25.62 35.181 25.8194 35.2207 26.0207 35.2207C26.222 35.2207 26.4214 35.181 26.6074 35.104C26.7934 35.0269 26.9625 34.914 27.1048 34.7716L36.2923 25.5841C36.4349 25.4419 36.5481 25.2729 36.6253 25.0869C36.7025 24.9008 36.7422 24.7014 36.7422 24.5C36.7422 24.2986 36.7025 24.0991 36.6253 23.9131C36.5481 23.7271 36.4349 23.5581 36.2923 23.4159L27.1048 14.2284C26.8173 13.9408 26.4273 13.7793 26.0207 13.7793C25.6141 13.7793 25.2241 13.9408 24.9366 14.2284C24.649 14.5159 24.4875 14.9059 24.4875 15.3125C24.4875 15.7191 24.649 16.1091 24.9366 16.3966L31.5118 22.9687H13.7707C13.3646 22.9687 12.9751 23.1301 12.6879 23.4172C12.4008 23.7044 12.2395 24.0939 12.2395 24.5Z"
                    fill="black"
                    fillOpacity="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="last_child">
        <Carousel
          autoPlay
          selectedItem={currentSlide}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          useKeyboardArrows={true}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={isMobile}
          centerSlidePercentage={11}
          onChange={index => setCurrentSlide(index)}
        >
          {depositions.map((item, index) => (
            <Fragment key={index}>
              <CardMaterial
                id={item.id}
                key={index}
                name={item.name}
                profession={item.profession}
                paragraph={item.paragraph}
                src={item.src}
              />
            </Fragment>
          ))}
        </Carousel>
      </div>
      <div className="action_mobile">
        <h2>O que estão falando do Waiuru</h2>
      </div>
    </S.Container>
  );
};

export default NewsSection;
