import '../App.scss'

import Sidebar from '../components/Sidebar'
import SankeyDiagram from '../components/Sankey'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 bgrnd">
        <Sidebar>
          <div className="content-wrapper d-flex flex-column flex-grow-1 global-background">
            <div className="content flex-grow-1">
              <h1>Welcome to the Dashboard</h1>
              
              <SankeyDiagram />
            </div>
          </div>
        <Outlet />
        </Sidebar>
      </div>
    </>
  )
}

export default Root