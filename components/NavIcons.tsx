"use client";

import { BellRing, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const wixClient = useWixClient();
  const { counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <BellRing size={22} className="cursor-pointer" />

      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <ShoppingCart size={22} className="cursor-pointer" />
        {counter !== 0 && (
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
            {counter}
          </div>
        )}
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
