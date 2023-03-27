import React from 'react';
import { NavBar } from './componentes';

export const MainLayout = ({children}) => {

    const styles = {
        backgroundColor: "black",
        color: "white",
    }
  return (
    <div style={styles}>
        <NavBar />
        {children}
    </div>
  )
}
