/**
 * Interfaz para el tipado el cupo disponible del usuario.
 * @interface IQuote
 * Leonardo Castillo - yorchcastillo4@gmail.com
 */
export class IQuote {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    deletedAt?: Date;
    valueQuote: number;
}