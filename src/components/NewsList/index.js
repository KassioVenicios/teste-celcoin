import { useSelector } from 'react-redux';
import News from '../News';
import {
  NewsListContainer
} from './styles';

function NewsList() {

  const news = useSelector(state => state.news);

  return (
    <NewsListContainer>
      {
        news.map(item => <News key={item.id} news={item} />)
      }
    </NewsListContainer>
  );
}

export default NewsList;
