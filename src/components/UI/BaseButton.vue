<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_variables.scss";
button {
  text-align: center;
  padding: $size-tiny*4 ;
  font-size: 0.8rem;
  font-family: inherit;
  width: fit-content;
  height: fit-content;
  background-color:map-get($colors,secondary);
  color: map-get($colors,button-text);
border: 1px solid map-get($colors,lighter-secondary);

    }
    
// .solid--blue {
//     text-align: center;
//   cursor: pointer;
//   text-align: center;
//   width: 130px;
//   color: white;
//   fill: white;
//   border: none;
//   background: #3171b9;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .solid--blue.flat {
//     text-align: center;
//   cursor: pointer;
//   border: 2px solid #3171b9;
//   border-radius: 5px;
//   background-color: transparent;
//   color: #3171b9;
//   fill: #3171b9;
// }


.biggerFont {
  font-size: 1.2rem;
}
.biggerButton{
padding: $size-default*1.5;
}

</style>
