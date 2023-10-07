import { stripe } from "@/src/lib/stripe";
import { ContainerPageSucess, ImageContainer, ImagesContainer } from "@/src/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SucessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
  productImages: string[];
}

export default function Sucess({ customerName, product, productImages }: SucessProps) {
  return (
    <>
      <Head>
        <title>Sucess | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <ContainerPageSucess>
        <ImagesContainer>
          {productImages.map((image, index) => (
            <ImageContainer key={index}>
              <Image src={image} alt="" width={120} height={110} />
            </ImageContainer>
          ))}
          </ImagesContainer>
          <h1>Compra efetuada!</h1>
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de{" "}
            {productImages.length} camisetas já está a caminho da sua casa.
          </p>
          <Link href="/">Voltar ao catálogo</Link>
        
      </ContainerPageSucess>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        statusCode: 404,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const productImages = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;
    return product.images[0];
  });

  return {
    props: {
      customerName,    
      productImages
    },
  };
};
