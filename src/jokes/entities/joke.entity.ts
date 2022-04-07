import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Table({ tableName: 'jokes', timestamps: false })
export class Joke extends Model<Joke> {
  @Field()
  @Column({ type: DataType.STRING, allowNull: false, primaryKey: true })
  id: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  url: string;

  @Field()
  @Column({ type: DataType.STRING, allowNull: false })
  icon_url: string;

  @Field()
  @Column({ type: DataType.TEXT, allowNull: false })
  value: string;

  @Field(() => [String])
  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  categories: string[];

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  created_at: string;

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  updated_at: string;
}
