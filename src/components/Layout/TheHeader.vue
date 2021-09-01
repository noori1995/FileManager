<template>
  <div class="header-container">
    <div>
        <label>FES</label>
        </div>
    <div>
        <notifications-icon></notifications-icon>
        <account-icon></account-icon>
    </div>
  </div>
</template>

<script>
import NotificationsIcon from '../../assets/icons/NotificationsIcon.vue';
import AccountIcon from '../../assets/icons/AccountIcon.vue'
export default {
  components: { NotificationsIcon,AccountIcon },
    
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/_variables.scss";

.header-container {
  background-color: map-get($colors, dark-color);
  padding: $size-default;
   display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
flex-direction: row;
justify-content: space-between;
vertical-align: middle;

  color: map-get($colors, white-text);
  fill: map-get($colors, white-icon) ;
  font-size: $size-default * 1.5;
  *{
      margin: 0 $size-tiny*5;
  }
}

</style>
