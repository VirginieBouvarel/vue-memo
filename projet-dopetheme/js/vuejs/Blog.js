new Vue({
  el: "#app",
  data: {
    inArticlePage: false,
    articles: {
      currentIndex: 0,
      data: [
        {
          title: 'To shewing another demands to.',
          img: 'img/blog/p1.jpg'
        },
        {
          title: 'A wonderful serenity has taken possession of my entire soul.',
          img: 'img/blog/p2.jpg'
        },
        {
          title: 'Awesome Design His many legs, pitifully thin compared with.',
          img: 'img/blog/p3.jpg'
        },
        {
          title: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.',
          img: 'img/blog/p4.jpg'
        },
        {
          title: 'To take a trivial example, which of us ever undertakes.',
          img: 'img/blog/p5.jpg'
        }
      ]
    }
  },
  computed: {
    currentArticle: function () {
      return this.articles.data[this.articles.currentIndex];
    }
  },
  methods: {
    showArticle: function (index) {
      this.articles.currentIndex = index;
      this.inArticlePage = true;
      window.scrollTo(0, 0);
    },
    goToList: function () {
      this.inArticlePage = false;
    }
  }
})