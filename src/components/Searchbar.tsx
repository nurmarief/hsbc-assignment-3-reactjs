import { FC, FormEvent, useEffect, useRef, useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { cleanQueryString } from '../utils/cleaner';

interface Props {
  focusInput?: boolean;
}

const Searchbar: FC<Props> = ({ focusInput }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if(query.trim() !== '') {
      setQuery('')
      navigate(`/results?search_query=${cleanQueryString(query)}`)
    }
  }
  
  useEffect(() => {
    focusInput && inputRef.current!.focus();

    /* Cleanup */
    return () => {
      setQuery('')  
    }
  }, [focusInput])
  
  return (
    <div className='w-full flex gap-2'>
      {/* Search bar */}
      <form
        className='grow'
        onSubmit={handleSubmit} 
      >
        <div className='input input-bordered rounded-full w-full px-0 flex items-center gap-2 overflow-hidden'>
          <input 
            ref={inputRef} 
            type='text' 
            className='grow px-4' 
            placeholder='Search' 
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
            value={query}
          />
          <button 
            className='btn btn-square text-xl' 
            aria-label='Search'
            type='submit'
          >
            <HiOutlineMagnifyingGlass />
          </button>
        </div>
      </form>
      {/* Search by voice btn */}
      <button className='btn btn-circle text-xl' aria-label='Activate voice search'>
        <FaMicrophone />
      </button>
    </div>
  )
}

export default Searchbar