import { FC } from "react"
import MenuList, { ListMenu } from "../components/MenuList"
import { IoMdHome } from "react-icons/io"
import { SiYoutubeshorts } from "react-icons/si"
import { MdSubscriptions } from "react-icons/md"
import { GoVideo } from "react-icons/go"

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

interface Props {
  children?: JSX.Element
}

const MainContent: FC<Props> = ({ children }) => {
  return (
    <div className='w-full flex'>
      <div className='hidden md:block shrink-0'>
        <MenuList listMenu={sidebarPageContentMenu} gap='md' />
      </div>
      <div className='grow p-2'>
        {children && children}
      </div>
    </div>
  )
}

export default MainContent