// Next
import router, { useRouter } from 'next/router';

// React

// Styles
import * as S from './Itens.styles';

// Models
import { MenuItensProps } from './models';

// i18n
import useTranslations from 'i18n';

const Item = ({ name, data, tabIndex, menuItemKey, defaultSelectedKeys }: MenuItensProps) => {
  const t = useTranslations();
  const { asPath } = useRouter();

  return (
    <S.Component className={`${defaultSelectedKeys === menuItemKey ? 'active' : ''}`} tabIndex={tabIndex}>
      <p className="title">{name}</p>
      <div className="content">
        {data.map((item, index) => (
          <div key={index} className={'item' + ' ' + `${asPath === item.value ? 'active' : ''}`}>
            <button
              onClick={() => {
                if (item.value !== asPath) {
                  router.push(item.value);
                }
              }}
            >
              <p>{t(`${item.name}`)}</p>
            </button>
          </div>
        ))}
      </div>
    </S.Component>
  );
};

export default Item;
