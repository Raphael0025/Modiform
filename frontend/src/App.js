import { UserAuth } from 'Pages/Auth'
import { ContainerPage } from 'Views/ContainerPage'
import "react-loading-skeleton/dist/skeleton.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App w-auto">
        <Routes>
          <Route path='/' element={<UserAuth />} />
          {/* Nested Routing Configuration from ContainerPage */}
          <Route path='/modiform/*' element={<ContainerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
