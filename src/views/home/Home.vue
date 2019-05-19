<template>
  <z-view label="Frontend Love ♥️" label-pos="bottom">
    <div class="home">
      <img class="home__logo" src="../../assets/svg/nc-smart-home.svg" alt="NC Smart Home" />
      <p>{{ currentTime }}</p>

      <h1>Nc Smart Home Dashboard</h1>

      <p>Today is {{ currentDate }}</p>
    </div>
    <div slot="extension">
      <z-spot
        style=" border-width: 4px; border-color: orange;"
        :angle="-145"
        size="m"
        :distance="120"
        to-view="notifications"
      >
        <img
          class="z-spot-icon"
          :class="{ 'animated tada': unreadNotificationsAmount > 0 }"
          src="../../assets/svg/bell.svg"
          alt="Notifications"
        />
        <br />
        <span style="color: var( --accent-text-color)">{{ unreadNotificationsAmount }}</span>
      </z-spot>
      <!-- devices-->
      <z-spot
        :angle="60"
        :distance="120"
        size="s"
        label="Devices"
        label-pos="right"
        to-view="devices"
      >
        {{ activeDevicesAmount }}
      </z-spot>

      <!-- netcentric-->
      <z-spot :angle="315" size="s" :distance="120" to-view="about">
        <img class="z-spot-icon" src="../../assets/svg/nc_logo.svg" alt="Notifications" />
      </z-spot>

      <!-- rooms-->
      <z-spot :angle="30" size="s" :distance="120" label="Rooms" label-pos="right" to-view="rooms">
        {{ roomsAmount }}
      </z-spot>
      <!-- settings-->
      <z-spot :angle="150" :distance="120" size="s" label="Settings" to-view="settings">
        <img class="z-spot-icon" src="../../assets/svg/settings.svg" alt="Settings" />
      </z-spot>
    </div>
  </z-view>
</template>

<script src="./Home.js"></script>

<style lang="scss" src="./Home.scss"></style>
