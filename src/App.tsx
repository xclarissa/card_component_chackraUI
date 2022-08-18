import { Center, VStack } from "@chakra-ui/react";
import React from "react";
import { HorizontalCard } from "./components/card/HorizontalCard";
import { Header } from "./components/commons/Header";
import { horizontal_cards, cards } from "./components-mock.json";
import { Card } from "./components/card/Card";

function App() {
  return (
    <>
      <Header />
      <Center>
        <VStack spacing="64px" marginBottom="64px">
          {horizontal_cards.map((card) => (
            <HorizontalCard key={card.title} card={card} />
          ))}
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </VStack>
      </Center>
    </>
  );
}

export default App;
