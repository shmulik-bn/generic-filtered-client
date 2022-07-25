import { useHeaderStyles } from "./Header.styles";
import Card from "@mui/material/Card";
import React from "react";
import { LANG } from "../../core/constans/i18n";


export const Header = () => {
  const classes = useHeaderStyles();

  return (
    <Card className={classes.header}>
      <h1>{LANG.HEADER.PERSON_TABLE}</h1>
    </Card>
  );
};
