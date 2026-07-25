"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { siteConfig } from "@/lib/site-config";
import { getCheckoutHref } from "@/lib/site-config";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { TrackedCta } from "@/components/ui/TrackedCta";
import { AbstractBaseVisual } from "@/components/landing/AbstractBaseVisual";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.28]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.045]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 42]);

  return (
    <section className="hero" id="hero" ref={ref}>
      <div aria-hidden="true" className="hero__halo" />
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          style={{ opacity: reduceMotion ? 1 : copyOpacity }}
        >
          <div className="hero__title-mask">
            <motion.h1
              animate={{ y: 0 }}
              initial={reduceMotion ? false : { y: "110%" }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Pare de procurar
              <br />
              {" "}fornecedores no escuro.
            </motion.h1>
          </div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero__description"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
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
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TrackedCta href={getCheckoutHref()} location="hero">
              Quero acessar a Base
            </TrackedCta>
            <TrackedCta
              href="#como-funciona"
              location="hero"
              showArrow={false}
              variant="secondary"
            >
              Ver como funciona
            </TrackedCta>
          </motion.div>

          <motion.p
            animate={{ opacity: 1 }}
            className="hero__microcopy"
            initial={reduceMotion ? false : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <span aria-hidden="true" />
            Treinamento prático + base organizada em Excel
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="hero__visual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          style={{
            scale: reduceMotion ? 1 : visualScale,
            y: reduceMotion ? 0 : visualY,
          }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {siteConfig.media.heroVideo ? (
            <MediaSlot
              alt="Apresentação visual da Base do Seller"
              assetSrc={siteConfig.media.heroVideo}
              assetType="video"
              className="hero__video"
              id="hero-video"
              label="Adicionar vídeo principal"
              poster={siteConfig.media.heroPoster}
              siteMode={siteConfig.siteMode}
              videoMode="background"
            />
          ) : (
            <AbstractBaseVisual />
          )}
        </motion.div>
      </div>

      <a className="hero__scroll-cue" href="#vsl">
        <span>Continue para entender o processo</span>
        <span aria-hidden="true" className="hero__scroll-line" />
      </a>
    </section>
  );
}
