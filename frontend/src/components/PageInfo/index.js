import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const PageInfo = ({ title, description, type, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

PageInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOfType(['website', 'article', 'profile']).isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PageInfo;
