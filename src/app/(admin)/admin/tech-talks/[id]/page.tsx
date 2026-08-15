import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import TechTalkFormClientComponent from "../TechTalkFormClientComponent";

export default async function EditTechTalkPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const talk = await prisma.techTalk.findUnique({ where: { id } });

  if (!talk) {
    notFound();
  }

  return <TechTalkFormClientComponent initialTalk={talk} />;
}
