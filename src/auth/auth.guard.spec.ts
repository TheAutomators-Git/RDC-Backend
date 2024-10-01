import { OidcAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new OidcAuthGuard()).toBeDefined();
  });
});
