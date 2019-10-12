import React from 'react';

interface SchoolElementProps {
  name: string,
  id: string,
}

const SchoolElement: React.FC<SchoolElementProps> = ({ name, id }) => (
  <li key={id}>{name}</li>
);

export default SchoolElement;
