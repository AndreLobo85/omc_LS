import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const doctors = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1eX9W4L01N4RcXJKhWHPkdhO0SvSr_4sLyLMTAty6ZyQwoMUhCtiiRa8WzdLSxW0eAbECSyW7_9fmREeVElB1FiM8CZqoahYunX96mujlegm6bVGA0aT7OqchVvlJ3BAw7NZb9_3hel7jPDJHzfAHd2cYm8eDfWAqKww_phfsij6j8toPfX6x3n2YpFTCbu1W8QFsNdkMnqnSlwtsWiEEokE5vavncxyK6WRJmikOsWUZ7LKEFtif63Z7higFzlZaNEFW6l37oEBP",
    name: "Dr. Matheus",
    specialty: "Especialista em Implantodontia",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAReTZFX-9ozHeUa9TdO-3uplQFVCNdMee3VvF1oKwYPITuNPx1YJ4bP5DpPAhIZOYxb0H32gDMOnWMcSfFpJQv--tyZ7hMpOq-YLx25w0WTuwNEpnv22gFdc6_3d8ZFzKGW65wbMaLf8feDbvFFcWTRP9MDS-oGvdhICN4QVELQQYCqQ1b8zWIsOECu4KkuRZlTydV7s0m2aSsg-mZTIzHPg3BIR9AmHtdnH3Bav1LbePu9G_N-V2LexameDpcEUt6Qjc-A-qyMxGg",
    name: "Dra. Fernanda",
    specialty: "Ortodontia e Estética",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE4DrHqnm23B4nEZtIImDm9C7EPRLf67xmSq5KaSPPyJVlHTVjrPsDsnVVBg2ucArVxMPrrBUfp2pTz3c7vXNiK-0ekyztSMME1KoO8s1E3mZJ0sJfNHz77rB3u3YwaZGHInEj3X0mC13Kkwexx2nSwhb1gUYCZkMDIj3n3hRXIPOynTS36-kBB73UV6uA1ZThXiNtayBT9PsgKiaXJUfsJxTiU9xm8t-HnWkb9DFgKhtLVom32l4g-TOVHqGfPFxfBOHcTCAw1Frm",
    name: "Dr. Ricardo",
    specialty: "Endodontia Avançada",
  },
];

export function Team() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="font-[family-name:var(--font-inter)] text-4xl font-black text-primary mb-16 tracking-tighter text-center">
            Nossa Equipe Especializada
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {doctors.map((doc, i) => (
            <AnimateOnScroll key={doc.name} delay={i * 0.15}>
              <div className="flex flex-col items-center">
                <div className="w-64 h-80 rounded-[4rem] overflow-hidden mb-6 shadow-xl border-4 border-secondary/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    src={doc.img}
                    alt={doc.name}
                  />
                </div>
                <h3 className="font-bold text-2xl text-primary">{doc.name}</h3>
                <p className="text-secondary font-bold text-sm tracking-widest uppercase">
                  {doc.specialty}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
