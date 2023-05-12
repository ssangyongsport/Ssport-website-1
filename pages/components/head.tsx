import { Navbar } from "flowbite-react";
import React from 'react';
import Link from 'next/link';
import { Button } from "flowbite-react";
function head() {
  return (
    <header>
    
  <Navbar
  fluid={true}
  rounded={true}
    className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
    <Link href="/">
    <img
      src="https://i.imgur.com/GhQm5zm.png"
      className="mr-3 h-6 sm:h-9"
      alt="ssport Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    </span>
  </Link>
  <div className="flex md:order-2">
    <Button>
       <Link href="/tv" passHref={true}>
      雙龍體育TV
    </Link>
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="https://slb.ssangyongsports.org"
    >
      SLB
    </Navbar.Link>
    <Navbar.Link href="https://sba.ssangyongsports.org">
      SBA
    </Navbar.Link>
    <Navbar.Link>
    <Link href="/p" passHref={true}>
      隱私政策
    </Link>
      </Navbar.Link>
    <Navbar.Link>
    <Link href="/t">
      服務條款
    </Link>
      </Navbar.Link>
    <Navbar.Link>
          <Link href="/blog" passHref={true}>
      部落格
    </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link href="/c" passHref={true}>
      聯繫
    </Link>
      </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
<br /> 
<br />
      </header>
  )
}

export default head;   
