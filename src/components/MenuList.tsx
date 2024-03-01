import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem, {Props as MenuItemType} from './MenuItem';

export type ListMenu = Array<MenuItemType>

interface Props {
  listMenu: ListMenu;
  gap?: 'sm' | 'md',
  direction?: 'col' | 'row',
}

const MenuList: React.FC<Props> = ({ listMenu, gap = 'sm', direction = 'col' }) => {
  return (
    <>
      <ul className={`
        flex
        ${direction === 'col' ? 'flex-col' : ''} 
        ${gap === 'md' ? 'gap-4': gap === 'sm' ? 'gap-2': ''} 
        overflow-auto
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300
        `
      }>
        {listMenu.map((menu, index) => (
          <li key={index}>
            <Link to='/' className='btn btn-ghost justify-start w-full'>
              <MenuItem text={menu.text} icon={menu.icon} reverse={menu.reverse} standout={menu.standout} oneLine={menu.oneLine} textSize={menu.textSize} />
            </Link>
          </li>
        ))}
      </ul>
      <hr></hr>
      <br></br>
    </>
  )
}

export default MenuList