<template>
  <base-card>
  <div class="container">

    <div class="username-container align"><label class="username">{{getUsername}}</label><return-icon></return-icon></div>
    <div>
      <base-button class="align"><upload-icon></upload-icon><label  class=" space" > Upload Files</label> </base-button>
    </div>
    <div>
        <label class="align flex-start"><home-icon></home-icon><label class=" space" >Files</label> </label>
      <ul>
        <base-item v-for="file in getFiles" :info="file" :key="file.id"></base-item>
      </ul>
    </div>
  </div>
  </base-card>
</template>

<script>
import UploadIcon from "../../assets/icons/UploadIcon.vue";
import HomeIcon from '../../assets/icons/HomeIcon.vue';
import ReturnIcon from '../../assets/icons/ReturnIcon.vue';

import BaseItem from '../UI/BaseItem.vue'

import {mapGetters} from 'vuex';
export default {
    components: { UploadIcon,HomeIcon,ReturnIcon,BaseItem },
    computed:{
        ...mapGetters(['getFiles',"getUsername"]),
    }

};
</script>
<style lang="scss" scoped>
@import "../../assets/css/_variables.scss";
.align{
display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
flex-direction: row;
justify-content: space-between;
vertical-align: middle;
    align-items: center;
}
.space{
    margin: 0 $size-tiny*2;
}
.flex-start{
    justify-content: flex-start;
}
.username-container {
       
  color: map-get($colors, black-color);
  height: fit-content;
  padding: 0 0 $size-default 0 ;
  border-bottom: 1px solid map-get($colors, black-color);

label{
    font:  normal normal 600 2rem/2rem Montserrat;
}
}
.container{
    margin: $size-default;

   display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
flex-direction: column;
justify-content: flex-start;  
div{
     margin: $size-default;
}
}
ul{list-style: none;
padding: 0;}
</style>
