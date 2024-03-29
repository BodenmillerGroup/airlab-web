import { UserService } from "./user.service";
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { JwtPayloadDto } from "@airlab/shared/lib/auth/dto";
import {
  CreateUserDto,
  ProfileDto,
  UpdatePasswordDto,
  UpdateProfileDto,
  UpdateUserDto,
  UserDto,
} from "@airlab/shared/lib/user/dto";
import { Roles } from "../auth/roles.decorator";
import { RolesGuard } from "../auth/roles.guard";

@Controller()
@UseGuards(AuthGuard("jwt"))
@ApiTags("users")
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("users")
  @Roles("admin")
  @UseGuards(RolesGuard)
  @ApiCreatedResponse({ description: "Create entity.", type: UserDto })
  async create(@Body() params: CreateUserDto) {
    return this.userService.create(params);
  }

  @Get("users/profile")
  @ApiOkResponse({ description: "Get personal profile.", type: ProfileDto })
  profile(@Request() req) {
    const user: JwtPayloadDto = req.user;
    return this.userService.findById(user.userId);
  }

  @Patch("users/profile")
  @ApiOkResponse({ description: "Update personal profile.", type: ProfileDto })
  async updateProfile(@Request() req, @Body() params: UpdateProfileDto) {
    const user: JwtPayloadDto = req.user;
    return this.userService.update(user.userId, params);
  }

  @Patch("users/profile/password")
  @ApiOkResponse({ description: "Update personal password.", type: ProfileDto })
  async updatePassword(@Request() req, @Body() params: UpdatePasswordDto) {
    const user: JwtPayloadDto = req.user;
    return this.userService.updatePassword(user.userId, params);
  }

  @Get("users/:id")
  @Roles("admin")
  @UseGuards(RolesGuard)
  @ApiOkResponse({ description: "Find entity by Id.", type: UserDto })
  findById(@Param("id") id: number) {
    return this.userService.findById(id);
  }

  @Patch("users/:id")
  @Roles("admin")
  @UseGuards(RolesGuard)
  @ApiOkResponse({ description: "Update entity.", type: UserDto })
  async update(@Param("id") id: number, @Body() params: UpdateUserDto) {
    return this.userService.update(id, params);
  }

  // @Delete("users/:id")
  // @Roles("admin")
  // @UseGuards(RolesGuard)
  // @ApiOkResponse({ description: "Delete entity by Id.", type: Number })
  // async deleteById(@Request() req, @Param("id") id: number) {
  //   return this.userService.deleteById(id);
  // }

  @Get("users")
  @ApiOkResponse({ description: "Find all entities.", type: UserDto, isArray: true })
  findAll() {
    return this.userService.findAll();
  }
}
