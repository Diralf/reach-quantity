import { Tabs, Tab } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const useRouteMatch = (patterns: readonly string[]) => {
  const { pathname } = useRouter();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    if (pathname.startsWith(pattern)) {
      return pattern;
    }
  }

  return null;
};

const Navigation: React.FC = () => {
  const currentTab = useRouteMatch(['/create', '/example']);

  return (
    <Tabs value={currentTab}>
      <Tab label="Create" value="/create" href="/create" component={Link} />
      <Tab label="Example" value="/example" href="/example" component={Link} />
    </Tabs>
  );
};

export default Navigation;
