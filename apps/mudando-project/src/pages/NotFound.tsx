import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Box, Home } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center"
    >
      <span className="flex size-16 items-center justify-center rounded-2xl bg-ink text-cream shadow-lg">
        <Box className="size-8" />
      </span>
      <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight text-ink">
        404
      </h1>
      <p className="mt-2 font-display text-xl font-semibold text-ink">
        Esta caja no está en el inventario
      </p>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        La página que buscas se quedó en el camión. Vuelve a la portada para
        calcular tu mudanza o entrar en tu panel.
      </p>
      <Button asChild className="mt-6">
        <Link to="/">
          <Home className="size-4" />
          Volver a la portada
        </Link>
      </Button>
    </motion.div>
  );
}
