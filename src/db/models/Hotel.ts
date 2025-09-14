import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './sequelize';


class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare rating: number;
    declare ratingsCount: number;

}

Hotel.init({
    id: {
        type: "INTEGER",
        primaryKey: true
    },
    name: {
        type: "STRING",
        allowNull : false
    },
    address: {
        type: "STRING",
        allowNull: false
    },
    location: {
        type: "STRING",
        allowNull: false
    },
    createdAt: {
        type: "DATE",
        defaultValue : new Date(),
        allowNull : false
    },
    updatedAt: {
        type: "DATE",
        defaultValue: new Date(),
        allowNull : false
    },
    rating: {
        type: "FLOAT",
        defaultValue : null
    },
    ratingsCount: {
        type: "INTEGER",
        defaultValue : 0
    }
}, {
    tableName : "hotels",
    sequelize: sequelize,
    underscored : true

})

export default Hotel;