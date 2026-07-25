import Link from "next/link";

import { navigationItems } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";
import { BrandWordmark } from "@/components/ui/BrandWordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div aria-hidden="true" className="footer__orb" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <BrandWordmark />
          <p>Produto educacional independente.</p>
        </div>

        <div>
          <h2>Base do Seller</h2>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={`/${item.href}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {(siteConfig.memberAreaUrl || siteConfig.supportEmail) && (
          <div>
            <h2>Acesso</h2>
            <ul>
              {siteConfig.memberAreaUrl ? (
                <li>
                  <a href={siteConfig.memberAreaUrl}>Já sou aluno</a>
                </li>
              ) : null}
              {siteConfig.supportEmail ? (
                <li>
                  <a href={`mailto:${siteConfig.supportEmail}`}>Suporte</a>
                </li>
              ) : null}
            </ul>
          </div>
        )}

        <div>
          <h2>Legal</h2>
          <ul>
            <li>
              <Link href="/termos">Termos de uso</Link>
            </li>
            <li>
              <Link href="/privacidade">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/reembolso">Política de reembolso</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          {siteConfig.brandName} — produto educacional independente. © {year}
        </p>
        <p>
          Sem vínculo, patrocínio ou afiliação oficial com o Mercado Livre.
        </p>
      </div>
    </footer>
  );
}
