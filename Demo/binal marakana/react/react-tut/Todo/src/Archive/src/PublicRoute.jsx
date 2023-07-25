import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

const PublicRoute = ({ component: Component, roles, ...rest }) => {
    const cookies = new Cookies();
    return (
        <Route {...rest} render={props => {
            if (cookies.get('PAFUser')) { 
                return <Redirect to={{ pathname: '/film-information', state: { from: props.location } }} /> 
            }
            return <Component {...props} />
        }} />
    );
};

export { PublicRoute }