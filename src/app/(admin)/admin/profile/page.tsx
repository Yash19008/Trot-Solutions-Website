import { prisma } from "@/lib/prisma";
import ProfileClientComponent from "./ProfileClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfileAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user || !session.user.id) {
    redirect("/login");
  }

  const adminUser = await prisma.adminUser.findUnique({
    where: { id: session.user.id },
  });

  if (!adminUser) {
    redirect("/login");
  }

  return (
    <div>
      <ProfileClientComponent 
        initialEmail={adminUser.email} 
      />
    </div>
  );
}
