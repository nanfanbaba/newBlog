<template>
  <div id="heardtop">
      <ul id="nav">
        <li><router-link to="/">博客SAS</router-link>
        <router-link to="/add">写博客</router-link></li>
      </ul>
  </div>
</template>
<script>

export default {
    name:'HeardTop',
    data(){
        return{
        }
    }
}
</script>
<style scoped>
body{
    margin: 0;
    
}
#heardtop{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: crimson;
}
ul{
    padding-left: 0px; 
    text-align: center;
    margin-top: 0px;
}
li{
    list-style-type: none;
    display: inline-block;
    padding: 20px;
    margin: 0 auto;

}
a {
    text-decoration:none;
    color: white;
    padding: 20px;
    border-radius: 5px;
}
.router-link-exact-active{
    background:rgba(255, 255, 255, 0.8);
    color:black;
    font-weight: bold;
}
</style>
