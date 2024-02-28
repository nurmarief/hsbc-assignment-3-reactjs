import { FC } from 'react';

interface Props {
  imgUrl: String;
  imgAlt?: String;
  size?: 'sm' | 'md';
}

const Avatar: FC<Props> = (props) => {
  return (
    <img 
      className={`avatar rounded-full ${props.size === 'md' ? 'w-10' : 'w-6'}`} 
      src={`${props.imgUrl}`} 
      alt={`${props.imgAlt}`}
    />
  )
}

export default Avatar