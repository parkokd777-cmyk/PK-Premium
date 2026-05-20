const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";
const AUTH_KEY = "primeStoreAdminLoggedIn";

const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const logoutButton = document.querySelector("#logoutButton");
const productForm = document.querySelector("#productForm");
const productList = document.querySelector("#adminProductList");
const newProductButton = document.querySelector("#newProductButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const resetProductsButton = document.querySelector("#resetProductsButton");
const settingsForm = document.querySelector("#settingsForm");
const templateForm = document.querySelector("#templateForm");
const resetTemplateButton = document.querySelector("#resetTemplateButton");
const imagePreview = document.querySelector("#imagePreview");
const heroImagePreview = document.querySelector("#heroImagePreview");

const categoryLabels = {
  home: "ของใช้ในบ้าน",
  style: "แฟชั่น",
  gift: "ของขวัญ",
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9ก-๙]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function readFileAsDataUrl(file, callback) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
}

function isLoggedIn() {
  return sessionStorage.getItem(AUTH_KEY) === "yes";
}

function setLoggedIn(value) {
  if (value) sessionStorage.setItem(AUTH_KEY, "yes");
  else sessionStorage.removeItem(AUTH_KEY);
}

function showDashboard() {
  loginView.hidden = true;
  dashboardView.hidden = false;
  loadSettingsForm();
  loadTemplateForm();
  resetForm();
  renderAdminProducts();
}

function showLogin() {
  loginView.hidden = false;
  dashboardView.hidden = true;
}

function loadSettingsForm() {
  const settings = Store.getSettings();
  settingsForm.elements.storeName.value = settings.storeName;
  settingsForm.elements.lineUrl.value = settings.lineUrl;
}

function loadTemplateForm() {
  const settings = Store.getSettings();
  [
    "logoText",
    "heroEyebrow",
    "heroTitle",
    "heroText",
    "primaryButtonText",
    "secondaryButtonText",
    "heroCardSmall",
    "heroCardTitle",
    "heroCardPrice",
    "heroImage",
    "primaryColor",
    "accentColor",
    "backgroundColor",
    "softColor",
    "productTitle",
    "promoTitle",
    "whyTitle",
    "orderTitle",
    "reviewTitle",
    "contactTitle",
    "trustItems",
    "stats",
    "promoCards",
    "features",
    "steps",
    "reviews",
    "contactLead",
    "contactInfo",
    "mapTitle",
    "mapText",
    "footerText",
    "copyrightText",
    "customCss",
  ].forEach((name) => {
    if (templateForm.elements[name]) templateForm.elements[name].value = settings[name] || "";
  });

  templateForm.elements.showPromotions.checked = Boolean(settings.showPromotions);
  templateForm.elements.showWhyUs.checked = Boolean(settings.showWhyUs);
  templateForm.elements.showReviews.checked = Boolean(settings.showReviews);
  heroImagePreview.src = settings.heroImage || "";
}

function resetForm() {
  productForm.reset();
  productForm.elements.id.value = "";
  productForm.elements.category.value = "home";
  imagePreview.src = "";
  productForm.querySelector('button[type="submit"]').textContent = "บันทึกสินค้า";
}

function getProducts() {
  return Store.getProducts();
}

function saveProducts(products) {
  Store.saveProducts(products);
  renderAdminProducts();
}

function renderAdminProducts() {
  const products = getProducts();
  productList.innerHTML = products
    .map(
      (product) => `
        <article class="product-row">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <h3>${product.name}</h3>
            <p>${product.categoryLabel} · <strong>${product.price}</strong></p>
            <p>${product.short}</p>
          </div>
          <div class="row-actions">
            <button type="button" data-edit="${product.id}">แก้ไข</button>
            <button class="danger-btn" type="button" data-delete="${product.id}">ลบ</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function fillProductForm(product) {
  productForm.elements.id.value = product.id;
  productForm.elements.name.value = product.name;
  productForm.elements.price.value = product.price;
  productForm.elements.category.value = product.category;
  productForm.elements.image.value = product.image;
  productForm.elements.imagePath.value = product.image.startsWith("data:") ? "" : product.image;
  imagePreview.src = product.image;
  productForm.elements.short.value = product.short;
  productForm.elements.detail.value = product.detail;
  productForm.querySelector('button[type="submit"]').textContent = "อัปเดตสินค้า";
  productForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    setLoggedIn(true);
    loginError.textContent = "";
    showDashboard();
    return;
  }

  loginError.textContent = "Username หรือ Password ไม่ถูกต้อง";
});

logoutButton.addEventListener("click", () => {
  setLoggedIn(false);
  showLogin();
});

settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  Store.saveSettings({
    ...Store.getSettings(),
    storeName: settingsForm.elements.storeName.value.trim(),
    lineUrl: settingsForm.elements.lineUrl.value.trim(),
  });
  loadTemplateForm();
  alert("บันทึกตั้งค่าร้านเรียบร้อยแล้ว");
});

templateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = templateForm.elements;
  Store.saveSettings({
    ...Store.getSettings(),
    logoText: form.logoText.value.trim() || "PS",
    heroEyebrow: form.heroEyebrow.value.trim(),
    heroTitle: form.heroTitle.value.trim(),
    heroText: form.heroText.value.trim(),
    primaryButtonText: form.primaryButtonText.value.trim(),
    secondaryButtonText: form.secondaryButtonText.value.trim(),
    heroCardSmall: form.heroCardSmall.value.trim(),
    heroCardTitle: form.heroCardTitle.value.trim(),
    heroCardPrice: form.heroCardPrice.value.trim(),
    heroImage: form.heroImage.value.trim(),
    primaryColor: form.primaryColor.value,
    accentColor: form.accentColor.value,
    backgroundColor: form.backgroundColor.value,
    softColor: form.softColor.value,
    productTitle: form.productTitle.value.trim(),
    promoTitle: form.promoTitle.value.trim(),
    whyTitle: form.whyTitle.value.trim(),
    orderTitle: form.orderTitle.value.trim(),
    reviewTitle: form.reviewTitle.value.trim(),
    contactTitle: form.contactTitle.value.trim(),
    trustItems: form.trustItems.value,
    stats: form.stats.value,
    promoCards: form.promoCards.value,
    features: form.features.value,
    steps: form.steps.value,
    reviews: form.reviews.value,
    contactLead: form.contactLead.value.trim(),
    contactInfo: form.contactInfo.value,
    mapTitle: form.mapTitle.value.trim(),
    mapText: form.mapText.value.trim(),
    footerText: form.footerText.value.trim(),
    copyrightText: form.copyrightText.value.trim(),
    showPromotions: form.showPromotions.checked,
    showWhyUs: form.showWhyUs.checked,
    showReviews: form.showReviews.checked,
    customCss: form.customCss.value,
  });
  alert("บันทึกเทมเพลตเรียบร้อยแล้ว");
});

templateForm.elements.heroImage.addEventListener("input", (event) => {
  heroImagePreview.src = event.target.value.trim();
});

templateForm.elements.heroImageFile.addEventListener("change", (event) => {
  readFileAsDataUrl(event.target.files?.[0], (result) => {
    templateForm.elements.heroImage.value = result;
    heroImagePreview.src = result;
  });
});

resetTemplateButton.addEventListener("click", () => {
  const confirmed = confirm("ต้องการคืนค่าหน้าตาเทมเพลตเริ่มต้นใช่ไหม");
  if (!confirmed) return;
  Store.resetSettings();
  loadSettingsForm();
  loadTemplateForm();
});

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = productForm.elements;
  const name = form.name.value.trim();
  const id = form.id.value || `${slugify(name)}-${Date.now()}`;
  const category = form.category.value;
  const imageValue = form.image.value.trim() || form.imagePath.value.trim();
  if (!imageValue) {
    alert("กรุณาเลือกรูปสินค้าจากเครื่องก่อนบันทึก");
    return;
  }

  const product = {
    id,
    name,
    category,
    categoryLabel: categoryLabels[category],
    price: form.price.value.trim(),
    image: imageValue,
    short: form.short.value.trim(),
    detail: form.detail.value.trim(),
  };

  const products = getProducts();
  const index = products.findIndex((item) => item.id === id);
  if (index >= 0) products[index] = product;
  else products.unshift(product);

  saveProducts(products);
  resetForm();
  alert("บันทึกสินค้าเรียบร้อยแล้ว");
});

productForm.elements.imagePath.addEventListener("input", (event) => {
  productForm.elements.image.value = event.target.value.trim();
  imagePreview.src = event.target.value.trim();
});

productForm.elements.imageFile.addEventListener("change", (event) => {
  readFileAsDataUrl(event.target.files?.[0], (result) => {
    productForm.elements.image.value = result;
    imagePreview.src = result;
  });
});

productList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit]");
  const deleteButton = event.target.closest("[data-delete]");

  if (editButton) {
    const product = getProducts().find((item) => item.id === editButton.dataset.edit);
    if (product) fillProductForm(product);
  }

  if (deleteButton) {
    const product = getProducts().find((item) => item.id === deleteButton.dataset.delete);
    if (!product) return;
    const confirmed = confirm(`ต้องการลบสินค้า "${product.name}" ใช่ไหม`);
    if (!confirmed) return;
    saveProducts(getProducts().filter((item) => item.id !== product.id));
  }
});

newProductButton.addEventListener("click", () => {
  resetForm();
  productForm.scrollIntoView({ behavior: "smooth", block: "start" });
});

cancelEditButton.addEventListener("click", resetForm);

resetProductsButton.addEventListener("click", () => {
  const confirmed = confirm("ต้องการคืนค่าสินค้าตัวอย่างทั้งหมดใช่ไหม ข้อมูลสินค้าที่แก้ไว้จะถูกแทนที่");
  if (!confirmed) return;
  Store.resetProducts();
  resetForm();
  renderAdminProducts();
});

if (isLoggedIn()) showDashboard();
else showLogin();
