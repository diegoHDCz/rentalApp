


import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { PublicRoutes } from './public.stack.routes';
import { useAuth } from '../hooks/useAuth';
import { PrivateRoutes } from './private.stack.routes';


export function Routes() {
  const {user} = useAuth();
  console.log(user)
  return (
    <NavigationContainer>

   {   user ? <PrivateRoutes /> : <PublicRoutes /> }
    </NavigationContainer>
  )
}