import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/molecule/Header/Header';
import Home from './pages/Home/Home';

function Routes() {
  return (
    <Router>
        <Header/>
        <Route path="/" element={<Home />} />
    </Router>
  );
}

export default Routes;
