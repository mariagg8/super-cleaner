import Link from 'next/link';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <Link href="/" passHref>
          <StlyedLink>ROOMS</StlyedLink>
        </Link>
        <Link href="/flatmates" passHref>
          <StlyedLink>FLATMATES</StlyedLink>
        </Link>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00a6ff;
  padding: 20px;
`;

const StlyedLink = styled.a`
  color: white;
  cursor: pointer;
  padding: 10px;
`;
