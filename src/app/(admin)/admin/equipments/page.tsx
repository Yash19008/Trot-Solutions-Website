import { prisma } from "@/lib/prisma";
import EquipmentClientComponent from "./EquipmentClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function EquipmentsAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const eqs = await prisma.equipment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <EquipmentClientComponent initialEqs={eqs} />
    </div>
  );
}
