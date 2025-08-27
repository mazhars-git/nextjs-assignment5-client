// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-300">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2"
//           >
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link href="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link href="/projects">Projects</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact </Link>
//             </li>
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">Mazhar</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link href="/blog">Blog</Link>
//           </li>
//           <li>
//             <Link href="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>

//       <input
//         type="checkbox"
//         value="synthwave"
//         className="toggle theme-controller"
//       />
//       <div className="navbar-end space-x-3">
//         <Link
//           href="/login"
//           className="btn btn-primary rounded-full hover:text-white"
//         >
//           Login
//         </Link>
//         <Link
//           href="/"
//           className="btn btn-warning rounded-full hover:text-white"
//         >
//           Logout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    { label: "Contacts", href: "/contacts" },
  ];

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-6 flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Signup</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <span className="text-xl font-bold text-primary">MyLogo</span>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Signup</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
