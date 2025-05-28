const categories = [
  {
    category: "Home",
    link: "/categories/home",
    
  },
  {
    category: "Electronics",
    link: "/categories/electronics",
    subcategories: [
      { name: "Mobiles", link: "/categories/electronics/mobiles" },
      { name: "Laptops", link: "/categories/electronics/laptops" },
      { name: "Tablets", link: "/categories/electronics/tablets" },
      { name: "Cameras", link: "/categories/electronics/cameras" },
      { name: "Headphones", link: "/categories/electronics/headphones" },
      { name: "Smart Watches", link: "/categories/electronics/smart-watches" }
    ]
  },
  {
    category: "Fashion",
    link: "/categories/fashion",
    subcategories: [
      { name: "Men's Clothing", link: "/categories/fashion/mens-clothing" },
      { name: "Women's Clothing", link: "/categories/fashion/womens-clothing" },
      { name: "Shoes", link: "/categories/fashion/shoes" },
      { name: "Watches", link: "/categories/fashion/watches" },
      { name: "Accessories", link: "/categories/fashion/accessories" }
    ]
  },
  {
    category: "Beauty",
    link: "/categories/beauty",
    subcategories: [
      { name: "Skincare", link: "/categories/beauty/skincare" },
      { name: "Haircare", link: "/categories/beauty/haircare" },
      { name: "Makeup", link: "/categories/beauty/makeup" },
      { name: "Fragrances", link: "/categories/beauty/fragrances" },
      { name: "Grooming", link: "/categories/beauty/grooming" }
    ]
  },
  {
    category: "Sports",
    link: "/categories/sports",
    subcategories: [
      { name: "Cricket", link: "/categories/sports/cricket" },
      { name: "Football", link: "/categories/sports/football" },
      { name: "Gym Equipment", link: "/categories/sports/gym-equipment" },
      { name: "Cycling", link: "/categories/sports/cycling" },
      { name: "Outdoor Gear", link: "/categories/sports/outdoor-gear" }
    ]
  }
];

export default categories;
