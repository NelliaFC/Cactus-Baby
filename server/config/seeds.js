const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Succulents' },
    { name: 'Garden Sets' },
    { name: 'Potted'  },
    { name: 'For Babies' },
    
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Waterfall Lilly',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'size1.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 3
    },
    {
      name: 'A Row of Rainbow',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'size2.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Little Guy',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'size3.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Birdeye View',
      category: categories[0]._id,
      description:
        ' Love grows from Small to Big, this baby cactus, if nurtured properly and not watered too much will grow into a handsome fellah',
      image: 'birdseyeview.jpg',
      price: 3.99,
      quantity: 50
    },

    {
      name: 'Love at first sight',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'size5.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 3
    },
    {
      name: 'Flower Tower',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'size6.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Three is a team',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'size7.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Little Star',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'size8.jpg',
      price: 3.99,
      quantity: 50
    },

    {
      name: 'Love',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'love.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 3
    },
    {
      name: 'Trust',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'trust2.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Hope',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'hope1.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Trinity',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'size12.jpg',
      price: 3.99,
      quantity: 50
    },


    {
      name: 'Give me a hand',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'size13.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 3
    },
    {
      name: 'Bed Head',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'size14.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 6
    },
    {
      name: 'There is no Spoon',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'size15.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'White Island',
      category: categories[0]._id,
      description:
        'small pot with a small plant',
      image: 'size16.jpg',
      price: 3.99,
      quantity: 50
    },



    {
      name: 'Starfish',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'plantvar.jpg',
      category: categories[1]._id,
      price: 50.99,
      quantity: 3
    },
    {
      name: 'Beauties',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'plantvar2.jpg',
      category: categories[1]._id,
      price: 36.99,
      quantity: 6
    },
    {
      name: 'Color',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'plantvar3.jpg',
      price: 47.99,
      quantity: 20
    },
    {
      name: 'White Island',
      category: categories[1]._id,
      description:
        'lots and lots of them',
      image: 'plantvar4.jpg',
      price: 43.99,
      quantity: 50
    },


    {
      name: 'Copper Pots',
      category: categories[2]._id,
      description:
        'Hexagonal shape pot for your inspiration',
      image: 'cat1.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Freddi Marriage',
      category: categories[2]._id,
      description:
        'Hexagonal shape pot for your inspiration',
      image: 'FreddyMarriage.jpg',
      price: 14.99,
      quantity: 100
    }, {
      name: '"The Boat Cruise"',
      category: categories[2]._id,
      description:
        'Hexagonal shape pot for your inspiration',
      image: 'cat2.jpg',
      price: 29.99,
      quantity: 100
    }, {
      name: '"Starry Night"',
      category: categories[2]._id,
      description:
        'Hexagonal shape pot for your inspiration',
      image: 'cap3.jpg',
      price: 14.99,
      quantity: 100
    },


    {
      name: 'Cactus Onsie',
      category: categories[3]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'kid5.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Cactus drool prevention',
      category: categories[3]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'kid4.jpg',
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Cactus Tee',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'kid3.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'kid.jpg',
      price: 49.99,
      quantity: 2
    },

    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
