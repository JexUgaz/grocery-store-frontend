import CategoriesView from "@/components/Home/categories/CategoriesView";
import ProductView from "@/components/Home/product-view/ProductView";
import SectionView from "@/components/Home/section-view/SectionView";
import { homeProducts } from "@/data/homeProducts";
import NavbarSentinelWrapper from "@/components/Home/navbar-wrapper/NavbarSentinelWrapper";
import NavBar from "@/components/shared/navbar/NavBar";
import HomeBanner from "@/components/Home/home-banner/HomeBanner";
export const runtime = "edge";

const Home = () => {
  return (
    <>
      <NavbarSentinelWrapper>
        <NavBar
          shadow="shadow-2xl shadow-black/25"
          backgroundColor="bg-white"
          foregroundColor="text-accent"
        />
        <div
          id="after-navbar-sentinel"
          className="h-[1px] w-full bg-white"
        ></div>
        <HomeBanner />
        <div id="after-banner-sentinel" className="h-[1px]"></div>
      </NavbarSentinelWrapper>
      <section className="my-10 py-10 px-20 flex flex-col bg-white w-full rounded-5xl gap-20">
        <SectionView title="Popular Categories">
          <CategoriesView />
        </SectionView>
        {Object.entries(homeProducts).map(([key, value]) => {
          return (
            <SectionView key={key} className="gap-4 text-secondary" title={key}>
              <ProductView products={value} />
            </SectionView>
          );
        })}
      </section>
    </>
  );
};

export default Home;
