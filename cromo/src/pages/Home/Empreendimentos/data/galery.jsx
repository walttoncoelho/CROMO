import React from "react";
import data from "./data";
import { Card } from "../style";

export function CardEmpreend() {
  return (
    <>
      {data.map((item) => (
        <Card key={item.id}>
          <img src={item.image} alt={item.image_alt} />
        </Card>
      ))}
    </>
  );
}
