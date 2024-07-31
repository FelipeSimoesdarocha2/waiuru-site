import { useMutation } from '@tanstack/react-query';

import { createFormRequest } from './requests';

export const useCreateSendEmail = () => useMutation(createFormRequest);
