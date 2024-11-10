// components/Layout.js
import Footer from '../footer/footer';
import Header from '../header/header';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};


export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col max-h-screen custom-scrollbar">
        <Header/>
        <main className="bg-[#121212] mx-auto px-12 overflow-y-auto body-height mt-16 custom-scrollbar py-4">{children}</main>
        <Footer/>
    </div>
  );
}
