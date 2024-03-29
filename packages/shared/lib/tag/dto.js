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
exports.UpdateTagDto = exports.CreateTagDto = exports.TagDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const TagStatus_1 = require("./TagStatus");
class TagDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], TagDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], TagDto.prototype, "groupId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], TagDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], TagDto.prototype, "isMetal", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], TagDto.prototype, "isFluorophore", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], TagDto.prototype, "isEnzyme", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], TagDto.prototype, "isBiotin", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], TagDto.prototype, "isOther", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], TagDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], TagDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], TagDto.prototype, "mw", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], TagDto.prototype, "emission", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], TagDto.prototype, "excitation", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Object)
], TagDto.prototype, "meta", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], TagDto.prototype, "createdAt", void 0);
exports.TagDto = TagDto;
class CreateTagDto {
}
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTagDto.prototype, "groupId", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTagDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateTagDto.prototype, "isMetal", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateTagDto.prototype, "isFluorophore", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateTagDto.prototype, "isEnzyme", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateTagDto.prototype, "isBiotin", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], CreateTagDto.prototype, "isOther", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_validator_1.Max(2),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTagDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], CreateTagDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], CreateTagDto.prototype, "mw", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], CreateTagDto.prototype, "emission", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], CreateTagDto.prototype, "excitation", void 0);
exports.CreateTagDto = CreateTagDto;
class UpdateTagDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateTagDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UpdateTagDto.prototype, "isMetal", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UpdateTagDto.prototype, "isFluorophore", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UpdateTagDto.prototype, "isEnzyme", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UpdateTagDto.prototype, "isBiotin", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UpdateTagDto.prototype, "isOther", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(0),
    class_validator_1.Max(2),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateTagDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], UpdateTagDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], UpdateTagDto.prototype, "mw", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], UpdateTagDto.prototype, "emission", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsOptional(),
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Number)
], UpdateTagDto.prototype, "excitation", void 0);
exports.UpdateTagDto = UpdateTagDto;
//# sourceMappingURL=dto.js.map