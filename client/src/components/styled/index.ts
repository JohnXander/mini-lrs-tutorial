import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div({
  display: "flex",
  borderBottom: "1px solid white",
  justifyContent: "space-between",
  padding: "1rem 10rem",
  alignItems: "center",
});

export const AppName = styled.h1({
  margin: 0,
  padding: 0,
});

export const ListItemContainer = styled.ul({
  display: "flex",
  gap: "2rem",
})

export const ListItem = styled.li({
  listStyle: "none",
})

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
})
