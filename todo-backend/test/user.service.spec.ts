// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../src/users/users.service';
import { Users } from '../src/users/users.model';

describe('UserService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const user: Users = {
      name: 'John Doe',
      email: 'john123@example.com',
      password: 'P@ssword123',
    };
    const createdUser = await service.createUser(user);
    expect(createdUser).toEqual(user);
  });

  it('should get all users', async () => {
    const users = await service.getAllUser();
    expect(users).toHaveLength(1);
  });
});
