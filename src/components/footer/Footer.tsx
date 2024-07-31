// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import app_store from 'assets/icons/download/app_store.svg';
import play_store from 'assets/icons/download/play_store.svg';
import logo from 'assets/icons/logo/white.svg';
import facebook from 'assets/icons/social_medias/facebook.svg';
import instagram from 'assets/icons/social_medias/instagram.svg';
import linkedin from 'assets/icons/social_medias/linkedin.svg';
// import pinterest from 'assets/icons/social_medias/pinterest.svg';
// import vlog from 'assets/icons/social_medias/vlog.svg';
import youtube from 'assets/icons/social_medias/youtube.svg';
import bg_footer from 'assets/images/footer/bg@footer.svg';

// Styles
import * as S from './Footer.styles';

// Models
import { SectionProps } from 'models';

// i18n
import useTranslations from 'i18n';

const Footer = ({ mobile }: SectionProps) => {
  const t = useTranslations();

  return (
    <S.Container>
      <div className="content">
        <div>
          <div className="about_section">
            <h3>{t('footer.about')}</h3>
            <Link href={'/about'} draggable="false">
              {t('footer.who_we_are')}
            </Link>
            <Link href={'/contact-us'} draggable="false">
              {t('footer.contact_us')}
            </Link>
            {/* <Link href={'/'} draggable="false">
              {t('footer.become_an_affiliate')}
            </Link> */}
            <Image src={logo} width={60} alt="logo" draggable="false" />
          </div>

          <div className="solutions_section">
            <h3>{t('footer.our_solutions')}</h3>
            <Link href={'/solutions/administrators'} draggable="false">
              {t('footer.condominium_administrator')}
            </Link>
            <Link href={'/solutions/residents'} draggable="false">
              {t('footer.residents')}
            </Link>
            <Link href={'/solutions/employees'} draggable="false">
              {t('footer.employees')}
            </Link>
            <Link href={'/news'} draggable="false">
              {t('footer.news')}
            </Link>
          </div>
        </div>

        <div>
          <div className="social_media_section">
            <h3>{t('footer.connect_with_us')}</h3>
            <div>
              <Link href={'https://www.instagram.com/waiuru.oficial/'} target="_blank">
                <Image src={instagram} alt="Instagram" draggable="false" />
              </Link>

              <Link href={'https://www.linkedin.com/company/waiuru/'} target="_blank">
                <Image src={linkedin} alt="Linkedin" draggable="false" />
              </Link>

              <Link href={'/'} target="_blank">
                <Image src={facebook} alt="Facebook" draggable="false" />
              </Link>

              <Link href={'/'} target="_blank">
                <Image src={youtube} alt="Youtube" draggable="false" />
              </Link>

              {/* <Link href={'/'} target="_blank">
                <Image src={pinterest} alt="Pinterest" draggable="false" />
              </Link>

              <Link href={'/'} target="_blank">
                <Image src={vlog} alt="Vlog" draggable="false" />
              </Link> */}
            </div>
          </div>

          <div className="download">
            <h3>{t('footer.download_Waiuru')}</h3>
            <div>
              <Link href={'https://play.google.com/store/apps/details?id=com.waiuru.myHome'} target="blank" draggable="false">
                <Image src={play_store} alt="play_store" draggable="false" />
              </Link>
              <Link href={'https://apps.apple.com/us/app/my-waiuru-home/id6467805565'} target="blank" draggable="false">
                <Image src={app_store} alt="app_store" draggable="false" />
              </Link>
            </div>
          </div>
        </div>
        <Image src={bg_footer} className="bg_footer" alt="bg_footer" draggable="false" />
      </div>

      {!mobile && (
        <div className="copyright_section">
          <p>© 2023 Waiuru, corp.</p>
          <p draggable="false">{t('footer.all_rights_reserved')}</p>
          <Link href={'/privacy-policy'} draggable="false">
            &middot; {t('footer.privacy')}
          </Link>
          <Link href={'/privacy-policy'} draggable="false">
            &middot; {t('footer.terms')}
          </Link>
        </div>
      )}
    </S.Container>
  );
};

export default Footer;
