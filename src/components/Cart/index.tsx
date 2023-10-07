import * as Dialog from "@radix-ui/react-dialog";
import ButtonCart from "../ButtonCart";
import {
  BtnFinalization,
  CardProduct,
  CartClose,
  CartDetails,
  CartInfo,
  ContainerImage,
  ImageContent,
  ShoppingCartContainer,
} from "./styles";
import { X } from "phosphor-react";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/src/contexts/CartContext";
import axios from "axios";

export default function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
  useState(false);
  const { removeFromCar, cartItems, cartTotal } = useContext(CartContext);
  const cartQuantity = cartItems.length;
  const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cartTotal);

  
  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonCart quantity={cartQuantity} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogContent>
          <ShoppingCartContainer>
            <CartClose>
              <X size={24} weight="bold" />
            </CartClose>
            <section>
              <h2>Sacola de compras</h2>
              {cartItems.map((item) => (
                <CardProduct key={item.id}>
                  <ContainerImage>
                    <ImageContent>
                      <Image
                        src={item.imageUrl}
                        alt=""
                        width={95}
                        height={95}
                      />
                    </ImageContent>
                    <CartDetails>
                      <p>{item.name}</p>
                      <span>{item.price}</span>
                      <button onClick={() => removeFromCar(item.id)}>
                        Remover
                      </button>
                    </CartDetails>
                  </ContainerImage>
                </CardProduct>
              ))}
            </section>

            <CartInfo>
              <div>
                <p>Quantidade</p>
                <span>
                  {cartQuantity} {cartQuantity > 1 ? "itens" : "item"}
                </span>
              </div>
              <div className="last-child">
                <p>Valor total</p>
                <span>{formattedCartTotal}</span>
              </div>

              <BtnFinalization 
              disabled={isCreatingCheckoutSession || cartQuantity <= 0}
              onClick={handleCheckout}>
                Finalizar
              </BtnFinalization>
            </CartInfo>
          </ShoppingCartContainer>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
