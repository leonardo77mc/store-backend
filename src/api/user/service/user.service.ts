import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../utils/contants/contants.class";
import { UserRepository } from "../repository/user.repository";
import { IUser } from "../interface/user.interface";
import { IQuote } from "../interface/quote.interface";
import { Quotes } from "../entity/quotes.entity";
import { User } from "../entity/user.entity";
import { IPurchase } from "../interface/purchase.interface";
import { Purchases } from "../entity/purchases.entity";

/**
 * Clase de servicios para los datos de los usuarios
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class UserService {

    @Inject(Constant.USER_REPOSITORY) private readonly _userRepository: UserRepository;

    /**
     * Guardar un usuaios
     * @param {IUser} params
     * @return {Promise<IUser>}
     */
    async save(params: IUser): Promise<IUser> {
        const quote = await this._userRepository.queryQuoteById(params.quoteId);
        if (quote) {
            const user = new User();
            user.createdAt = new Date();
            user.quotes = quote;
            user.name = params.name;
            user.lastNames = params.lastNames;
            user.identificationCard = params.identificationCard;
            user.email = params.email;
            user.telephone = params.telephone.toString();
            return this._userRepository.save(user);
        }
    }

    /**
     * Guardar un cupo disponible para compras
     * @param {IQuote} params
     * @return {Promise<IQuote>}
     */
    saveQuote(params: IQuote): Promise<IQuote> {
        const quote = new Quotes();
        quote.valueQuote = params.valueQuote;
        quote.createdAt = new Date();
        return this._userRepository.saveQuote(quote);
    }

    /**
     * Obtener todos los usuarios
     * @return {Promise<User[]>}
     */
    queryAllUser(): Promise<User[]> {
        return this._userRepository.queryAllUser();
    }

    /**
     * Guardar la compra realizada
     * @param {IPurchase} params
     * @return {Promise<IPurchase>}
     */
    savePurchase(params: IPurchase): Promise<IPurchase> {
        const user = params.user;
        const purchase = new Purchases();
        purchase.user = user;
        purchase.product = params.product;
        purchase.total = params.total;
        purchase.createdAt = new Date();
        return this._userRepository.savePurchase(purchase);
    }
}