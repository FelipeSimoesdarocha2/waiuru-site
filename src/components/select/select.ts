// Components
import { Link } from "./link";

type CompoundedComponent = {
    Link: typeof Link;
};

const CompoundedSelects: CompoundedComponent = Object.assign({
    Link,
});

export default CompoundedSelects;
