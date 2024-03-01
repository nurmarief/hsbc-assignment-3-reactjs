import { FC } from 'react';
import Avatar from './Avatar';

export interface Props {
  text?: string,
  icon?: JSX.Element | string,
  reverse?: boolean,
  standout?: boolean,
  oneLine?: boolean,
  textSize?: 'sm' | 'md' | 'lg',
}

const MenuItem: FC<Props> = ({
  text, 
  icon, 
  reverse = false, 
  standout = false, 
  oneLine = true, 
  textSize = 'lg'
}) => {
  let content;
  const iconEl = (
    <>
      {
        typeof icon === 'string' ? (
          <Avatar imgUrl={icon}/>
        ) : (
          <div className='flex items-center text-2xl'>{icon}</div>
        )
      }
    </>
  );
  const textEl = <p className={`
    ${standout && 'font-bold'}
    ${textSize === 'sm' ? 'text-xs' : textSize === 'md' ? 'text-lg' : 'text-xl' }
  `}>{`${text}`}</p>;

  /* Arrange text and icon based on the reverse parameter */
  if(!reverse) {
    content = (
      <>
        {iconEl}
        {textEl}
      </>
    )
  } else {
    content = (
      <>
        {textEl}
        {iconEl}
      </>
    )
  }
  
  return (
    <div className={`
      flex w-full
      ${icon && text && oneLine && 'gap-4'}
      ${!oneLine ? 'flex-col items-center': 'items-center'}
    `}>
      { content }
    </div>
  )
}

export default MenuItem