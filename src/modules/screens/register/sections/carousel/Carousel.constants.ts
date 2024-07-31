// Next
import { StaticImageData } from 'next/image';

// Assets
import ana from 'assets/constants/depositions/ana.png';
import joao from 'assets/constants/depositions/joao.png';
import paulo from 'assets/constants/depositions/paulo.png';

interface depositionsProps {
    id: number;
    name: string;
    profession: string;
    paragraph: string;
    src: StaticImageData;
}

const depositions: depositionsProps[] = [
    {
        id: 1,
        name: 'Ana Moraes',
        profession: 'register.depositions.ana.profession',
        paragraph: 'register.depositions.ana.paragraph',
        src: ana,
    },
    {
        id: 2,
        name: 'João Pedro',
        profession: 'register.depositions.joao.profession',
        paragraph: 'register.depositions.joao.paragraph',
        src: joao,
    },
    {
        id: 3,
        name: 'Paulo Rocha',
        profession: 'register.depositions.paulo.profession',
        paragraph: 'register.depositions.paulo.paragraph',
        src: paulo,
    },
];

export { depositions };
