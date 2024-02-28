import Avatar from './Avatar';

const Card = () => {
  return (
    <div className='card'>
      <figure><img src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' /></figure>
      <div className='card-body'>
        <div className='flex gap-4'>
          {/* Account avatar  */}
          <div className='self-start shrink-0'>
            <Avatar size='md' imgUrl='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' imgAlt='account-1'/>
          </div>
          {/* Info */}
          <div>
            {/* Title */}
            <h2 className='card-title line-clamp-2'>Lorem ipsum dolor sit amet con adipisicing elit. Excepturi necessitatibus nostrum quibusdam sed placeat commodi, facilis ab perspiciatis repellat distinctio totam officiis laudantium unde soluta impedit assumenda veniam recusandae dolore!</h2>
            {/* Account name */}
            <p className='truncate'>Channel one</p>
            <p>100 rb x ditonton &bull; 15 jam yang lalu</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card