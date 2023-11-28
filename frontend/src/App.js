import { UserAuth, AdminAuth } from 'Pages/Auth'
import { ContainerPage, PageRoute } from 'Views'
import "react-loading-skeleton/dist/skeleton.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App w-auto">
        <Routes>
          <Route path='/' element={<UserAuth />} />
          <Route path='/auth' element={<AdminAuth/>} />
          {/* Nested Routing Configuration from ContainerPage */}
          <Route path='/modiform/*' element={<ContainerPage />} />
          <Route path='/admin/*' element={<PageRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
