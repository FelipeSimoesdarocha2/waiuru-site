// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import less from 'assets/icons/less.svg';
import more from 'assets/icons/more.svg';

// Styles
import * as S from './Item.styles';

// i18n
import useTranslations from 'i18n';

// constants
import { data } from './item.constants';

const Item = () => {
    const [isOpenStates, setIsOpenStates] = useState(data.map(() => false));
    const t = useTranslations();

    const toggleItem = (index: number) => {
        const updatedIsOpenStates = [...isOpenStates];
        updatedIsOpenStates[index] = !updatedIsOpenStates[index];
        setIsOpenStates(updatedIsOpenStates);
    };

    return (
        <S.Component>
            <S.Typography>
                <h2>{t(`${'home.doubt.title'}`)}</h2>
            </S.Typography>
            <S.Content>
                {data.map((item, index) => (
                    <S.Item key={item.id} className={`${isOpenStates[index] ? 'open' : 'close'}`}>
                        <div className="inner">
                            <p>{t(item.title)}</p>
                            <button onClick={() => toggleItem(index)}>
                                <Image
                                    src={isOpenStates[index] ? less : more}
                                    className={` ${isOpenStates[index] ? 'less' : 'more'}`}
                                    alt="action"
                                    draggable="false"
                                />
                                <span />
                            </button>
                        </div>
                        <div className="outer">
                            <div>{isOpenStates[index] && <p>{t(item.paragraph)}</p>}</div>
                        </div>
                    </S.Item>
                ))}
            </S.Content>
        </S.Component>
    );
};

export default Item;
