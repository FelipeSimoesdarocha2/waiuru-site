// Next
import { useRouter } from 'next/router';

// Styles
import * as S from './Link.styles';

// Models
import { MenuItensProps } from './models';

const Item = ({ name, link }: MenuItensProps) => {
    const router = useRouter();
    const { asPath } = useRouter();

    return (
        <S.Component
            className={`${asPath === link ? 'active' : ''}`}
            onClick={() => {
                if (link !== asPath) {
                    router.push(link);
                }
            }}
        >
            <p>{name}</p>
        </S.Component>
    );
};

export default Item;
