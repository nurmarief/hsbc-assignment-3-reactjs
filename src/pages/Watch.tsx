import ReactPlayer from 'react-player/lazy';
import Feed from '../components/Feed';
import Avatar from '../components/Avatar';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { FaScissors } from "react-icons/fa6";
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { PiListPlusFill } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";
import InputComment from '../components/InputComment';
import DisplayComments from '../components/DisplayComments';
import { useSearchParams } from 'react-router-dom';
import { useGetVideoByIdQuery, useGetVideoCommentsQuery } from '../redux/api/videos';
import VideoNotFound from '../components/VideoNotFound';
import { convertToHumanFriendlyCount } from '../utils/converter';
import moment from 'moment';

const Video = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  const {data} = useGetVideoByIdQuery({ id: videoId})
  const {data: commentData} = useGetVideoCommentsQuery({ id: videoId })
  
  return (
    <>
      {
        data?.items?.length === 0 ? <VideoNotFound /> :
        <div className='max-w-screen-2xl mx-auto p-4 flex justify-between'>
        {/* Left */}
        <div className='w-full lg:w-8/12'>
          {/* Video player and info */}
          <div className='card w-full'>
            {/* Video player */}
            <div className='rounded-lg w-full h-72 md:h-96 overflow-hidden'>
              <ReactPlayer 
                url={`https://youtube.com/watch?v=${videoId}`}
                controls={true} 
                width='100%'
                height='100%'
              />
            </div>
            {/* Video info */}
            <div className='card-body px-0'>
              {/* Title */}
              <h2 className='card-title'>{data?.items[0]?.snippet.title}</h2>
              <br></br>
              {/* Actions */}
              <div className='flex flex-wrap space-y-2 justify-between'>
                {/* Left */}
                <div className='flex gap-4'>
                  {/* Channel info */}
                  <div className='flex gap-2'>
                    <div className='shrink-0'>
                      <Avatar />
                    </div>
                    <div>
                      <p className='font-bold'>{data?.items[0]?.snippet.channelTitle}</p>
                      <p>22,7 Jt subscriber</p>
                    </div>
                  </div>
                  {/* Subscribe btn */}
                  <button className='btn'>Subscribe</button>
                </div>
                {/* Right */}
                <div className='flex gap-2'>
                  {/* Like and dislike button */}
                  <div className='rounded-full flex flex-nowrap overflow-hidden'>
                    <button className='btn'><AiFillLike /> {convertToHumanFriendlyCount(data?.items[0]?.statistics.likeCount)}</button>
                    <button className='btn'><AiFillDislike /></button>
                  </div>
                  {/* Share btn */}
                  <button className='btn rounded-full'><FaShare /> Share</button>
                  {/* Download btn */}
                  <button className='hidden xl:inline-flex btn rounded-full'><AiOutlineDownload /> Download</button>
                  {/* Clip btn */}
                  <button className='hidden xl:inline-flex btn rounded-full'><FaScissors /></button>
                  {/* Other menu btn */}
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <button className="btn btn-circle"><IoEllipsisHorizontalSharp /></button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li className='md:hidden btn flex flex-row justify-start' role='button'><span className='text-2xl'><AiOutlineDownload /></span>Download</li>
                      <li className='md:hidden btn flex flex-row justify-start' role='button'><span className='text-2xl'><FaScissors /></span>Clip</li>
                      <li className='btn flex flex-row justify-start' role='button'><span className='text-2xl'><PiListPlusFill  /></span> Save</li>
                      <li className='btn flex flex-row justify-start' role='button'><span className='text-2xl'><CiFlag1  /></span>Report</li>
                    </ul>
                  </div>
                </div>

              </div>
              <br></br>
              {/* Description */}
              <div className='bg-gray-700 p-4 rounded-lg'>
                <p>{convertToHumanFriendlyCount(data?.items[0]?.statistics.viewCount)} Views {moment(data?.items[0]?.snippet.publishedAt).fromNow()}</p>
                <br></br>
                <pre className='whitespace-pre-line'>{data?.items[0]?.snippet.description}</pre>
              </div>
            </div>
          </div>
          <br></br>
          {/* Comments and recommendation */}
          <div className='w-full'>
            <InputComment />
            <br></br>
            <DisplayComments data={commentData} />

            <div className='lg:hidden'>
              <br></br>
              <Feed 
                cardImageLocation='side' 
                videoCategoryId={Number(data?.items[0]?.snippet?.categoryId)} 
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='hidden lg:block lg:w-4/12 pl-8 overflow-auto'>
          <Feed 
            cardImageLocation='side' 
            videoCategoryId={Number(data?.items[0]?.snippet?.categoryId)} 
          />
        </div>
        </div>
      }
    </>
  )
}

export default Video