// Next
import { StaticImageData } from 'next/image';

export interface CardNewsProps {
  id: string;
  title: string;
  paragraph: string;
  src?: StaticImageData;
  alt: string;
  create_at: string;
  className?: string;
}
