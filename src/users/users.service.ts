import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...createUserDto
    }

    const createdUser = await this.prisma.user.create({data});

    return createdUser;
  }

  async findByEmail(email: string): Promise<User> {
    const emailExists = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if(!emailExists) {
      throw new NotFoundException('User not found');
    }

    return emailExists;
  }
}
