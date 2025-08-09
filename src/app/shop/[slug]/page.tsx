import { products } from "@/data/products";
import NavBar from "@/components/shared/navbar/NavBar";
import { notFound } from "next/navigation";
import ShopDetails from "@/components/shop-details/ShopDetails";
import { shoppingCartService } from "@/services";
import { cookies } from "next/headers";
import { generateSlug } from "@/utils";

interface Props {
  params: Promise<{ slug: string }>;
}
export const runtime = "edge";

export const generateStaticParams = () =>
  products.map((p) => ({
    slug: generateSlug(p.name),
  }));

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = products.find((p) => generateSlug(p.name) === slug);

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
