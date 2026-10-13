import { createContext,useState } from "react";

export let Myshop=createContext();

export const MyshopContextProvider=({children})=>{
    let products = [
    {
      product_id: 1,
      name: "Samsung Galaxy S24",
      description:
        "Powerful smartphone with a bright AMOLED display and advanced camera.",
      price: 69999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      discount: 10,
      availability: true,
      brand: "Samsung",
      category: "Smartphones",
      rating: 4.7,
    },

    {
      product_id: 2,
      name: "MacBook Air M3",
      description:
        "Lightweight laptop with powerful performance and long battery life.",
      price: 99999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
      discount: 8,
      availability: true,
      brand: "Apple",
      category: "Laptops",
      rating: 4.9,
    },

    {
      product_id: 3,
      name: "Sony WH-1000XM5",
      description:
        "Premium wireless headphones with industry-leading noise cancellation.",
      price: 29999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      discount: 15,
      availability: true,
      brand: "Sony",
      category: "Headphones",
      rating: 4.8,
    },

    {
      product_id: 4,
      name: "Apple Watch Series 10",
      description:
        "Advanced smartwatch with health tracking, fitness features and notifications.",
      price: 39999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
      discount: 12,
      availability: true,
      brand: "Apple",
      category: "Wearables",
      rating: 4.7,
    },

    {
      product_id: 5,
      name: "Canon EOS R6",
      description:
        "Professional mirrorless camera designed for photography and video recording.",
      price: 149999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
      discount: 7,
      availability: true,
      brand: "Canon",
      category: "Cameras",
      rating: 4.9,
    },

    {
      product_id: 6,
      name: "Sony Bravia 55-inch 4K TV",
      description:
        "Ultra HD smart TV with vivid colors and built-in streaming applications.",
      price: 74999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
      discount: 10,
      availability: true,
      brand: "Sony",
      category: "Televisions",
      rating: 4.6,
    },

    {
      product_id: 7,
      name: "iPad Air",
      description:
        "Slim and powerful tablet perfect for productivity, creativity and entertainment.",
      price: 49999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
      discount: 9,
      availability: true,
      brand: "Apple",
      category: "Tablets",
      rating: 4.8,
    },

    {
      product_id: 8,
      name: "PlayStation 5",
      description:
        "Next-generation gaming console delivering immersive graphics and fast gameplay.",
      price: 54999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
      discount: 5,
      availability: true,
      brand: "Sony",
      category: "Gaming",
      rating: 4.9,
    },

    {
      product_id: 9,
      name: "Samsung 500L Refrigerator",
      description:
        "Modern double-door refrigerator with spacious storage and energy-efficient cooling.",
      price: 69999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
      discount: 12,
      availability: true,
      brand: "Samsung",
      category: "Appliances",
      rating: 4.6,
    },
    {
      product_id: 10,
      name: "Dell XPS 15",
      description:
        "Premium laptop with powerful performance, high-resolution display and sleek design.",
      price: 129999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80",
      discount: 10,
      availability: true,
      brand: "Dell",
      category: "Laptops",
      rating: 4.7,
    },

    {
      product_id: 11,
      name: "OnePlus 12",
      description:
        "High-performance smartphone with a smooth AMOLED display and advanced camera system.",
      price: 64999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
      discount: 8,
      availability: true,
      brand: "OnePlus",
      category: "Smartphones",
      rating: 4.6,
    },

    {
      product_id: 12,
      name: "JBL Tune 770NC",
      description:
        "Wireless headphones with active noise cancellation and powerful bass performance.",
      price: 7999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
      discount: 15,
      availability: true,
      brand: "JBL",
      category: "Headphones",
      rating: 4.5,
    },

    {
      product_id: 13,
      name: "Nike Air Max 270",
      description:
        "Comfortable lifestyle sneakers with responsive cushioning and modern styling.",
      price: 12999,
      unit: "Pair",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      discount: 20,
      availability: true,
      brand: "Nike",
      category: "Footwear",
      rating: 4.7,
    },

    {
      product_id: 14,
      name: "Canon EOS R50",
      description:
        "Compact mirrorless camera with excellent image quality and advanced autofocus.",
      price: 67999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=600&q=80",
      discount: 9,
      availability: true,
      brand: "Canon",
      category: "Cameras",
      rating: 4.8,
    },

    {
      product_id: 15,
      name: "Samsung Galaxy Tab S9",
      description:
        "Powerful Android tablet with a vibrant display and excellent multitasking performance.",
      price: 74999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
      discount: 11,
      availability: true,
      brand: "Samsung",
      category: "Tablets",
      rating: 4.7,
    },

    {
      product_id: 16,
      name: "Logitech MX Master 3S",
      description:
        "Advanced wireless mouse designed for productivity with precise tracking and quiet clicks.",
      price: 8999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
      discount: 13,
      availability: true,
      brand: "Logitech",
      category: "Accessories",
      rating: 4.8,
    },

    {
      product_id: 17,
      name: "Apple AirPods Pro 2",
      description:
        "Premium wireless earbuds with active noise cancellation and immersive sound quality.",
      price: 24999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
      discount: 10,
      availability: true,
      brand: "Apple",
      category: "Audio",
      rating: 4.8,
    },

    {
      product_id: 18,
      name: "LG 1.5 Ton Split AC",
      description:
        "Energy-efficient air conditioner with fast cooling and smart temperature control.",
      price: 45999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1631545806609-4b4c4d7a2f6b?auto=format&fit=crop&w=600&q=80",
      discount: 14,
      availability: true,
      brand: "LG",
      category: "Appliances",
      rating: 4.5,
    },

    {
      product_id: 19,
      name: "Xbox Series X",
      description:
        "Powerful gaming console delivering high-performance gaming and stunning 4K graphics.",
      price: 54999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80",
      discount: 6,
      availability: true,
      brand: "Microsoft",
      category: "Gaming",
      rating: 4.8,
    },

    {
      product_id: 20,
      name: "boAt Stone 1200",
      description:
        "Portable Bluetooth speaker with powerful sound, deep bass and long battery life.",
      price: 4999,
      unit: "Piece",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
      discount: 18,
      availability: true,
      brand: "boAt",
      category: "Speakers",
      rating: 4.4,
    },
  ];

  const [cardItems, setCardItems] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  console.log(isCardOpen);
     return <Myshop.Provider value={{products,cardItems,setCardItems,isCardOpen,setIsCardOpen}}>{children}</Myshop.Provider>
}