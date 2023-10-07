import { Handbag } from "phosphor-react";
import { ButtonCartContainer } from "./styles";

export default function ButtonCart({quantity, ...props}) {
  return (
    <ButtonCartContainer {...props}>
       {quantity > 0 && <span>{quantity}</span>}
      <Handbag size={24} weight="bold" />
    </ButtonCartContainer>
  );
}
