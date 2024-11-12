import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primarySubtle: {
      bg: "rgba(19, 81, 29, 1)",
      color: "primary.500",
      _hover: {
        bg: "rgba(19, 81, 29, 0.8)",
        color: "primary.500",
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "md",
    rounded: "full",
    variant: "solid",
  },
};
