<template>
  <div id="showblog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.body}}</article>
  </div>
</template> 

<script>

export default {
  name: 'ShowBlog',
  data(){
    return{
      blog:{},
      id:this.$route.params.id
    }
  },
  created:function(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
     .then(function(data){
       this.blog=data.body
       console.log('shuju',data.body)
       console.log('data',data)
     })
  }
}
</script>

<style>
  html {
    width:100vw;
    overflow-x:hidden;
  }
  body{
    margin: 0px;
  }
  #showblog{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>