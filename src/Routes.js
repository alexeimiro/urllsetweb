import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Legal } from './pages/Legal';

export const Routes = () => {
    return (
       <Router>
            <Switch>
                <Route path="/legal">
                    <Legal/>
                </Route>
            </Switch>
       </Router> 
    );
}