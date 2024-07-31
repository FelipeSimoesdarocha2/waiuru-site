// Assets
import go from 'assets/images/about/ourTechnology/go.svg';
import googleCloud from 'assets/images/about/ourTechnology/google_cloud.svg';
import javaScript from 'assets/images/about/ourTechnology/java_script.svg';
import react from 'assets/images/about/ourTechnology/react.svg';

// Models
import { TechnologyProps } from 'models';

const list: TechnologyProps[] = [
    {
        id: 1,
        name: 'about.ourTechnologySection.list.go.title',
        description: 'about.ourTechnologySection.list.go.description',
        photo: go,
    },
    {
        id: 2,
        name: 'about.ourTechnologySection.list.react.title',
        description: 'about.ourTechnologySection.list.react.description',
        photo: react,
    },
    {
        id: 3,
        name: 'about.ourTechnologySection.list.script.title',
        description: 'about.ourTechnologySection.list.script.description',
        photo: javaScript,
    },

    {
        id: 4,
        name: 'about.ourTechnologySection.list.google_cloud.title',
        description: 'about.ourTechnologySection.list.google_cloud.description',
        photo: googleCloud,
    },
];

export { list };
