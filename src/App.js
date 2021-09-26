
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Topbar from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import EditNetwork from "./pages/Network/Edit/EditNetwork";
//import NewNetwork from "./pages/NewNetwork/NewNetwork";
//import Network from "./pages/Network/Network";
import NetworkList from "./pages/Network/NetworkList/NetworkList";
import NewNetwork from "./pages/Network/NewNetwork/NewNetwork";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/networks">
            <NetworkList />
          </Route>
          <Route path="/networkedit/:id">
            <EditNetwork />
          </Route>
          <Route path="/newnetwork">
            <NewNetwork />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;