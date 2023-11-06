import { type HttpHandler } from 'msw';

import { profileMockHandler } from '@/mocks/handlers/profile-mock-handler';
import { usersListMockHandler } from '@/mocks/handlers/users-list-mock-handler';

export const handlers: HttpHandler[] = [profileMockHandler, usersListMockHandler];
