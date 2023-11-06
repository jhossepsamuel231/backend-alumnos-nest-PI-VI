import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class Persona {

  @Column({ primary: true, unique: true, generated: true })
  id: number;

  @Column()
  nombrePersona: string;

  @Column()
  apellidoPaterno: string;

  @Column()
  apellidoMaterno: string;

  @Column()
  dniPersona: string;

  @Column()
  fechaNacimientoPersona: string;

  @Column()
  codigoPersona: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
