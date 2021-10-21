import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import HomeLayout from '../layout/Home.layout'
function HomeLayoutHOC({component : Component , ...rest}) {
    return (
      <>
        <Route 
        {...rest}
        

        component={(props) => (
          <HomeLayout>
            <Component {...rest} />
          </HomeLayout>
        )}


        />
      </>
    )
}

export default HomeLayoutHOC
