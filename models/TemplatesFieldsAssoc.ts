import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

import { Templates } from './Templates';
import { Fields } from './Fields';

export class TemplatesFieldsAssoc extends Model {}

TemplatesFieldsAssoc.init({
  templateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Templates,
      key: 'id'
    },
  },
  fieldId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Fields,
      key: 'id'
    },
  }
}, {
  sequelize,
  modelName: 'template_field_assoc',
  tableName: 'template_field_assoc'
});
