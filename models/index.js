
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: false
  },
});
// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: Product,
    unique: false
  },
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  model: Tag,
  unique: false
  },
);


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  model: Product,
  unique: false
  },
);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
