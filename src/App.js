import "./App.css";
import Facebook from "./components/Facebook";
import UserDetail from "./components/UserDetail";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Facebook} />
                <Route exact path="/:name" component={UserDetail} />
            </Switch>
        </div>
    );
}

export default App;
