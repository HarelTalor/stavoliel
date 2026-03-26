import { motion } from "framer-motion";
import { ScrollReveal } from "../shared/ScrollReveal";

const galleryImages = [
  { src: "/images/gallery/bridal_1.png", alt: "איפור כלה", size: "big" },
  { src: "/images/gallery/bridal_2.png", alt: "איפור כלות יוקרתי", size: "big" },
  { src: "/images/gallery/regular_1.png", alt: "איפור ערב", size: "small" },
  { src: "/images/gallery/regular_2.png", alt: "איפור טבעי", size: "small" },
  { src: "/images/gallery/detail_1.png", alt: "פרטי איפור עיניים", size: "small" },
  { src: "/images/gallery/detail_2.png", alt: "גימור מושלם", size: "small" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">גלריית עבודות</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              הצצה לעולם של יופי, דיוק ואומנות. איפור כלות, ערב ואירועים ברמה הגבוהה ביותר.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Big 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-serif italic text-2xl">{galleryImages[0].alt}</span>
            </div>
          </motion.div>

          {/* Small 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={galleryImages[2].src} 
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Small 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={galleryImages[3].src} 
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Big 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={galleryImages[1].src} 
              alt={galleryImages[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-serif italic text-2xl">{galleryImages[1].alt}</span>
            </div>
          </motion.div>

          {/* Small 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={galleryImages[4].src} 
              alt={galleryImages[4].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* Small 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
          >
            <img 
              src={galleryImages[5].src} 
              alt={galleryImages[5].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
