import RootLayout from "@/app/layout";
import React from "react";
import Header from "../Header/Header";

function BeautyLayout({ children, active }: { children: React.ReactNode;active?: string }): JSX.Element {
  return (
    <RootLayout>
      <main className="min-h-screen overflow-hidden">
        <Header type="main" active={active}/>
        {children}
      </main>
    </RootLayout>
  );
}

export default BeautyLayout;
