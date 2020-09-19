import React, {Component} from 'react';
import {HashRouter, Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Post from 'components/post';
import {createHashHistory} from 'history';
import NotFound from "components/404";


class App extends Component {

    render() {
        return (

            <HashRouter>
                <Router history={createHashHistory()}>
                    <Switch>
                        <Route path="/" exact component={Post}/>
                        <Route path="*" exact component={NotFound}/>

                    </Switch>
                </Router>
            </HashRouter>
        );
    }
}

const mapStateToProps = (store) => {
    return ({

    })
}

export default connect(mapStateToProps)(App);
