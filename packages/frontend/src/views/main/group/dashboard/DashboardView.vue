<template>
  <v-container fluid>
    <v-row class="mt-6 mx-6">
      <v-col>
        <RecentOrders />
      </v-col>
      <v-col>
        <FinishedLots />
      </v-col>
    </v-row>
    <v-row class="mt-6 mx-6">
      <v-col>
        <LowLots />
      </v-col>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RecentOrders from "@/views/main/group/dashboard/RecentOrders.vue";
import FinishedLots from "@/views/main/group/dashboard/FinishedLots.vue";
import LowLots from "@/views/main/group/dashboard/LowLots.vue";

@Component({
  components: { LowLots, FinishedLots, RecentOrders },
})
export default class DashboardView extends Vue {}
</script>
