'use client';

import {
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  Skeleton,
  Title,
} from '@mantine/core';
import { Icon, IconCrane, IconPizza } from '@tabler/icons-react';

import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useDisclosure } from '@mantine/hooks';

type Props = {} & PropsWithChildren;

export function AppLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title c="white">CalcHub</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navItems.map((item, index) => (
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
    title: 'test',
    icon: <IconCrane />,
    href: '/test',
  },
];
