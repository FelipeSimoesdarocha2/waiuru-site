// Models
import { NewsProps } from 'models';

import fetch from '../fetch';

export const createFormRequest = (data: NewsProps) => {
  return fetch('/v1/site/register ', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
