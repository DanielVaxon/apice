import Link from "next/link";
import { APICE_INFO } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

const SECTION_HEADING =
  "font-sans text-xs uppercase tracking-widest-2 text-apice-champagne";
const LINK_CLASS =
  "block font-sans text-sm text-apice-bone/80 transition-colors duration-300 hover:text-apice-champagne";

const empresaLinks = [
  { label: "Sobre nós", href: "/sobre" },
  { label: "Processo construtivo", href: "/processo-construtivo" },
  { label: "Sustentabilidade", href: "/sustentabilidade" },
  { label: "Imprensa", href: "/imprensa" },
  { label: "Blog", href: "/blog" },
];

const empreendimentosLinks = [
  { label: "Lançamentos", href: "/empreendimentos?status=lancamento" },
  { label: "Em obra", href: "/empreendimentos?status=em-obra" },
  { label: "Entregues", href: "/empreendimentos?status=entregue" },
  { label: "Área do cliente", href: "/area-do-cliente" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-apice-ink text-apice-bone">
      <Container as="div" className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
          <div className="flex flex-col gap-5 md:col-span-1">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-display text-4xl font-bold uppercase tracking-widest leading-none text-apice-bone">
                ÁPICE
              </span>
              <span className="mt-2 font-sans text-[10px] uppercase tracking-widest-3 text-apice-champagne">
                Construtora · Brasília
              </span>
            </Link>
            <p className="max-w-xs font-display text-lg italic leading-relaxed text-apice-bone/85">
              {APICE_INFO.tagline}
            </p>
            <div className="flex flex-col gap-1 pt-4 font-sans text-xs text-apice-bone/55">
              <span>CNPJ: {APICE_INFO.cnpj}</span>
              <span>CREA-DF: {APICE_INFO.crea}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={SECTION_HEADING}>Empresa</h3>
            <nav className="flex flex-col gap-3" aria-label="Links institucionais">
              {empresaLinks.map((link) => (
                <Link key={link.href} href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={SECTION_HEADING}>Empreendimentos</h3>
            <nav className="flex flex-col gap-3" aria-label="Links de empreendimentos">
              {empreendimentosLinks.map((link) => (
                <Link key={link.href} href={link.href} className={LINK_CLASS}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={SECTION_HEADING}>Contato</h3>
            <address className="flex flex-col gap-3 font-sans text-sm not-italic text-apice-bone/80">
              <span className="leading-relaxed">
                {APICE_INFO.endereco.logradouro}
                <br />
                {APICE_INFO.endereco.complemento}
                <br />
                {APICE_INFO.endereco.bairro}, {APICE_INFO.endereco.cidade}/{APICE_INFO.endereco.uf}
                <br />
                CEP {APICE_INFO.endereco.cep}
              </span>
              <a
                href={`tel:${APICE_INFO.telefoneRaw}`}
                className="transition-colors duration-300 hover:text-apice-champagne"
              >
                {APICE_INFO.telefone}
              </a>
              <a
                href={`mailto:${APICE_INFO.email}`}
                className="break-all transition-colors duration-300 hover:text-apice-champagne"
              >
                {APICE_INFO.email}
              </a>
              <span className="text-apice-bone/55 text-xs">
                {APICE_INFO.horario}
              </span>
            </address>
          </div>
        </div>
      </Container>

      <div className="border-t border-apice-stone/60">
        <Container
          as="div"
          className="flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-sans text-[11px] tracking-wide text-apice-bone/55">
            © {year} {APICE_INFO.razaoSocial}. Todos os direitos reservados.
          </p>

          <a
            href="https://vaxon.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] uppercase tracking-widest-3 text-apice-stone transition-colors duration-300 hover:text-apice-champagne"
          >
            Engineered by Vaxon
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-[11px] tracking-wide text-apice-bone/55">
            <Link
              href="/politica-de-privacidade"
              className="transition-colors duration-300 hover:text-apice-champagne"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="transition-colors duration-300 hover:text-apice-champagne"
            >
              Termos de Uso
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
