import { Box, Text, Title } from '@mantine/core';
import { Fragment, PropsWithChildren } from 'react';

type Props = {
  title: string;
  description: string;
} & PropsWithChildren;

function CalcPage({ title, description, children }: Props) {
  return (
    <Fragment>
      <Title order={1}>{title}</Title>
      <Text c="dimmed">{description}</Text>
      <Box>{children}</Box>
    </Fragment>
  );
}

export default CalcPage;
