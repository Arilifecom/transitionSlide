import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const CostomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block bg-primary 
          absolute left-0 -bottom-0.5 
          group-hover:w-full translate-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
         `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full py-8 font-medium flex items-center self-center">
      <nav className="mx-auto">
        <CostomLink href="/" title="Home" className="mr-4" />
        <CostomLink href="/about" title="About" className="mx-4" />
      </nav>
    </header>
  );
};

export default Navbar;
