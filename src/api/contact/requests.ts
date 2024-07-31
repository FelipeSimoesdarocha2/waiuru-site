// Models
import { ContactFormProps } from 'models';

import fetch from '../fetch';

export const createContactRequest = (data: ContactFormProps) => {
  return fetch('/v1/site/register ', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
