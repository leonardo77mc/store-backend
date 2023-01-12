/**
 * Interfaz para el tipado del usuario.
 * @interface IUser
 * Leonardo Castillo - yorchcastillo4@gmail.com
 */
export interface IUser {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    deletedAt?: Date;
    name: string;
    lastNames: string;
    identificationCard: number;
    email: string;
    telephone: string;
    quoteId?: number;
}