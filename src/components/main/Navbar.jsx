"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { SiStartrek } from "react-icons/si";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ProfileDropDown } from "./ProfileDropDown";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  // console.log(session);
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
                className="font-medium  hover:text-(--primary) transition-colors"
              >
                Home
              </Link>
              <Link
                href="/ideas"
                className="font-medium hover:text-(--primary) transition-colors"
              >
                Ideas
              </Link>
              {session?.user ? (
                <div className="flex items-center gap-8">
                  <Link
                    href="/add-ideas"
                    className="font-medium hover:text-(--primary) transition-colors"
                  >
                    Add Ideas
                  </Link>
                  <Link
                    href="/my-ideas"
                    className="font-medium hover:text-(--primary) transition-colors"
                  >
                    My Ideas
                  </Link>
                  <Link
                    href="/my-interactions"
                    className="font-medium hover:text-(--primary) transition-colors"
                  >
                    My Interactions
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <>
                {session?.user ? (
                  <div className="flex items-center gap-5">
                    {/* <Avatar size="sm">
                      <Avatar.Image
                        alt="User"
                        src={session?.user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>
                        {session?.user?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar> */}
                    <ProfileDropDown user={session?.user} handleLogOut={handleLogOut}/>

                    <Button
                      variant="danger-soft"
                      className={"font-medium"}
                      onClick={handleLogOut}
                    >
                      SignOut
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-5">
                    <Link href={"/login"}>
                      <Button variant="ghost" className={"font-medium"}>
                        Login
                      </Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button
                        className={"bg-(--primary) text-white font-medium"}
                      >
                        Join Free
                      </Button>
                    </Link>
                  </div>
                )}
              </>
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

            <div className="pt-4 border-t border-border mt-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login">
                  <Button size="sm" variant="ghost" className={"font-medium"}>
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="sm"
                    className={"bg-(--primary) font-medium text-white"}
                  >
                    Join Free
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col">
                <p className=" text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Account
                </p>
                <Button
                  size="sm"
                  variant="danger-soft"
                  className={"font-medium"}
                  onClick={handleLogOut}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
