import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { AppLayout } from '../lib/components/layout/appLayout';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { theme } from '../config/theme';

export const metadata = {
  title: 'ToolHub',
  description: 'A collection of various, randomly useful tools',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications />
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
