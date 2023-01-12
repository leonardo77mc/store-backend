import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

/**
 * Clase abstracta base para las propiedades por defecto en una entidad
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
export abstract class BaseEnty extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @Column('boolean', { default: true })
    active: boolean;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date;
}
