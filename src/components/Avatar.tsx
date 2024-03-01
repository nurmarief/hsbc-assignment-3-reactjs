import { FC } from 'react';

interface Props {
  imgUrl?: string;
  imgAlt?: string;
  size?: 'sm' | 'md';
}

const Avatar: FC<Props> = ({
  imgUrl = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
  imgAlt = '',
  size = 'sm',
}) => {
  return (
    <img 
      className={`avatar rounded-full ${size === 'md' ? 'w-10' : 'w-6'}`} 
      src={`${imgUrl}`} 
      alt={`${imgAlt}`}
    />
  )
}

export default Avatar