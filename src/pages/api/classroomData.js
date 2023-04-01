import prisma from "@/lib/prisma";

export default async function handle(req, res){
    const branches = await prisma.api_branch.findMany()
    res.json(branches);
}