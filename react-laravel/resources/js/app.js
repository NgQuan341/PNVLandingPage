import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/Admin/App';
import Home from './components/Home';

ReactDOM.render(
    <React.StrictMode>
       <BrowserRouter>
                <Switch>
                    <Route path="/home" exact  component={()=><Home></Home>}></Route>
                    <Route path="/admin" exact  component={()=><App></App>}></Route>
                </Switch>
            </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
