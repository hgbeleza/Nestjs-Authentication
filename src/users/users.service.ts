import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const checkEmail = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (checkEmail) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Email already exists',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 12),
    };

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<User> {    
    const emailExists = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!emailExists) {
      throw new NotFoundException('Email not found');
    }

    return emailExists;
  }
}
