import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const LeadSchema = z.object({
  nome: z.string().min(2).max(100),
  email: z.string().email(),
  telefone: z.string().min(10).max(20),
  empreendimentoNome: z.string(),
  empreendimentoSlug: z.string(),
  mensagem: z.string().max(500).optional(),
});

// Mockup Construtora Ápice — número comercial fictício de Brasília.
// (61) 3000-0000, formato wa.me sem o "+".
const WA_PHONE = "556130000000";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = LeadSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.LEAD_EMAIL_TO || "contato@vaxon.com.br";

    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "Construtora Ápice <noreply@vaxon.com.br>",
          to: emailTo,
          replyTo: data.email,
          subject: `[ÁPICE] Novo lead: ${data.empreendimentoNome}`,
          html: `
            <h2>Novo interesse em ${escapeHtml(data.empreendimentoNome)}</h2>
            <p><strong>Nome:</strong> ${escapeHtml(data.nome)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Telefone:</strong> ${escapeHtml(data.telefone)}</p>
            ${
              data.mensagem
                ? `<p><strong>Mensagem:</strong> ${escapeHtml(data.mensagem)}</p>`
                : ""
            }
            <hr>
            <p><small>Empreendimento: ${escapeHtml(data.empreendimentoSlug)}</small></p>
          `,
        });
      } catch (err) {
        console.error("[lead] Resend falhou:", err);
        // Não bloqueia: WhatsApp ainda funciona
      }
    } else {
      console.warn(
        "[lead] RESEND_API_KEY ausente - lead capturado mas nao enviado por email",
      );
    }

    const waMessage = `Olá! Sou ${data.nome} e tenho interesse no empreendimento ${data.empreendimentoNome}. Gostaria de receber o material completo e agendar uma visita ao decorado.`;
    const whatsappUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMessage)}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
      message: "Recebido. Em breve nossa equipe entrará em contato.",
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.issues },
        { status: 400 },
      );
    }
    console.error("[lead] erro:", err);
    return NextResponse.json(
      { success: false, message: "Erro ao processar. Tente novamente." },
      { status: 500 },
    );
  }
}

// Escape mínimo para HTML do email (defesa contra HTML injection no email).
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
