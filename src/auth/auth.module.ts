import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    UserService,
    PassportModule
  ],
  controllers: [AuthController],
  imports: [
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: "545455454454545",
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
