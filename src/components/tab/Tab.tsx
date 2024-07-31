// Components
import { Link } from './link';
import { Nav } from './nav';
import { Screen } from './screen';

type CompoundedComponent = {
    Screen: typeof Screen;
    Link: typeof Link;
    Nav: typeof Nav;
};

const CompoundedTabs: CompoundedComponent = Object.assign({
    Nav,
    Link,
    Screen,
});
export default CompoundedTabs;
