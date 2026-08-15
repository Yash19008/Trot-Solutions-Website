import { prisma } from "@/lib/prisma";
import CareerClientComponent from "./CareerClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function CareersAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const careers = await prisma.career.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <CareerClientComponent initialCareers={careers} />
    </div>
  );
}
