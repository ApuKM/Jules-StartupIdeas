"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { SiStartrek } from "react-icons/si";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { ProfileDropDown } from "./ProfileDropDown";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
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
              className={`${pathname === "/" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
            >
              Home
            </Link>
            <Link
              href="/ideas"
              className={`${pathname === "/ideas" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
            >
              Ideas
            </Link>
            {session?.user ? (
              <div className="flex items-center gap-8">
                <Link
                  href="/add-ideas"
                  className={`${pathname === "/add-ideas" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
                >
                  Add Ideas
                </Link>
                <Link
                  href="/my-ideas"
                  className={`${pathname === "/my-ideas" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
                >
                  My Ideas
                </Link>
                <Link
                  href="/my-interactions"
                  className={`${pathname === "/my-interactions" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
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
                  <ProfileDropDown
                    user={session?.user}
                    handleLogOut={handleLogOut}
                  />

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
                  <Link href="/login">
                    <Button variant="ghost" className={"font-medium"}>
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className={"bg-(--primary) text-white font-medium"}>
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
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-500">
          <div className="md:hidden flex gap-3 flex-col items-start">
            <Link
              href="/"
              className={`${pathname === "/" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
            >
              Home
            </Link>
            <Link
              href="/ideas"
              className={`${pathname === "/ideas" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
            >
              Ideas
            </Link>
            {session?.user ? (
              <div className="flex items-center gap-8">
                <Link
                  href="/add-ideas"
                  className={`${pathname === "/add-ideas" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
                >
                  Add Ideas
                </Link>
                <Link
                  href="/my-ideas"
                  className={`${pathname === "/my-ideas" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
                >
                  My Ideas
                </Link>
                <Link
                  href="/my-interactions"
                  className={`${pathname === "/my-interactions" ? "underline underline-offset-2 font-semibold" : "font-medium"} `}
                >
                  My Interactions
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="pt-4 border-t border-border mt-4 space-y-4">
            <div className="">
              <>
                {session?.user ? (
                  <div className="flex flex-col gap-3">
                    <ProfileDropDown
                      user={session?.user}
                      handleLogOut={handleLogOut}
                    />

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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
