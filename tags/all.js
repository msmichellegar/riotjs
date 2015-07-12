riot.tag('hello-blog', '<form onsubmit="{postBlog}"> <p>Title</p><input type="text" name="title"> <p>Author</p><input type="text" name="author"> <p>Text</p><input type="text" name="text"> <button>Add blog</button> </form> <ul> <li each="{blog in opts.blogs}">{blog.title} {blog.author} {blog.text}</li> </ul>', function(opts) {
    this.postBlog = function() {
      var blog = { title: this.title.value, author: this.author.value, text: this.text.value}
      console.log(blog)
      blogs.push(blog)
      this.title.value = '';
      this.author.value = '';
      this.text.value = '';


    }.bind(this);
  
});

riot.tag('hello-form', '<form onsubmit="{sayHello}"> <input type="text" name="greet"> <button>Say hello</button> </form> <hello-world show="{this.greeting}" greet="{this.greeting}"></hello-world>', function(opts) {
    this.sayHello = function() {
      this.greeting = this.greet.value
      this.greet.value = ''
    }.bind(this);
  
});

riot.tag('hello-world', '<h6>Hello {opts.greet}</h6>', function(opts) {

});
