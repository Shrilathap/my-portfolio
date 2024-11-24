// components/Layout.js
import Footer from '../footer/footer';
import Header from '../header/header';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};


export default function Layout({ children }: LayoutProps) {
  return (
    // <div className="flex flex-col max-h-screen custom-scrollbar">
      <>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </>
    // </div>
  );
}
