import type { BlueprintKey } from "@/lib/empreendimentos";

// Paleta blueprint Ápice (champagne sobre ink). Mantém estilo técnico
// preservando a marca do cliente.
const COLOR = {
  bg: "#0E0E0C", // apice-ink
  grid: "#1F1B16", // tom escuro com pista de bronze
  wall: "#C4A572", // apice-champagne
  open: "#E5C68A", // apice-champagne-soft (aberturas, hierarquia visual)
  dim: "#4A4A4A",
  text: "#FFFFFF",
  hatch: "#1F1B16",
} as const;

const FONT_LABEL =
  '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';
const FONT_DIM =
  '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';

type PlantaSVGProps = {
  tipologia: BlueprintKey;
  area?: string;
};

export function PlantaSVG({ tipologia, area }: PlantaSVGProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Planta técnica blueprint — ${tipologia}`}
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern
          id="hatch-ext"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke={COLOR.hatch}
            strokeWidth="1"
          />
        </pattern>
        <pattern
          id="hatch-water"
          patternUnits="userSpaceOnUse"
          width="20"
          height="6"
        >
          <path
            d="M0,3 Q5,0 10,3 T20,3"
            fill="none"
            stroke={COLOR.dim}
            strokeWidth="0.8"
          />
        </pattern>
        <pattern
          id="grid-pattern"
          patternUnits="userSpaceOnUse"
          width="40"
          height="40"
        >
          <path
            d="M40 0 L0 0 0 40"
            fill="none"
            stroke={COLOR.grid}
            strokeWidth="0.6"
          />
        </pattern>
      </defs>

      <rect width="800" height="600" fill={COLOR.bg} />
      <rect width="800" height="600" fill="url(#grid-pattern)" />

      {renderPlanta(tipologia)}

      <NorthArrow />
      <ScaleBar />
      <TipologiaTag tipologia={tipologia} area={area} />
    </svg>
  );
}

function renderPlanta(t: BlueprintKey) {
  switch (t) {
    case "STUDIO":
      return <Studio />;
    case "1Q":
      return <Apartamento1Q />;
    case "2Q":
      return <Apartamento2Q />;
    case "3Q":
      return <Apartamento3Q />;
    case "4Q":
      return <Apartamento4Q />;
    case "COBERTURA":
      return <Cobertura />;
    case "GARDEN":
      return <Garden />;
    case "LOJA":
      return <Loja />;
    case "SALA":
      return <Sala />;
    case "HOTEL_SUITE":
      return <HotelSuite />;
    default:
      return null;
  }
}

// ───────────────────────────────────────────────────────────────────────
// HELPERS GENÉRICOS (paredes, portas, janelas, labels, cotas)
// ───────────────────────────────────────────────────────────────────────

type Pt = { x: number; y: number };

function Wall({
  x,
  y,
  w,
  h,
  fill = "none",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill={fill}
      stroke={COLOR.wall}
      strokeWidth="3"
    />
  );
}

function InnerWall({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={COLOR.wall}
      strokeWidth="2.5"
    />
  );
}

function DoorMark({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={COLOR.open}
      strokeWidth="2"
      strokeDasharray="3 3"
    />
  );
}

function WindowMark({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  // Janela: duas linhas paralelas
  const dx = y1 === y2 ? 0 : 2;
  const dy = y1 === y2 ? 2 : 0;
  return (
    <g>
      <line
        x1={x1 - dx}
        y1={y1 - dy}
        x2={x2 - dx}
        y2={y2 - dy}
        stroke={COLOR.open}
        strokeWidth="1.5"
      />
      <line
        x1={x1 + dx}
        y1={y1 + dy}
        x2={x2 + dx}
        y2={y2 + dy}
        stroke={COLOR.open}
        strokeWidth="1.5"
      />
    </g>
  );
}

function RoomLabel({ x, y, label }: Pt & { label: string }) {
  return (
    <text
      x={x}
      y={y}
      fill={COLOR.text}
      fontFamily={FONT_LABEL}
      fontSize="11"
      fontWeight="700"
      letterSpacing="1.4"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ textTransform: "uppercase" }}
    >
      {label}
    </text>
  );
}

function CotaH({
  x1,
  x2,
  y,
  label,
}: {
  x1: number;
  x2: number;
  y: number;
  label: string;
}) {
  const mid = (x1 + x2) / 2;
  return (
    <g>
      <line
        x1={x1}
        y1={y - 4}
        x2={x1}
        y2={y + 4}
        stroke={COLOR.dim}
        strokeWidth="1"
      />
      <line
        x1={x2}
        y1={y - 4}
        x2={x2}
        y2={y + 4}
        stroke={COLOR.dim}
        strokeWidth="1"
      />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={COLOR.dim} strokeWidth="1" />
      <rect
        x={mid - 18}
        y={y - 8}
        width="36"
        height="14"
        fill={COLOR.bg}
      />
      <text
        x={mid}
        y={y + 3}
        fill={COLOR.text}
        fontFamily={FONT_DIM}
        fontSize="10"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function CotaV({
  y1,
  y2,
  x,
  label,
}: {
  y1: number;
  y2: number;
  x: number;
  label: string;
}) {
  const mid = (y1 + y2) / 2;
  return (
    <g>
      <line
        x1={x - 4}
        y1={y1}
        x2={x + 4}
        y2={y1}
        stroke={COLOR.dim}
        strokeWidth="1"
      />
      <line
        x1={x - 4}
        y1={y2}
        x2={x + 4}
        y2={y2}
        stroke={COLOR.dim}
        strokeWidth="1"
      />
      <line x1={x} y1={y1} x2={x} y2={y2} stroke={COLOR.dim} strokeWidth="1" />
      <rect
        x={x - 16}
        y={mid - 7}
        width="32"
        height="14"
        fill={COLOR.bg}
      />
      <text
        x={x}
        y={mid + 3}
        fill={COLOR.text}
        fontFamily={FONT_DIM}
        fontSize="10"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function Hatch({
  x,
  y,
  w,
  h,
  pattern = "url(#hatch-ext)",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  pattern?: string;
}) {
  return <rect x={x} y={y} width={w} height={h} fill={pattern} />;
}

function NorthArrow() {
  return (
    <g transform="translate(740, 50)">
      <circle cx="0" cy="0" r="22" fill="none" stroke={COLOR.dim} strokeWidth="1" />
      <path
        d="M0 -16 L6 8 L0 4 L-6 8 Z"
        fill={COLOR.wall}
      />
      <text
        x="0"
        y="-26"
        fill={COLOR.text}
        fontFamily={FONT_DIM}
        fontSize="10"
        fontWeight="700"
        textAnchor="middle"
      >
        N
      </text>
    </g>
  );
}

function ScaleBar() {
  return (
    <g transform="translate(40, 560)">
      <line x1="0" y1="0" x2="80" y2="0" stroke={COLOR.text} strokeWidth="2" />
      <line x1="0" y1="-4" x2="0" y2="4" stroke={COLOR.text} strokeWidth="2" />
      <line x1="80" y1="-4" x2="80" y2="4" stroke={COLOR.text} strokeWidth="2" />
      <line x1="40" y1="-3" x2="40" y2="3" stroke={COLOR.text} strokeWidth="1" />
      <text
        x="0"
        y="20"
        fill={COLOR.text}
        fontFamily={FONT_DIM}
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.5"
      >
        ESC 1:50
      </text>
    </g>
  );
}

function TipologiaTag({
  tipologia,
  area,
}: {
  tipologia: BlueprintKey;
  area?: string;
}) {
  return (
    <g transform="translate(760, 560)">
      <text
        x="0"
        y="0"
        fill={COLOR.wall}
        fontFamily={FONT_DIM}
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.5"
        textAnchor="end"
      >
        {tipologia}
        {area ? ` · ${area}` : ""}
      </text>
    </g>
  );
}

// ───────────────────────────────────────────────────────────────────────
// LAYOUTS POR TIPOLOGIA
// ───────────────────────────────────────────────────────────────────────

function Studio() {
  // Caixa única integrada: living + kitchen + bath
  // Outer rect: 200,150 — 600,400  (400x250)
  return (
    <g>
      <Hatch x={200} y={130} w={400} h={20} />
      {/* Outer */}
      <Wall x={200} y={150} w={400} h={250} />
      {/* Bath divisor */}
      <InnerWall x1={500} y1={150} x2={500} y2={260} />
      <InnerWall x1={500} y1={260} x2={600} y2={260} />
      {/* Door bath */}
      <DoorMark x1={500} y1={200} x2={500} y2={230} />
      {/* Kitchen counter */}
      <line x1={220} y1={170} x2={350} y2={170} stroke={COLOR.dim} strokeWidth="2" />
      <line x1={350} y1={170} x2={350} y2={210} stroke={COLOR.dim} strokeWidth="2" />
      {/* Window */}
      <WindowMark x1={300} y1={400} x2={500} y2={400} />
      {/* Door entry */}
      <DoorMark x1={400} y1={150} x2={440} y2={150} />

      <RoomLabel x={420} y={300} label="LIVING / DORMITÓRIO" />
      <RoomLabel x={285} y={195} label="COZINHA" />
      <RoomLabel x={550} y={210} label="WC" />

      <CotaH x1={200} x2={600} y={120} label="8.00 m" />
      <CotaV y1={150} y2={400} x={170} label="5.00 m" />
    </g>
  );
}

function Apartamento1Q() {
  // 1Q: living, cozinha, quarto, banheiro, serviço
  return (
    <g>
      <Hatch x={150} y={130} w={500} h={20} />
      <Wall x={150} y={150} w={500} h={300} />
      {/* Vertical inner: separa ala social/quarto */}
      <InnerWall x1={420} y1={150} x2={420} y2={300} />
      <DoorMark x1={420} y1={210} x2={420} y2={250} />
      {/* Banheiro */}
      <InnerWall x1={420} y1={300} x2={550} y2={300} />
      <InnerWall x1={550} y1={300} x2={550} y2={450} />
      <DoorMark x1={510} y1={300} x2={550} y2={300} />
      {/* Serviço */}
      <InnerWall x1={150} y1={370} x2={280} y2={370} />
      <InnerWall x1={280} y1={370} x2={280} y2={450} />
      <DoorMark x1={210} y1={370} x2={250} y2={370} />
      {/* Cozinha */}
      <line x1={170} y1={170} x2={170} y2={350} stroke={COLOR.dim} strokeWidth="2" />
      <line x1={170} y1={170} x2={280} y2={170} stroke={COLOR.dim} strokeWidth="2" />
      {/* Janelas */}
      <WindowMark x1={300} y1={150} x2={400} y2={150} />
      <WindowMark x1={500} y1={150} x2={620} y2={150} />
      <WindowMark x1={500} y1={450} x2={620} y2={450} />
      {/* Door entry */}
      <DoorMark x1={350} y1={450} x2={400} y2={450} />

      <RoomLabel x={310} y={260} label="SALA" />
      <RoomLabel x={530} y={220} label="QUARTO" />
      <RoomLabel x={220} y={260} label="COZINHA" />
      <RoomLabel x={485} y={370} label="WC" />
      <RoomLabel x={210} y={410} label="SERV." />

      <CotaH x1={150} x2={650} y={120} label="10.00 m" />
      <CotaV y1={150} y2={450} x={120} label="6.00 m" />
    </g>
  );
}

function Apartamento2Q() {
  return (
    <g>
      <Hatch x={130} y={130} w={540} h={20} />
      <Wall x={130} y={150} w={540} h={310} />
      {/* Varanda */}
      <Wall x={130} y={460} w={540} h={50} />
      <Hatch x={140} y={470} w={520} h={30} pattern="url(#hatch-ext)" />
      {/* Divisões */}
      <InnerWall x1={400} y1={150} x2={400} y2={310} />
      <InnerWall x1={400} y1={310} x2={670} y2={310} />
      <InnerWall x1={530} y1={310} x2={530} y2={460} />
      {/* Banheiros */}
      <InnerWall x1={400} y1={250} x2={530} y2={250} />
      <InnerWall x1={530} y1={150} x2={530} y2={250} />
      {/* Cozinha + serviço */}
      <InnerWall x1={130} y1={350} x2={290} y2={350} />
      <InnerWall x1={290} y1={350} x2={290} y2={460} />
      <InnerWall x1={130} y1={420} x2={290} y2={420} />
      {/* Doors */}
      <DoorMark x1={400} y1={180} x2={400} y2={220} />
      <DoorMark x1={400} y1={350} x2={400} y2={390} />
      <DoorMark x1={460} y1={250} x2={500} y2={250} />
      <DoorMark x1={530} y1={180} x2={530} y2={220} />
      <DoorMark x1={250} y1={420} x2={290} y2={420} />
      <DoorMark x1={250} y1={350} x2={290} y2={350} />
      {/* Janelas */}
      <WindowMark x1={150} y1={150} x2={250} y2={150} />
      <WindowMark x1={420} y1={150} x2={500} y2={150} />
      <WindowMark x1={550} y1={150} x2={650} y2={150} />
      {/* Porta varanda (passagem grande) */}
      <DoorMark x1={300} y1={460} x2={500} y2={460} />
      {/* Entry */}
      <DoorMark x1={620} y1={460} x2={660} y2={460} />

      <RoomLabel x={240} y={250} label="SALA" />
      <RoomLabel x={465} y={205} label="SUÍTE" />
      <RoomLabel x={600} y={205} label="QUARTO" />
      <RoomLabel x={465} y={285} label="WC" />
      <RoomLabel x={600} y={385} label="WC" />
      <RoomLabel x={210} y={385} label="COZINHA" />
      <RoomLabel x={210} y={440} label="SERV." />
      <RoomLabel x={400} y={490} label="VARANDA" />

      <CotaH x1={130} x2={670} y={115} label="11.00 m" />
      <CotaV y1={150} y2={510} x={100} label="7.20 m" />
    </g>
  );
}

function Apartamento3Q() {
  return (
    <g>
      <Hatch x={100} y={120} w={600} h={20} />
      <Wall x={100} y={140} w={600} h={320} />
      {/* Varanda gourmet */}
      <Wall x={100} y={460} w={600} h={60} />
      <Hatch x={110} y={470} w={580} h={40} />

      {/* Setor íntimo (direita) */}
      <InnerWall x1={400} y1={140} x2={400} y2={460} />
      {/* 3 quartos verticais */}
      <InnerWall x1={400} y1={240} x2={700} y2={240} />
      <InnerWall x1={400} y1={340} x2={700} y2={340} />
      {/* Suíte com banheiro próprio */}
      <InnerWall x1={580} y1={140} x2={580} y2={240} />
      {/* Banheiro social */}
      <InnerWall x1={580} y1={240} x2={580} y2={340} />
      {/* Setor serviço (esquerda) */}
      <InnerWall x1={100} y1={340} x2={290} y2={340} />
      <InnerWall x1={290} y1={340} x2={290} y2={460} />
      <InnerWall x1={100} y1={400} x2={290} y2={400} />
      {/* Cozinha */}
      <line
        x1={120}
        y1={355}
        x2={270}
        y2={355}
        stroke={COLOR.dim}
        strokeWidth="2"
      />
      <line
        x1={120}
        y1={355}
        x2={120}
        y2={395}
        stroke={COLOR.dim}
        strokeWidth="2"
      />

      {/* Doors */}
      <DoorMark x1={400} y1={170} x2={400} y2={210} />
      <DoorMark x1={400} y1={270} x2={400} y2={310} />
      <DoorMark x1={400} y1={370} x2={400} y2={410} />
      <DoorMark x1={580} y1={180} x2={580} y2={220} />
      <DoorMark x1={580} y1={270} x2={580} y2={310} />
      <DoorMark x1={250} y1={340} x2={290} y2={340} />
      <DoorMark x1={250} y1={400} x2={290} y2={400} />

      {/* Janelas */}
      <WindowMark x1={130} y1={140} x2={250} y2={140} />
      <WindowMark x1={290} y1={140} x2={380} y2={140} />
      <WindowMark x1={420} y1={140} x2={550} y2={140} />
      <WindowMark x1={620} y1={140} x2={680} y2={140} />
      <WindowMark x1={620} y1={460} x2={680} y2={460} />
      {/* Passagem varanda */}
      <DoorMark x1={150} y1={460} x2={400} y2={460} />
      {/* Entry */}
      <DoorMark x1={650} y1={460} x2={700} y2={460} />

      <RoomLabel x={250} y={240} label="LIVING / JANTAR" />
      <RoomLabel x={490} y={195} label="SUÍTE MASTER" />
      <RoomLabel x={640} y={195} label="WC" />
      <RoomLabel x={490} y={295} label="QUARTO 02" />
      <RoomLabel x={640} y={295} label="WC" />
      <RoomLabel x={550} y={395} label="QUARTO 03" />
      <RoomLabel x={195} y={375} label="COZINHA" />
      <RoomLabel x={195} y={425} label="SERV." />
      <RoomLabel x={345} y={395} label="LAVABO" />
      <RoomLabel x={400} y={490} label="VARANDA GOURMET" />

      <CotaH x1={100} x2={700} y={105} label="12.00 m" />
      <CotaV y1={140} y2={520} x={70} label="7.60 m" />
    </g>
  );
}

function Apartamento4Q() {
  return (
    <g>
      <Hatch x={70} y={100} w={660} h={20} />
      <Wall x={70} y={120} w={660} h={350} />
      {/* Varanda gourmet */}
      <Wall x={70} y={470} w={660} h={70} />
      <Hatch x={80} y={480} w={640} h={50} />

      {/* Divisão setor social/íntimo */}
      <InnerWall x1={420} y1={120} x2={420} y2={470} />
      {/* Suítes (direita - 2 superiores + 2 inferiores) */}
      <InnerWall x1={420} y1={230} x2={730} y2={230} />
      <InnerWall x1={420} y1={350} x2={730} y2={350} />
      <InnerWall x1={580} y1={120} x2={580} y2={230} />
      <InnerWall x1={580} y1={230} x2={580} y2={350} />
      <InnerWall x1={580} y1={350} x2={580} y2={470} />
      {/* Banheiros */}
      <InnerWall x1={500} y1={170} x2={580} y2={170} />
      <InnerWall x1={500} y1={290} x2={580} y2={290} />
      <InnerWall x1={500} y1={170} x2={500} y2={230} />
      <InnerWall x1={500} y1={290} x2={500} y2={350} />
      {/* Sala TV / setor social */}
      <InnerWall x1={70} y1={260} x2={250} y2={260} />
      <InnerWall x1={250} y1={120} x2={250} y2={260} />
      {/* Cozinha + serviço */}
      <InnerWall x1={70} y1={350} x2={300} y2={350} />
      <InnerWall x1={300} y1={350} x2={300} y2={470} />
      <InnerWall x1={70} y1={420} x2={300} y2={420} />
      {/* Counter cozinha */}
      <line x1={90} y1={365} x2={280} y2={365} stroke={COLOR.dim} strokeWidth="2" />

      {/* Doors */}
      <DoorMark x1={420} y1={150} x2={420} y2={190} />
      <DoorMark x1={420} y1={270} x2={420} y2={310} />
      <DoorMark x1={420} y1={390} x2={420} y2={430} />
      <DoorMark x1={580} y1={150} x2={580} y2={190} />
      <DoorMark x1={580} y1={270} x2={580} y2={310} />
      <DoorMark x1={250} y1={170} x2={250} y2={210} />
      <DoorMark x1={260} y1={350} x2={300} y2={350} />
      <DoorMark x1={260} y1={420} x2={300} y2={420} />

      {/* Janelas */}
      <WindowMark x1={100} y1={120} x2={220} y2={120} />
      <WindowMark x1={290} y1={120} x2={400} y2={120} />
      <WindowMark x1={440} y1={120} x2={560} y2={120} />
      <WindowMark x1={620} y1={120} x2={710} y2={120} />
      <WindowMark x1={620} y1={470} x2={710} y2={470} />
      <WindowMark x1={620} y1={350} x2={710} y2={350} />

      <DoorMark x1={120} y1={470} x2={420} y2={470} />
      <DoorMark x1={680} y1={470} x2={730} y2={470} />

      <RoomLabel x={245} y={195} label="LIVING" />
      <RoomLabel x={150} y={310} label="SALA TV" />
      <RoomLabel x={185} y={385} label="COZINHA" />
      <RoomLabel x={185} y={445} label="ÁREA SERV." />
      <RoomLabel x={345} y={300} label="LAVABO" />

      <RoomLabel x={460} y={195} label="SUÍTE 1" />
      <RoomLabel x={540} y={195} label="WC" />
      <RoomLabel x={465} y={310} label="SUÍTE 2" />
      <RoomLabel x={540} y={315} label="WC" />
      <RoomLabel x={500} y={410} label="QUARTO 3" />
      <RoomLabel x={655} y={195} label="QUARTO 4" />
      <RoomLabel x={655} y={295} label="ESCRIT." />
      <RoomLabel x={655} y={410} label="DEP." />

      <RoomLabel x={400} y={510} label="VARANDA GOURMET" />

      <CotaH x1={70} x2={730} y={85} label="13.20 m" />
      <CotaV y1={120} y2={540} x={40} label="8.40 m" />
    </g>
  );
}

function Cobertura() {
  return (
    <g>
      <Hatch x={70} y={100} w={500} h={20} />
      {/* Apto base 4Q (compacto) */}
      <Wall x={70} y={120} w={500} h={300} />
      {/* Quartos */}
      <InnerWall x1={350} y1={120} x2={350} y2={420} />
      <InnerWall x1={350} y1={210} x2={570} y2={210} />
      <InnerWall x1={350} y1={310} x2={570} y2={310} />
      <InnerWall x1={480} y1={120} x2={480} y2={210} />
      <InnerWall x1={480} y1={210} x2={480} y2={310} />
      {/* WCs */}
      <InnerWall x1={420} y1={120} x2={420} y2={170} />
      <InnerWall x1={420} y1={170} x2={480} y2={170} />
      {/* Sala */}
      <InnerWall x1={70} y1={310} x2={250} y2={310} />
      <InnerWall x1={250} y1={310} x2={250} y2={420} />
      {/* Cozinha */}
      <line x1={90} y1={325} x2={235} y2={325} stroke={COLOR.dim} strokeWidth="2" />
      {/* Escada para terraço */}
      <Wall x={290} y={330} w={50} h={80} />
      <line x1={290} y1={345} x2={340} y2={345} stroke={COLOR.dim} strokeWidth="1" />
      <line x1={290} y1={365} x2={340} y2={365} stroke={COLOR.dim} strokeWidth="1" />
      <line x1={290} y1={385} x2={340} y2={385} stroke={COLOR.dim} strokeWidth="1" />

      {/* Doors */}
      <DoorMark x1={350} y1={150} x2={350} y2={190} />
      <DoorMark x1={350} y1={250} x2={350} y2={290} />
      <DoorMark x1={350} y1={350} x2={350} y2={390} />
      <DoorMark x1={480} y1={150} x2={480} y2={190} />
      <DoorMark x1={480} y1={250} x2={480} y2={290} />
      <DoorMark x1={210} y1={310} x2={250} y2={310} />

      {/* Janelas */}
      <WindowMark x1={100} y1={120} x2={220} y2={120} />
      <WindowMark x1={250} y1={120} x2={340} y2={120} />
      <WindowMark x1={370} y1={120} x2={410} y2={120} />
      <WindowMark x1={500} y1={120} x2={560} y2={120} />

      {/* TERRAÇO LATERAL DIREITO */}
      <Wall x={580} y={120} w={150} h={420} />
      <Hatch x={585} y={125} w={140} h={50} />

      {/* Piscina (retângulo com waves) */}
      <rect
        x={595}
        y={185}
        width="120"
        height="80"
        fill="url(#hatch-water)"
        stroke={COLOR.open}
        strokeWidth="2"
      />
      {/* Churrasqueira (retângulo com chama) */}
      <rect
        x={605}
        y={290}
        width="100"
        height="50"
        fill="none"
        stroke={COLOR.dim}
        strokeWidth="2"
      />
      <text
        x={655}
        y={320}
        fill={COLOR.dim}
        fontFamily={FONT_DIM}
        fontSize="9"
        textAnchor="middle"
      >
        ▲
      </text>
      {/* Deck */}
      <Hatch x={595} y={360} w={120} h={170} />

      {/* Saída terraço */}
      <DoorMark x1={580} y1={170} x2={580} y2={210} />
      {/* Entrada apto */}
      <DoorMark x1={130} y1={420} x2={170} y2={420} />

      <RoomLabel x={170} y={250} label="LIVING" />
      <RoomLabel x={155} y={365} label="COZINHA" />
      <RoomLabel x={310} y={385} label="ESC." />
      <RoomLabel x={385} y={195} label="WC" />
      <RoomLabel x={385} y={265} label="LAVABO" />
      <RoomLabel x={385} y={365} label="SUÍTE 4" />
      <RoomLabel x={520} y={165} label="SUÍTE 1" />
      <RoomLabel x={520} y={260} label="SUÍTE 2" />
      <RoomLabel x={520} y={365} label="SUÍTE 3" />
      <RoomLabel x={655} y={140} label="TERRAÇO" />
      <RoomLabel x={655} y={225} label="PISCINA" />
      <RoomLabel x={655} y={335} label="GOURMET" />
      <RoomLabel x={655} y={450} label="DECK" />

      <CotaH x1={70} x2={730} y={85} label="13.20 m · 220 m²" />
      <CotaV y1={120} y2={540} x={40} label="8.40 m" />
    </g>
  );
}

function Garden() {
  return (
    <g>
      <Hatch x={150} y={90} w={500} h={20} />
      {/* Apto base 3Q */}
      <Wall x={150} y={110} w={500} h={280} />
      <InnerWall x1={400} y1={110} x2={400} y2={390} />
      <InnerWall x1={400} y1={210} x2={650} y2={210} />
      <InnerWall x1={400} y1={300} x2={650} y2={300} />
      <InnerWall x1={550} y1={210} x2={550} y2={300} />
      <InnerWall x1={150} y1={290} x2={300} y2={290} />
      <InnerWall x1={300} y1={290} x2={300} y2={390} />

      <DoorMark x1={400} y1={140} x2={400} y2={180} />
      <DoorMark x1={400} y1={240} x2={400} y2={280} />
      <DoorMark x1={400} y1={330} x2={400} y2={370} />
      <DoorMark x1={550} y1={240} x2={550} y2={280} />
      <DoorMark x1={260} y1={290} x2={300} y2={290} />

      <WindowMark x1={170} y1={110} x2={280} y2={110} />
      <WindowMark x1={420} y1={110} x2={530} y2={110} />
      <WindowMark x1={580} y1={110} x2={640} y2={110} />

      {/* Jardim privativo (área externa hatched grande) */}
      <Wall x={150} y={390} w={500} h={140} />
      <Hatch x={160} y={400} w={480} h={120} />
      {/* Plantas estilizadas (círculos) */}
      <circle cx={210} cy={460} r="14" fill="none" stroke={COLOR.dim} strokeWidth="1.2" />
      <circle cx={210} cy={460} r="6" fill="none" stroke={COLOR.dim} strokeWidth="1" />
      <circle cx={310} cy={490} r="18" fill="none" stroke={COLOR.dim} strokeWidth="1.2" />
      <circle cx={310} cy={490} r="8" fill="none" stroke={COLOR.dim} strokeWidth="1" />
      <circle cx={420} cy={460} r="12" fill="none" stroke={COLOR.dim} strokeWidth="1.2" />
      <circle cx={530} cy={485} r="20" fill="none" stroke={COLOR.dim} strokeWidth="1.2" />
      <circle cx={530} cy={485} r="9" fill="none" stroke={COLOR.dim} strokeWidth="1" />
      <circle cx={605} cy={445} r="11" fill="none" stroke={COLOR.dim} strokeWidth="1.2" />

      {/* Passagem grande para o jardim */}
      <DoorMark x1={250} y1={390} x2={550} y2={390} />

      <RoomLabel x={275} y={195} label="LIVING / JANTAR" />
      <RoomLabel x={225} y={335} label="COZINHA" />
      <RoomLabel x={345} y={335} label="SERV." />
      <RoomLabel x={485} y={165} label="SUÍTE MASTER" />
      <RoomLabel x={620} y={165} label="WC" />
      <RoomLabel x={485} y={260} label="QUARTO 02" />
      <RoomLabel x={605} y={260} label="WC" />
      <RoomLabel x={525} y={350} label="QUARTO 03" />
      <RoomLabel x={400} y={415} label="JARDIM PRIVATIVO" />

      <CotaH x1={150} x2={650} y={75} label="10.00 m" />
      <CotaV y1={110} y2={530} x={120} label="8.40 m" />
    </g>
  );
}

function Loja() {
  return (
    <g>
      <Hatch x={130} y={130} w={540} h={20} />
      <Wall x={130} y={150} w={540} h={300} />
      {/* Vitrine na fachada (frente toda em vidro) */}
      <line x1={130} y1={450} x2={670} y2={450} stroke={COLOR.open} strokeWidth="3" />
      <line x1={130} y1={447} x2={670} y2={447} stroke={COLOR.open} strokeWidth="1.5" />
      <line x1={130} y1={453} x2={670} y2={453} stroke={COLOR.open} strokeWidth="1.5" />
      {/* Marcos da vitrine */}
      <line x1={250} y1={445} x2={250} y2={455} stroke={COLOR.wall} strokeWidth="2" />
      <line x1={400} y1={445} x2={400} y2={455} stroke={COLOR.wall} strokeWidth="2" />
      <line x1={550} y1={445} x2={550} y2={455} stroke={COLOR.wall} strokeWidth="2" />
      {/* Entrada principal (porta dupla) */}
      <DoorMark x1={370} y1={450} x2={430} y2={450} />

      {/* Balcão (linha grossa horizontal) */}
      <rect
        x={250}
        y={300}
        width="200"
        height="20"
        fill={COLOR.wall}
        opacity="0.25"
        stroke={COLOR.wall}
        strokeWidth="2"
      />

      {/* Banheiro + depósito (fundo) */}
      <InnerWall x1={500} y1={150} x2={500} y2={300} />
      <InnerWall x1={500} y1={230} x2={670} y2={230} />
      <DoorMark x1={500} y1={180} x2={500} y2={220} />
      <DoorMark x1={500} y1={250} x2={500} y2={290} />

      {/* Counter de check-out atrás do balcão */}
      <line x1={270} y1={335} x2={430} y2={335} stroke={COLOR.dim} strokeWidth="1.5" />

      {/* Janelas laterais altas */}
      <WindowMark x1={130} y1={250} x2={130} y2={350} />
      <WindowMark x1={670} y1={350} x2={670} y2={420} />

      <RoomLabel x={300} y={210} label="ÁREA DE EXPOSIÇÃO" />
      <RoomLabel x={350} y={310} label="BALCÃO" />
      <RoomLabel x={350} y={380} label="ATENDIMENTO" />
      <RoomLabel x={585} y={195} label="DEPÓSITO" />
      <RoomLabel x={585} y={270} label="WC" />
      <RoomLabel x={400} y={475} label="VITRINE / FACHADA" />

      <CotaH x1={130} x2={670} y={115} label="10.80 m" />
      <CotaV y1={150} y2={450} x={100} label="6.00 m" />
    </g>
  );
}

function Sala() {
  return (
    <g>
      <Hatch x={180} y={130} w={440} h={20} />
      <Wall x={180} y={150} w={440} h={290} />
      {/* WC + copa (lado direito) */}
      <InnerWall x1={500} y1={150} x2={500} y2={440} />
      <InnerWall x1={500} y1={290} x2={620} y2={290} />
      <DoorMark x1={500} y1={190} x2={500} y2={230} />
      <DoorMark x1={500} y1={340} x2={500} y2={380} />

      {/* Counter copa */}
      <line x1={520} y1={170} x2={600} y2={170} stroke={COLOR.dim} strokeWidth="2" />

      {/* Open office grid (placeholder de postos) */}
      <g stroke={COLOR.dim} strokeWidth="0.6" opacity="0.6" fill="none">
        <rect x={210} y={190} width="40" height="30" />
        <rect x={260} y={190} width="40" height="30" />
        <rect x={310} y={190} width="40" height="30" />
        <rect x={210} y={250} width="40" height="30" />
        <rect x={260} y={250} width="40" height="30" />
        <rect x={310} y={250} width="40" height="30" />
        <rect x={210} y={310} width="40" height="30" />
        <rect x={260} y={310} width="40" height="30" />
        <rect x={310} y={310} width="40" height="30" />
      </g>
      {/* Sala de reunião */}
      <rect
        x={380}
        y={260}
        width="100"
        height="100"
        fill="none"
        stroke={COLOR.wall}
        strokeWidth="1.5"
      />

      {/* Janelas painel */}
      <WindowMark x1={210} y1={150} x2={460} y2={150} />
      {/* Entry */}
      <DoorMark x1={250} y1={440} x2={300} y2={440} />

      <RoomLabel x={295} y={400} label="ÁREA DE TRABALHO" />
      <RoomLabel x={430} y={310} label="REUNIÃO" />
      <RoomLabel x={560} y={210} label="COPA" />
      <RoomLabel x={560} y={360} label="WC" />

      <CotaH x1={180} x2={620} y={115} label="8.80 m" />
      <CotaV y1={150} y2={440} x={150} label="5.80 m" />
    </g>
  );
}

function HotelSuite() {
  return (
    <g>
      <Hatch x={220} y={150} w={360} h={20} />
      <Wall x={220} y={170} w={360} h={280} />
      {/* Banheiro entrada */}
      <InnerWall x1={320} y1={170} x2={320} y2={300} />
      <InnerWall x1={220} y1={300} x2={320} y2={300} />
      <DoorMark x1={320} y1={210} x2={320} y2={250} />
      {/* Closet */}
      <InnerWall x1={320} y1={300} x2={420} y2={300} />
      <InnerWall x1={420} y1={300} x2={420} y2={170} />
      <DoorMark x1={420} y1={210} x2={420} y2={250} />

      {/* Cama (retângulo) */}
      <rect
        x={440}
        y={200}
        width="120"
        height="60"
        fill="none"
        stroke={COLOR.wall}
        strokeWidth="2"
      />
      {/* Travesseiros */}
      <rect
        x={445}
        y={205}
        width="50"
        height="14"
        fill="none"
        stroke={COLOR.dim}
        strokeWidth="1"
      />
      <rect
        x={505}
        y={205}
        width="50"
        height="14"
        fill="none"
        stroke={COLOR.dim}
        strokeWidth="1"
      />

      {/* Mesa de trabalho */}
      <rect
        x={345}
        y={350}
        width="90"
        height="35"
        fill="none"
        stroke={COLOR.dim}
        strokeWidth="1.5"
      />

      {/* Janela painel (fachada larga) */}
      <WindowMark x1={260} y1={450} x2={540} y2={450} />
      {/* Porta entrada */}
      <DoorMark x1={250} y1={170} x2={290} y2={170} />

      <RoomLabel x={270} y={235} label="WC" />
      <RoomLabel x={270} y={370} label="ANTECÂMARA" />
      <RoomLabel x={370} y={235} label="CLOSET" />
      <RoomLabel x={500} y={310} label="DORMITÓRIO" />
      <RoomLabel x={500} y={335} label="(SUÍTE)" />
      <RoomLabel x={400} y={420} label="JANELA PAINEL" />

      <CotaH x1={220} x2={580} y={135} label="7.20 m" />
      <CotaV y1={170} y2={450} x={195} label="5.60 m" />
    </g>
  );
}
