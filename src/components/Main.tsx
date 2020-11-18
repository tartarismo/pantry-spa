import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { MenuPage } from '../pages/MenuPage';
import { StoragePage } from '../pages/StoragePage';



export const Main:React.FC = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="/storage">
                    <StoragePage />
                </Route>
                <Route path="/menu">
                    <MenuPage />
                </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}