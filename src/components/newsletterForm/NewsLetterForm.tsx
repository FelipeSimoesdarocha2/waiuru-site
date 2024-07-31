// Next
import Image from 'next/image';

// Assets
import type4 from 'assets/details/type4.svg';
import decore from 'assets/icons/send.svg';

// Styles
import * as S from './NewsLetterForm.styles';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';

// Hook
import { useNewsLetterForm } from './useNewsLetterForm';

interface NewsLetterFormProps {
  detail?: boolean;
}

const NewsLetterForm = ({ detail }: NewsLetterFormProps) => {
  const { t, formik } = useNewsLetterForm();

  return (
    <S.Component>
      <div className="typography_mobile">
        <h2>{t('newsletter.title_mobile')}</h2>
        <p>{t('newsletter.sub_title_mobile')}</p>
      </div>
      <S.Content>
        {detail && (
          <div className="container_detail">
            <Image src={type4} alt="detail" draggable="false" />
          </div>
        )}
        <Image src={decore} className="decore" width={70} alt="decore" draggable="false" />
        <div className="newsletter_inner">
          <h2>{t('newsletter.title')}</h2>
          <div className="newsletter_form">
            <div className="container_input">
              <Input
                icon
                type="text"
                id="name_news"
                key="input-name"
                data-testid="email"
                autocomplete="email"
                value={formik.values.email}
                errorMessage={formik.errors.email}
                onBlur={formik.handleBlur('email')}
                onChange={formik.handleChange('email')}
                placeholder={t('newsletter.input.email')}
                isError={!!formik.errors.email && !!formik.touched.email}
              />
            </div>
            <Button type="primary" onClick={() => formik.handleSubmit()} label={t('newsletter.action.label')} />
          </div>
        </div>
        <p className="message">{t('newsletter.message')}</p>
      </S.Content>
    </S.Component>
  );
};

export default NewsLetterForm;
