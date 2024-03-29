"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteDto = exports.UpdateGroupDto = exports.CreateGroupDto = exports.GroupDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class GroupDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], GroupDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], GroupDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], GroupDto.prototype, "institution", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], GroupDto.prototype, "url", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], GroupDto.prototype, "isOpen", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Object)
], GroupDto.prototype, "meta", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], GroupDto.prototype, "createdAt", void 0);
exports.GroupDto = GroupDto;
class CreateGroupDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "institution", void 0);
__decorate([
    class_validator_1.IsUrl(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], CreateGroupDto.prototype, "url", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateGroupDto.prototype, "isOpen", void 0);
exports.CreateGroupDto = CreateGroupDto;
class UpdateGroupDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "institution", void 0);
__decorate([
    class_validator_1.IsUrl(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UpdateGroupDto.prototype, "url", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UpdateGroupDto.prototype, "isOpen", void 0);
exports.UpdateGroupDto = UpdateGroupDto;
class InviteDto {
}
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], InviteDto.prototype, "groupId", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], InviteDto.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], InviteDto.prototype, "token", void 0);
exports.InviteDto = InviteDto;
//# sourceMappingURL=dto.js.map