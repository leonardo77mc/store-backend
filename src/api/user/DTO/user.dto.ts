import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class UserDto {
    @ApiProperty() @IsNumber() @IsOptional() id: number;
    @ApiProperty() @IsDate() @IsOptional() createdAt: Date;
    @ApiProperty() @IsDate() @IsOptional() updatedAt: Date;
    @ApiProperty() @IsBoolean() @IsOptional() active?: boolean;
    @ApiProperty() @IsDate() @IsOptional() deletedAt: Date;
    @ApiProperty() @IsString() name: string;
    @ApiProperty() @IsString() lastNames: string;
    @ApiProperty() @IsNumber() identificationCard: number;
    @ApiProperty() @IsString() email: string;
    @ApiProperty() @IsString() telephone: string;
    @ApiProperty() @IsNumber() quoteId: number;
}