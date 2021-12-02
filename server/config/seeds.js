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
        '"Pretty fly for a cacti." This perfect waterfall of a flower will inspire you to rest and contemplate beauty',
      image: 'size1.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 3
    },
    {
      name: 'A Row of Rainbow',
      description:
        'Color color everywhere. This rainbow of succulents will inspire good weather all year long. ',
      image: 'size2.jpg',
      category: categories[0]._id,
      price: 25.99,
      quantity: 6
    },
    {
      name: 'Little Guy',
      category: categories[0]._id,
      description:
        'Whenever you’re in doubt, choose the adorable Hoya Kerrii, which is also known as the Sweetheart Plant. This ultra-cute succulent has thick, heart-shaped leaves that express all kinds of love. To top it off, this plant stays in good shape with only occasional watering. ',
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
      price: 8.99,
      quantity: 50
    },

    {
      name: 'My Boy Blue',
      description:
        'This beauty comes in a pot that is sky blue. Water it rarely, talk to it regularly and see it grow tall. ',
      image: 'size5.jpg',
      category: categories[0]._id,
      price: 20.99,
      quantity: 3
    },
    {
      name: 'Flower Tower',
      description:
        'There’s nothing quite like a pick-me-up to make them smile, whether they’re going through a tough time or just deserve some TLC. This succulents will definitely bring a smile to your face',
      image: 'size6.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Three Is A Team',
      category: categories[0]._id,
      description:
        'Dont get just one, do yourself a favor and treat yourself to 3 of these beauties.',
      image: 'size7.jpg',
      price: 30.99,
      quantity: 20
    },
    {
      name: 'Little Star',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'size8.jpg',
      price: 8.99,
      quantity: 50
    },

    {
      name: 'Love',
      description:
        'Love is ALL YOU NEED.',
      image: 'love.jpg',
      category: categories[0]._id,
      price: 12.99,
      quantity: 3
    },
    {
      name: 'Trust',
      description:
        'nec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'trust2.jpg',
      category: categories[0]._id,
      price: 6.99,
      quantity: 6
    },
    {
      name: 'Hope',
      category: categories[0]._id,
      description:
        'This little guy with sharp reaching leefs and resistent to everything except love, will grow and flourish in your home',
      image: 'hope1.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Christmas Tree',
      category: categories[0]._id,
      description:
        'Take this little lady home and decorate her leevs with festive little lights. Aint she a bute?',
      image: 'size12.jpg',
      price: 5.99,
      quantity: 50
    },


    {
      name: 'Give Me A Hand',
      description:
        'These hands hold the key to happiness-plants! Life itself! Plant them in the pot or grow them in your yard. They will inspire life all around.',
      image: 'size13.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 3
    },
    {
      name: 'Bed Head',
      description:
        'This plant comes in an earthy painted pot that brings a chic desert vibe into any space. Aside from being cute and lovely to look at, it comes with the added perk of plenty soothing benefits, too.',
      image: 'size14.jpg',
      category: categories[0]._id,
      price: 8.99,
      quantity: 6
    },
    {
      name: 'There Is No Spoon',
      category: categories[0]._id,
      description:
        'Clever way to recycle your household items with some green love.',
      image: 'size15.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Little Me',
      category: categories[0]._id,
      description:
        'Small pot with a small plant for a large heart.',
      image: 'size16.jpg',
      price: 10.99,
      quantity: 50
    },



    {
      name: 'Starfish',
      description:
        'Classic set comes pre planted in a wooden pot. Desert itself enters your home with this purchase. Enjoy.',
      image: 'plantvar.jpg',
      category: categories[1]._id,
      price: 50.99,
      quantity: 3
    },
    {
      name: 'Beauties',
      description:
        'Perfect for a larger space to decorate and style as you please. This set is 10 plants strong all diverse and healthy. Play around with arrangement, or put them all by your bedside to remind you of living daily in love.',
      image: 'plantvar2.jpg',
      category: categories[1]._id,
      price: 78.99,
      quantity: 6
    },
    {
      name: 'Color',
      category: categories[1]._id,
      description:
        'Color Color Everywhere. This piece comes in a set of 5 medium sized cacti, all blooming with color and keeping its appeal all year long.',
      image: 'plantvar3.jpg',
      price: 47.99,
      quantity: 20
    },
    {
      name: 'White Island',
      category: categories[1]._id,
      description:
        'Lots and lots of them, just for you. In a boat.',
      image: 'plantvar4.jpg',
      price: 43.99,
      quantity: 50
    },


    {
      name: 'Copper Pots',
      category: categories[2]._id,
      description:
        'These Triplets in copper dresses will reflect the smile off of your face when you get them in your house AND from then on. ',
      image: 'cat1.jpg',
      price: 44.99,
      quantity: 100
    },
    {
      name: 'Freddi Marriage',
      category: categories[2]._id,
      description:
        'These geltle but tough beaties are a marriage made in heaven. They come with matching "outfits" too!',
      image: 'FreddyMarriage.jpg',
      price: 14.99,
      quantity: 100
    }, {
      name: '"The Boat Cruise"',
      category: categories[2]._id,
      description:
        'Wish them the best of luck or express your gratitude in style. We make it easy, offering the beauty of a compact jade plant artfully arranged in a handsome off-white, footed pot featuring a speckled finish',
      image: 'cat2.jpg',
      price: 29.99,
      quantity: 100
    }, {
      name: '"Starry Night"',
      category: categories[2]._id,
      description:
        'Hexagonal shape pot comes with the cactus. Van Gogh would appreciate the reference. After all he was inspired by nature.',
      image: 'cap3.jpg',
      price: 14.99,
      quantity: 100
    },


    {
      name: 'Cactus Onsie',
      category: categories[3]._id,
      description:
        'How about this versatile piece of clothing for your baby "cactus".',
      image: 'kid5.jpg',
      price: 39.99,
      quantity: 30
    },
    {
      name: 'Cactus Drool Prevention',
      category: categories[3]._id,
      description:
        'The perfect way to protect your little from smearing their food all over that new cactus onsie you just got from our store!',
      image: 'kid4.jpg',
      price: 19.99,
      quantity: 30
    },
    {
      name: 'Cactus Tee',
      category: categories[3]._id,
      description:
        'This adorable top with some fun cacti on it will be a lovely addition to your babys closet.',
      image: 'kid3.jpg',
      price: 28.99,
      quantity: 100
    },
    {
      name: 'The Perfect Outfit',
      category: categories[3]._id,
      description:
        'This complete set of cactus love will make your kiddo go wild for nature! Ok, maybe not your kiddoe, but grandparents for sure.',
      image: 'kid.jpg',
      price: 28.99,
      quantity: 100
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
