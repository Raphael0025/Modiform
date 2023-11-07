import {Auth} from 'Auth'
import { PageRoute } from 'Views';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App w-auto">
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/*' element={<PageRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
