import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts);
  console.log(posts);

  const renderedPosts = posts.map(post => {
    return (
      <article>
        <h3>{post.title}</h3>
        <p className='post-content'>{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
