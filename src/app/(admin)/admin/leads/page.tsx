import { prisma } from "@/lib/prisma";
import LeadsClientComponent from "./LeadsClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LeadsAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const [inquiries, careers] = await Promise.all([
    prisma.inquiryLead.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.careerLead.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <div>
      <LeadsClientComponent initialInquiries={inquiries} initialCareers={careers} />
    </div>
  );
}
