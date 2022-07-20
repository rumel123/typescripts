import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "identifications"})
export class identifications {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string
 

}
