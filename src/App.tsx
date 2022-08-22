import { Center, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HorizontalCard } from "./components/card/HorizontalCard";
import { Header } from "./components/commons/Header";
import {
  horizontal_cards,
  cards,
  card_without_image,
} from "./components-mock.json";
import { Card } from "./components/card/Card";
import { CardWithoutImage } from "./components/card/CardWithoutImage";

interface Repo {
  name: string;
  description: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/xclarissa/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  const filteredRepos =
    search.length > 0 ? repos.filter((item) => item.name.includes(search)) : [];
  console.log("renderizooou");
  return (
    <>
      {/* <Header />
      <Center>
        <VStack spacing="64px" marginBottom="64px">
          {horizontal_cards.map((card) => (
            <HorizontalCard key={card.title} card={card} />
          ))}
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
          {card_without_image.map((card) => (
            <CardWithoutImage 
              key={card.title}
              card={card}
            />
          ))}
        </VStack>
      </Center> */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.length > 0 ? (
        <ul>
          {filteredRepos.map((repo) => {
            return <li key={repo.name}>{repo.name}</li>;
          })}
        </ul>
      ) : (
        <ul>
          {repos.map((repo) => {
            return <li>{repo.name}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
