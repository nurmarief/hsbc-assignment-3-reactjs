import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { GiConsoleController } from 'react-icons/gi';
import { CiTrophy } from 'react-icons/ci';
import { CiMusicNote1 } from 'react-icons/ci';
import { FaRegNewspaper } from 'react-icons/fa';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { Props as MenuItemProps } from './MenuItem';
import { LuUserSquare } from 'react-icons/lu';
import { FaHistory } from 'react-icons/fa';
import { GoVideo } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { FaYoutube } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutubeKids } from 'react-icons/tb';
import { FaGear } from 'react-icons/fa6';
import { CiFlag1 } from 'react-icons/ci';
import { CiCircleQuestion } from 'react-icons/ci';
import { BsChatLeftQuote } from 'react-icons/bs';
import { FaFireAlt } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import Avatar from './Avatar';
import MenuList from './MenuList';

/* Dummy data */
const generalMenu: Array<MenuItemProps> = [
  {
    text: 'Home',
    icon: <IoMdHome />
  },
  {
    text: 'Shorts',
    icon: <SiYoutubeshorts />
  },
  {
    text: 'Subscription',
    icon: <MdSubscriptions />
  }
];

const personalMenu: Array<MenuItemProps> = [
  {
    text: 'Your Account',
    icon: <IoIosArrowForward />,
    reverse: true,
    standout: true,
  },
  {
    text: 'Your Channel',
    icon: <LuUserSquare />
  },
  {
    text: 'History',
    icon: <FaHistory />
  },
  {
    text: 'Your Video',
    icon: <GoVideo />
  },
  {
    text: 'Watch Later',
    icon: <BsClock />
  },
  {
    text: 'Liked Videos',
    icon: <AiFillLike />
  }
];

const subscriptionMenu: Array<MenuItemProps> = [
  {
    text: 'Subscription',
    standout: true,
  },
  {
    text: 'account-1',
    icon: <Avatar imgUrl='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' imgAlt='account-1' />
  },
  {
    text: 'account-2',
    icon: <Avatar imgUrl='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' imgAlt='account-2' />
  },
  {
    text: 'account-3',
    icon: <Avatar imgUrl='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' imgAlt='account-3' />
  },
  {
    text: 'account-4',
    icon: <Avatar imgUrl='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' imgAlt='account-4' />
  },
  {
    text: 'account-5',
    icon: <Avatar imgUrl='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' imgAlt='account-5' />
  },
];

const explorationMenu: Array<MenuItemProps> = [
  {
    text: 'Exploration',
    standout: true,
  }, 
  {
    text: 'Trending',
    icon: <FaFireAlt />
  }, 
  {
    text: 'Music',
    icon: <CiMusicNote1 />
  },
  {
    text: 'Movie',
    icon: <MdMovie />
  },
  {
    text: 'Game',
    icon: <GiConsoleController />
  },
  {
    text: 'News',
    icon: <FaRegNewspaper />
  },
  {
    text: 'Sports',
    icon: <CiTrophy />
  }
];

const alsoFromYoutubeMenu: Array<MenuItemProps> = [
  {
    text: 'Also from YouTube',
    standout: true,
  },
  {
    text: 'YouTube Premium',
    icon: <FaYoutube />,
  },
  {
    text: 'YouTube Studio',
    icon: <SiYoutubestudio />,
  },
  {
    text: 'Youtube Music',
    icon: <SiYoutubemusic />,
  },
  {
    text: 'Youtube Kids',
    icon: <TbBrandYoutubeKids />,
  },
];

const optionMenu: Array<MenuItemProps> = [
  {
    text: 'Setting',
    icon: <FaGear />
  },
  {
    text: 'Report History',
    icon: <CiFlag1 />,
  },
  {
    text: 'Help',
    icon: <CiCircleQuestion />,
  },
  {
    text: 'Suggestions',
    icon: <BsChatLeftQuote />,
  },
];

interface Props {
  id: string,
  pageContent?: JSX.Element,
}

const Sidebar: React.FC<Props> = (props) => {
  return (
    <div className='drawer'>
      {/* Checkbox to toggle sidebar, will not showed */}
      <input id={props.id} type='checkbox' className='drawer-toggle' />

      {props.pageContent && (
        <div className='p-2'>
          {/* Page content here */}
          { props.pageContent }
        </div> 
      )}
      
      {/* Sidebar main content */}
      <div className='drawer-side' style={{zIndex: 999, position: 'absolute'}}>
        {/* Overlay to close sidebar */}
        <label htmlFor={props.id}  aria-label='close sidebar' className='drawer-overlay'></label>
        {/* Sidebar menu */}
        <div className='menu flex-nowrap w-80 h-screen bg-base-200 text-base-content overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300'>
          {/* General menu */}
          <div className='shrink-0'>
            <MenuList listMenu={generalMenu} />
            {/* Personal menu */}
            <MenuList listMenu={personalMenu} />
            {/* Subscription menu */}
            <MenuList listMenu={subscriptionMenu} />
            {/* Exploration menu */}
            <MenuList listMenu={explorationMenu} />
            {/* Also from youtube */}
            <MenuList listMenu={alsoFromYoutubeMenu} />
            {/* Option menu */}
            <MenuList listMenu={optionMenu} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar