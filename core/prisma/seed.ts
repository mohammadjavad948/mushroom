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

    const user2 = await prisma.user.create({
        data: {
            username: "test2",
            password: await hash("test2", 10),
            isVerified: true,
            canCreatePublicWorkGroup: true,
            workGroups: {
                createMany: {
                    data: [
                        {
                            color: "#ffffff",
                            name: "sf",
                            isPrivate: true
                        },
                        {
                            color: "#ffffff",
                            name: "aefsefa",
                            isPrivate: false
                        }
                    ]
                }
            }
        }
    });

    const work = await prisma.work.create({
        data: {
            title: "adj",
            groupId: 1,
            creatorId: 1,
            dueDate: new Date(),
            description: "akjb"
        }
    })

    console.log({ user, work, user2 })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })