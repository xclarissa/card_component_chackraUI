import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { customScrollBar } from "../../styles/styles";

export interface CardProps {
  card: {
    image: {
      url: string;
      alt: string;
    };
    publishDate: string;
    title: string;
    content: string;
  };
}

export function Card({ card }: CardProps) {
  const { image, publishDate, title, content } = card;
  return (
    <Flex
      direction="column"
      maxW="450px"
      maxH="500px"
      borderRadius="8px"
      bgColor="gray.100"
    >
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          w="100%"
          maxW="450px"
          h="100%"
          maxH="220px"
          objectFit="cover"
          borderTopRadius="8px"
        />
      )}

      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="450px"
        minW="200px"
        h="100%"
        w="100%"
        overflow="auto"
        // h={["200px", "300px", "400px"]}
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
