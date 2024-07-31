// Next
import Image from 'next/image';

// Assets
import request from 'assets/icons/request.svg';
import bg_hero from 'assets/images/contact/bg@hero.svg';
import decore_inner from 'assets/images/contact/decore_inner.svg';
import ilustra from 'assets/images/contact/ilustra.svg';

// Styles
import * as S from './Contact.styles';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Item } from 'components/item';
import { ToastCard } from 'components/toastCard';

// Hook
import { useContact } from './useContact';

const ContactScreen = () => {
  const {
    t,
    formik,
    loading,
    isMidle,
    isMobile,
    isSubmit,
    disabled,
    responseDescription,
    setIsSubmit,
    setResponseDescription,
  } = useContact();

  return (
    <S.Container>
      {!isMidle && (
        <>
          <Image src={bg_hero} className="bg_hero" alt="bg_hero" draggable="false" />
          <Image src={decore_inner} className="decore_to_right" alt="decore_inner" draggable="false" />
        </>
      )}
      <S.Content>
        {!isMidle && (
          <figure>
            <Image src={ilustra} alt="ilustra" draggable="false" />
          </figure>
        )}
        <S.Inner>
          <S.Typography>
            <h2>{t('contact.title')}</h2>
            <p>{t(isMobile ? 'contact.sub_title_mobile' : 'contact.sub_title')}</p>
          </S.Typography>
          <figure className='ilustra_mobile_container'>
            {isMidle && <Image src={ilustra} className="ilustra_mobile" alt="ilustra_mobile" draggable="false" />}
          </figure>
          <S.Form>
            {!isSubmit ? (
              <div className="form_content">
                {responseDescription ? (
                  <ToastCard
                    type={responseDescription.type}
                    title={responseDescription.title}
                    setClose={setResponseDescription}
                  />
                ) : null}
                <div className="values">
                  <div className="inner">
                    <Input
                      id="name"
                      key="name"
                      type="text"
                      placeholder={t('contact.form.input.name')}
                      data-testid="name"
                      onChange={formik.handleChange('name')}
                      onBlur={formik.handleBlur('name')}
                      value={formik.values.name}
                      autocomplete="name"
                      isError={!!formik.touched.name && !!formik.errors.name}
                      errorMessage={formik.errors.name}
                    />
                  </div>
                  <div className="inner">
                    <Input
                      id="email"
                      key="email"
                      type="email"
                      required={true}
                      placeholder={t('contact.form.input.email')}
                      data-testid="email"
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')}
                      value={formik.values.email}
                      autocomplete="email"
                      isError={!!formik.touched.email && !!formik.errors.email}
                      errorMessage={formik.errors.email}
                    />
                  </div>
                  <div className="inner">
                    <Input
                      id="phone"
                      key="phone"
                      type="phone"
                      required={true}
                      placeholder={t('contact.form.input.phone')}
                      data-testid="phone"
                      onChange={formik.handleChange('phone')}
                      onBlur={formik.handleBlur('phone')}
                      value={formik.values.phone}
                      autocomplete="phone"
                      isError={!!formik.touched.phone && !!formik.errors.phone}
                      errorMessage={formik.errors.phone}
                    />
                  </div>
                  <div className="inner">
                    <textarea
                      id="description"
                      key="description"
                      placeholder={t('contact.form.input.description')}
                      data-testid="description"
                      onChange={formik.handleChange('description')}
                      onBlur={formik.handleBlur('description')}
                      value={formik.values.description}
                      autoComplete="description"
                      rows={10}
                      cols={50}
                    />
                  </div>
                </div>
                <div className="actions">
                  <Button
                    label={t('contact.form.action.label')}
                    type="primary"
                    loading={loading}
                    disabled={disabled}
                    onClick={() => formik.submitForm()}
                  />
                </div>
              </div>
            ) : (
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
                      loading={loading}
                      onClick={() => setIsSubmit(false)}
                    />
                  </div>
                </div>
              </S.Submit>
            )}
          </S.Form>
        </S.Inner>
      </S.Content>
      <Item />
    </S.Container>
  );
};

export default ContactScreen;
