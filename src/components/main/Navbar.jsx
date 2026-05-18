"use client"

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { SiStartrek } from "react-icons/si";

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <div>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
            : "bg-slate-50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="p-2  rounded-xl group-hover:rotate-12 transition-transform">
                  <SiStartrek className="w-6 h-6 text-(--primary)" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                  Jules
                </span>
              </Link>
            </div>

            <div className="hidden md:flex gap-8 items-center">
              <Link
                href="/"
                className="font-medium text-(--primary) hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="font-medium text-(--primary) hover:text-blue-600 transition-colors"
              >
                Ideas
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
                  <Link
                    href="/login"
                    className="font-medium text-(--primary) hover:text-blue-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link href="/register">
                    <Button
                      className="font-bold bg-(--primary) rounded-full px-8 shadow-lg shadow-blue-600/20"
                    >
                      Join Free
                    </Button>
                  </Link>
      
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
            >
              Ideas
            </Link>

            <div className="pt-4 border-t border-border mt-4">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login">
                  <Button
                    href="/login"
                    variant="bordered"
                    className="rounded-xl"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    href="/register"
                    color="primary"
                    className="rounded-xl"
                  >
                    Join Free
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Account
                </p>
                <button
                  className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
