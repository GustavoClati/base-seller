"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigationItems } from "@/content/site-content";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`seller-mobile-menu${open ? " is-open" : ""}`}>
      <button
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="seller-mobile-menu__trigger"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        <span>Menu</span>
      </button>
      {open ? (
        <nav aria-label="Navegação mobile" className="seller-mobile-menu__panel">
          {navigationItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
