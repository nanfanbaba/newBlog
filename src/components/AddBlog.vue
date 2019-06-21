<template>
  <div class="addblog">
      <h1 id="bloog">添加博客</h1>
      <form v-if="!hideBlog">
          <p>主题:</p>
          <input id="title" type="text" v-model="blog.title" required="required" placeholder="请输入您的主题.."/>
          <p>内容:</p>
          <textarea v-model="blog.content" required placeholder="请输入您的内容.."></textarea>
          <p>分类:</p>
          <label >Vue.js</label>
          <input type="checkbox" value="vue" v-model="blog.jobs">
          <label >Angular4</label>
          <input type="checkbox" value="Angular4" v-model="blog.jobs">
          <label >Node.js</label>
          <input type="checkbox" value="Node" v-model="blog.jobs">
          <label >React.js</label>
          <input type="checkbox" value="React.js" v-model="blog.jobs">
          <p>作者:</p>
          <select v-model="blog.zuozhe">
              <option value="李濠">李濠</option>
              <option value="李明">李明</option>
              <option value="李时浩">李时浩</option>
          </select>
          <br/>
          <input id="submit" type="submit" v-on:click.prevent="pushblog"  value="提交">
      </form>
      <h2 v-if="hideBlog">您的数据提交成功</h2>
      <div id="piew" v-if="showblog">
          <p>主题:{{blog.title}}</p>
          <p>内容:{{blog.content}}</p>
          <p>分类:</p>
          <ul>
            <li v-for="job in blog.jobs" :key="job.jobs">{{job}}</li>
          </ul>
          <p>作者:{{blog.zuozhe}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddBlog',
  data () {
    return {
      blog:{
        title:"",
        content:"",
        jobs:[],
        zuozhe:""
      },
      hideBlog:false,
      showblog:false
    }
  },
  methods:{
    pushblog:function(){
      this.$http.post('http://jsonplaceholder.typicode.com/posts',{
         title:this.blog.title,
         body:this.blog.content,
         userId:1
      })
           .then(function(data){
             console.log(data)
             this.hideBlog=true,
             this.showblog=true
           });
    }
  }
}
</script>


<style scoped>
*{
  margin: 0;
}
#bloog{
  margin-top: 0px;
  color:indianred;
}
.addblog{
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  margin:70px 0px 35px; 
}
#title{
  width: 50%;
  padding:8px;
  margin-bottom: 10px;
}
p {
  margin-bottom: 10px;
}
textarea{
  width: 50%;
  height: 200px;
  padding: 8px;
  margin-bottom: 10px;
}
label {
  display: inline-block;
  font-size: 5ox;
}
input{
    margin-right: 11px;
    margin-bottom: 10px;
    }
select {
  width: 20%;
  padding: 8px;
  font-size: 15px;
}
#submit {
  margin-top:10px; 
  margin-bottom: 10px;
  width: 134px;
  height: 30px;
  background-color:  crimson;
  color:white;
  cursor: pointer;
}
</style>
