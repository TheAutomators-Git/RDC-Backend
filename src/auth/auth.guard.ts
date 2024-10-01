import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class OidcAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // Check if the user is authenticated
    if (request.oidc && request.oidc.isAuthenticated()) {
      return true;
    }

    // Throw an unauthorized exception if not authenticated
    throw new UnauthorizedException('User is not authenticated');
  }
}
