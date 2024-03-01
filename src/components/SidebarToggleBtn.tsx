import { FC } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface Props {
  id: string,
}

const SidebarToggleBtn: FC<Props> = (props) => {
  /* NOTE: When label element is clicked, the corresponding checkbox linked with id-html for will be toggled */
  return (
    <label htmlFor={props.id} className='drawer-button btn btn-ghost text-2xl'>
      <RxHamburgerMenu />
    </label>
  )
}

export default SidebarToggleBtn