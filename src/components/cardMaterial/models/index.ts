// Next
import { StaticImageData } from 'next/image';

export interface CardMaterialProps {
  id: number;
  name: string;
  profession: string;
  paragraph: string;
  src: StaticImageData;
}
