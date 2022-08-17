import { Center } from "@chakra-ui/react";
import React from "react";
import { VerticalCard } from "./components/card/VerticalCard";
import { Header } from "./components/commons/Header"; 
import { vertical_cards } from './components-mock.json'

function App() {
  return (
    <>
      <Header />
      <Center>
        {vertical_cards.map((card) => (
          <VerticalCard
            key={card.title}
            card={card}
          />
        ))}
      </Center>
    </>
  );
}

export default App;
