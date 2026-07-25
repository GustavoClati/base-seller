import type { Testimonial } from "@/content/site-content";

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: readonly Testimonial[];
}) {
  if (testimonials.length === 0) return null;

  return (
    <section className="section testimonials" aria-labelledby="testimonials">
      <div className="container">
        <h2 id="testimonials">Experiências de quem aplicou o processo.</h2>
        <div className="testimonials__list">
          {testimonials.map((testimonial) => (
            <figure key={`${testimonial.name}-${testimonial.text}`}>
              <blockquote>{testimonial.text}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                {testimonial.specificResult ? (
                  <span>{testimonial.specificResult}</span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
