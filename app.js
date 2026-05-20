const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#productSearch");
const categoryButtons = Array.from(document.querySelectorAll("[data-category]"));
const modal = document.querySelector("#productModal");
const modalBody = document.querySelector("#modalBody");
const closeModalButton = document.querySelector(".modal-close");
const backToTopButton = document.querySelector(".back-to-top");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

let products = Store.getProducts();
let settings = Store.getSettings();
let activeCategory = "all";
let searchTerm = "";

function applySettings() {
  document.documentElement.style.setProperty("--black", settings.primaryColor);
  document.documentElement.style.setProperty("--premium", settings.accentColor);
  document.documentElement.style.setProperty("--premium-dark", settings.accentColor);
  document.documentElement.style.setProperty("--white", settings.backgroundColor);
  document.documentElement.style.setProperty("--soft", settings.softColor);

  document.querySelectorAll(".brand span").forEach((logo) => {
    logo.textContent = settings.logoText;
  });

  document.querySelectorAll(".brand b").forEach((brandName) => {
    brandName.textContent = settings.storeName;
  });

  document.title = `${settings.storeName} | ร้านค้าออนไลน์มืออาชีพ`;
  document.querySelectorAll('a[href*="line.me"]').forEach((link) => {
    link.href = settings.lineUrl;
  });

  const heroEyebrow = document.querySelector(".hero-copy .eyebrow");
  const heroTitle = document.querySelector(".hero-copy h1");
  const heroText = document.querySelector(".hero-copy > p:not(.eyebrow)");
  const heroImage = document.querySelector(".hero-media img");
  const primaryButton = document.querySelector(".hero-actions .btn.primary");
  const secondaryButton = document.querySelector(".hero-actions .btn.ghost");

  if (heroEyebrow) heroEyebrow.textContent = settings.heroEyebrow;
  if (heroTitle) heroTitle.textContent = settings.heroTitle;
  if (heroText) heroText.textContent = settings.heroText;
  if (heroImage) heroImage.src = settings.heroImage;
  if (primaryButton) primaryButton.textContent = settings.primaryButtonText;
  if (secondaryButton) secondaryButton.textContent = settings.secondaryButtonText;

  renderTrustItems();
  renderStats();
  renderHeroCard();
  renderPromoCards();
  renderFeatures();
  renderSteps();
  renderReviews();
  renderContact();
  renderFooter();

  [
    ["#products h2", settings.productTitle],
    ["#promotions h2", settings.promoTitle],
    ["#why-us h2", settings.whyTitle],
    ["#how-to-order h2", settings.orderTitle],
    ["#reviews h2", settings.reviewTitle],
    ["#contact h2", settings.contactTitle],
  ].forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  });

  [
    ["#promotions", settings.showPromotions],
    ["#why-us", settings.showWhyUs],
    ["#reviews", settings.showReviews],
  ].forEach(([selector, visible]) => {
    const element = document.querySelector(selector);
    if (element) element.hidden = !visible;
  });

  let customStyle = document.querySelector("#customTemplateStyle");
  if (!customStyle) {
    customStyle = document.createElement("style");
    customStyle.id = "customTemplateStyle";
    document.head.append(customStyle);
  }
  customStyle.textContent = settings.customCss || "";
}

function splitLines(value) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function splitParts(line) {
  return line.split("|").map((part) => part.trim());
}

function renderTrustItems() {
  const row = document.querySelector(".trust-row");
  if (!row) return;
  row.innerHTML = splitLines(settings.trustItems)
    .map((item) => `<span>${item}</span>`)
    .join("");
}

function renderStats() {
  const strip = document.querySelector(".intro-strip");
  if (!strip) return;
  strip.innerHTML = splitLines(settings.stats)
    .map((line) => {
      const [value, label] = splitParts(line);
      return `<article><b>${value || ""}</b><span>${label || ""}</span></article>`;
    })
    .join("");
}

function renderHeroCard() {
  const card = document.querySelector(".hero-card");
  if (!card) return;
  card.innerHTML = `
    <small>${settings.heroCardSmall}</small>
    <b>${settings.heroCardTitle}</b>
    <span>${settings.heroCardPrice}</span>
  `;
}

function renderPromoCards() {
  const grid = document.querySelector(".promo-grid");
  if (!grid) return;
  grid.innerHTML = splitLines(settings.promoCards)
    .map((line, index) => {
      const [small, title, text] = splitParts(line);
      return `
        <article class="promo-card ${index === 0 ? "dark" : ""}">
          <small>${small || ""}</small>
          <h3>${title || ""}</h3>
          <p>${text || ""}</p>
        </article>
      `;
    })
    .join("");
}

function renderFeatures() {
  const grid = document.querySelector(".feature-grid");
  if (!grid) return;
  grid.innerHTML = splitLines(settings.features)
    .map((line) => {
      const [title, text] = splitParts(line);
      return `<article><b>${title || ""}</b><span>${text || ""}</span></article>`;
    })
    .join("");
}

function renderSteps() {
  const grid = document.querySelector(".step-grid");
  if (!grid) return;
  grid.innerHTML = splitLines(settings.steps)
    .map((line, index) => {
      const [title, text] = splitParts(line);
      return `<article><span>${String(index + 1).padStart(2, "0")}</span><b>${title || ""}</b><p>${text || ""}</p></article>`;
    })
    .join("");
}

function renderReviews() {
  const grid = document.querySelector(".review-grid");
  if (!grid) return;
  grid.innerHTML = splitLines(settings.reviews)
    .map((line) => {
      const [name, text, stars = "★★★★★"] = splitParts(line);
      return `<article><div class="stars">${stars}</div><p>${text || ""}</p><b>${name || ""}</b></article>`;
    })
    .join("");
}

function renderContact() {
  const contact = document.querySelector("#contact .contact-card");
  if (!contact) return;
  const lead = contact.querySelector("div > p:not(.eyebrow)");
  const list = contact.querySelector(".contact-list");
  const mapTitle = contact.querySelector(".map-box span");
  const mapText = contact.querySelector(".map-box p");

  if (lead) lead.textContent = settings.contactLead;
  if (list) {
    list.innerHTML = splitLines(settings.contactInfo)
      .map((line) => {
        const [label, ...rest] = line.split(":");
        return `<li><b>${label || ""}:</b>${rest.join(":") || ""}</li>`;
      })
      .join("");
  }
  if (mapTitle) mapTitle.textContent = settings.mapTitle;
  if (mapText) mapText.textContent = settings.mapText;
}

function renderFooter() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;
  const description = footer.querySelector("div:first-child p");
  const copyright = footer.querySelector("small");
  const contact = footer.querySelector("div:last-child p");

  if (description) description.textContent = settings.footerText;
  if (copyright) copyright.textContent = settings.copyrightText;
  if (contact) contact.innerHTML = splitLines(settings.contactInfo).slice(0, 2).join("<br />");
}

function orderUrl(productName = "") {
  const message = productName ? `สนใจสั่งซื้อ ${productName}` : "สนใจสั่งซื้อสินค้า";
  const separator = settings.lineUrl.includes("?") ? "&" : "?";
  return `${settings.lineUrl}${separator}text=${encodeURIComponent(message)}`;
}

function productCard(product) {
  return `
    <article class="product-card" data-product-id="${product.id}">
      <figure>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </figure>
      <div class="product-info">
        <div class="product-meta">
          <span>${product.categoryLabel}</span>
          <span>พร้อมส่ง</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.short}</p>
        <div class="price-row">
          <b>${product.price}</b>
          <button type="button" data-detail="${product.id}">ดูรายละเอียด</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  products = Store.getProducts();
  const filteredProducts = products.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory;
    const matchSearch = [product.name, product.short, product.categoryLabel]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  productGrid.innerHTML = filteredProducts.length
    ? filteredProducts.map(productCard).join("")
    : `<div class="empty-state">ไม่พบสินค้าที่ตรงกับการค้นหา ลองเปลี่ยนคำค้นหรือเลือกหมวดหมู่อื่น</div>`;
}

function openProductDetail(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="modal-copy">
      <p class="eyebrow">${product.categoryLabel}</p>
      <h2>${product.name}</h2>
      <p>${product.detail}</p>
      <span class="modal-price">${product.price}</span>
      <p>หากต้องการแก้ไขสินค้า ให้เข้าเมนูหลังบ้านและบันทึกข้อมูลใหม่ จากนั้น refresh หน้าเว็บนี้</p>
      <a class="btn primary" href="${orderUrl(product.name)}" target="_blank" rel="noopener">สั่งซื้อสินค้านี้</a>
    </div>
  `;
  modal.showModal();
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderProducts();
  });
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderProducts();
});

productGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  if (!detailButton) return;
  openProductDetail(detailButton.dataset.detail);
});

closeModalButton.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("scroll", () => {
  backToTopButton.classList.toggle("visible", window.scrollY > 520);
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

applySettings();
renderProducts();
