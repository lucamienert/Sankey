import './App.scss';

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import SankeyDiagram from './components/Sankey';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Sidebar>
        <div className="content-wrapper d-flex flex-column flex-grow-1 global-background">
          <div className="content flex-grow-1">
            <h1>Welcome to the Dashboard</h1>
            
            <SankeyDiagram />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;