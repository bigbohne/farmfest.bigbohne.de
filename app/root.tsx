import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
    sizes: "180x180"
  },
  {
    rel: "icon",
    href: "/favicon-32x32.png",
    sizes: "32x32",
    type: "image/png"
  },
  {
    rel: "icon",
    href: "/favicon-16x16.png",
    sizes: "16x16",
    type: "image/png"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  }
];

export const meta: MetaFunction = () => [
  {
    title: "//Farmfest_2025_H1"
  }
]

import '/node_modules/primeflex/primeflex.css'
import '/node_modules/primeicons/primeicons.css'
import '/node_modules/primeflex/themes/primeone-light.css'
import './style.css'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
