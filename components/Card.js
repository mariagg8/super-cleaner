import styled from 'styled-components';

export default function Card({ children }) {
  return <StyleCard>{children}</StyleCard>;
}

const StyleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 3rem;
  width: 150px;
`;
