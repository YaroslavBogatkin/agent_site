import {Routes, Route} from 'react-router-dom';
import Main from './components/pages/Main';
import Pages from './components/pages/Pages';
import Services from './components/pages/Services'


function App() {
  return (
    <Routes>
    	<Route index element={<Main/>}/>
      <Route path='/Pages' element={<Pages/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>

  );
}

export default App
