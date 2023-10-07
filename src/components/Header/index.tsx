import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import Image from "next/image";
import Cart from "../Cart";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="logo" />
      <Cart />
    </HeaderContainer>
  );
}
