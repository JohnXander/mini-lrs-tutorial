import { useEffect, useState } from "react";
import { Heading, 
  HeadingContainer, 
  ListItem, 
  ListItemSection, 
  ListItemSectionContainer, 
  StatementsListContainer, 
  StatementsPageContainer 
} from "../../styled";
import { Statement } from "./Statements.types";
import { formatDistanceToNow } from 'date-fns';

export const Statements = () => {
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    fetchStatements();
  },[]);

  const fetchStatements = async () => {
    try {
      const res = await fetch('http://localhost:3005/api/statements', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      setStatements(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StatementsPageContainer>
      <HeadingContainer>
        <Heading>Statements</Heading>
      </HeadingContainer>
      <StatementsListContainer>
        {statements.slice().reverse().map((statement: Statement, index) => {
          return (
            <ListItem key={index}>
              <ListItemSectionContainer>
                <ListItemSection>{statement.actor.name}</ListItemSection>
                <ListItemSection>{statement.verb.display || statement.verb.id || 'Unknown Verb'}</ListItemSection>
                <ListItemSection>{statement.object.name || statement.object.id || 'Unknown Object'}</ListItemSection>
              </ListItemSectionContainer>
              <div>
                <ListItemSection>{formatDistanceToNow(new Date(statement.createdAt), { addSuffix: true })}</ListItemSection>
              </div>
            </ListItem>
          );
        })}
      </StatementsListContainer>
    </StatementsPageContainer>
  );
}
