
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Chat} from './components/Chat' 
import {Home} from './components/Home'

function App() {
  return (
    <BrowserRouter>
        <Route path='/chat' component={Chat}/>
        <Route exact path='/' component={Home}/>
    </BrowserRouter>
  );
}

export default App;
