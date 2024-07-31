// Model
import { NewsProps, RegistrationType } from 'models';

// Api
import { useCreateSendEmail } from 'api/sendEmail';

// Yup
import * as yup from 'yup';

// Formik
import { useFormik } from 'formik';

// i18n
import useTranslations from 'i18n';

export const useNewsLetterForm = () => {
  const t = useTranslations();
  const { mutateAsync } = useCreateSendEmail();

  const validationSchema = yup.object().shape({
    email: yup.string().required(t('name_required')).email(t('email_invalid')),
  });

  const initialValues: NewsProps = {
    email: '',
    registration_type: RegistrationType.NEWSLETTER,
  };

  const onSubmit = async () => {
    const dataRequest: NewsProps = {
      email: formik.values.email,
      registration_type: RegistrationType.NEWSLETTER,
    };

    try {
      await mutateAsync(dataRequest);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit,
  });

  return {
    t,
    formik,
  };
};
