import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'hyemi.kim.secret',
      signOptions: {
        expiresIn: 3600, // 1 hour
      },
    }),
    TypeOrmExModule.forCustomRepository([UserRepository]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
