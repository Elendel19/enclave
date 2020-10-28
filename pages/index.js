import React from "react";
import { Item } from "./components/Item";

const Index = () => {
  return (
    <div>
      <div id="gear-wrapper">
        <h1>Gear goes here</h1>
        <Item slot="component-1"></Item>
        <Item slot="component-2"></Item>
        <Item slot="component-3"></Item>
        <Item slot="component-4"></Item>
        <Item slot="component-5"></Item>
        <Item slot="component-6"></Item>
        <Item slot="gun-1"></Item>
        <Item slot="gun-2"></Item>
        <Item slot="melee"></Item>
        <Item slot="support"></Item>
        <Item slot="ability-1"></Item>
        <Item slot="ability-2"></Item>
      </div>
    </div>
  )
};

export default Index;