// Next
import Image from 'next/image';

// Assets
import request from 'assets/icons/request.svg';

// Styles
import * as S from './Form.styles';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ToastCard } from 'components/toastCard';

// Hook
import { useFormRegisterSection } from './useFormRegisterSection';

const FormRegisterSection = () => {
  const { t, formik, isLoading, isMobile, responseDescription, disabled, onChangeDisabled, setResponseDescription } =
    useFormRegisterSection();

  return (
    <S.Container>
      <div className="form">
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
          <div className="form_content">
            <div className="values">
              <Input
                id="name"
                key="input-name"
                type="text"
                placeholder={t('register.form.fields.name') + ' *'}
                data-testid="name"
                onChange={formik.handleChange('name')}
                onBlur={formik.handleBlur('name')}
                value={formik.values.name}
                autocomplete="name"
                required={true}
                isError={!!formik.errors.name && !!formik.touched.name}
                errorMessage={formik.errors.name}
              />
              <Input
                id="city"
                key="input-city"
                type="text"
                placeholder={t('register.form.fields.city') + ' *'}
                data-testid="city"
                onChange={formik.handleChange('city')}
                onBlur={formik.handleBlur('city')}
                value={formik.values.city}
                autocomplete="address-level2"
                required={true}
                isError={!!formik.errors.city && !!formik.touched.city}
                errorMessage={formik.errors.city}
              />
              <S.Row>
                <S.ContainerMid>
                  <Input
                    id="email"
                    key="email"
                    type="email"
                    placeholder={t('register.form.fields.email') + ' *'}
                    data-testid="email"
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    value={formik.values.email}
                    autocomplete="email"
                    isError={!!formik.errors.email && !!formik.touched.email}
                    errorMessage={formik.errors.email}
                  />
                </S.ContainerMid>
                <S.ContainerMid>
                  <Input
                    id="phone"
                    key="phone"
                    type="phone"
                    placeholder={t('register.form.fields.phone') + ' *'}
                    data-testid="email"
                    onChange={formik.handleChange('phone')}
                    onBlur={formik.handleBlur('phone')}
                    value={formik.values.phone}
                    autocomplete="phone"
                    required
                    isError={!!formik.errors.phone && !!formik.touched.phone}
                    errorMessage={formik.errors.phone}
                  />
                </S.ContainerMid>
              </S.Row>
              <Input
                id="total_units"
                key="input-total_units"
                type="total_units"
                placeholder={t('register.form.fields.total_units')}
                data-testid="total_units"
                onChange={formik.handleChange('total_units')}
                onBlur={formik.handleBlur('total_units')}
                value={formik.values.total_units}
                autocomplete="total_units"
                errorMessage={formik.errors.total_units}
              />
              <Input
                id="affiliate"
                key="input-affiliate"
                type="text"
                placeholder={t('register.form.fields.affiliate')}
                data-testid="affiliate"
                onChange={formik.handleChange('affiliate')}
                onBlur={formik.handleBlur('affiliate')}
                value={formik.values.affiliate}
                autocomplete="affiliate"
                errorMessage={formik.errors.affiliate}
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
                label={t('register.form.action.label')}
                type="primary"
                onClick={() => formik.handleSubmit()}
              />
            </div>
          </div>
        )}
      </div>
    </S.Container>
  );
};

export default FormRegisterSection;
