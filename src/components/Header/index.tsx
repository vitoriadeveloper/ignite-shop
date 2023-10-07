import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import Image from "next/image";
import Cart  from "../Cart";


export default function Header() {
  return (
    <HeaderContainer>
      <a href="http://localhost:3000">
      <Image src={logoImg} alt="logo" />
      </a>
      <Cart />
    </HeaderContainer>
  );
}
