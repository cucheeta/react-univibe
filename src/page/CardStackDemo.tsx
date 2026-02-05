import { CardStack } from "../components/ui/card-stack";
import type { CardStackItem } from "../components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Desarrollo de Interfaces",
    description: "Diseño y creación de interfaces de usuario con React y Tailwind",
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Bases de Datos",
    description: "Modelado relacional y consultas SQL avanzadas",
    imageSrc: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Programación",
    description: "Desarrollo de aplicaciones con buenas prácticas y testing",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Acceso a Datos",
    description: "Conexión y manipulación de datos desde aplicaciones",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Entornos de Desarrollo",
    description: "Configuración de entornos y herramientas de desarrollo",
    imageSrc: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&h=400&fit=crop",
  },
];

function CardStackDemo() {
  return (
    <div className="min-h-screen bg-[#0B1320] py-12">
      <div className="mx-auto w-full max-w-5xl px-4">
        <h1 className="principal text-white text-3xl text-center mb-8">
          Mis Asignaturas
        </h1>
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          cardWidth={480}
          cardHeight={300}
        />
      </div>
    </div>
  );
}

export default CardStackDemo;
