// keys aren't required for the dropdown menu items
/* eslint-disable react/jsx-key */
import React, { FC } from "react";
import {
  ArrowDropDownSVGIcon,
  HomeSVGIcon,
  InfoOutlineSVGIcon,
  MoreVertSVGIcon,
} from "@react-md/material-icons";
import { DropdownMenu, MenuItem, MenuItemLink } from "@react-md/menu";

import Container from "./Container";

const items = [
  "Item 1",
  null,
  0,
  1,
  "separator",
  { children: "Item 2" },
  { role: "separator", inset: true },
  { rightAddon: <HomeSVGIcon />, children: "Home" },
  { leftAddon: <InfoOutlineSVGIcon />, children: <span>Custom content</span> },
  { href: "#", children: "Link" },
  <MenuItem>Custom item</MenuItem>,
  <MenuItemLink href="#">Link</MenuItemLink>,
];

const SimpleExamples: FC = () => {
  return (
    <Container>
      <DropdownMenu id="dropdown-menu-1" items={items}>
        Options...
      </DropdownMenu>
      <DropdownMenu
        id="dropdown-menu-2"
        items={items}
        buttonType="icon"
        aria-label="Options..."
      >
        <MoreVertSVGIcon />
      </DropdownMenu>
      <DropdownMenu id="dropdown-menu-3" items={items} disableDropdownIcon>
        Options
      </DropdownMenu>
      <DropdownMenu
        id="dropdown-menu-4"
        items={items}
        dropdownIcon={<ArrowDropDownSVGIcon />}
      >
        Options
      </DropdownMenu>
    </Container>
  );
};

export default SimpleExamples;
