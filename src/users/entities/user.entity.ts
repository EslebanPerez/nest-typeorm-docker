import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  //@Column({primary: true, generated: true})
  id: number;
  
  @Column({unique: true})
  name: string;

  @Column({unique: true, nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({default: 'user'})
  rol: string

  @DeleteDateColumn()
  deleteAt: Date;
}
