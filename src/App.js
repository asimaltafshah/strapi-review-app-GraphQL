import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
// Page and layout

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/details/:id">
            <ReviewDetails />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
