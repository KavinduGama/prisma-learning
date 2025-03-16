import { PrismaClient } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


async function main() {
    // --------------CREATE USER
    // const user = await prisma.user.create({
    //     data: {
    //       name : "Kavindu",
    //       email : "Kavindu23@gmail.com",
    //       age : 22,
    //       userPreference: {
    //         create: {
    //           emailUpdates: true,
    //         }
    //       },
    //     },
    //     select: {
    //       userPreference: {
    //         select: {id: true}
    //       },
    //     },
    // })

    // --------------SELECT USER
    // const user = await prisma.user.findMany({
    //   where: {
    //     name: "Janani"
    //     // name : {
    //     //   equals: "Janani"
    //     //   in: ["Janani", "Kavindu"]
    //     //   notIn: ["Janani", "Kavindu"]
    //     //   contains: "Jan"
    //     //   startsWith: "Jan"
    //     //   endsWith: "ani"
    //     //   not: "Janani"        
    //     // }
    //     // age: {
    //     //   gt: 20,
    //     //   gte: 20,
    //     //   lt: 20,
    //     //   lte: 20,
    //     //   not: 20
    //     // }
    //     // AND: [{email: startsWith: "Kavindu"}, {email: endsWith: "gmail.com"}]
    //     // OR: [{email: startsWith: "Kavindu"}, {email: endsWith: "gmail.com"}]
    //     // NOT: {email: startsWith: "Kavindu"}
    //   },
    //   orderBy: {
    //     age : "asc"
    //   },
    //   take:2,
    //   skip:1
    // })
    const user = await prisma.user.update({
      where: {
        email : "Janani23@gmail.com"
      },
      data: {
        email : "janani25@gamil.com"
      }
    })
    console.log(user)
    
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })