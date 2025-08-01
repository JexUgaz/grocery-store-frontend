const nav = document.getElementById("main-navbar");

const beforeBannerSentinelId = "after-navbar-sentinel";
const afterBannerSentinelId = "after-banner-sentinel";

const beforeBannerSentinel = document.getElementById(beforeBannerSentinelId);
const afterBannerSentinel = document.getElementById(afterBannerSentinelId);

let state = "default";

const updateNavbar = () => {
  if (state === "init") {
    nav.classList.add("text-accent", "bg-white");
    nav.classList.remove("text-white", "bg-transparent");
    return;
  }

  if (state === "banner") {
    nav.classList.add("text-white", "bg-transparent");
    nav.classList.remove("text-primary", "bg-white");
    return;
  }

  nav.classList.add("bg-secondary");
  nav.classList.remove("bg-transparent");
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;

      if (id === beforeBannerSentinelId) {
        state = entry.isIntersecting ? "init" : "banner";
        updateNavbar();
        return;
      }

      if (entry.isIntersecting) {
        state = "banner";
        updateNavbar();
        return;
      }

      state = "after-banner";
      updateNavbar();
    });
  },
  { root: null, rootMargin: "-80px 0px 0px 0px" }
);

observer.observe(afterBannerSentinel);
observer.observe(beforeBannerSentinel);
