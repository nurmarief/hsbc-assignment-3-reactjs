import { Link } from 'react-router-dom'

const VideoNotFound = () => {
  return (
    <div className='w-full h-screen flex gap-4 flex-col items-center justify-center'>
      <img src='https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png' alt=''></img>
      <p className='text-3xl'>The video is not available</p>
      <Link to='/' className='btn'>Back to home</Link>
    </div>
  )
}

export default VideoNotFound