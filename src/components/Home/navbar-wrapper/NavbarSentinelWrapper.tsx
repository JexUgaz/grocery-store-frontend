"use client";

import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const NavbarSentinelWrapper: React.FC<Props> = ({ children }) => {
  const beforeBannerSentinelId = "after-navbar-sentinel";
  const afterBannerSentinelId = "after-banner-sentinel";
  const navigationItemsId = "navigation-items";

  useEffect(() => {
    const nav = document.getElementById("main-navbar");
    const beforeBannerSentinel = document.getElementById(
      beforeBannerSentinelId
    );
    const afterBannerSentinel = document.getElementById(afterBannerSentinelId);
    const navigationItems = document.getElementById(navigationItemsId);

    const existsElements =
      nav && beforeBannerSentinel && afterBannerSentinel && navigationItems;

    if (!existsElements) return;

    let state = "default";
    let beforeBannerIsInViewPort = false;

    const updateNavItems = (activeHome: boolean) => {
      const items = navigationItems.getElementsByTagName("a");
      Array.from(items).forEach((item) => {
        const isActive =
          item.classList.contains("navbar-item-active") ||
          item.classList.contains("home-navbar-item-active");

        item.classList.remove(
          "navbar-item-active",
          "navbar-item-inactive",
          "home-navbar-item-active",
          "home-navbar-item-inactive"
        );

        if (activeHome) {
          item.classList.add(
            isActive ? "home-navbar-item-active" : "home-navbar-item-inactive"
          );
          return;
        }
        item.classList.add(
          isActive ? "navbar-item-active" : "navbar-item-inactive"
        );
      });
    };

    const updateNavbar = () => {
      if (state === "init") {
        updateNavItems(true);
        nav.classList.add("text-accent", "bg-white");
        nav.classList.remove("text-white", "bg-transparent", "bg-accent");
        return;
      }

      if (state === "banner") {
        updateNavItems(true);
        nav.classList.add("text-white", "bg-transparent");
        nav.classList.remove("text-primary", "bg-white", "bg-accent");
        return;
      }
      updateNavItems(false);

      nav.classList.add("bg-accent", "text-white");
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

  return children;
};

export default NavbarSentinelWrapper;
