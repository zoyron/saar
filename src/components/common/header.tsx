import React from "react";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";

function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 px-2 lg:px-8">
      <div className="flex lg:flex-1">
        <Link href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Saar AI
          </span>
        </Link>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <Link href="/#pricing">Pricing</Link>
        {isLoggedIn && <Link href="/dashboard">Your Summeries</Link>}
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <Link href="/upload">Upload PDF</Link>
            <div>Pro</div>
            <Button>Sign Out</Button>
          </div>
        ) : (
          <div>
            <Link href="/sign-in">Sign In</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
