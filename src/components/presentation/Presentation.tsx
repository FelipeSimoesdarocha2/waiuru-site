// Next
import Image from 'next/image';
import router, { useRouter } from 'next/router';

// React
import { useRef, useState, useEffect, Fragment, useCallback } from 'react';

// Assets
import bg_Presentation from 'assets/images/solutions/bg@presentation.svg';

// Styles
import * as S from './Presentation.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { Button } from 'components/button';
import { Video } from 'components/video';

// Constants
import { dataSolutions } from './presentation.constants';

const Presentation = () => {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const { locale } = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const onScroll = () => {
    const element = document.getElementById('element_id');
    element?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  const prevSlide = () => {
    if (!isMobile) {
      setCurrentSlide(prevIndex => {
        let newIndex = prevIndex - 3;
        if (newIndex < 0) {
          newIndex = prevIndex - 1 < 0 ? dataSolutions.length - 1 : prevIndex - 1;
        }
        return newIndex;
      });
    } else {
      setCurrentSlide(prevIndex => (prevIndex - 1 + dataSolutions.length) % dataSolutions.length);
    }
  };

  const nextSlide = () => {
    if (!isMobile) {
      setCurrentSlide(prevIndex => {
        let newIndex = prevIndex + 3;
        if (newIndex >= dataSolutions.length) {
          newIndex = prevIndex + 1 >= dataSolutions.length ? 0 : prevIndex + 1;
        }
        return newIndex;
      });
    } else {
      setCurrentSlide(prevIndex => (prevIndex + 1) % dataSolutions.length);
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.children as HTMLCollectionOf<HTMLElement>;
      children[currentSlide]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentSlide]);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 560 ?? false);
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
      <Image src={bg_Presentation} className="bg_Presentation" alt="bg_Presentation" draggable="false" />
      <S.Content>
        <span id="element_id" />
        {dataSolutions.map((item, index) => (
          <span key={index} style={{ display: currentSlide === index ? '' : 'none' }} className="span_video">
            {item.video &&
              item.video
                .filter(video => video.lng === locale)
                .map((video, videoIndex) => (
                  <Fragment key={videoIndex}>
                    <Video key={video.src} src={video.src || ''} lng={video.lng} />
                  </Fragment>
                ))}
          </span>
        ))}
        <S.Last>
          {dataSolutions.map((item, index) => (
            <S.Card key={index} style={{ display: currentSlide === index ? '' : 'none' }}>
              <S.Typography>
                <div className="first_child">
                  <h2>{t(item.title)}</h2>
                  <p>{t(item.sub_title)}</p>
                </div>
                <p className="paragraph">{t(`${item.paragraph}`)}</p>
              </S.Typography>
              <Button
                label={t('solutions.config.screen.presentation.action')}
                type="primary"
                onClick={() => router.push('/register')}
              />
            </S.Card>
          ))}

          <div className="carrousel_container">
            <h2>{t('solutions.config.screen.presentation.functionalities')}</h2>
            <div className="carrousel">
              <button onClick={prevSlide} className="btn_left">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.7486 22.4998C33.7486 22.8728 33.6005 23.2305 33.3367 23.4942C33.073 23.7579 32.7153 23.9061 32.3424 23.9061H16.0495L22.088 29.9417C22.2187 30.0724 22.3224 30.2277 22.3932 30.3985C22.464 30.5693 22.5004 30.7524 22.5004 30.9373C22.5004 31.1222 22.464 31.3053 22.3932 31.4762C22.3224 31.647 22.2187 31.8022 22.088 31.9329C21.9572 32.0637 21.802 32.1674 21.6312 32.2382C21.4604 32.3089 21.2773 32.3454 21.0924 32.3454C20.9075 32.3454 20.7244 32.3089 20.5535 32.2382C20.3827 32.1674 20.2275 32.0637 20.0967 31.9329L11.6592 23.4954C11.5283 23.3648 11.4244 23.2096 11.3535 23.0388C11.2826 22.8679 11.2461 22.6848 11.2461 22.4998C11.2461 22.3149 11.2826 22.1317 11.3535 21.9609C11.4244 21.79 11.5283 21.6348 11.6592 21.5042L20.0967 13.0667C20.3608 12.8026 20.7189 12.6543 21.0924 12.6543C21.4658 12.6543 21.8239 12.8026 22.088 13.0667C22.352 13.3308 22.5004 13.6889 22.5004 14.0623C22.5004 14.4358 22.352 14.7939 22.088 15.0579L16.0495 21.0936H32.3424C32.7153 21.0936 33.073 21.2417 33.3367 21.5055C33.6005 21.7692 33.7486 22.1269 33.7486 22.4998Z"
                    fill="#52379D"
                  />
                </svg>
              </button>
              <div className="carrousel_inner" ref={carouselRef} onClick={onScroll}>
                {dataSolutions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`card ${currentSlide === index ? 'selected' : ''}`}
                  >
                    <div className="inner">
                      <Image src={item.image.src} alt={item.image.alt} draggable="false" />
                    </div>
                    <div className="outer">
                      <p>{t(item.title)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={nextSlide} className="btn_right">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2514 22.5002C11.2514 22.1272 11.3996 21.7695 11.6633 21.5058C11.927 21.2421 12.2847 21.0939 12.6576 21.0939L28.9505 21.0939L22.912 15.0583C22.7813 14.9276 22.6776 14.7723 22.6068 14.6015C22.536 14.4307 22.4996 14.2476 22.4996 14.0627C22.4996 13.8778 22.536 13.6947 22.6068 13.5238C22.6776 13.353 22.7813 13.1978 22.912 13.067C23.0428 12.9363 23.198 12.8326 23.3688 12.7618C23.5396 12.6911 23.7227 12.6546 23.9076 12.6546C24.0925 12.6546 24.2756 12.6911 24.4465 12.7618C24.6173 12.8326 24.7725 12.9363 24.9033 13.0671L33.3408 21.5046C33.4717 21.6352 33.5756 21.7904 33.6465 21.9612C33.7174 22.1321 33.7539 22.3152 33.7539 22.5002C33.7539 22.6851 33.7174 22.8683 33.6465 23.0391C33.5756 23.21 33.4717 23.3652 33.3408 23.4958L24.9033 31.9333C24.6392 32.1974 24.2811 32.3457 23.9076 32.3457C23.5342 32.3457 23.1761 32.1974 22.912 31.9333C22.648 31.6692 22.4996 31.3111 22.4996 30.9377C22.4996 30.5642 22.648 30.2061 22.912 29.942L28.9505 23.9064L12.6576 23.9064C12.2847 23.9064 11.927 23.7583 11.6633 23.4945C11.3996 23.2308 11.2514 22.8731 11.2514 22.5002Z"
                    fill="#52379D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </S.Last>
      </S.Content>
    </S.Container>
  );
};

export default Presentation;
