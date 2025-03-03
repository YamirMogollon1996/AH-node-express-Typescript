import { PrismaClient } from "@prisma/client";
import { UserDominio } from "../dominio/user.domino";
import { UserRepository } from "../dominio/user.repositiry";
const prisma = new PrismaClient();

export class MysqlCreateUser implements UserRepository {
  
  public async createauser(UserDominio: UserDominio): Promise<UserDominio> {
    let query = prisma.userDominio.create({
      data: {
        estado: UserDominio.estado,
        lastname: UserDominio.lastname,
        name: UserDominio.name,
        year: UserDominio.year,
      },
    });
    return query;
  }
  public async getall(): Promise<UserDominio[]> {
    let datos = await prisma.userDominio.findMany();
    console.log(datos);
    return datos;
  }
  public async deleteuser(id: string): Promise<void> {
    await prisma.userDominio.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
