export interface Statement {
  actor: {
    name: string;
  };
  verb: {
    id: string;
    display: string;
  };
  object: {
    id: string;
    name: string;
  };
  createdAt: string;
}
