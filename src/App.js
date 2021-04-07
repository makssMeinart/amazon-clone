import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Header from "./components/Header/Header"
import Cart from "./components/Cart/Cart"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* Cart */}
          <Route path="/cart">
            <Cart />
          </Route>
          {/* Login */}
          <Route path="/login">
            <Login />
          </Route>
          {/* Home */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>        
        
      </div>
    </Router>
  )
}

export default App
