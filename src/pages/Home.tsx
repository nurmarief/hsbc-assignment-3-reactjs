import React from 'react';
import Feed from '../components/Feed';
import { IoMdHome } from 'react-icons/io';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { GoVideo } from 'react-icons/go';
import MenuList, {ListMenu} from '../components/MenuList';
import CategoryRecommendation from '../components/CategoryRecommendation';

/* Dummy data */
const sidebarPageContentMenu: ListMenu = [
  {
    text: 'Home', 
    icon: <IoMdHome />,
    oneLine: false,
    textSize: 'sm',
  },
  {
    text: 'Shorts', 
    icon: <SiYoutubeshorts />,
    oneLine: false,
    textSize: 'sm',
  },
  {
    text: 'Subscription', 
    icon: <MdSubscriptions />,
    oneLine: false,
    textSize: 'sm',
  },
  {
    text: 'For You', 
    icon: <GoVideo />,
    oneLine: false,
    textSize: 'sm',
  },
]

const Home: React.FC = () => {
  return (
    <div className='w-full flex'>
      <div className='hidden md:block shrink-0'>
        <MenuList listMenu={sidebarPageContentMenu} gap='md' />
      </div>
      <div className='w-full p-2 overflow-auto'>
        <CategoryRecommendation />
        <Feed />
      </div>
    </div>
  )
}

export default Home