<template>
  <z-view v-if="device" class="device">
    <span class="badge badge--dark">{{ device.brand }}</span>
    <br />
    <img v-if="device.category" class="device__bg" :src="device.category.icon" alt />
    {{ device.name }}
    <br />
    <span class="badge">{{ device.ip }}</span>
    <br />
    <div class="device__trend">
      <TrendChart
        v-if="device.dataset && device.dataset.length > 5"
        :datasets="[
          {
            data: device.dataset,
            smooth: true,
            fill: true,
            stroke: false,
            className: 'curve-trend',
          },
        ]"
      ></TrendChart>
    </div>
    <div slot="extension">
      <z-spot
        v-if="device.category"
        class="device__media"
        :angle="230"
        size="l"
        :distance="90"
        :image-path="device.category.icon"
      ></z-spot>
      <z-spot
        v-if="value"
        slot="extension"
        knob
        v-bind="value"
        class="device__value"
        :angle="45"
        :label="value.label"
        size="m"
        :distance="90"
        @update:qty="valueChanged($event)"
      ></z-spot>
    </div>
  </z-view>
</template>
<style src="./Device.scss" lang="scss"></style>
<script src="./Device.js"></script>
