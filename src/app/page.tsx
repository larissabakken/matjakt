'use client';

import { Card } from 'flowbite-react';
import Tutorial from '@/components/Tutorial';
import Search from '@/components/Search';

export default function Home() {
  return (
    <div className="md:w-[70%] mx-auto">
      <Tutorial />
      <Search />
    </div>
  );
}
