import Loader from 'react-js-loader';

export const AppLoader = () => {
  return (
    <div
      className="Loader"
      styles={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Loader
        type="spinner-cub"
        bgColor="transparent"
        color="black"
        size={100}
      />
    </div>
  );
};
