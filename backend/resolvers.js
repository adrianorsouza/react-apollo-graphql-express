const { matchSorter } = require('match-sorter');
const resolvers = {
  Query: {
    list: async (_, { name }, { dataSources }) => {
      const data = await dataSources.usersAPI.getUsers();
      return name ? matchSorter(data, name, { keys: ['name'] }) : data;
    },
    user: async (_, { id }, { dataSources }) => {
      const data = await dataSources.usersAPI.getUsers();
      return data.filter((user) => user._id === id)[0];
    },
  },
};

module.exports = resolvers;
