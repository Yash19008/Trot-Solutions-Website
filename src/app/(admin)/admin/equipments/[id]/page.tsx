import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EquipmentFormClientComponent from "../EquipmentFormClientComponent";

export default async function EditEquipmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const eq = await prisma.equipment.findUnique({ where: { id } });

  if (!eq) {
    notFound();
  }

  return <EquipmentFormClientComponent initialEq={eq} />;
}
