// Next
import router from 'next/router';

// Styles
import * as S from './Cookie.styles';

// i18n
import useTranslations from 'i18n';

const CookieScreen = () => {
  const t = useTranslations();

  return (
    <S.Container>
      <div className="first_child">
        <p onClick={() => router.push('privacy-policy')}>Política de Privacidade e Termos de Uso</p>
        <text onClick={() => router.push('cookie')}>Cookies</text>
      </div>
      <div className="last_child">
        <div className="typography">
          <h2>Política de Cookies do Waiuru: Construindo Comunidades</h2>
          <div className="sub_title">
            <p>
              Bem-vindo à nossa política de cookies, aqui é a sua porta de entrada para entender como usamos tecnologias
              de rastreamento em nosso site para melhorar a sua experiência. No Waiuru, estamos comprometidos em
              oferecer
              <strong> soluções inovadoras </strong>
              que tornem a vida em condomínios e comunidades mais prática, eficiente e agradável.
            </p>
            <p>
              Nossa missão é proporcionar soluções inteligentes e manter a transparência de como realizamos em relação
              aos dados que coletamos.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="inner">
            <div className="item">
              <h4>O que são Cookies?</h4>
              <p>
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um
                site. Eles servem para diversas finalidades, incluindo melhorar a navegação, fornecer conteúdo
                personalizado e coletar informações para análise.
              </p>
            </div>
            <div className="item">
              <h4>Por que Usamos Cookies?</h4>
              <p>
                No Waiuru, utilizamos cookies com o objetivo de entender melhor como você interage com o nosso site.
                Essas informações nos permitem otimizar o site, personalizar sua experiência e garantir que as soluções
                que oferecemos sejam relevantes para você. Também utilizamos cookies para coletar dados estatísticos
                sobre o uso do site, o que nos ajuda a tomar decisões informadas sobre melhorias e inovações.
              </p>
            </div>
            <div className="item">
              <h4>Tipos de Cookies que Utilizamos:</h4>
              <p>
                Cookies Essenciais: Esses cookies são estritamente necessários para que o site funcione corretamente.
                Eles incluem informações como configurações de idioma, autenticação e segurança.
              </p>
            </div>
            <div className="item">
              <h4>Cookies de Desempenho:</h4>
              <p>
                Esses cookies nos permitem coletar dados sobre como os visitantes usam o site, o que nos ajuda a
                aprimorar a navegabilidade e o desempenho.
              </p>
            </div>
            <div className="item">
              <h4>Cookies de Funcionalidade:</h4>
              <p>
                Esses cookies são usados para personalizar sua experiência, lembrando suas preferências, como idioma e
                região. O Waiuru está presente em diversos países então precisamos customizar a experiência
              </p>
            </div>
            <div className="item">
              <h4>Cookies de Publicidade: </h4>
              <p>
                Utilizamos parceiros de publicidade que podem definir cookies para exibir anúncios relevantes a você.
                Esses cookies também ajudam a medir a eficácia de nossas campanhas de marketing.
              </p>
            </div>
            <div className="item">
              <h4>Seu Controle Sobre Cookies:</h4>
              <p>
                Você tem o direito de controlar como os cookies são usados em seu dispositivo. A maioria dos navegadores
                permite que você ajuste suas configurações de cookies, bloqueie ou exclua cookies, se assim preferir.
                Lembre-se de que a desativação de cookies essenciais pode afetar a funcionalidade do site e o que está
                sendo apresentado pelo Waiuru para você.
              </p>
            </div>
            <div className="item">
              <h4>Alterações na Política de Cookies:</h4>
              <p>
                O Waiuru pode atualizar a política de cookies de tempos em tempos, à medida que aprimoramos nossos
                serviços e site. Quaisquer alterações significativas serão comunicadas aqui.
              </p>
            </div>
          </div>
          <div className="outer">
            <p className="contact">
              No Waiuru, estamos muito comprometidos em fornecer soluções inovadoras para condomínios e comunidades, e
              também em manter a sua privacidade e segurança é um dos principais pontos que consideramos. Se tiver
              alguma dúvida sobre nossa política de cookies ou quiser obter mais informações sobre como usamos seus
              dados, entre em contato conosco pela
              <text onClick={() => router.push('contact-us')}>{t('Página de Contato.')}</text>
            </p>
            <p>
              Obrigado por escolher o Waiuru para melhorar sua experiência com comunidades. Estamos felizes em tê-lo
              conosco nesta jornada!
            </p>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default CookieScreen;
