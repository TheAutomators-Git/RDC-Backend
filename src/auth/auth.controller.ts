import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { OidcAuthGuard } from './auth.guard';
const { requiresAuth } = require('express-openid-connect');

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

    @UseGuards(OidcAuthGuard)
    @Get('profile')
    async profile(@Request() req, res): Promise<void> {
        // res.send(JSON.stringify(req.oidc.user, null, 2));
        res.send(JSON.stringify((req as any).oidc.user));
    }

}
