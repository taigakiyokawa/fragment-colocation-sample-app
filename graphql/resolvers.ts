export const resolvers = {
  Query: {
    viewer() {
      return {
        id: 1,
        name: 'Taiga Kiyokawa',
        bio: 'I am a front-end engineer at Money Forward, Inc.',
        posts: [
          { id: 1, date: '2022-12-01', title: 'Foo' },
          { id: 2, date: '2022-12-02', title: 'Bar' },
          { id: 3, date: '2022-12-03', title: 'Baz' },
          { id: 4, date: '2022-12-04', title: 'Qux' },
        ],
      }
    },
  },
}
