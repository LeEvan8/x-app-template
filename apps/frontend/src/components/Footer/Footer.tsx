"use client";
import {
  VStack,
  Text,
  Container,
  HStack,
  Box,
  Show,
  Link,
  Flex,
} from "@chakra-ui/react";


import { Socials } from "./components/Socials";
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from "../../const";


export const Footer: React.FC = () => {
  const desktopContent = (
    <VStack>
      
      <HStack
        justifyContent={"space-between"}
        w="full"
        borderTopColor={"#3e3c3a"}
        borderTopWidth={1}
        py={8}
      >
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#8c8c8c"
        >
          2024 BusBright. All rights reserved.
        </Text>
      
        <Socials />
      </HStack>
    </VStack>
  );

  const mobileContent = (
    <VStack>
      <VStack spacing={4} my={4}>
        <VStack spacing={4} alignItems={"center"}>
          <Box mt={6}>
            <Socials />
          </Box>
        </VStack>
      </VStack>
      <VStack borderTopColor={"#3e3c3a"} borderTopWidth={1} py={8}>
        <Link href={PRIVACY_POLICY_LINK} isExternal>
          <Text
            fontWeight={400}
            fontSize="14px"
            lineHeight="17px"
            color="#8c8c8c"
            as="u"
            cursor={"pointer"}
          >
          </Text>
        </Link>
        <Link href={TERMS_AND_CONDITIONS_LINK} isExternal>
          <Text
            fontWeight={400}
            fontSize="14px"
            lineHeight="17px"
            color="#8c8c8c"
            as="u"
            cursor={"pointer"}
          >
          </Text>
        </Link>
        <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight="17px"
          color="#8c8c8c"
          mt={6}
        >
          2024 BusBright. All rights reserved.
        </Text>
      </VStack>
    </VStack>
  );

  return (
    <Flex bgColor={"#191714"}>
      <Container
        maxW={"container.xl"}
        display={"flex"}
        alignItems={"stretch"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Show above="md">{desktopContent}</Show>
        <Show below="md">{mobileContent}</Show>
      </Container>
    </Flex>
  );
};
