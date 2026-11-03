import { ShoppingCart, Heart, Star } from "lucide-react";

const ProductCart = ({product}) => {


  return (

     
       
    

         

            <div
              key={product.id}
              className="group rounded-2xl border border-[#272F5A] bg-[#0D1020] p-5 hover:border-[#C4B4FF] transition duration-300"
            >

              {/* Image */}
              <div className="relative h-56 rounded-xl bg-[#15172A] p-4 flex items-center justify-center">

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
                />

                <button className="absolute top-3 right-3 rounded-full bg-[#080B14] p-2 text-slate-400 hover:text-[#C4B4FF]">
                  <Heart size={19} />
                </button>

              </div>

              {/* Category */}
              <p className="text-xs uppercase tracking-widest text-[#B8A3FF] mt-5">
                {product.category}
              </p>

              {/* Title */}
              <h2 className="text-base font-semibold mt-2 line-clamp-2 min-h-12">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <Star size={16} fill="#FACC15" className="text-yellow-400" />

                <span className="text-sm text-slate-300">
                  {product.rating?.rate}
                </span>

                <span className="text-xs text-slate-500">
                  ({product.rating?.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold text-[#C4B4FF]">
                  ${product.price}
                </span>
              </div>

              {/* Add to Cart */}
              <button className="w-full mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#C4B4FF] py-3 font-semibold text-[#080B14] hover:bg-[#B09AFF] transition">
                <ShoppingCart size={18} />
                Add to Cart
              </button>

            </div>

      
    

  );
};

export default ProductCart;