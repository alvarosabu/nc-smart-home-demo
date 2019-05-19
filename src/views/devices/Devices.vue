<template>
  <z-view>
    Devices
    <section slot="extension">
      <z-list class="devices" :items="devices" :per-page="4">
        <z-spot
          slot-scope="props"
          class="devices__item"
          :distance="60"
          :label="props.name"
          :index="props.index"
          :size="'s'"
          :to-view="{ name: 'device', params: { device: props } }"
          :image-path="props.category && props.category.icon"
          style="background-color: transparent; border: none"
        >
          <z-spot
            slot="extension"
            :style="{
              'background-color': props.active ? 'var(--success-color)' : 'var(--danger-color)',
              border: 'none',
            }"
            :angle="-45"
            size="xxs"
          ></z-spot>
        </z-spot>
      </z-list>
      <z-spot
        v-for="(device, $index) in starredDevices"
        :key="device.id"
        class="devices__item devices__item--starred"
        :distance="120"
        :label="device.name"
        :size="'s'"
        :angle="-45 + $index * 35"
        :to-view="{ name: 'device', params: { device: device } }"
        :image-path="device.category && device.category.icon"
        style="background-color: transparent; border-color: #D4AF37"
      >
        <z-spot
          slot="extension"
          :style="{
            'background-color': device.active ? 'var(--success-color)' : 'var(--danger-color)',
            border: 'none',
          }"
          :angle="-45"
          size="xxs"
        ></z-spot>
      </z-spot>
    </section>
  </z-view>
</template>
<style src="./Devices.scss" lang="scss"></style>
<script src="./Devices.js"></script>
