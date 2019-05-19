<template>
  <z-view class="settings">
    <h2 class="settings__title">Settings</h2>
    <p v-if="theme" class="settings__theme">Current theme: {{ theme }}</p>
    <div slot="extension">
      <z-spot
        v-for="(el, index) in themes"
        :key="index"
        button
        size="xs"
        :distance="120"
        :angle="el.angle"
        :label="el.label"
        :label-pos="el.labelPos"
        :class="$zircle.getTheme() === 'theme-' + el.label ? 'accent' : ''"
        @click.native="changeStyle(el)"
      />
    </div>
  </z-view>
</template>
<style src="./Settings.scss" lang="scss"></style>
<script src="./Settings.js"></script>
