import { FC, useEffect, useRef } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

interface Props {
  focusInput?: Boolean;
}

const Searchbar: FC<Props> = ({ focusInput }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    focusInput && inputRef.current!.focus();
  }, [focusInput]);
  
  return (
    <div className='w-full flex gap-2'>
      {/* Search bar */}
      <div className='input input-bordered rounded-full w-full px-0 flex items-center gap-2 overflow-hidden'>
        <input ref={inputRef} type='text' className='grow px-4' placeholder='Search' />
        <button className='btn btn-square text-xl' aria-label='Search'>
          <HiOutlineMagnifyingGlass />
        </button>
      </div>
      {/* Search by voice btn */}
      <button className='btn btn-circle text-xl' aria-label='Activate voice search'>
        <FaMicrophone />
      </button>
    </div>
  )
}

export default Searchbar