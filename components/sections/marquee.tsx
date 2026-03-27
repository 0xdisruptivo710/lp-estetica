const items = [
  { text: "Feito para", bold: "estética íntima" },
  { text: "IA", bold: "humanizada e discreta" },
  { text: "+55% de", bold: "retorno de pacientes" },
  { text: "Ativação em", bold: "48 horas" },
  { text: "API oficial do", bold: "WhatsApp" },
  { text: "Gestor", bold: "dedicado para sua clínica" },
];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative z-10 overflow-hidden bg-wine py-3.5">
      <div className="flex w-max animate-scroll gap-0 whitespace-nowrap">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cream/50">
              {item.text} <b className="font-semibold text-gold">{item.bold}</b>
            </span>
            <span className="text-[0.72rem] text-cream/30">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
