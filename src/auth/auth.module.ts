import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: "RDC",
            signOptions: {expiresIn: '3600s'}
        }),
    ],
    providers: [],
})
export class AuthModule {}