import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

/* Dummy data */
const cardData: Array<Number> = [];
for(let i = 0; i < 20; i++) {
  cardData.push(i);
}

const Feed: React.FC = () => {
  
  return (
    <div className='flex flex-wrap gap-4'>
      {cardData.map((_, index) => (
        <Link key={index} to='video/sports/shoes'>
          {/* Card */}
          <div className='min-w-80 max-w-96'>
            <Card />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Feed