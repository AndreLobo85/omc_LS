import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const logos = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3fE7A5TIfeHeNyKls_oiPHxP6LchjuJBoEZXIMxshTYPdHBoeZgTD6oFEb9YzjEE6obGt33u5nAuJVFCbC11Jw8qxhEveWx_jx0jM6Lyf2zDs1gOAbrebaK5Th20Sc4QsbhnnlfezK4vGjQe0rlKuFj3aMGCIps_n8SE3pkYLL4Jdk0R32ozxxvMX_fKsCMMs6A337RhwCzzPE5hNEB8QREW8dWlQRU068ZJ6UHskuZUuL6_WPngFbXJtX71fKWw7N7pU7Dwoagl6",
    alt: "Parceiro 1",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc2xCW56aA-rvvVTvmXM9VpJ7n4CqHyQ5c3-rKLUvBUt4oHSziGxhj9YdLv4A0KggVon8cd3lbgsvXMFMNd_X90qz5DK2AbayHt7K3_MNyk3aqGjTCvpyBSoUBKs7DYCc41dAP9RX7BIhKr9OekW2H27wXdWLoveIATDA87mmXKLihem6vMDqK6F2nf03EiahVKu7FLzVjQtuYDctDTiPQlt3djqaRbrfPnzeP30U7Qju94Jz-kGdPiurb8_guvL6CscqCrUXcAB4j",
    alt: "Parceiro 2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2cUgGaIU4EqTmLYzpTwt5o9-UU4eg2QygMHE1fmcZrxeesBauskEHIFFY6e5nLRboY9fctBiaYEBS6ZKz0IGvQ78SEjDOrDcAM11bFUwtQkeToi2iawn01uqimeOc2K0LuqHKNZ_5oi8Sm3qXcB2wzJHnnbKAU-pHNVaeLIrc2A8I8pDX5ydwFl1UlbzYCru_ESBoI11njazvxk9oM_wkQ37JRnxkL56hsHIIVBp3DutlVBJOmLh5Mhi2HycQraCwfQ8L5KwdBbJI",
    alt: "Parceiro 3",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKxMs73qNHJC5H-3iv-2csFtYA5ahOf12ac2qTQlEdRr_2DdbbEV58ttrwqCoQOHhjQou793QSBgkGnxkOgzr6UPUFnjvpi3QltqU74y5c11vQJGDK-8QlR5K8bnmvHncLnoU5t5DxenJEojIKcFd0AV-FN1MP2B4HulBvV2CT3ntP9I5Dxhrl-X08kwRp2XgB1pYvO7iqYgc7QJnePHUv3nX_XuqVNPZLl2M1Bz78EkdkBZ1MrPZIcyV2cuILhUab9sN74sPSVHkI",
    alt: "Parceiro 4",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-CVrCpCODUGE6w8pZd8EVjUA4z4Sfh_qm6_kpftryLc9eP1YEud43EzYLA-bAXsD8e_r6PkvVdiETxqaEWX3DyBu2GRfzNwVBP1XgPSudOFWA6Qfa9TyCN_c-UAvo7uWVa7Osm8spehNJLSxI3IVAZUxd4bc-NtrqhYCufP8L9e5tT5P05l2u2B0_Ox8sWN_11O28ruGm96swGGUJAQEzYNJe9sEJC-2h48kHLF3d2CcQf9T37tjZnC4PRqp_5zE0t_Sd6ISu-JT1",
    alt: "Parceiro 5",
  },
];

export function Partnerships() {
  return (
    <section className="py-24 bg-surface">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl font-[family-name:var(--font-inter)] font-black text-primary tracking-tighter">
            Convênios e Parceiros
          </h2>
          <p className="text-on-surface-variant mt-2">
            Atendemos os principais planos de saúde e parcerias corporativas.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                className="h-12 object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
