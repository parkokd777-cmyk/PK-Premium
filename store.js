const defaultProducts = [
  {
    id: "pk-classic-white-shoes",
    name: "รองเท้า PK Classic White",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "990",
    short: "รองเท้าโทนขาว ใส่ง่าย สภาพดี พร้อมใช้งาน",
    detail:
      "รองเท้า PK Classic White สไตล์เรียบหรู เหมาะกับใส่เที่ยว ใส่ทำงาน หรือแมตช์กับลุคประจำวัน สินค้าคัดสภาพก่อนลงขายทุกครั้ง ลูกค้าสามารถทักสอบถามรูปเพิ่มเติมก่อนสั่งซื้อได้",
    image: "images/product-shoes.png",
  },
  {
    id: "pk-luxury-cap",
    name: "หมวก PK Luxury Cap",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "350",
    short: "หมวกสีดำทรงสวย ใส่ง่าย แมตช์ได้หลายลุค",
    detail:
      "หมวก PK Luxury Cap สีดำเรียบหรู เหมาะกับสายแฟชั่นที่ชอบลุคมินิมอล ใส่ง่ายทั้งผู้ชายและผู้หญิง สินค้าพร้อมส่ง ตรวจสภาพก่อนจัดส่ง",
    image: "images/product-cap.png",
  },
  {
    id: "pk-denim-black",
    name: "กางเกง PK Denim Black",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "790",
    short: "กางเกงยีนส์สีดำ ทรงสวย ใช้งานได้หลายโอกาส",
    detail:
      "กางเกง PK Denim Black โทนดำคลาสสิก ใส่ง่าย เข้ากับเสื้อได้หลายแบบ เหมาะสำหรับลูกค้าที่ต้องการของดีน่าใช้ ราคาเป็นกันเอง พร้อมดูสภาพก่อนจัดส่ง",
    image: "images/product-pants.png",
  },
  {
    id: "pk-leather-belt",
    name: "เข็มขัด PK Leather Belt",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "450",
    short: "เข็มขัดสีดำเรียบหรู ใช้งานง่าย ดูสุภาพ",
    detail:
      "เข็มขัด PK Leather Belt ดีไซน์เรียบ สีดำสุภาพ เหมาะกับใส่ทำงาน ใส่เที่ยว หรือใช้เป็นไอเทมเสริมลุค สินค้าคัดสภาพก่อนลงขายและแพ็กเรียบร้อยก่อนจัดส่ง",
    image: "images/product-belt.png",
  },
  {
    id: "pk-minimal-black-shirt",
    name: "เสื้อ PK Minimal Black",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "390",
    short: "เสื้อสีดำมินิมอล ใส่ง่าย สไตล์เรียบหรู",
    detail:
      "เสื้อ PK Minimal Black โทนดำเรียบง่าย เหมาะกับลูกค้าที่ชอบสไตล์มินิมอล ใส่ได้ทุกวัน แมตช์กับกางเกงได้หลายแบบ สินค้าตรวจสภาพก่อนจัดส่ง",
    image: "images/product-shirt.png",
  },
  {
    id: "pk-premium-watch",
    name: "นาฬิกา PK Premium Watch",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "1,290",
    short: "นาฬิกาทรงคลาสสิก หน้าปัดเรียบ ดูพรีเมี่ยม",
    detail:
      "นาฬิกา PK Premium Watch ดีไซน์เรียบหรู เหมาะกับใส่ทำงานหรือออกงานทั่วไป หน้าปัดอ่านง่าย โทนสีสุภาพ ดูดีเกินราคา สอบถามรายละเอียดเพิ่มเติมได้ก่อนสั่งซื้อ",
    image: "images/product-watch.png",
  },
  {
    id: "pk-vr-vision",
    name: "แว่น VR PK Vision",
    category: "gift",
    categoryLabel: "ของขวัญ",
    price: "1,590",
    short: "แว่น VR ดีไซน์ทันสมัย เหมาะสำหรับของขวัญ",
    detail:
      "แว่น VR PK Vision เหมาะสำหรับลูกค้าที่มองหาสินค้าแนวเทคโนโลยีหรือของขวัญชิ้นพิเศษ ดีไซน์ดูทันสมัย สอบถามสภาพสินค้าและรายละเอียดเพิ่มเติมได้ก่อนสั่งซื้อ",
    image: "images/product-vr.png",
  },
];

const defaultSettings = {
  storeName: "PK Premium",
  logoText: "PK",
  lineUrl: "https://line.me/R/ti/p/@okdpk",

  heroEyebrow: "PK PREMIUM STORE",
  heroTitle: "สินค้ามือ 1 และมือ 2 คุณภาพดี",
  heroText:
    "สินค้าแฟชั่นคัดสภาพก่อนลงขาย สั่งซื้อง่าย ตอบไว พร้อมดูแลลูกค้าตั้งแต่เลือกสินค้าไปจนถึงหลังการขาย",
  primaryButtonText: "ดูสินค้าทั้งหมด",
  secondaryButtonText: "แชททันที",
  heroImage: "images/hero-pk.png",

  primaryColor: "#111111",
  accentColor: "#b99a5f",
  backgroundColor: "#ffffff",
  softColor: "#f6f1e8",

  productTitle: "สินค้าขายดี",
  promoTitle: "โปรโมชั่น",
  whyTitle: "ทำไมต้องเลือก PK",
  orderTitle: "วิธีสั่งซื้อ",
  reviewTitle: "รีวิวลูกค้า",
  contactTitle: "ติดต่อร้าน",

  trustItems:
    "จัดส่งรวดเร็ว\nรับประกันสินค้า\nชำระเงินปลอดภัย",

  stats:
    "พร้อมส่ง|สอบถามก่อนสั่งซื้อได้\nคัดสภาพ|ตรวจสินค้าก่อนลงขาย\nแพ็กดี|จัดส่งเรียบร้อย\nดูแลหลังขาย|รับประกันหลังได้รับสินค้า",

  heroCardSmall: "สินค้าแฟชั่นมือ 1 / มือ 2 คัดสภาพก่อนลงขาย",
  heroCardTitle: "ของดีน่าใช้ เลือกง่าย",
  heroCardPrice: "ราคาเป็นกันเอง พร้อมดูแลก่อนจัดส่ง",

  promoCards:
    "โปรวันเกิด|วันเกิดลด 10%|สำหรับสินค้าที่ร่วมรายการ สอบถามร้านก่อนสั่งซื้อ\nสินค้าแนะนำ|ของดีประจำร้าน|คัดสินค้าน่าใช้ ราคาเหมาะสม และพร้อมส่ง\nรับประกันสินค้า|ดูแลหลังได้รับสินค้า 3 วัน|แจ้งปัญหาพร้อมหลักฐานตามเงื่อนไขร้าน",

  features:
    "สินค้าคุณภาพ|คัดสภาพและตรวจสินค้าก่อนลงขายทุกครั้ง\nตอบแชทไว|สอบถามรายละเอียด รูปเพิ่มเติม และสถานะสินค้าได้\nแพ็กของดี|แพ็กสินค้าเรียบร้อยก่อนจัดส่ง ลดความเสียหายระหว่างขนส่ง\nบริการหลังการขาย|ดูแลปัญหาหลังได้รับสินค้าอย่างเป็นระบบ\nสั่งซื้อง่าย|เลือกสินค้า ทักแชท ยืนยันยอด และรอรับสินค้าได้เลย",

  steps:
    "เลือกสินค้า|ดูสินค้า ราคา และรายละเอียดที่ต้องการ\nทักแชทสอบถาม|แจ้งชื่อสินค้าเพื่อเช็กสภาพและสต็อก\nยืนยันยอดชำระ|ร้านสรุปยอดและช่องทางชำระเงินให้ชัดเจน\nรอรับสินค้า|ร้านแพ็กของและแจ้งรายละเอียดการจัดส่ง",

  reviews:
    "คุณลูกค้า PK|สินค้าตรงปก แพ็กดี ตอบไว สั่งง่ายมาก|★★★★★\nคุณลูกค้าแฟชั่น|ของสภาพดี ราคาโอเค ร้านให้ดูรูปก่อนตัดสินใจ|★★★★★\nคุณลูกค้าประจำ|ประทับใจบริการหลังการขาย สอบถามแล้วตอบชัดเจน|★★★★★",

  contactLead:
    "สอบถามสินค้า ขอรูปเพิ่มเติม เช็กสภาพ หรือสั่งซื้อได้ทาง LINE ร้าน",
  contactInfo:
    "Line: @okdpk\nFacebook: Prime Store\nเวลาให้บริการ: ทุกวัน 09:00 - 20:00 น.",

  mapTitle: "ช่องทางติดต่อร้าน",
  mapText: "ทัก LINE เพื่อสอบถามสินค้า เช็กสต็อก และสั่งซื้อได้ทันที",

  footerText:
    "PK Premium ร้านสินค้าแฟชั่นมือ 1 และมือ 2 คุณภาพดี คัดสภาพก่อนลงขาย สั่งซื้อง่าย ดูแลจริง",
  copyrightText:
    "© 2026 PK Premium. All rights reserved. เงื่อนไขการสั่งซื้อ / การรับประกันสินค้า",

  showPromotions: true,
  showWhyUs: true,
  showReviews: true,

  customCss: `
/* ===== PK Premium Frontend Upgrade ===== */

/* ปุ่มแชท LINE ขวาล่าง */
header a[href*="line.me"],
nav a[href*="line.me"],
header a[href*="lin.ee"],
nav a[href*="lin.ee"] {
  display: none !important;
}

body a[href*="line.me"],
body a[href*="lin.ee"] {
  position: fixed !important;
  right: 22px !important;
  bottom: 22px !important;
  z-index: 999999 !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;

  min-width: 135px !important;
  height: 52px !important;
  padding: 0 24px !important;

  background: #06c755 !important;
  color: #ffffff !important;
  border-radius: 999px !important;
  border: 2px solid #ffffff !important;

  font-size: 0 !important;
  font-weight: 900 !important;
  text-decoration: none !important;
  box-shadow: 0 12px 30px rgba(0,0,0,0.28) !important;
}

body a[href*="line.me"]::before,
body a[href*="lin.ee"]::before {
  content: "LINE";
  background: #ffffff !important;
  color: #06c755 !important;
  font-size: 11px !important;
  font-weight: 900 !important;
  padding: 5px 7px !important;
  border-radius: 7px !important;
}

body a[href*="line.me"]::after,
body a[href*="lin.ee"]::after {
  content: "แชททันที";
  font-size: 16px !important;
  color: #ffffff !important;
  white-space: nowrap !important;
}

@media (max-width: 768px) {
  body a[href*="line.me"],
  body a[href*="lin.ee"] {
    right: 14px !important;
    bottom: 14px !important;
    height: 46px !important;
    min-width: 120px !important;
    padding: 0 18px !important;
  }

  body a[href*="line.me"]::after,
  body a[href*="lin.ee"]::after {
    font-size: 14px !important;
  }
}
`,
};

/*
  เปลี่ยนชื่อ key ใหม่ เพื่อให้คนที่เคยเปิดเว็บแล้วไม่ติดข้อมูลเก่าใน localStorage
*/
const PRODUCT_KEY = "pkPremiumProductsV2";
const SETTINGS_KEY = "pkPremiumSettingsV2";

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

window.Store = {
  getProducts() {
    return readJson(PRODUCT_KEY, defaultProducts);
  },

  saveProducts(products) {
    writeJson(PRODUCT_KEY, products);
  },

  getSettings() {
    return { ...defaultSettings, ...readJson(SETTINGS_KEY, {}) };
  },

  saveSettings(settings) {
    writeJson(SETTINGS_KEY, { ...defaultSettings, ...settings });
  },

  resetProducts() {
    localStorage.removeItem(PRODUCT_KEY);
  },

  resetSettings() {
    localStorage.removeItem(SETTINGS_KEY);
  },
};
