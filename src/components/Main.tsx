import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MenuPage } from '../pages/MenuPage';
import { ShoppingListPage } from '../pages/ShoppingListPage';
import { StoragePage } from '../pages/StoragePage';



export const Main:React.FC = () => {
    return(
        <div>
            <Switch>
                <Route path="/storage">
                    <StoragePage />
                </Route>
                <Route path="/menu">
                    <MenuPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/shopping-list">
                    <ShoppingListPage />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </div>
    );
}