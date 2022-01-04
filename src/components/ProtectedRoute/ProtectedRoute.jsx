import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'

export default function ProtectedRoute({children, ...props}) {
  const { user } = useUser()
  //const redirect = <Redirect to={{ pathname: '/signin', state: { from: location }}} />
  return (
    <Route
      {...props}
      render={({ location }) =>
        user.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
