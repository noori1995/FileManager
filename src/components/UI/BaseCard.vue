<template>
    <div>
        <slot></slot>
    </div>
    
</template>

<style lang="scss" scoped>

@import "../../assets/css/_variables.scss";

div {
  padding: 0 $size-default;
  margin: $size-default;
  background-color: map-get($colors, white-background);
}
</style>