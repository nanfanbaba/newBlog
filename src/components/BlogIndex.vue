<template>
  <div class="blogindex">
      <h1>我的博客</h1>
      🔎 <input id="search" type="text" placeholder="请输入搜索内容" v-model="lihao"/>
      <div id="blogcontents" v-for="blogct in searchfunction" :key="blogct.title ">
        <h2 ><router-link v-bind:to="'/blog/'+blogct.id" v-titleColor>{{blogct.id}}.{{blogct.title |titlehs}}</router-link></h2>
        <p>{{blogct.body | contenths}}</p>
      </div>
  </div>
</template>

<script>    
export default {
  name: 'BlogIndexs',
  data () {
    return {
        blogcontent:[],
        lihao:""
    }
  },
  created:function(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
      .then(function(data){
          this.blogcontent=data.body.slice(0,10)
      })
  },
  filters:{
      contenths:function(value){
        value=value.split(" ");
        value=value.slice(0,20)
        return value=value.join(" ")+"..."
      },
      titlehs:function(value){
          value=value.split(" ").slice("0,7");
          return value=value.join(" ")+"..."
      }
  },
  computed:{
      searchfunction:function(){

          console.log('liming',this)
          return this.blogcontent.filter((item)=>{
              console.log('bibao',this)
              if(item.title.match(this.lihao.toLowerCase()) || item.body.match(this.lihao.toLowerCase())){
                  return true
              }
          })

      }
  }
}
</script>

<style scoped>
*{
    margin: 0
}
h1{
    margin-bottom: 15px;
    color:indianred;
}
.blogindex{
    max-width: 1200px;
    margin: 0 auto;
}
#blogcontents{
    width:50%;
    padding: 8px;
    margin-bottom: 15px;
    background-color:  rgb(221, 219, 219);
}
input {
    width:20%;
    margin-bottom: 15px;
}
a{
    text-decoration: none;
}
</style>
