// Models
import { FormProps } from 'models';

import fetch from '../fetch';

export const createEmailRequest = (data: FormProps) => {
  return fetch('/v1/site/register ', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
