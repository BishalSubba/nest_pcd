import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @Column({unique:true})
    Username:string;
    
    @Column() 
    email:string;

    @Column()
    password: string;

//     @BeforeInsert()
//     async hashPassword() {
//       this.password = await bcrypt.hash(this.password, 8);
// }
}