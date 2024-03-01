import { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import { GoSmiley } from "react-icons/go";

const InputComment = () => {
  const initialCommentState = {
    commentText: '',
    showAction: false,
  }
  const [commentState, setCommentState] = useState(initialCommentState)
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    /* Cleanup */
    return () =>{
      setCommentState(initialCommentState);
    }
  }, [])

  return (
    <div className='w-full flex gap-2'>
      {/* Left */}
      <div className='shrink-0'>
        <Avatar />
      </div>
      {/* Right */}
      <div className='grow'>
        {/* Top */}
        <div>
          {/* Text area */}
          <div 
            className="min-h-4 max-w-full break-all p-2" 
            ref={inputRef} 
            contentEditable={true}
            onFocus={() => setCommentState(prev => ({...prev, showAction: true}))}
            onKeyUp={(e) => setCommentState(prev => ({...prev, commentText: (e.target as HTMLElement).textContent || ''}))}
          >
          </div>
          <hr></hr>
          <br></br>
        </div>
        {/* Bottom */}
        {
          commentState.showAction && (
            <div className='flex gap-2 justify-between items-center'>
              {/* Left */}
              <button className='btn btn-circle'><GoSmiley /></button>
              {/* Right */}
              <div className="join">
                <button className='btn rounded-full' onClick={() => setCommentState(initialCommentState)}>Cancel</button>
                <button className='btn rounded-full'>Send</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default InputComment