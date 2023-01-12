import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { Constant } from "../../../utils/contants/contants.class";
import { UserService } from "../service/user.service";
import { User } from "../entity/user.entity";
import { IUser } from "../interface/user.interface";
import { IQuote } from "../interface/quote.interface";
import { IPurchase } from "../interface/purchase.interface";
import { UserDto } from "../DTO/user.dto";
import { QuoteDto } from "../DTO/quote.dto";
import { PurchaseDto } from "../DTO/purchase.dto";

/**
 * Controllador para el flujo de datos de los usuarios.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Controller()
export class UserController {

    @Inject(Constant.USER_SERVICE) private readonly _userService: UserService;

    /**
     * Guardar un usuario
     * @param {UserDTO} params
     * @return {Promise<IUser>}
     */
    @Post('save')
    save(@Body() params: UserDto): Promise<IUser> {
        try {
            return this._userService.save(params);
        } catch (e) {
            // todo manejar con log4js
            console.error(e.message);
        }
    }

    /**
     * Guardar un cupo disponible
     * @param {QuoteDTO} params
     * @return {Promise<IQuote>}
     */
    @Post('save-quote')
    saveQuote(@Body() params: QuoteDto): Promise<IQuote> {
        try {
          return this._userService.saveQuote(params);
        } catch (e) {
            // todo manejar con log4js
            console.error(e.message);
        }
    }

    /**
     * Obtener todos los usuarios
     * @return {Promise<User[]>}
     */
    @Get('all-user')
    getAllUser(): Promise<User[]> {
        try {
            return this._userService.queryAllUser();
        } catch (e) {
            // todo manejar con log4js
            console.error(e.message);
        }
    }

    /**
     * Guardar una compra realizada
     * @param {PurchaseDTO} params
     */
    @Post('save-purchase')
    savePurchase(@Body() params: PurchaseDto): Promise<IPurchase> {
        try {
            return this._userService.savePurchase(params);
        } catch (e) {
            // todo manejar con log4js
            console.error(e.message);
        }
    }
}