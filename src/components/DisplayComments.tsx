import { FC } from "react";
import Avatar from "./Avatar";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

interface Data {
  accountName?: string,
  accountAvatar?: string,
  publishedAt?: string,
  likeCount?: string,
  displayText?: string,
}

interface Props {
  data?: Array<Data>,
}

const DisplayComments: FC<Props> = ({ data = [] }) => {
  return (
    <>
      { data.length === 0 ? <></> : data.map(({
        accountName = '',
        accountAvatar = '',
        publishedAt = '',
        likeCount = '',
        displayText = '',
      }, index) => (
        <div key={index} className="flex gap-2">
          {/* left */}
          <div className='shrink-0'>
            <Avatar imgUrl={accountAvatar} />
          </div>
          {/* right */}
          <div className="break-all">
            {/* Account name and comment time */}
            <p>
              <span className='font-bold'>{accountName}
              </span>&nbsp;<span>{publishedAt}</span>
            </p>
            {/* Comment content */}
            <pre className='whitespace-pre-line'>{displayText}</pre>
            <div className='join'>
              <button className='btn btn-circle btn-ghost'><AiFillLike /> {likeCount}</button>
              <button className='btn btn-circle btn-ghost'><AiFillDislike /></button>
              <button className='btn btn-ghost'>Reply</button>
            </div>
          </div>
        </div>
      )) }
    </>
  )
}

export default DisplayComments