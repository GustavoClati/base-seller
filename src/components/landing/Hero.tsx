"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { FileSpreadsheet, ShieldCheck, UsersRound } from "lucide-react";
import { useRef } from "react";

import { TrackedCta } from "@/components/ui/TrackedCta";
import { getCheckoutHref, siteConfig } from "@/lib/site-config";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.28]);

  return (
    <section className="hero" id="hero" ref={ref}>
      <div aria-hidden="true" className="hero__halo" />
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          style={{ opacity: reduceMotion ? 1 : copyOpacity }}
        >
          <div className="hero__title-mask">
            <motion.h1 aria-label="Pare de procurar fornecedores no escuro.">
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className="hero__title-line"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.75,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Pare de procurar
              </motion.span>
              <motion.strong
                animate={{ opacity: 1, y: 0 }}
                className="hero__title-line hero__title-emphasis"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.75,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                fornecedores no escuro.
              </motion.strong>
            </motion.h1>
          </div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero__description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Acesse os fornecedores que eu já utilizei no meu e-commerce e
            aprenda a encontrar, validar e analisar produtos antes de colocar
            dinheiro em estoque.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero__actions"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            transition={{
              duration: 0.7,
              delay: 0.66,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TrackedCta href={getCheckoutHref()} location="hero">
              Quero acessar a Base
            </TrackedCta>
            <TrackedCta
              href="#como-funciona"
              location="hero"
              variant="secondary"
            >
              Ver como funciona
            </TrackedCta>
          </motion.div>

          <motion.ul
            animate={{ opacity: 1, y: 0 }}
            aria-label="O que acompanha a Base do Seller"
            className="hero__confidence"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            transition={{
              duration: 0.65,
              delay: 0.84,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <li>
              <UsersRound aria-hidden="true" size={21} strokeWidth={1.8} />
              <span>
                <strong>{siteConfig.supplierCount}</strong> fornecedores
              </span>
            </li>
            <li>
              <FileSpreadsheet
                aria-hidden="true"
                size={21}
                strokeWidth={1.8}
              />
              <span>Treinamento + planilha</span>
            </li>
            <li>
              <ShieldCheck aria-hidden="true" size={21} strokeWidth={1.8} />
              <span>{siteConfig.offer.guaranteeDays} dias de garantia</span>
            </li>
          </motion.ul>
        </motion.div>
      </div>

      <a className="hero__scroll-cue" href="#vsl">
        <span>Continue para entender o processo</span>
        <span aria-hidden="true" className="hero__scroll-line" />
      </a>
    </section>
  );
}
