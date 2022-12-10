export const resolvers = {
  Query: {
    viewer() {
      return {
        id: 1,
        name: 'John Smith',
        posts: [
          { id: 1, title: 'Foo' },
          { id: 2, title: 'Bar' },
          { id: 3, title: 'Baz' },
          { id: 4, title: 'Qux' },
        ],
      }
    },
  },
}
