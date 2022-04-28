import ContentLoader from 'react-content-loader';

const CardLoader = () => {
  return (
    <div className="card-loader-container">
      <ContentLoader
        height={250}
        width={600}
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
      >
        <circle cx="244" cy="180" r="38" />
        <rect x="304" y="151" rx="3" ry="3" width="158" height="7" />
        <rect x="304" y="186" rx="3" ry="3" width="191" height="6" />
      </ContentLoader>
    </div>
  );
};

CardLoader.metadata = {
  name: 'Rituraj ratan',
  github: 'riturajratan',
  description: 'Listing with thumbnail',
  filename: 'ListingWithThumbnail',
};

export default CardLoader;
