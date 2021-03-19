import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddStudent from "./components/AddStudent/AddStudent";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Student from "./components/Student/Student";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/student'>
          <Student></Student>
        </Route>
        <Route path='/createStudent'>
          <CreateStudent></CreateStudent>
        </Route>
        <Route path='/addStudent'>
          <AddStudent></AddStudent>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
