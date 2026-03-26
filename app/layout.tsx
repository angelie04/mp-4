import type { Metadata } from 'next';
import React from "react";
export const metadata: Metadata ={
title: {
  template: '%s | CS391',
  default: 'Home | CS391',
},
  description:"Made by create next app",
}

//static components go here!(like nav)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
