import { createBox, createText } from '@shopify/restyle';
import { Theme } from '../theme/theme';

import { Button } from '../components/Button';
import { Item } from '../components/Item';

const Box = createBox<Theme>();
const Text = createText<Theme>();

export function Home() {
  return (
    <Box
      flex={1}
      bg="primary_700"
      justifyContent="center"
      alignItems="center"
      p="m"
    >
      <Box width="100%" bg="white" borderRadius={4} p="m">
        <Text variant="title">Plano Trimestral</Text>

        <Box gap="m" borderTopWidth={1} borderLeftColor="gray" pt="xl">
          <Item title="Entrega em 72h" icon="timer" />
          <Item title="Delivery grátis" icon="local-shipping" />
          <Item title="R$ 99,00 por mês" icon="credit-card" />
        </Box>

        <Box flexDirection="row" mt="xl" gap="m">
          <Button title="Simular" variant="secondary" />
          <Button title="Contratar" variant="primary" />
        </Box>
      </Box>
    </Box>
  );
}
