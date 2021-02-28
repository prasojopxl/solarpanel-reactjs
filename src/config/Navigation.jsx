import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Sidebar } from '../components/sidebar';
import { Contributions } from '../pages/Contributions';
import { Earnings } from '../pages/Earnings';
import { Summary } from '../pages/Summary';
import { Video } from '../pages/Video';

const Navigation = () => {
    return (
        <Router>
            <div className="wrp-solarkita">
                <Sidebar/>
                <div className="bodypages">
                    <Switch>
                        <Route exact path="/">
                            Home
                        </Route>
                        <Route exact path="/summary" component={Summary}></Route>
                        <Route exact path="/production">
                            Private Content
                        </Route>
                        <Route exact path="/earnings" component={Earnings}></Route>
                        <Route exact path="/contributions" component={Contributions}></Route>
                        <Route exact path="/video" component={Video}></Route>
                        <Route exact path="*">
                            404
                        </Route>
                    </Switch>          
                </div>              
            </div>
        </Router>
    )
}

export default Navigation;
