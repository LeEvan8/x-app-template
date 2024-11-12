import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Cleanliness Inspection",
    description: "Use CCTV in bus or manually upload image by Ops Staffs during checking.",
  },
  {
    icon: "/steps/2.svg",
    title: "Image Analysis",
    description: "Use AI algorithms to detect dirt, stains. Calculating a cleanliness score.",

  },
  {
    icon: "/steps/3.svg",
    title: "Cleaning Scedule",
    description: "Automate scheduling and track cleaning activities per bus model.", 
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 4 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
