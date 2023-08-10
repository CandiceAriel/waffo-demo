import Header from './components/header.jsx'
import Home from './views/home.jsx';

import { PageRoutes } from './routes/index.js';

function App() {
  return (
    <div className="App">
      <Header />
      <PageRoutes />
    </div>
  );
}

export default App;
