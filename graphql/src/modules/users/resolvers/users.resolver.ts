import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Mutation,
  Context,
} from '@nestjs/graphql';
import { UsersService } from '../services/users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async user(@Args('id') id: string) {
    const hui = await this.usersService.getUser(id);
    return hui;
  }

  @Query()
  async jwt(@Args() loginDTO) {
    return await this.usersService.login(loginDTO);
  }

  @Mutation()
  async register(@Args() newUserDTO) {
    return await this.usersService.register(newUserDTO);
  }
}
