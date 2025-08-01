import CategoriesView from "@/components/Home/categories/CategoriesView";
import ProductView from "@/components/Home/product-view/ProductView";
import SectionView from "@/components/Home/section-view/SectionView";
import { CategoryTitle } from "@/data/categories";
import { homeProducts } from "@/data/homeProducts";
import HomeNavbar from "@/components/Home/home-navbar/HomeNavbar";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <section className="my-10 py-10 px-20 flex flex-col bg-white w-full rounded-5xl gap-20">
        <SectionView title="Popular Categories">
          <CategoriesView />
        </SectionView>
        {Object.keys(homeProducts).map((key) => {
          return (
            <SectionView key={key} className="gap-4 text-secondary" title={key}>
              <ProductView products={homeProducts[key as CategoryTitle]} />
            </SectionView>
          );
        })}
      </section>
    </>
  );
};

export default Home;
