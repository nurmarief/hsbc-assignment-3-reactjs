import { useState, FC, useEffect } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { MdVideoCall } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarToggleBtn from './SidebarToggleBtn';
import Avatar from './Avatar';
import Searchbar from './Searchbar';
import { FaArrowLeft } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { State as AuthState } from '../redux/features/authSlice';

const Navbar: FC = () => {
  const [isSearchbarActive, setIsSearchBarActive] = useState(false)
  const { avatarURL } = useSelector((state: any) => (state.auth as AuthState).me)

  const handleCloseIsSearchbarActive = () => {
    setIsSearchBarActive(false);
  }

  useEffect(() => {
    /* Close on resized window */
    window.addEventListener('resize', handleCloseIsSearchbarActive);

    /* Cleanup */
    return () => {
      window.removeEventListener('resize', handleCloseIsSearchbarActive);
    }
  }, [])
  
  return (
    <nav className='navbar gap-2'>
      {
        !isSearchbarActive ? (
          <>
            {/* Left group */}
            <div className='navbar-start gap-2'>
              {/* Sidebar toggle btn */}
              <SidebarToggleBtn id='universal-sidebar' />
              {/* Youtube icon */}
              <Link to='/' className='w-28'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' alt='Logo' />
              </Link>
            </div>
            {/* Center group */}
            <div className='navbar-center gap-2'>
              {/* Search video */}
              <div className='hidden md:block w-96'>
                <Searchbar />
              </div>              
            </div>
            {/* Right group */}
            <div className='navbar-end gap-2'>
              {/* Activate search bar */}
              <button 
                className='inline-flex md:hidden btn btn-circle btn-ghost text-2xl' 
                aria-label='Search video'
                onClick={() => setIsSearchBarActive(prev => !prev)}
              ><HiOutlineMagnifyingGlass /></button>
              {/* Add video */}
              <button className='btn btn-circle btn-ghost text-2xl' aria-label='Add video'><MdVideoCall /></button>
              {/* Notification */}
              <button className='hidden md:block btn btn-circle btn-ghost text-2xl' aria-label='Show notifications'>
                <div className='indicator'>
                  <p className='indicator-item badge badge-error'>99+</p> 
                  <FaRegBell />
                </div>
              </button>
              {/* Avatar */}
              <button className='btn btn-circle btn-ghost overflow-hidden' aria-label='Show profile'>
                <Avatar imgUrl={avatarURL} imgAlt='User avatar' size='md'/>
              </button>
            </div>
          </>
        ) : (
          <div className='grow flex gap-2'>
            <button 
              className='btn btn-circle btn-ghost' 
              aria-label='Close search bar'
              onClick={() => {
                setIsSearchBarActive(prev => !prev)
              }}
            >
              <FaArrowLeft />
            </button>
            <Searchbar focusInput={isSearchbarActive} />
          </div>
        )
      }
      
    </nav>
  )
}

export default Navbar