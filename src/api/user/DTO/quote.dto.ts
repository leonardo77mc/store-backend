import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsOptional } from "class-validator";

export class QuoteDto {
    @ApiProperty() @IsNumber() @IsOptional() id: number;
    @ApiProperty() @IsDate() @IsOptional() createdAt: Date;
    @ApiProperty() @IsDate() @IsOptional() updatedAt: Date;
    @ApiProperty() @IsBoolean() @IsOptional() active: boolean;
    @ApiProperty() @IsDate() @IsOptional() deletedAt: Date;
    @ApiProperty() @IsNumber() valueQuote: number;
}