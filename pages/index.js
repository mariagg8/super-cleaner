import styled from 'styled-components';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import useStore from '../src/useStore';
import Header from '../components/Header';
import StatusCircle from '../components/StatusCircle';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const rooms = useStore(state => state.rooms);

  return (
    <>
      <Header />
      <div>
        {rooms.map(room => (
          <Card key={room.id} name={room.name}>
            {room.name}

            <StatusCircle status={room.status} />
            <ul>
              <li>Assignee: {room.assignee}</li>
              <li>Cleaned: {room.status}</li>
            </ul>
          </Card>
        ))}
      </div>
      <Navbar />
    </>
  );
}
