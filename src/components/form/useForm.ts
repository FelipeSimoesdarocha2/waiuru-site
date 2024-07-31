// React
import { useCallback, useEffect, useState } from 'react';

// Models
import { FormProps, RegistrationType, ToastTypeEnum } from 'models';

// Api
import { useCreateForm } from 'api/form';

// Yup
import * as yup from 'yup';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslations from 'i18n';

// Constants
import { people } from './Form.constants';

export const useForm = () => {
  const [responseDescription, setResponseDescription] = useState<{
    title: string;
    type: ToastTypeEnum;
  }>();
  const [isMobile, setIsMobile] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const t = useTranslations();
  const { mutateAsync, isLoading } = useCreateForm();

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('name_required')),
    email: yup.string().required(t('email_required')).email(t('email_invalid')),
    phone: yup.string().required(t('phone_required')),
    affiliate: yup.string(),
  });

  const initialValues: FormProps = {
    name: '',
    city: '',
    email: '',
    phone: '',
    total_units: '',
    affiliate: '',
    registration_type: RegistrationType.REGISTER,
  };

  const onSubmit = async (values: FormProps) => {
    try {
      const response = await mutateAsync(values);

      if (response.status === 200) {
        await response.json();
        setDisabled(true);
      } else {
        const data = await response.json();
        console.error(data);
      }

      setResponseDescription({
        title: t('sucess'),
        type: ToastTypeEnum.SUCCESS,
      });
    } catch (error: any) {
      setDisabled(false);

      if (error) {
        setResponseDescription({
          title: t(isMobile ? 'contact.form.error_mobile' : 'contact.form.error'),
          type: ToastTypeEnum.ERROR,
        });

        return;
      }
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit,
  });

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

  const onChangeDisabled = () => {
    setDisabled(!disabled);
    formik.resetForm();
    setResponseDescription(undefined);
  };

  return {
    t,
    formik,
    people,
    isMobile,
    disabled,
    isLoading,
    responseDescription,
    onChangeDisabled,
    setResponseDescription,
  };
};
