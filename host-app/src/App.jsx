import { mountRootParcel } from 'single-spa';
import Parcel from 'single-spa-react/parcel';

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Parcel
        mountParcel={mountRootParcel}
        config={() => window.System.import('http://localhost:3000/parcel.js')}
        wrapWith='div'
        wrapStyle={{ width: '100%', height: '400px' }}
      />
      <hr />
    </div>
  );
}

export default App;
