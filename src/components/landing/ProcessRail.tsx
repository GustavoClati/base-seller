const processWords = [
  "Encontrar",
  "Validar",
  "Analisar",
  "Testar pequeno",
] as const;

export function ProcessRail() {
  const repeatedWords = [...processWords, ...processWords];

  return (
    <div
      aria-label="Processo: encontrar, validar, analisar e testar pequeno"
      className="process-rail"
      role="region"
    >
      <div aria-hidden="true" className="process-rail__track">
        {repeatedWords.map((word, index) => (
          <span key={`${word}-${index}`}>
            {word}
            <i />
          </span>
        ))}
      </div>
    </div>
  );
}
