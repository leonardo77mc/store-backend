import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class ProductoDto {
    @ApiProperty() @IsNumber() @IsOptional() id: number;
    @ApiProperty() @IsDate() @IsOptional() createdAt: Date;
    @ApiProperty() @IsDate() @IsOptional() updatedAt: Date;
    @ApiProperty() @IsBoolean() @IsOptional() active: boolean;
    @ApiProperty() @IsDate() @IsOptional() deletedAt: Date;
    @ApiProperty() @IsString() title: string;
    @ApiProperty() @IsString() description: string;
    @ApiProperty() @IsNumber() price: number;
    @ApiProperty() @IsNumber() stock: number;
    @ApiProperty() @IsString() urlPhoto: string;
}