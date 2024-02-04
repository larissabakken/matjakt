'use client';
import { CardHeader } from '@mui/material';
import InputSearch from '@/components/InputSearch';
import LanguageSwitches from '@/components/LanguageSwitches';
export default function Header() {
  return (
    <>
      <CardHeader
        title="MatJakt"
        subheader={
          <>
            <p>Welcome to MatJakt</p>
            <LanguageSwitches />
          </>
        }
        action={<InputSearch />}
      />
    </>
  );
}
