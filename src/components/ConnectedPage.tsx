import Offline from './Offline';

export const ConnectedPage: React.FC = () => {
  return (
    <div className="container">
      <h1>Test připojení</h1>
      <Offline />
    </div>
  );
};

export default ConnectedPage;
