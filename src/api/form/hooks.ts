import { useMutation } from '@tanstack/react-query';

import { createEmailRequest } from './requests';

export const useCreateForm = () => useMutation(createEmailRequest);
