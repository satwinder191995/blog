const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is excelent',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Excellent article',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Informative article',
    user_id: 1,
    post_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
