import { FC } from 'react';

interface Props {
  imgUrl?: string,
  imgLocation?: 'side',
  title?: string,
  channelTitle?: string,
  totalViews?: string,
  publishedAt?: string,
}

const Card: FC<Props> = ({ 
  imgUrl = 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  title = '',
  channelTitle = '',
  totalViews = '',
  publishedAt = '',
  imgLocation = ''
}) => {
  return (
    <div className={`card ${imgLocation === 'side' && 'card-side'}`}>
      <figure><img src={imgUrl} alt='' /></figure>
      <div className='card-body'>
        {/* Info */}
        <div>
          {/* Title */}
          <h2 className='card-title line-clamp-2'>{title}</h2>
          {/* Account name */}
          <p className='truncate'>{channelTitle}</p>
          {totalViews !== '' && publishedAt !== '' && (
            <p>{`${totalViews} Views}`} &bull; {publishedAt}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card