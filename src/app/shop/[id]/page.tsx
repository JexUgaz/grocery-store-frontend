import { products } from "@/data/products";
import NavBar from "@/components/shared/navbar/NavBar";
import { notFound } from "next/navigation";
import ShopDetails from "@/components/shop-details/ShopDetails";
import { shoppingCartService } from "@/services";
import { cookies } from "next/headers";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();
  const cookieStore = await cookies();
  const data = await shoppingCartService.getCookieCartServer(cookieStore);

  const cartItem = data.find((i) => i.product.id === product.id);

  return (
    <>
      <NavBar />
      <main className="py-12 px-6 mx-auto">
        <ShopDetails cartItem={cartItem} product={product} />
      </main>
    </>
  );
};

export default ProductPage;
