const { matchSorter } = require('match-sorter');
const resolvers = {
  Query: {
    // Query the list of all users or filter whether there is a name
    // Here we use match-sorter that is a lightweight and faster
    // lib to perform filter/sort on a large list of items
    list: async (_, { name }, { dataSources }) => {
      const data = await dataSources.usersAPI.getUsers();
      return name ? matchSorter(data, name, { keys: ['name'] }) : data;
    },
    // Query a single user by id
    user: async (_, { id }, { dataSources }) => {
      const data = await dataSources.usersAPI.getUsers();
      return data.filter((user) => user._id === id)[0];
    },
  },
};

module.exports = resolvers;
