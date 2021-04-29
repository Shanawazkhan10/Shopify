import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Homepage from "./HomePage/Homepage"
import Mens from "./Mens/Mens"
import Footer from "./Footer/Footer"
function App() {
  return (
    <div className="App">
      <br/>

 <BrowserRouter>
          <Switch>
            <Route component={Homepage} exact path="/" />
            <Route component={Mens} path="/Mens" />
          </Switch>
        </BrowserRouter>
        <br/>
        <Footer/>
    </div>
  );
}

export default App;
