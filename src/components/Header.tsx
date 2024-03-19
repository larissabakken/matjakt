'use client';

import { Button, Navbar } from 'flowbite-react';
import { BiCoffeeTogo } from 'react-icons/bi';
import Language from '@/components/Language';

export default function Header() {
  return (
    <Navbar border>
      <Navbar.Brand>
        <img src="/cartoons/milk.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl text-secondary font-semibold dark:text-white">
          Matjakt
        </span>
        <img
          src="/cartoons/bread.png"
          className="ml-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-1">
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:absolute md:right-8">
        <Language />

        <Button className="bg-primaryLight my-2 md:my-0">
          <BiCoffeeTogo className="inline-block mx-2" size={20} /> Buy us a
          coffee
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
