// components/Layout.js
import Footer from '../footer/footer';
import Header from '../header/header';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};


export default function Layout({ children }: LayoutProps) {
  return (
      <>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main  className="flex-grow body-height">{children}</main>
        <Footer/>
      </div>
      </>
  );
}
