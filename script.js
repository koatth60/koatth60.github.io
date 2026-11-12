// ===== Mobile menu =====
const menu = document.getElementById("nav-menu");
const burger = document.querySelector(".hamburger");

const setMenu = (open) => {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// ===== Theme toggle =====
const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
document.querySelector(".theme-toggle").addEventListener("click", () => {
  const current = root.dataset.theme || (systemDark.matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// ===== Header border on scroll =====
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Active nav link =====
const links = [...menu.querySelectorAll('a[href^="#"]')];
const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
const setActive = () => {
  const line = window.innerHeight * 0.4;
  let current = null;
  sections.forEach((s) => {
    if (s.getBoundingClientRect().top <= line) current = s.id;
  });
  links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
};
window.addEventListener("scroll", setActive, { passive: true });
setActive();

document.getElementById("year").textContent = new Date().getFullYear();
