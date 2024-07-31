import { useMutation } from '@tanstack/react-query';

import { createContactRequest } from './requests';

export const useContactForm = () => useMutation(createContactRequest);
