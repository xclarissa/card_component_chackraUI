import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { customScrollBar } from "../../styles/styles";

export interface CardProps {
  card: { 
    publishDate: string;
    title: string;
    content: string;
  };
}

export function CardWithoutImage({ card }: CardProps) {
  const { publishDate, title, content } = card;
  return (
    <Flex
      direction="column"
      maxW="450px"
      maxH="500px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="450px"
        minW="200px"
        h="100%"
        w="100%"
        overflow="auto" 
      >
        <Text variant="subtitle">{publishDate}</Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto" css={customScrollBar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
}
