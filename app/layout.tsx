import { ReactNode } from "react";
import './globals.css'
import Header from "@/app/components/Header";
import FollowBar from "@/app/components/FollowBar";
import LoginModal from "@/app/components/LoginModal";
import RegisterModal from "@/app/components/RegisterModal";

export const metadata = {
  title: 'Elon Musk',
  description: 'Elon Musk\'s twitter',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body
      className=" p-4 md:p-6 flex gap-6 justify-between dark:bg-slate-600"
    >
    <Header/>
    {children}
    <FollowBar/>
    <LoginModal/>
    <RegisterModal/>
    </body>
    </html>
  )
}
