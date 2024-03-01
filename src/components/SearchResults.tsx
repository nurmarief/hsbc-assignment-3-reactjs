import Card from './Card';
import { Link } from 'react-router-dom';
import { useGetVideosByKeywordsQuery } from '../redux/api/videos';
import { FC } from 'react';

interface Props {
  query?: string
}

const SearchResults: FC<Props> = ({ query = '' }) => {
  const { data } = useGetVideosByKeywordsQuery({maxResult: 25, q: query});
  
  return (
    <div className='space-y-4'>
      {data?.items?.map((item: any, index: number) => (
        <Link key={index} to={`/watch?v=${item.id.videoId}`} className='block'>
          <Card 
            title={item.snippet.title} 
            imgUrl={item.snippet.thumbnails.medium.url} 
            channelTitle={item.snippet.channelTitle} 
            imgLocation='side'
          />
        </Link>
      ))}
    </div>
  )
}

export default SearchResults