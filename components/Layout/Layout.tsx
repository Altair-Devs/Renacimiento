import React from 'react';

import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

import Styles from './layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={Styles.Container}>
      <Navbar />
        { children }
      <Footer />
    </div>
  )
}

export default Layout;