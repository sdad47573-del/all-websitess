import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/BrandMark";
import { useNavigate } from "react-router";
import { ArrowLeft, Droplets } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-foreground"
    >
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
      <div className="relative text-center">
        <BrandMark className="mx-auto mb-8" />
        <p className="font-display text-8xl font-extrabold text-gradient">
          404
        </p>
        <p className="mt-4 font-display text-2xl font-bold">
          Esta página se fue a lavar
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          La dirección que buscas no existe o ha cambiado. Vuelve al inicio y
          reserva tu lavado.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="gap-2"
          >
            <Droplets className="size-4" />
            Ir a reservas
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
