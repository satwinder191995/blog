const { Post } = require('../models');

const postdata = [
  {
    title: 'Article about tech',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nisi consectetur orci sollicitudin congue. Proin scelerisque nisl et magna dignissim volutpat. Pellentesque aliquam, orci sit amet fermentum ullamcorper, sapien ante scelerisque quam, eget pretium magna nisl vitae neque. Quisque suscipit scelerisque semper. Ut commodo, nisl ut tincidunt porta, sapien quam commodo mauris, sed lobortis justo mauris quis tortor. Duis ex libero, vulputate id purus tincidunt, scelerisque viverra massa. Fusce dui nisl, efficitur id fringilla sed, faucibus at arcu',
    user_id: 1
  },
  {
    title: 'tech is osum',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nisi consectetur orci sollicitudin congue. Proin scelerisque nisl et magna dignissim volutpat. Pellentesque aliquam, orci sit amet fermentum ullamcorper, sapien ante scelerisque quam, eget pretium magna nisl vitae neque. Quisque suscipit scelerisque semper. Ut commodo, nisl ut tincidunt porta, sapien quam commodo mauris, sed lobortis justo mauris quis tortor. Duis ex libero, vulputate id purus tincidunt, scelerisque viverra massa. Fusce dui nisl, efficitur id fringilla sed, faucibus at arcu',
    user_id: 1
  },
  {
    title: 'tech is tech',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nisi consectetur orci sollicitudin congue. Proin scelerisque nisl et magna dignissim volutpat. Pellentesque aliquam, orci sit amet fermentum ullamcorper, sapien ante scelerisque quam, eget pretium magna nisl vitae neque. Quisque suscipit scelerisque semper. Ut commodo, nisl ut tincidunt porta, sapien quam commodo mauris, sed lobortis justo mauris quis tortor. Duis ex libero, vulputate id purus tincidunt, scelerisque viverra massa. Fusce dui nisl, efficitur id fringilla sed, faucibus at arcu',
    user_id: 1
  },
  {
    title: 'tech',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nisi consectetur orci sollicitudin congue. Proin scelerisque nisl et magna dignissim volutpat. Pellentesque aliquam, orci sit amet fermentum ullamcorper, sapien ante scelerisque quam, eget pretium magna nisl vitae neque. Quisque suscipit scelerisque semper. Ut commodo, nisl ut tincidunt porta, sapien quam commodo mauris, sed lobortis justo mauris quis tortor. Duis ex libero, vulputate id purus tincidunt, scelerisque viverra massa. Fusce dui nisl, efficitur id fringilla sed, faucibus at arcu',
    user_id: 1
  },
  {
    title: 'tech',
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nisi consectetur orci sollicitudin congue. Proin scelerisque nisl et magna dignissim volutpat. Pellentesque aliquam, orci sit amet fermentum ullamcorper, sapien ante scelerisque quam, eget pretium magna nisl vitae neque. Quisque suscipit scelerisque semper. Ut commodo, nisl ut tincidunt porta, sapien quam commodo mauris, sed lobortis justo mauris quis tortor. Duis ex libero, vulputate id purus tincidunt, scelerisque viverra massa. Fusce dui nisl, efficitur id fringilla sed, faucibus at arcu',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
