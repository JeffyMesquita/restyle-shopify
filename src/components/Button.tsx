import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createText,
  createVariant,
  spacing,
} from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';
import { Theme } from '../theme/theme';

const Text = createText<Theme>();

type BoxCustomProps = SpacingProps<Theme> &
  VariantProps<Theme, 'buttonVariants'>;

const Box = createRestyleComponent<BoxCustomProps, Theme>([
  spacing,
  createVariant({ themeKey: 'buttonVariants' }),
]);

type Props = BoxCustomProps & {
  title: string;
};

export function Button(props: Props) {
  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7}>
      <Box {...props}>
        <Text
          variant={
            props.variant === 'primary' ? 'button_primary' : 'button_secondary'
          }
        >
          {props.title}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
