import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap } from "lucide-react";

const productCategories = [
  {
    name: "שם קטגוריה",
    products: [
      { id: "AC-1", name: "שם מוצר", desc: "טקסט דמה המתאר את המוצר והשפעתו המקצועית.", price: "₪₪₪" },
      { id: "AC-2", name: "שם מוצר", desc: "טקסט דמה המתאר את המוצר והשפעתו המקצועית.", price: "₪₪₪" },
    ]
  },
  {
    name: "שם קטגוריה",
    products: [
      { id: "PRO-1", name: "שם מוצר", desc: "טקסט דמה המתאר את המוצר והשפעתו המקצועית.", price: "₪₪₪" },
      { id: "PRO-2", name: "שם מוצר", desc: "טקסט דמה המתאר את המוצר והשפעתו המקצועית.", price: "₪₪₪" },
    ]
  },
  {
    name: "שם קטגוריה",
    products: [
      { id: "COS-1", name: "שם מוצר", desc: "טקסט דמה המתאר את המוצר והשפעתו המקצועית.", price: "₪₪₪" },
      { id: "COS-2", name: "שם מוצר", desc: "טקסט דמה המתאר את המוצר והשפעתו המקצועית.", price: "₪₪₪" },
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Products() {
  return (
    <div className="bg-background min-h-screen py-16 pt-32">
      <div className="container px-4 mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">
            <ShoppingBag size={16} />
            STAV OLIEL PRODUCTS
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary">חנות המוצרים</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            מגוון מוצרי טיפוח משלימים וציוד מקצועי בסטנדרטים הגבוהים ביותר, המיועדים ללקוחות ולמקצועיות בתחום.
          </p>
        </motion.header>

        <div className="space-y-24">
          {productCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <motion.h2 variants={item} className="text-2xl md:text-3xl font-serif font-bold border-b border-primary/20 pb-2">
                  {category.name}
                </motion.h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {category.products.map((product, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden">
                      <div className="aspect-[4/5] bg-white relative flex items-center justify-center overflow-hidden p-2 group">
                        <img 
                          src="/images/stav_oliel_bag.png" 
                          alt={product.name}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-6xl font-serif font-bold text-white/20 absolute -right-4 -bottom-4">
                          {product.id}
                        </span>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                           <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{product.name}</CardTitle>
                           <span className="text-primary font-bold">{product.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.desc}</p>
                        <Button className="w-full rounded-full gradient-brand shimmer shadow-sm" asChild>
                          <a href={`https://wa.me/9725XXXXXXXX?text=היי סתיו, אני מעוניינת לרכוש את המוצר: ${product.name} (${product.id})`}>
                            רכישה בווצאפ
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Promise Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-primary/10 pt-16"
        >
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Star size={32} />
             </div>
             <h3 className="text-xl font-bold">איכות ללא פשרות</h3>
             <p className="text-muted-foreground">רכיבים פעילים בריכוז מקסימלי לתוצאות אמיתיות.</p>
          </div>
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <Zap size={32} />
             </div>
             <h3 className="text-xl font-bold">דיוק ואומנות</h3>
             <p className="text-muted-foreground">מוצרים שנבחרו בקפידה לתוצאה מושלמת ומראה טבעי.</p>
          </div>
          <div className="text-center space-y-4">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
                <ShoppingBag size={32} />
             </div>
             <h3 className="text-xl font-bold">התאמה אישית</h3>
             <p className="text-muted-foreground">כל מוצר נבחר לאחר אבחון מקצועי של צרכי העור.</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
