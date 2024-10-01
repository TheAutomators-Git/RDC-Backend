import { Controller, Get, Req, Request, Res, UseGuards } from '@nestjs/common';
import { OidcAuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    @UseGuards(OidcAuthGuard)
    @Get('protected')
    getProtected(): string {
        return 'This route is protected.';
    }

    @Get('me')
    async me(@Request() req: any) {
        return req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out';
    }

    @Get('profile')
    async profile(@Request() req: any, @Res() res: Response): Promise<void> {
        res.send(JSON.stringify(req.oidc.user));
    }
}
