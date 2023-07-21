import { MaterialIcons } from '@expo/vector-icons';
import { createBox, createText, useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';

const Box = createBox<Theme>();
const Text = createText<Theme>();

type Props = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Item({ title, icon }: Props) {
  const theme = useTheme<Theme>();
  return (
    <Box flexDirection="row" alignItems="center" gap="s">
      <MaterialIcons name={icon} size={24} color={theme.colors.black} />
      <Text variant="body">{title}</Text>
    </Box>
  );
}
