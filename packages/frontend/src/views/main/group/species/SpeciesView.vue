<template>
  <v-col>
    <v-toolbar class="toolbar">
      <v-toolbar-title>
        Species
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text :to="`/main/groups/${activeGroupId}/species/create`">Create Species</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card>
      <v-card-title>
        <v-spacer />
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details clearable />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="!items"
        :search="search"
        :items-per-page="15"
        :footer-props="{
          itemsPerPageOptions: [10, 15, 20, -1],
          showFirstLastPage: true,
          showCurrentPage: true,
        }"
        multi-sort
      >
        <template v-slot:item.action="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                icon
                :to="{
                  name: 'main-group-species-edit',
                  params: { id: item.id },
                }"
              >
                <v-icon color="grey">mdi-pencil-outline</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon @click="deleteSpecies(item.id)">
                <v-icon color="red accent-1">mdi-delete-outline</v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { speciesModule } from "@/modules/species";
import { groupModule } from "@/modules/group";

@Component
export default class SpeciesView extends Vue {
  readonly groupContext = groupModule.context(this.$store);
  readonly speciesContext = speciesModule.context(this.$store);

  readonly headers = [
    {
      text: "Id",
      sortable: true,
      value: "id",
      align: "right",
      filterable: false,
      width: "80",
    },
    {
      text: "Name",
      sortable: true,
      value: "name",
      align: "left",
    },
    {
      text: "Acronym",
      sortable: true,
      value: "acronym",
      align: "left",
    },
    {
      text: "Actions",
      value: "action",
      sortable: false,
      filterable: false,
      width: "110",
    },
  ];

  search = "";

  get activeGroupId() {
    return this.groupContext.getters.activeGroupId;
  }

  get items() {
    return this.speciesContext.getters.species;
  }

  async mounted() {
    await this.speciesContext.actions.getGroupSpecies(+this.$router.currentRoute.params.groupId);
  }

  async deleteSpecies(id: number) {
    if (self.confirm("Are you sure you want to delete the species?")) {
      await this.speciesContext.actions.deleteSpecies(id);
    }
  }
}
</script>

<style scoped>
.toolbar {
  margin-bottom: 10px;
}
</style>