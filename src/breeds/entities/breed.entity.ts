import { Cat } from "src/cats/entities/cat.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Breed {
    @Column({primary: true, generated: true})
    id: number;
    
    @Column({length: 100})
    name: string;

    @OneToMany(()=>Cat, (cat)=> cat.id)
    cats: Cat[];
}
