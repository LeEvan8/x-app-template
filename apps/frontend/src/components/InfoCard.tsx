import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { MdOutlineArrowOutward } from "react-icons/md";

export const InfoCard = () => {
  return (
    <Card w={"full"}>
      <Box p={3}>
        <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
          <Image src="/two-buses-poster.png" borderRadius={16} />
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Image src="/sbsTransit-logo.png" h={16} borderRadius={16} />
              <Text fontSize={24} fontWeight={800}>
                We Care 
              </Text>
            </HStack>
            <Flex
              mt={{ base: 4, md: 0 }}
              direction={{ base: "column", md: "row" }}
            >
              <Link isExternal href="https://www.sbstransit.com.sg/feedback">
                <Button
                  rounded={"full"}
                  colorScheme="primary"
                  size={"md"}
                  leftIcon={<MdOutlineArrowOutward />}
                  mt={{ base: 2, md: 0 }}
                  ml={{ base: 0, md: 2 }}
                >
                  SBS Feedback
                </Button>
              </Link>
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </Card>
  );
};
