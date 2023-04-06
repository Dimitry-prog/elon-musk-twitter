import {ReactNode} from "react";
import './globals.css'

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
      className="bg-slate-500 dark:bg-slate-600"
    >
    {children}
    </body>
    </html>
  )
}
