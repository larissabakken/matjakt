'use client';

import { Button, Checkbox, Label, TextInput, Card } from 'flowbite-react';

import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';

export default function Search() {
  return (
    <Card className="w-full">
      <div className="flex flex-row items-center justify-between">
        <Button className="bg-primary">
          <BiSearchAlt className="inline-block mx-2" size={20} /> Search
        </Button>
        <TextInput className="w-full mx-2" placeholder="Search for a product" />
      </div>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" />
        Filters
      </Button>
    </Card>
  );
}
