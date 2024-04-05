import styled from "styled-components";

export const StatementsPageContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "0 10rem",
});

export const HeadingContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "1rem",
});

export const Heading = styled.h1({
  margin: 0,
  padding: 0,
});

export const StatementsListContainer = styled.div({
  display: "flex",
  gap: "0.5rem",
  flexDirection: "column",
});

export const ListItem = styled.div({
  display: "flex",
  gap: "2rem",
  border: "1px solid white",
  justifyContent: "space-between",
})

export const ListItemSection = styled.p({
  margin: 0,
  padding: '0.5rem',
})

export const ListItemSectionContainer = styled.div({
  display: "flex",
});
