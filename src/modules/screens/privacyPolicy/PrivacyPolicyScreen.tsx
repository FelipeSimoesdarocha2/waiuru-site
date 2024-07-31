// React
import router from 'next/router';

// Styles
import * as S from './PrivacyPolicy.styles';

const PrivacyPolicyScreen = () => {
  return (
    <S.Container>
      <div className="first_child">
        <p onClick={() => router.push('privacy-policy')}>Política de Privacidade e Termos de Uso</p>
        <text onClick={() => router.push('cookie')}>Cookies</text>
      </div>
      <div className="last_child">
        <div className="typography">
          <h2>Política de Privacidade e Termos de Uso</h2>
          <div className="sub_title">
            <p>
              Este aplicativo pertence e é operado pelo Waiuru. Prezamos pela sua privacidade como usuário desta
              plataforma. Esta Política de Privacidade explica quais dados coletamos de você, de que forma usamos e
              protegemos suas informações. Para utilizar as ferramentas deste programa aplicativo, você deve concordar
              com os nossos Termos e Condições.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="inner">
            <div className="item">
              <h4>Coleta e Uso de Informações</h4>
              <div className="item_group">
                <p>
                  1.1 Informações Pessoais: Ao utilizar nosso portal, podemos coletar informações pessoais, como nome,
                  endereço, número de telefone, endereço de e-mail entre outros dados. Essas informações são coletadas
                  com o objetivo de o Waiuru fornecer um serviço cada vez mais personalizado. Esses dados também poderão
                  ser usados para contatactarmos você, e atendermos da melhor forma as suas solicitações.
                </p>
                <p>
                  1.2 Informações de Uso: Podemos coletar informações sobre o uso do portal, como endereço IP, tipo de
                  navegador, páginas visitadas, data e hora de acesso e outras informações técnicas. Esses dados são
                  utilizados para melhorar a usabilidade do portal, realizar análises estatísticas e aprimorar nossos
                  serviços.
                </p>
              </div>
            </div>
            <div className="item">
              <h4>Compartilhamento de Informações</h4>
              <p>
                2.1 Terceiros: Podemos compartilhar suas informações pessoais com terceiros estritamente relacionados ao
                fornecimento de nossos serviços, como prestadores de serviços de pagamento, provedores de hospedagem,
                desenvolvedores de software e parceiros comerciais. Essas empresas são obrigadas a proteger suas
                informações pessoais e utilizá-las apenas para os fins acordados.
              </p>

              <p>
                2.2 Requisitos Legais: Reservamo-nos o direito de divulgar suas informações pessoais, caso seja
                necessário para cumprir com obrigações legais, proteger nossos direitos legais, responder a uma ordem
                judicial ou processo legal, ou garantir a segurança de nossos usuários e do público em geral.
              </p>
            </div>
            <div className="item">
              <h4>Segurança das Informações</h4>
              <p>
                3.1 Medidas de Segurança: Implementamos medidas técnicas e organizacionais para proteger suas
                informações pessoais contra acesso não autorizado, uso indevido, alteração ou divulgação. No entanto, é
                importante lembrar que nenhum método de transmissão de dados pela Internet ou método de armazenamento
                eletrônico é 100% seguro, e não podemos garantir a segurança absoluta das informações.
              </p>
            </div>
            <div className="item">
              <h4>Cookies e Tecnologias Semelhantes</h4>
              <p>
                4.1 Cookies: Utilizamos cookies e outras tecnologias de rastreamento para melhorar a experiência de uso
                do portal, personalizar o conteúdo, realizar análises e fornecer publicidade direcionada. Ao utilizar
                nosso portal, você concorda com o uso dessas tecnologias, a menos que opte por desativá-las nas
                configurações do seu navegador.
              </p>
            </div>
            <div className="item">
              <h4>Alterações nesta Política</h4>
              <p>
                5.1 Atualizações: O Waiuru pode atualizar esta Política de Privacidade e Termos de Uso periodicamente,
                para refletir mudanças em nossas práticas e serviços. Recomendamos que você verifique esta página
                regularmente para se manter informado(a) sobre quaisquer alterações. O uso contínuo do nosso portal após
                a publicação de alterações indica sua aceitação dessas mudanças.
              </p>
            </div>
            <div className="item">
              <h4>Contato</h4>
              <p>
                6.1 Dúvidas: Se você tiver dúvidas, preocupações ou sugestões relacionadas à nossa Política de
                Privacidade e Termos de Uso, entre em contato conosco através dos canais fornecidos em nosso portal ou
                pela página de contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default PrivacyPolicyScreen;
