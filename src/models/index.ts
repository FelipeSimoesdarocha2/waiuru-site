import { StaticImageData } from 'next/image';

export interface FormProps {
  name: string;
  city: string;
  email: string;
  phone: string;
  total_units: string;
  affiliate: string;
  registration_type: RegistrationType;
}

export interface ContactFormProps {
  name: string;
  email: string;
  phone: string;
  description: string;
  registration_type: RegistrationType;
}

export interface RegisterFormProps {
  condominium_name: string;
  city: string;
  email: string;
  phone: string;
  total_units: string;
  affiliate: string;
}

export interface NewsProps {
  email: string;
  registration_type: RegistrationType;
}

export interface SectionProps {
  mobile?: boolean;
  title?: string;
  summary?: string;
  body?: { [key: string]: string[] } | string[];
  other?: {
    [key: string]: {
      [subKey: string]: string[];
    };
  };
  create_at?: string;
}

export interface OurSolutionsAboutProps {
  id: number;
  name: string;
  src?: StaticImageData;
}

export interface TechnologyProps {
  id: number;
  name: string;
  description: string;
  photo: StaticImageData;
}

export interface OurSolutionsProps {
  src: StaticImageData;
  width?: number;
  paragraph: string;
  action: {
    label: string;
    link: string;
  };
}

export interface CardSolutionsProps {
  data: {
    id: number;
    title: string;
    sub_title: string;
    paragraph: string;
    image: {
      src: StaticImageData;
      alt: string;
    };
    video?: {
      src: string;
      lng: string;
    }[];
    action: {
      label: string;
    };
  }[];
}

export interface NewsDto {
  create_at: string;
  title: string;
  description: string;
}

export enum ToastTypeEnum {
  ERROR = 'error',
  WARN = 'warn',
  SUCCESS = 'success',
  EMPTY = '',
}

export enum RegistrationType {
  REGISTER = 'REGISTER',
  DEMONSTRATION = 'DEMONSTRATION',
  CONTACT = 'CONTACT',
  NEWSLETTER = 'NEWSLETTER',
}

export enum Months {
  January = 'months.january',
  February = 'months.february',
  March = 'months.march',
  April = 'months.april',
  May = 'months.may',
  June = 'months.june',
  July = 'months.july',
  August = 'months.august',
  September = 'months.september',
  October = 'newsmonths.october',
  November = 'months.jovember',
  December = 'months.december',
}
