import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { Orders } from './Orders';

@Index('user_pk', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', {
    name: 'username',
    nullable: true,
    length: 100,
  })
  username: string | null;

  @Column('text', { name: 'password', nullable: true })
  password: string | null;

  @Column('timestamp with time zone', { name: 'createdat', nullable: true })
  createdat: Date | null;

  @Column('timestamp with time zone', { name: 'updatedat', nullable: true })
  updatedat: Date | null;

  @OneToOne(() => Customer, (customer) => customer.user)
  customers: Customer[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
