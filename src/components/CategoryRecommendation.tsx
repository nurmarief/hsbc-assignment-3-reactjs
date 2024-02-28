import MenuList, {ListMenu} from './MenuList';

/* Dummy data */
const categoryList: ListMenu = [
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
  {
    text: 'all'
  },
  {
    text: 'news'
  },
  {
    text: 'music'
  },
  {
    text: 'game'
  },
  {
    text: 'animation',
  },
];

const CategoryRecommendation = () => {
  return (
    <MenuList listMenu={categoryList} direction='row' />
  )
}

export default CategoryRecommendation