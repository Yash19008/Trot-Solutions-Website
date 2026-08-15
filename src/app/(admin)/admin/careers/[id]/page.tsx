import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import CareerFormClientComponent from "../CareerFormClientComponent";

export default async function EditCareerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const career = await prisma.career.findUnique({ where: { id } });

  if (!career) {
    notFound();
  }

  return <CareerFormClientComponent initialCareer={career} />;
}
