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
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ConjugateDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "groupId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "lotId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "tagId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], ConjugateDto.prototype, "tubeNumber", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ConjugateDto.prototype, "concentration", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ConjugateDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], ConjugateDto.prototype, "isDeleted", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", Object)
], ConjugateDto.prototype, "meta", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], ConjugateDto.prototype, "labeledAt", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], ConjugateDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    __metadata("design:type", String)
], ConjugateDto.prototype, "updatedAt", void 0);
exports.ConjugateDto = ConjugateDto;
class CreateConjugateDto {
}
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateConjugateDto.prototype, "groupId", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateConjugateDto.prototype, "lotId", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateConjugateDto.prototype, "tagId", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateConjugateDto.prototype, "tubeNumber", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateConjugateDto.prototype, "concentration", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateConjugateDto.prototype, "description", void 0);
exports.CreateConjugateDto = CreateConjugateDto;
class UpdateConjugateDto {
}
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateConjugateDto.prototype, "lotId", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateConjugateDto.prototype, "tagId", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateConjugateDto.prototype, "tubeNumber", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateConjugateDto.prototype, "concentration", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateConjugateDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsInt(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateConjugateDto.prototype, "status", void 0);
exports.UpdateConjugateDto = UpdateConjugateDto;
//# sourceMappingURL=dto.js.map