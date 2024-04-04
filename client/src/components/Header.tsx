import { 
  AppName, 
  HeaderContainer, 
  ListItem, 
  ListItemContainer, 
  StyledLink
} from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to='/'>
        <AppName>MiniLRS</AppName>
      </StyledLink>
      <ListItemContainer>
        <StyledLink to='/'>
          <ListItem>Statements</ListItem>
        </StyledLink>
        <StyledLink to='/learners'>
          <ListItem>Learners</ListItem>
        </StyledLink>
      </ListItemContainer>
    </HeaderContainer>
  );
}
