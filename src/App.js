import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/products/ProductDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProduct from './components/products/CreateProducts'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/product/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProduct} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
