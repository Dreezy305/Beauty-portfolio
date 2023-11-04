
import RootLayout from "@/app/layout";
import React from "react";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

function BeautyLayout({ children, active, location, className }: { children: React.ReactNode;active?: string, location?:string, className?: string }): JSX.Element {
  
  return (
    <RootLayout>
      <main className={`min-h-screen overflow-hidden ${className}`}>
        <div className="">
        <Header type="main" active={active}/>
        </div>
      
        {children}
        <Footer location={location}/>
      </main>
    </RootLayout>
  );
}

export default BeautyLayout;
