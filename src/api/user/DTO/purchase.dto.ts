import { User } from "../entity/user.entity";
import { Product } from "../../product/entity/product.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsObject, IsOptional } from "class-validator";

export class PurchaseDto {
    @ApiProperty() @IsNumber() @IsOptional() id: number;
    @ApiProperty() @IsDate() @IsOptional() createdAt: Date;
    @ApiProperty() @IsDate() @IsOptional() updatedAt: Date;
    @ApiProperty() @IsBoolean() @IsOptional() active: boolean;
    @ApiProperty() @IsDate() @IsOptional() deletedAt: Date;
    @ApiProperty() @IsObject() user: User;
    @ApiProperty() @IsObject() product: Product[];
    @ApiProperty() @IsNumber() total: number;
}