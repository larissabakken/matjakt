'use client';

import { Button, Footer } from 'flowbite-react';
import { BiCoffeeTogo } from 'react-icons/bi';

export default function footer() {
  return (
    <Footer className="absolute bottom-0 bg-primaryLight">
      <div className="w-full text-center p-4">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="inline-flex">
            <img
              src="/cartoons/milk.png"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl text-white font-semibold dark:text-white">
              Matjakt
            </span>
            <img
              src="/cartoons/bread.png"
              className="ml-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </div>

          <Footer.LinkGroup className={'items-center'}>
            <Footer.Link href="#">Larissa Bakken</Footer.Link>
            <Footer.Link href="#">Leonardo Oliveira</Footer.Link>
            <Footer.Link href="/about">About Mitjakt</Footer.Link>
            <Button className="bg-white text-secondary my-2 md:my-0">
              <BiCoffeeTogo className="inline-block mx-2" size={20} /> Buy us a
              coffee
            </Button>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Larissa Bakken and Leonardo Oliveira™"
          year={2024}
        />
      </div>
    </Footer>
  );
}
