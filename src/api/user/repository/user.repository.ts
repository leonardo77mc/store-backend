import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../utils/contants/contants.class";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { IUser } from "../interface/user.interface";
import { Quotes } from "../entity/quotes.entity";
import { IQuote } from "../interface/quote.interface";
import { Purchases } from "../entity/purchases.entity";
import { IPurchase } from "../interface/purchase.interface";


/**
 * Clase de repositorio para los datos de los usuarios, cupo disponible y compras
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class UserRepository {

    @Inject(Constant.USER) private readonly _user: Repository<User>;
    @Inject(Constant.QUOTE) private readonly _quote: Repository<Quotes>;
    @Inject(Constant.PURCHASE) private readonly _purchase: Repository<Purchases>;

    /**
     * Guardar un usuario
     * @param {IUser} user
     * @return {Promise<IUser>}
     */
    save(user: IUser): Promise<IUser> {
        return this._user.manager.save(user);
    }

    /**
     * Guardar el cupo disponible
     * @param {IQuote} quote
     * @return {Promise<IQuote>}
     */
    saveQuote(quote: IQuote): Promise<IQuote> {
        return this._quote.manager.save(quote);
    }

    /**
     * Obtener un cupo por id
     * @param {number} id
     * @return {Promise<Quotes>}
     */
    queryQuoteById(id: number): Promise<Quotes> {
        return this._quote.findOne({where: {id}});
    }

    /**
     * Obtener todos los usuarios
     * @return {Promise<User[]>}
     */
    queryAllUser(): Promise<User[]> {
        return this._user.find({
            relations: {
                quotes: true
            }
        })
    }

    /**
     * Guardar la compra realizada
     * @param {IPurchase} purchase
     * @return {Promise<IPurchase>}
     */
    savePurchase(purchase: IPurchase): Promise<IPurchase> {
      return this._purchase.manager.save(purchase);
    }
}