'use client';

import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  Skeleton,
  TextInput,
  Title,
} from '@mantine/core';
import { IconCurrencyDollar, IconPizza, IconX } from '@tabler/icons-react';
import { PropsWithChildren, useState } from 'react';

import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';

type Props = {} & PropsWithChildren;

export function AppLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const [toolSearchValue, setToolSearchValue] = useState('');

  const visibleNavItems = navItems.filter(ni =>
    ni.title.toLocaleLowerCase().includes(toolSearchValue.toLocaleLowerCase()),
  );

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title c="white">ToolHub</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <TextInput
          label="Search"
          placeholder="Tool name"
          value={toolSearchValue}
          onChange={({ currentTarget: { value } }) =>
            setToolSearchValue(value ?? '')
          }
          rightSection={
            <ActionIcon onClick={() => setToolSearchValue('')}>
              <IconX />
            </ActionIcon>
          }
        />
        {visibleNavItems.map((item, index) => (
          <NavLink
            key={index}
            h={28}
            mt="sm"
            py="xl"
            label={item.title}
            component={Link}
            href={item.href}
            leftSection={item.icon}
          />
        ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

const navItems: {
  title: string;
  icon: JSX.Element;
  href: string;
}[] = [
  {
    title: 'Pizza',
    icon: <IconPizza />,
    href: '/pizza',
  },
  {
    title: 'Inflation',
    icon: <IconCurrencyDollar />,
    href: '/inflation',
  },
];
