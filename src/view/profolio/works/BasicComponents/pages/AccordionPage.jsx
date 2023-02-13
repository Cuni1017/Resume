import React from "react";
import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Hello",
      content:
        "world worldworldworld worldworldworldworldw orldworldworldwor ldworldworldw orldworldwor ldworldworld",
    },
    {
      id: 2,
      label: "It's label",
      content:
        "It's content Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis cumque quaerat repellat suscipit deserunt placeat corrupti voluptas consectetur architecto neque, nam assumenda beatae, eum ipsam distinctio! Illo quas enim aliquid",
    },
    {
      id: 3,
      label: "I want a good life",
      content: "So Learning, Practicing",
    },
  ];
  
  return (
    <>
      {/* <ButtonPage /> */}
      <Accordion items={items} />
    </>
  );
}
