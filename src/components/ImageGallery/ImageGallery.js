import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, handlePreview }) => {
  const renderGallery = () =>
    images.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        className={s.ImageGalleryItem}
        key={id}
        tags={tags}
        smImage={webformatURL}
        onClick={() => handlePreview(id)}
      />
    ));

  return (
    <div>
      <ul className={s.ImageGallery}>{images ? renderGallery() : null}</ul>
    </div>
  );
};

ImageGallery.propTypes = {
  handlePreview: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
