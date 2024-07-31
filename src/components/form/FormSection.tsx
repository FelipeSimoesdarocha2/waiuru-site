// Next
import Image from 'next/image';

// React
import { Fragment } from 'react';

// Assets
import ditto_marks from 'assets/icons/ditto_marks.svg';
import request from 'assets/icons/request.svg';

// Styles
import * as S from './Form.styles';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ToastCard } from 'components/toastCard';

// Hook
import { useForm } from './useForm';

interface FormSectionProps {
  sub_title: boolean;
}

const FormSection = ({ sub_title }: FormSectionProps) => {
  const {
    t,
    formik,
    people,
    isMobile,
    disabled,
    isLoading,
    responseDescription,
    onChangeDisabled,
    setResponseDescription,
  } = useForm();

  return (
    <S.Container>
      <S.Typography>
        <h2>{t('form.title')}</h2>
        {sub_title && (
          <p>
            {t('form.sub_title')
              .split('\n')
              .map((line, index, arr) => (
                <Fragment key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </Fragment>
              ))}
          </p>
        )}
      </S.Typography>
      <S.Content>
        <S.Content_Wrapper>
          <S.Content_Inner>
            <h2>{t('form.about.title')}</h2>
            <p>{t('form.about.paragraph')}</p>
            <Image src={ditto_marks} width={45} className="divider" alt="divider" draggable="false" />
            <p>{t('form.about.sub_paragraph')}</p>
            <p>Sr. Julio Almeida</p>
          </S.Content_Inner>
          <S.Content_Outer>
            {people.map((item, index) => (
              <Fragment key={index}>
                <Image src={item.src} alt="peoples" draggable="false" />
              </Fragment>
            ))}
          </S.Content_Outer>
        </S.Content_Wrapper>
        <S.Form_Container>
          {disabled ? (
            <>
              <S.Submit>
                <Image src={request} className="response_ilustra" alt="request" draggable="false" />
                <div className="submit_content">
                  <div className="submit_typography">
                    <h2>{t('contact.submit.title')}</h2>
                    <p>{t('contact.submit.sub_title')}</p>
                  </div>
                  <div className="actions">
                    <Button
                      label={t(isMobile ? 'contact.submit.action.label_mobile' : 'contact.submit.action.label')}
                      type="primary"
                      loading={isLoading}
                      onClick={onChangeDisabled}
                    />
                  </div>
                </div>
              </S.Submit>
            </>
          ) : (
            <>
              <S.Form>
                <div className="fields">
                  <Input
                    id="name"
                    key="input-name"
                    type="text"
                    placeholder={t('form.response.input.name')}
                    data-testid="name"
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                    autocomplete="name"
                    isError={!!formik.errors.name && !!formik.touched.name}
                    errorMessage={formik.errors.name}
                  />
                  <Input
                    id="email"
                    key="email"
                    type="email"
                    placeholder={t('form.response.input.email')}
                    data-testid="email"
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    autocomplete="email"
                    isError={!!formik.errors.email && !!formik.touched.email}
                    errorMessage={formik.errors.email}
                  />

                  <Input
                    id="phone"
                    key="phone"
                    type="phone"
                    placeholder={t('form.response.input.phone')}
                    data-testid="email"
                    onChange={formik.handleChange('phone')}
                    onBlur={formik.handleBlur('phone')}
                    value={formik.values.phone}
                    autocomplete="phone"
                    required
                    isError={!!formik.errors.phone && !!formik.touched.phone}
                    errorMessage={formik.errors.phone}
                  />

                  <Input
                    id="affiliate"
                    key="affiliate"
                    type="text"
                    placeholder={t('form.response.input.condominium_id')}
                    data-testid="affiliate"
                    onChange={formik.handleChange('affiliate')}
                    onBlur={formik.handleBlur('affiliate')}
                    value={formik.values.affiliate}
                    autocomplete="affiliate"
                  />
                  {responseDescription ? (
                    <ToastCard
                      type={responseDescription.type}
                      title={responseDescription.title}
                      setClose={setResponseDescription}
                    />
                  ) : null}
                </div>
                <div className="actions">
                  <Button
                    disabled={disabled}
                    label={t('form.response.action.label')}
                    type="primary"
                    onClick={() => formik.handleSubmit()}
                  />
                </div>
              </S.Form>
            </>
          )}
        </S.Form_Container>
      </S.Content>
    </S.Container>
  );
};

export default FormSection;
