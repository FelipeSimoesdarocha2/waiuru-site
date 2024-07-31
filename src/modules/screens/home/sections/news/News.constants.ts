// Next
import { StaticImageData } from 'next/image';

// Assets
import app from 'assets/constants/news/app.png';
import appThumb from 'assets/constants/news/appThumb.png';
import ative from 'assets/constants/news/ative.png';
import ativeThumb from 'assets/constants/news/ativeThumb.png';
import communication from 'assets/constants/news/communication.png';
import communicationThumb from 'assets/constants/news/communicationThumb.png';
import concierge from 'assets/constants/news/concierge.png';
import conciergeThumb from 'assets/constants/news/conciergeThumb.png';
import condo from 'assets/constants/news/condo.png';
import condoThumb from 'assets/constants/news/condoThumb.png';
import delivery from 'assets/constants/news/delivery.png';
import deliveryThumb from 'assets/constants/news/deliveryThumb.png';
import insurance from 'assets/constants/news/insurance.png';
import insuranceThumb from 'assets/constants/news/insuranceThumb.png';
import report from 'assets/constants/news/report.png';
import reportThumb from 'assets/constants/news/reportThumb.png';
import security from 'assets/constants/news/security.png';
import securityThumb from 'assets/constants/news/securityThumb.png';
import social_network from 'assets/constants/news/social_network.png';
import social_networkThumb from 'assets/constants/news/social_networkThumb.png';
import tools from 'assets/constants/news/tools.png';
import toolsThumb from 'assets/constants/news/toolsThumb.png';


export interface listProps {
  id: number;
  title: string;
  body?: { [key: string]: string[] } | string[];
  other?: {
    [key: string]: {
      [subKey: string]: string[];
    };
  };
  paragraph: string;
  src: StaticImageData;
  srcFull: StaticImageData;
  alt: string;
  create_at: string;
  slug: string;
  emphasis?: boolean;
}

const list: listProps[] = [
  {
    // slug: 'news.list.indexOne.slug',
    slug: 'participate-in-the-management-of-your-condominium',
    id: 1,
    title: 'news.list.indexOne.title',
    paragraph: 'news.list.indexOne.paragraph',
    src: condoThumb,
    srcFull: condo,
    body: [
      'news.list.indexOne.body.one',
      'news.list.indexOne.body.two',
      'news.list.indexOne.body.three',
      'news.list.indexOne.body.four',
      'news.list.indexOne.body.five',
      'news.list.indexOne.body.six',
    ],
    alt: '',
    create_at: '2023-12-16t00:00:00',
  },
  {
    slug: 'activate-your-registration-and-explore-a-world-of-possibilities',
    // slug: 'news.list.indexTwo.slug',
    id: 2,
    title: 'news.list.indexTwo.title',
    paragraph: 'news.list.indexTwo.paragraph',
    src: ativeThumb,
    srcFull: ative,
    body: [
      'news.list.indexTwo.body.one',
      'news.list.indexTwo.body.two',
      'news.list.indexTwo.body.three',
      'news.list.indexTwo.body.four',
      'news.list.indexTwo.body.five',
    ],
    alt: '',
    create_at: '2023-12-22t00:00:00',
  },
  {
    slug: 'everything-in-one-single-application',
    // slug: 'news.list.indexThree.slug',
    id: 3,
    title: 'news.list.indexThree.title',
    paragraph: 'news.list.indexThree.paragraph',
    src: appThumb,
    srcFull: app,
    body: [
      'news.list.indexThree.body.one',
      'news.list.indexThree.body.two',
      'news.list.indexThree.body.three',
      'news.list.indexThree.body.four',
      'news.list.indexThree.body.five',
    ],
    alt: '',
    create_at: '2023-12-28t00:00:00',
  },
  {
    slug: 'security-in-the-palm-of-your-hand',
    // slug: 'news.list.indexFour.slug',
    id: 4,
    title: 'news.list.indexFour.title',
    paragraph: 'news.list.indexFour.paragraph',
    src: securityThumb,
    srcFull: security,
    body: [
      'news.list.indexFour.body.one',
      'news.list.indexFour.body.two',
      'news.list.indexFour.body.three',
      'news.list.indexFour.body.four',
      'news.list.indexFour.body.five',
      'news.list.indexFour.body.six',
      'news.list.indexFour.body.seven',
    ],
    alt: '',
    create_at: '2024-01-02t00:00:00',
  },
  {
    slug: 'your-package-has-arrived-update-the-pickup',
    // slug: 'news.list.indexFive.slug',
    id: 5,
    title: 'news.list.indexFive.title',
    paragraph: 'news.list.indexFive.paragraph',
    src: deliveryThumb,
    srcFull: delivery,
    body: [
      'news.list.indexFive.body.one',
      'news.list.indexFive.body.two',
      'news.list.indexFive.body.three',
      'news.list.indexFive.body.four',
      'news.list.indexFive.body.five',
      'news.list.indexFive.body.six',
      'news.list.indexFive.body.seven',
    ],
    alt: '',
    create_at: '2024-01-04t00:00:00',
  },
  {
    slug: 'something-unusual-happened-register-in-the-waiuru-app',
    // slug: 'news.list.indexSix.slug',
    id: 6,
    title: 'news.list.indexSix.title',
    paragraph: 'news.list.indexSix.paragraph',
    src: reportThumb,
    srcFull: report,
    body: [
      'news.list.indexSix.body.one',
      'news.list.indexSix.body.two',
      'news.list.indexSix.body.three',
      'news.list.indexSix.body.four',
      'news.list.indexSix.body.five',
      'news.list.indexSix.body.six',
    ],
    alt: '',
    create_at: '2024-01-06t00:00:00',
  },
  {
    slug: 'do-you-recognize-the-importance-of-the-doorman',
    // slug: 'news.list.indexSeven.slug',
    id: 7,
    title: 'news.list.indexSeven.title',
    paragraph: 'news.list.indexSeven.paragraph',
    src: conciergeThumb,
    srcFull: concierge,
    body: [
      'news.list.indexSeven.body.one',
      'news.list.indexSeven.body.two',
      'news.list.indexSeven.body.three',
      'news.list.indexSeven.body.four',
    ],
    alt: '',
    create_at: '2024-01-08t00:00:00',
  },
  {
    slug: 'home-security-a-worthy-asset',
    // slug: 'news.list.indexEight.slug',
    id: 8,
    title: 'news.list.indexEight.title',
    paragraph: 'news.list.indexEight.paragraph',
    src: insuranceThumb,
    srcFull: insurance,
    body: {
      'news.list.indexEight.body.stepOne.title': [
        'news.list.indexEight.body.stepOne.one',
        'news.list.indexEight.body.stepOne.two',
        'news.list.indexEight.body.stepOne.three',
        'news.list.indexEight.body.stepOne.four',
      ],
      'news.list.indexEight.body.stepTwo.title': [
        'news.list.indexEight.body.stepTwo.one',
        'news.list.indexEight.body.stepTwo.two',
      ],
      'news.list.indexEight.body.stepThree.title': [
        'news.list.indexEight.body.stepThree.one',
        'news.list.indexEight.body.stepThree.two',
      ],
    },
    other: {
      'news.list.indexEight.other.title': {
        'news.list.indexEight.other.explore.title': [
          'news.list.indexEight.other.explore.one',
          'news.list.indexEight.other.explore.two',
          'news.list.indexEight.other.explore.three',
        ],
      },
    },
    alt: '',
    create_at: '2024-01-16t00:00:00',
  },
  {
    slug: 'communication-and-technology-a-successful-partnership',
    // slug: 'news.list.indexNine.slug',
    id: 9,
    title: 'news.list.indexNine.title',
    paragraph: 'news.list.indexNine.paragraph',
    src: communicationThumb,
    srcFull: communication,
    body: [
      'news.list.indexNine.body.one',
      'news.list.indexNine.body.two',
      'news.list.indexNine.body.three',
      'news.list.indexNine.body.four',
      'news.list.indexNine.body.five',
    ],
    alt: '',
    create_at: '2024-01-26t00:00:00',
    emphasis: true,
  },
  {
    slug: 'technological-tools-enhance-everyday-tasks',
    // slug: 'news.list.indexTen.slug',
    id: 10,
    title: 'news.list.indexTen.title',
    paragraph: 'news.list.indexTen.paragraph',
    src: toolsThumb,
    srcFull: tools,
    body: [
      'news.list.indexTen.body.one',
      'news.list.indexTen.body.two',
      'news.list.indexTen.body.three',
      'news.list.indexTen.body.four',
      'news.list.indexTen.body.five',
      'news.list.indexTen.body.six',
    ],
    alt: '',
    create_at: '2024-02-06t00:00:00',
    emphasis: true,
  },
  {
    slug: 'integrated-social-network-for-condominiums-is-pioneering-solution-from-startup-waiuru',
    // slug: 'news.list.indexEleven.slug',
    id: 11,
    title: 'news.list.indexEleven.title',
    paragraph: 'news.list.indexEleven.paragraph',
    src: social_networkThumb,
    srcFull: social_network,
    body: [
      'news.list.indexEleven.body.one',
      'news.list.indexEleven.body.two',
      'news.list.indexEleven.body.three',
      'news.list.indexEleven.body.four',
      'news.list.indexEleven.body.five',
      'news.list.indexEleven.body.six',
      'news.list.indexEleven.body.seven',
      'news.list.indexEleven.body.eight',
      'news.list.indexEleven.body.nine',
      'news.list.indexEleven.body.ten',
      'news.list.indexEleven.body.eleven',
      'news.list.indexEleven.body.twelve',
      'news.list.indexEleven.body.thirteen',
      'news.list.indexEleven.body.fourteen',
      'news.list.indexEleven.body.fifteen',
    ],
    alt: '',
    create_at: '2024-03-16t00:00:00',
    emphasis: true,
  },
];

export { list };
