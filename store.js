const defaultProducts = [
  {
    id: "premium-bag",
    name: "กระเป๋า Everyday Tote",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "฿1,290",
    short: "กระเป๋าทรงเรียบ ใช้งานง่าย เหมาะกับทำงานและวันสบาย ๆ",
    detail: "วัสดุแข็งแรง น้ำหนักเบา ช่องเก็บของเป็นสัดส่วน เหมาะสำหรับลูกค้าที่ต้องการสินค้าดูพรีเมียมแต่ใช้งานได้ทุกวัน",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ceramic-cup",
    name: "แก้วเซรามิก Minimal",
    category: "home",
    categoryLabel: "ของใช้ในบ้าน",
    price: "฿390",
    short: "แก้วดีไซน์สะอาด จับถนัดมือ ใช้ได้ทั้งร้อนและเย็น",
    detail: "แก้วเซรามิกโทนอบอุ่น เหมาะสำหรับบ้าน คาเฟ่ หรือเป็นของขวัญ มีผิวสัมผัสเรียบและล้างทำความสะอาดง่าย",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "scented-candle",
    name: "เทียนหอม Signature",
    category: "gift",
    categoryLabel: "ของขวัญ",
    price: "฿590",
    short: "กลิ่นหอมละมุน แพ็กเกจเรียบหรู เหมาะสำหรับมอบเป็นของขวัญ",
    detail: "เทียนหอมสำหรับสร้างบรรยากาศผ่อนคลาย จุดเด่นคือกลิ่นไม่ฉุน ภาชนะเรียบสวย สามารถวางตกแต่งบ้านได้",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "desk-organizer",
    name: "ชุดจัดโต๊ะทำงาน",
    category: "home",
    categoryLabel: "ของใช้ในบ้าน",
    price: "฿890",
    short: "ช่วยให้โต๊ะทำงานเป็นระเบียบ ดูสะอาด และหยิบใช้ง่าย",
    detail: "เหมาะสำหรับคนทำงานที่ต้องการพื้นที่เรียบร้อย มีช่องเก็บอุปกรณ์พื้นฐาน วางบนโต๊ะแล้วดูทันสมัย",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gift-box",
    name: "กล่องของขวัญ Premium Set",
    category: "gift",
    categoryLabel: "ของขวัญ",
    price: "฿1,590",
    short: "เซ็ตของขวัญพร้อมแพ็ก สวยจบในกล่องเดียว",
    detail: "เหมาะกับเทศกาล วันเกิด หรือของขวัญองค์กร สามารถเปลี่ยนรายการสินค้าในกล่องตามงบประมาณได้",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "watch",
    name: "นาฬิกา Classic Watch",
    category: "style",
    categoryLabel: "แฟชั่น",
    price: "฿2,490",
    short: "นาฬิกาทรงคลาสสิก ใส่ง่าย เข้ากับหลายสไตล์",
    detail: "ดีไซน์เรียบหรู เหมาะกับการใส่ทำงานหรือโอกาสพิเศษ หน้าปัดอ่านง่ายและสายปรับขนาดได้",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
  },
];

const defaultSettings = {
  storeName: "Prime Store",
  logoText: "PS",
  lineUrl: "https://line.me/R/ti/p/@yourshop",
  heroEyebrow: "ร้านค้าออนไลน์พร้อมใช้งาน",
  heroTitle: "สินค้าคุณภาพ พร้อมบริการที่เชื่อถือได้",
  heroText: "เลือกซื้อสินค้าง่าย สะดวก รวดเร็ว พร้อมทีมงานดูแลตั้งแต่ก่อนสั่งซื้อจนถึงหลังการขาย",
  primaryButtonText: "ดูสินค้าทั้งหมด",
  secondaryButtonText: "ติดต่อสั่งซื้อ",
  heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=980&q=80",
  primaryColor: "#111111",
  accentColor: "#b99a5f",
  backgroundColor: "#ffffff",
  softColor: "#f6f6f4",
  productTitle: "สินค้าขายดี",
  promoTitle: "โปรโมชั่นพิเศษ",
  whyTitle: "ทำไมต้องเลือกเรา",
  orderTitle: "วิธีสั่งซื้อ",
  reviewTitle: "รีวิวจากลูกค้า",
  contactTitle: "ติดต่อเรา",
  trustItems: "จัดส่งรวดเร็ว\nรับประกันสินค้า\nชำระเงินปลอดภัย",
  stats: "1,200+|ออเดอร์สำเร็จ\n4.9/5|คะแนนรีวิวลูกค้า\n24 ชม.|เตรียมจัดส่งเร็ว\n100%|ตรวจสินค้าก่อนส่ง",
  heroCardSmall: "สินค้าขายดีประจำสัปดาห์",
  heroCardTitle: "Premium Essentials Set",
  heroCardPrice: "เริ่มต้น ฿890",
  promoCards: "โปรประจำเดือน|ซื้อครบ ฿1,500 ส่งฟรีทั่วประเทศ|เหมาะสำหรับลูกค้าที่ต้องการสั่งหลายรายการในครั้งเดียว\nสินค้าแนะนำ|ลด 10% สำหรับสินค้าหมวดของขวัญ|ใช้ได้กับสินค้าที่ร่วมรายการถึงสิ้นเดือนนี้\nลูกค้าใหม่|รับคูปองส่วนลด ฿100 เมื่อสั่งครั้งแรก|ทักแชทเพื่อรับโค้ดก่อนชำระเงิน",
  features: "สินค้าคุณภาพ|คัดสินค้าและตรวจสภาพก่อนจัดส่งทุกครั้ง\nตอบแชทไว|ทีมงานพร้อมช่วยแนะนำสินค้าและเช็คสต็อก\nแพ็กของดี|บรรจุภัณฑ์เรียบร้อย ลดความเสียหายระหว่างขนส่ง\nบริการหลังการขาย|ดูแลปัญหาหลังรับสินค้าอย่างเป็นระบบ\nสั่งซื้อง่าย|เลือกสินค้า กดแชท และชำระเงินได้ในไม่กี่ขั้นตอน",
  steps: "เลือกสินค้า|ดูรายละเอียด ราคา และรูปสินค้าที่ต้องการ\nแชทสอบถามหรือกดสั่งซื้อ|ส่งชื่อสินค้าให้ทีมงานเช็คสต็อกและยอดรวม\nชำระเงิน|โอนเงินหรือชำระตามช่องทางที่ร้านกำหนด\nรอรับสินค้า|ร้านจัดส่งพร้อมแจ้งเลขพัสดุให้ติดตามได้",
  reviews: "คุณมินตรา|สินค้าตรงปก แพ็กดีมาก ส่งไว ตอบแชทสุภาพและให้คำแนะนำละเอียด|★★★★★\nคุณธันวา|สั่งครั้งแรกประทับใจมาก ขั้นตอนง่าย ได้รับเลขพัสดุเร็ว|★★★★★\nคุณแพรว|ของขวัญดูพรีเมียมกว่าที่คิด ร้านช่วยแนะนำสินค้าได้เหมาะมาก|★★★★★",
  contactLead: "แก้ไขช่องทางติดต่อเหล่านี้เป็นข้อมูลร้านจริงได้ทันที",
  contactInfo: "Line: @yourshop\nFacebook: Prime Store Official\nโทร: 08x-xxx-xxxx\nเวลาให้บริการ: ทุกวัน 09:00 - 20:00 น.",
  mapTitle: "แผนที่ร้าน",
  mapText: "สามารถฝัง Google Maps จริงได้ที่ส่วนนี้ หากร้านมีหน้าร้าน",
  footerText: "ร้านค้าออนไลน์โครงสร้างเรียบง่าย ดูสะอาด ใช้งานง่าย และแก้ไขต่อได้สะดวก",
  copyrightText: "© 2026 Prime Store. All rights reserved. นโยบายร้าน / เงื่อนไขการสั่งซื้อ",
  showPromotions: true,
  showWhyUs: true,
  showReviews: true,
  customCss: "",
};

const PRODUCT_KEY = "primeStoreProducts";
const SETTINGS_KEY = "primeStoreSettings";

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
