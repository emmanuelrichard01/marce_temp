import React from "react";
import logoImg from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <Image
          className={`block h-8 sm:h-8 w-auto ${img ? "dark:hidden" : ""
            }`}
          src={img}
          alt="Logo"
          sizes="200px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {img && (
        <Image
          className="hidden h-8 sm:h-10 w-auto dark:block"
          src={img}
          alt="Logo-Light"
          sizes="200px"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
