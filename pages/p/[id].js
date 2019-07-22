import Layout from '../../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const Post = props => {
  const { show = {} } = props;
  const { name = '', summary = '', image = {} } = show;
  const { medium = '' } = image;
  const imgSrc = medium.replace('http', 'https');

  return (
    <Layout>
      <h1>{name}</h1>
      <p>{summary && summary.replace(/<[/]?p>/g, '')}</p>
      <img src={imgSrc} />
    </Layout>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
