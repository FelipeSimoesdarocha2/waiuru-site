// Next
import { StaticImageData } from 'next/image';

// Assets
import Facebook from 'assets/icons/facebook.svg';
import Instagram from 'assets/icons/instagram.svg';
import Twitter from 'assets/icons/twitter.svg';

interface LinkData {
    url: string;
    alt: string;
    src: StaticImageData;
}

const listLink_PT: LinkData[] = [
    {
        url: 'https://www.facebook.com/people/Waiuru/61552242400510',
        src: Facebook,
        alt: 'Facebook_Icon',
    },
    {
        url: 'https://www.instagram.com/waiuru.oficial',
        src: Twitter,
        alt: 'Twitter_Icon',
    },
    {
        url: 'https://www.instagram.com/waiuru.oficial',
        src: Instagram,
        alt: 'Instagram_Icon',
    },
];

const listLink_EN: LinkData[] = [
    {
        url: 'https://www.facebook.com/people/Waiuru/61552242400510',
        src: Facebook,
        alt: 'Facebook_Icon',
    },
    {
        url: 'https://www.instagram.com/waiuru.oficial',
        src: Twitter,
        alt: 'Twitter_Icon',
    },
    {
        url: 'https://www.instagram.com/waiuruen/',
        src: Instagram,
        alt: 'Instagram_Icon',
    },
];

const listLink_ES: LinkData[] = [
    {
        url: 'https://www.facebook.com/people/Waiuru/61552242400510',
        src: Facebook,
        alt: 'Facebook_Icon',
    },
    {
        url: 'https://www.instagram.com/waiuru.oficial',
        src: Twitter,
        alt: 'Twitter_Icon',
    },
    {
        url: 'https://www.instagram.com/waiuru_paratodos/',
        src: Instagram,
        alt: 'Instagram_Icon',
    },
];

export { listLink_PT, listLink_EN, listLink_ES };
