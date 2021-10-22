import { PrismaClient } from '@prisma/client'
import {hash} from "bcrypt";
const prisma = new PrismaClient()

async function main() {

    const user = await prisma.user.create({
        data: {
            username: "test",
            password: await hash("test", 10),
            isVerified: true,
            canCreatePublicWorkGroup: true,
            workGroups: {
                create: [
                    {
                        color: "#ffffff",
                        name: "aefa",
                        isPrivate: true
                    }
                ]
            }
        }
    });

    console.log({ user })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })