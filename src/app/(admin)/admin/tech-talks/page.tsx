import { prisma } from "@/lib/prisma";
import TechTalkClientComponent from "./TechTalkClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function TechTalksAdminPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const talks = await prisma.techTalk.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <TechTalkClientComponent initialTalks={talks} />
    </div>
  );
}
