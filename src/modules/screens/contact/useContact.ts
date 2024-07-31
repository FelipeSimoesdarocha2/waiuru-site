// React
import { useState, useEffect, useCallback } from 'react';

// Models
import { ContactFormProps, RegistrationType, ToastTypeEnum } from 'models';

// Api
import { useContactForm } from 'api/contact';

// Yup
import * as yup from 'yup';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslations from 'i18n';

export const useContact = () => {
  const [isMidle, setIsMidle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [responseDescription, setResponseDescription] = useState<{
    title: string;
    type: ToastTypeEnum;
  }>();

  const t = useTranslations();
  const { mutateAsync } = useContactForm();

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('name_required')),
    email: yup.string().required(t('email_required')).email(t('email_invalid')),
    phone: yup.string().required(t('phone_required')),
    description: yup.string().required(t('description_required')),
  });

  const initialValues: ContactFormProps = {
    name: '',
    email: '',
    phone: '',
    description: '',
    registration_type: RegistrationType.CONTACT,
  };

  const onSubmit = async () => {
    setDisabled(true);
    setLoading(true);

    try {
      const dataRequest: ContactFormProps = {
        name: formik.values.name,
        email: formik.values.email,
        phone: formik.values.phone,
        description: formik.values.description,
        registration_type: RegistrationType.CONTACT,
      };

      const response = await mutateAsync(dataRequest);

      if (response.status === 200) {
        await response.json();
      } else {
        const data = await response.json();
        console.error(data);
      }

      setResponseDescription({
        title: t('sucess'),
        type: ToastTypeEnum.SUCCESS,
      });

      setIsSubmit(true);
    } catch (error: any) {
      if (error) {
        setResponseDescription({
          title: t(isMobile ? 'contact.form.error_mobile' : 'contact.form.error'),
          type: ToastTypeEnum.ERROR,
        });

        return;
      }
    } finally {
      setDisabled(false);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    validationSchema,
    onSubmit,
  });

  const handleResize = useCallback(() => {
    setIsMidle(window.innerWidth < 1101 ?? false);
    setIsMobile(window.innerWidth < 560 ?? false);
  }, [setIsMobile, setIsMidle]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
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
  };
};
