"use client";

import { useEffect } from "react";
import NavBar from "@/components/shared/navbar/NavBar";
import HomeBanner from "@/components/Home/home-banner/HomeBanner";

const HomeNavbar = () => {
  const beforeBannerSentinelId = "after-navbar-sentinel";
  const afterBannerSentinelId = "after-banner-sentinel";

  useEffect(() => {
    const nav = document.getElementById("main-navbar");
    const beforeBannerSentinel = document.getElementById(
      beforeBannerSentinelId
    );
    const afterBannerSentinel = document.getElementById(afterBannerSentinelId);

    if (!nav || !beforeBannerSentinel || !afterBannerSentinel) return;

    let state = "default";
    let beforeBannerIsInViewPort = false;

    const updateNavbar = () => {
      if (state === "init") {
        nav.classList.add("text-accent", "bg-white");
        nav.classList.remove("text-white", "bg-transparent", "bg-secondary");
        return;
      }

      if (state === "banner") {
        nav.classList.add("text-white", "bg-transparent");
        nav.classList.remove("text-primary", "bg-white", "bg-secondary");
        return;
      }

      nav.classList.add("bg-secondary", "text-white");
      nav.classList.remove("bg-white", "bg-transparent");
    };

    const observerCallBack = (entry: IntersectionObserverEntry) => {
      const id = entry.target.id;

      if (id === beforeBannerSentinelId) {
        beforeBannerIsInViewPort = entry.isIntersecting;
        state = entry.isIntersecting ? "init" : "banner";
        updateNavbar();
        return;
      }
      if (beforeBannerIsInViewPort) return;

      if (entry.isIntersecting) {
        state = "banner";
        updateNavbar();
        return;
      }

      state = "after-banner";
      updateNavbar();
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(observerCallBack),
      {
        root: null,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    observer.observe(beforeBannerSentinel);
    observer.observe(afterBannerSentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <NavBar />
      <div id="after-navbar-sentinel" className="h-[1px] w-full bg-white"></div>
      <HomeBanner />
      <div id="after-banner-sentinel" className="h-[1px]"></div>
    </>
  );
};

export default HomeNavbar;
