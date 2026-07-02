const SITE_DATA = {
  title: "Chợ phiên Vân Hồ",
  subtitle: "Không gian văn hóa - du lịch - thương mại",
  intro: "Trang triển lãm số giới thiệu không gian chợ phiên, khu nông sản, khu ẩm thực, hoạt động văn hóa và sản phẩm địa phương.",
  imageMax: 100,
  contact: {
    location: "Chợ phiên Vân Hồ, xã Vân Hồ, tỉnh Sơn La",
    time: "Cập nhật theo lịch tổ chức",
    phone: "Cập nhật sau"
  },
  sections: [
    {
      id: "nong-san",
      title: "Khu nông sản",
      icon: "🥬",
      description: "Rau củ, trái cây, sản phẩm nông nghiệp và đặc sản địa phương.",
      folder: "images/nong-san",
      page: "nong-san.html"
    },
    {
      id: "am-thuc",
      title: "Khu ẩm thực",
      icon: "🍜",
      description: "Món ăn truyền thống, trải nghiệm ẩm thực và sản phẩm chế biến.",
      folder: "images/am-thuc",
      page: "am-thuc.html"
    },
    {
      id: "van-hoa",
      title: "Văn hóa dân tộc",
      icon: "🎭",
      description: "Trang phục, văn nghệ, thổ cẩm và bản sắc văn hóa địa phương.",
      folder: "images/van-hoa",
      page: "van-hoa.html"
    }
  ],
  shops: [
    { section: "nong-san", name: "Gian hàng 01", group: "Nông sản", desc: "Rau củ, quả tươi, sản phẩm địa phương." },
    { section: "nong-san", name: "Gian hàng 02", group: "OCOP", desc: "Sản phẩm đặc trưng, quà tặng địa phương." },
    { section: "am-thuc", name: "Gian hàng 03", group: "Ẩm thực", desc: "Các món ăn dân tộc, món ăn truyền thống." },
    { section: "van-hoa", name: "Gian hàng 04", group: "Thủ công", desc: "Thổ cẩm, sản phẩm lưu niệm, đồ thủ công." }
  ]
};