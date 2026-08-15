import { prisma } from "@/lib/prisma";
import SmtpClientComponent from "./SmtpClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SettingsAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const config = await prisma.smtpConfig.findFirst();

  return (
    <div>
      <SmtpClientComponent config={config} />
    </div>
  );
}
