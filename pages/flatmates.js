import Card from '../components/Card';
import useStore from '../src/useStore';
import Avatar from '@mui/material/Avatar';
import Navbar from '../components/Navbar';

export default function Flatmates() {
  const rooms = useStore(state => state.rooms);
  const flatmates = useStore(state => state.flatmates);

  return (
    <>
      {flatmates.map(flatmate => (
        <Card key={flatmate.id} name={flatmate.name}>
          <Avatar alt={flatmate.name} src={flatmate.photo} />
          {/* <Image src={flatmate.photo}></Image>   */}
          {flatmate.name}
        </Card>
      ))}
      <Navbar />
    </>
  );
}
