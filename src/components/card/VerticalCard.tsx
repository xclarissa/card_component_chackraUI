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

export function VerticalCard({ card }: CardProps) {
  const { image, publishDate, title, content } = card;
  return (
    <Flex maxW="850px" maxH="400px" borderRadius="8px" bg="gray.100">
      <Image
        src={image.url}
        alt={image.alt}
        maxW={["200px", "300px", "400px"]} // breakpoints [sm, md, lg]
        maxH={["200px", "300px", "400px"]}
        objectFit="cover"
        borderLeftRadius="8px"
      />
      <VStack
        p="16px"
        spacing="16px"
        align="flex-start"
        maxW="350px"
        minW="200px"
        h={["200px", "300px", "400px"]}
      >
        <Text variant="subtitle">{publishDate}</Text>
        <Heading size="lg">{title}</Heading>
        <Text overflowY="auto" css={customScrollBar}>{content}</Text>
      </VStack>
    </Flex>
  );
}
