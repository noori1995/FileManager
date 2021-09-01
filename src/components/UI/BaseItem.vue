<template>
    <li>
<folder-icon v-if="info.type==='folder'"></folder-icon>
<file-icon v-else-if="info.type==='file'"></file-icon>
        <span class="content"><label>{{info.name}}</label><span class="subtitle"><label> {{info.foldersCount}} folders, {{info.filesCount}} files</label></span></span>
    </li>
</template>

<script>
import FolderIcon from '../../assets/icons/FolderIcon.vue'
import FileIcon from '../../assets/icons/FileIcon.vue'
export default {
    components:{FolderIcon,FileIcon},
    props:['info']
}
</script>


<style lang="scss" scoped>

@import "../../assets/css/_variables.scss";

li{
    padding: $size-tiny*5 0;
    border-bottom: solid 1px map-get($colors, light-color) ;
display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
flex-direction: row;
vertical-align: middle;
    align-items: center;
}
.subtitle{
    font-size: .8rem;
    color: map-get($colors, subtitle);
    margin: 0 $size-tiny*3 ;
}
.content{
    margin: 0 $size-tiny*2 ;
}
</style>