// Styles

import * as S from './Internationalization.styles';

// Components
import { Select } from 'components/select';

// Hooks
import { useInternationalization } from './useInternationalization';

const Internationalization = () => {
  const { itens, languageSelected, onChangeLanguage } = useInternationalization();

  return (
    <S.Component>
      <Select.Link
        id="languages"
        key="languages"
        options={itens}
        value={languageSelected}
        onChange={value => onChangeLanguage(value)}
      />
    </S.Component>
  );
};

export default Internationalization;
