import logo from "./logo.svg";
import "./App.css";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import ListUser from "./Users/ListUser";
import UserDetail from "./Users/UserDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/user" exact >
              <ListUser />
            </Route>
            <Route path="/user/:id" >
              <UserDetail />
            </Route>
            
          </Switch>
        </header>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
