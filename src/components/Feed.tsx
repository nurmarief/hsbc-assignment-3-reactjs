import { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { convertToHumanFriendlyCount } from '../utils/converter';
import moment from 'moment';
import { useGetVideosByCategoryIdQuery } from '../redux/api/videos';

interface Props {
  videoCategoryId?: number,
  cardImageLocation?: 'side',
}

const Feed: FC<Props> = ({ videoCategoryId = 0, cardImageLocation }) => {
  const { data } = useGetVideosByCategoryIdQuery({maxResult: 25, videoCategoryId })
  
  return (
    <div className='flex flex-wrap gap-4'>
      {(data?.items as any[])?.map((item, index) => (
        <Link key={index} to={`/watch?v=${item.id}`}>
          {/* Card */}
          <div className='min-w-80 max-w-96'>
            <Card 
              title={item.snippet.title} 
              imgUrl={item.snippet.thumbnails.medium.url} 
              channelTitle={item.snippet.channelTitle} 
              totalViews={convertToHumanFriendlyCount(item.statistics.viewCount)} 
              publishedAt={moment(item.snippet.publishedAt).fromNow()}
              imgLocation={cardImageLocation} 
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Feed