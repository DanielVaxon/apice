import { ExternalLink, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Empreendimento } from "@/lib/empreendimentos";

const MAP = {
  bg: "#0E0E0C", // apice-ink
  grid: "#1F1B16",
  via: "#2A2620",
  marker: "#C4A572", // apice-champagne
  markerSoft: "#E5C68A", // apice-champagne-soft
  poi: "#C4A572",
  poiLine: "#C4A572",
  text: "#FFFFFF",
} as const;

// Hash determinístico por slug — dá offsets estáveis aos POIs.
function seedFromSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function poiPositions(slug: string, count: number) {
  const seed = seedFromSlug(slug);
  return Array.from({ length: count }, (_, i) => {
    const angleSeed = ((seed + i * 173) % 360) * (Math.PI / 180);
    const angle = angleSeed + (i * Math.PI * 2) / Math.max(count, 1);
    const radius = 200 + ((seed + i * 47) % 110);
    return {
      x: 600 + Math.cos(angle) * radius,
      y: 400 + Math.sin(angle) * radius * 0.6, // achata vertical
    };
  });
}

export function Localizacao({
  empreendimento,
}: {
  empreendimento: Empreendimento;
}) {
  const enderecoCompleto = `${empreendimento.endereco}, Brasília - DF`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`;
  const poiPositionsList = poiPositions(
    empreendimento.slug,
    empreendimento.pontosInteresse.length,
  );

  return (
    <section className="bg-apice-ink py-20 text-apice-bone md:py-28 lg:py-32">
      <Container>
        <FadeIn>
          <div className="mb-12 flex flex-col gap-5 md:mb-16">
            <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-widest-3 text-apice-champagne">
              <span aria-hidden className="block h-px w-10 bg-apice-champagne" />
              <span>Localização</span>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-apice-cream md:text-5xl">
              Onde fica o {empreendimento.nome}.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:gap-10 lg:gap-14">
          {/* Mapa SVG */}
          <FadeIn>
            <div className="relative overflow-hidden border border-apice-stone/40 bg-[#0A0A0A]">
              <svg
                viewBox="0 0 1200 800"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Mapa estilizado da localização: ${enderecoCompleto}`}
                className="block h-full w-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M60 0 L0 0 0 60"
                      fill="none"
                      stroke={MAP.grid}
                      strokeWidth="0.6"
                    />
                  </pattern>
                  <pattern
                    id="map-grid-inner"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M20 0 L0 0 0 20"
                      fill="none"
                      stroke={MAP.grid}
                      strokeWidth="0.3"
                      opacity="0.6"
                    />
                  </pattern>
                </defs>

                <rect width="1200" height="800" fill={MAP.bg} />
                <rect width="1200" height="800" fill="url(#map-grid-inner)" />
                <rect width="1200" height="800" fill="url(#map-grid)" />

                {/* Vias principais (3 cruzando) */}
                <line
                  x1="0"
                  y1="320"
                  x2="1200"
                  y2="320"
                  stroke={MAP.via}
                  strokeWidth="3"
                />
                <line
                  x1="0"
                  y1="500"
                  x2="1200"
                  y2="480"
                  stroke={MAP.via}
                  strokeWidth="3"
                />
                <line
                  x1="450"
                  y1="0"
                  x2="500"
                  y2="800"
                  stroke={MAP.via}
                  strokeWidth="3"
                />
                <line
                  x1="800"
                  y1="0"
                  x2="780"
                  y2="800"
                  stroke={MAP.via}
                  strokeWidth="3"
                />
                {/* Vias secundárias (mais finas) */}
                <line
                  x1="0"
                  y1="200"
                  x2="1200"
                  y2="190"
                  stroke={MAP.grid}
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="650"
                  x2="1200"
                  y2="660"
                  stroke={MAP.grid}
                  strokeWidth="1.5"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="220"
                  y2="800"
                  stroke={MAP.grid}
                  strokeWidth="1.5"
                />
                <line
                  x1="1000"
                  y1="0"
                  x2="980"
                  y2="800"
                  stroke={MAP.grid}
                  strokeWidth="1.5"
                />

                {/* Linhas tracejadas conectando empreendimento aos POIs */}
                {poiPositionsList.map((pos, i) => (
                  <line
                    key={`line-${i}`}
                    x1="600"
                    y1="400"
                    x2={pos.x}
                    y2={pos.y}
                    stroke={MAP.poiLine}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.4"
                  />
                ))}

                {/* POIs */}
                {poiPositionsList.map((pos, i) => {
                  const labelText = empreendimento.pontosInteresse[i] ?? "";
                  const labelOffsetX = pos.x > 600 ? 14 : -14;
                  const anchor = pos.x > 600 ? "start" : "end";
                  return (
                    <g key={`poi-${i}`}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="6"
                        fill={MAP.poi}
                        opacity="0.25"
                      />
                      <circle cx={pos.x} cy={pos.y} r="3.5" fill={MAP.poi} />
                      <text
                        x={pos.x + labelOffsetX}
                        y={pos.y + 4}
                        fill={MAP.text}
                        fontFamily='"Inter", system-ui, sans-serif'
                        fontSize="13"
                        fontWeight="500"
                        textAnchor={anchor}
                      >
                        {labelText}
                      </text>
                    </g>
                  );
                })}

                {/* Marcador central pulsante */}
                <g transform="translate(600, 400)">
                  <circle r="32" fill={MAP.marker} opacity="0.18">
                    <animate
                      attributeName="r"
                      from="16"
                      to="36"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.45"
                      to="0"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="18" fill={MAP.markerSoft} opacity="0.6" />
                  <circle r="8" fill="#FFFFFF" opacity="1" />
                </g>

                {/* Tag do empreendimento abaixo do marcador */}
                <g transform="translate(600, 460)">
                  <rect
                    x="-110"
                    y="0"
                    width="220"
                    height="34"
                    fill="#0E0E0C"
                    stroke={MAP.marker}
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="22"
                    fill="#FFFFFF"
                    fontFamily='"Inter", system-ui, sans-serif'
                    fontSize="12"
                    fontWeight="600"
                    textAnchor="middle"
                    letterSpacing="1.2"
                  >
                    {empreendimento.nome.toUpperCase()}
                  </text>
                </g>

                {/* Legenda */}
                <g transform="translate(40, 760)">
                  <text
                    fill={MAP.text}
                    fontFamily='"Inter", system-ui, sans-serif'
                    fontSize="10"
                    fontWeight="500"
                    letterSpacing="1.5"
                    opacity="0.5"
                  >
                    BRASÍLIA · DF — VISÃO ESTILIZADA
                  </text>
                </g>
              </svg>
            </div>
          </FadeIn>

          {/* Coluna direita: endereço, POIs, CTA */}
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-champagne">
                  Endereço
                </p>
                <p className="font-display text-2xl font-medium leading-snug text-apice-cream md:text-3xl">
                  {empreendimento.endereco}
                </p>
                <p className="font-sans text-sm text-apice-bone/70">
                  Brasília — Distrito Federal
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-champagne">
                  Pontos de interesse
                </p>
                <ul className="flex flex-col">
                  {empreendimento.pontosInteresse.map((ponto) => (
                    <li
                      key={ponto}
                      className="flex items-start gap-3 border-b border-apice-stone/30 py-3 last:border-b-0"
                    >
                      <MapPin
                        size={14}
                        aria-hidden
                        className="mt-1 shrink-0 text-apice-champagne"
                      />
                      <span className="font-sans text-sm text-apice-bone/85">
                        {ponto}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center justify-between gap-3 border border-apice-champagne px-6 py-4 font-sans text-xs font-medium uppercase tracking-widest text-apice-champagne transition-all duration-300 hover:bg-apice-champagne hover:text-apice-ink"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink
                  size={16}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
