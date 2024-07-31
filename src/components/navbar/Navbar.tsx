// Styles
import * as S from './Navbar.styles';

// Models
import { HeaderProps } from './models';

// Hook
import { useNavbar } from './useNavbar';

const Navbar = ({ className, children }: HeaderProps) => {
    const { isActive } = useNavbar();

    return (
        <S.Component className={`${className} ${isActive && 'active'}`}>
            <S.Content className={`${className} ${isActive && 'active'}`}>
                {children}
            </S.Content>
        </S.Component>
    )
};

export default Navbar;
