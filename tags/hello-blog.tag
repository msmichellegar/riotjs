<hello-blog>

  <form onsubmit={postBlog}>
    <p>Title</p><input type="text" name="title">
    <p>Author</p><input type="text" name="author">
    <p>Text</p><input type="text" name="text">
    <button>Add blog</button>
  </form>

  <ul>
    <li each={blog in opts.blogs}>{blog.title} {blog.author} {blog.text}</li>
  </ul>

  <script>
    postBlog(){
      var blog = { title: this.title.value, author: this.author.value, text: this.text.value}
      console.log(blog)
      blogs.push(blog)
      this.title.value = '';
      this.author.value = '';
      this.text.value = '';

      // this.greeting = this.greet.value
      // this.greet.value = ''
    }
  </script>


</hello-blog>
