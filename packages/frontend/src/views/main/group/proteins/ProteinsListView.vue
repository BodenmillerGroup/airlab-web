<template>
  <LoadingView v-if="!items" text="Loading proteins..." />
  <v-col v-else>
    <v-toolbar dense class="toolbar">
      <v-toolbar-title>Proteins</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text :to="`/main/groups/${activeGroupId}/proteins/create`" color="primary">Create Protein</v-btn>
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
          itemsPerPageOptions: [10, 15, 20, 100],
          showFirstLastPage: true,
          showCurrentPage: true,
        }"
        multi-sort
        show-expand
      >
        <template v-slot:item.action="{ item }">
          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                :to="{
                  name: 'main-group-clones-create',
                  params: {
                    groupId: activeGroupId,
                    proteinId: item.id,
                  },
                }"
              >
                <v-list-item-icon>
                  <v-icon color="primary">mdi-plus-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Add Clone</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
              <v-list-item
                :to="{
                  name: 'main-group-proteins-edit',
                  params: {
                    groupId: activeGroupId,
                    id: item.id,
                  },
                }"
              >
                <v-list-item-icon>
                  <v-icon color="grey">mdi-pencil-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!--              <v-list-item v-if="isGroupAdmin" @click="deleteProtein(item.id)">-->
              <!--                <v-list-item-icon>-->
              <!--                  <v-icon color="red accent-1">mdi-delete-outline</v-icon>-->
              <!--                </v-list-item-icon>-->
              <!--                <v-list-item-content>-->
              <!--                  <v-list-item-title>Delete</v-list-item-title>-->
              <!--                </v-list-item-content>-->
              <!--              </v-list-item>-->
            </v-list>
          </v-menu>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon @click.stop="showDetails(item)">
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>
            </template>
            <span>Show details</span>
          </v-tooltip>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <ProteinExpandedView :protein="item" />
          </td>
        </template>
      </v-data-table>
    </v-card>
    <v-navigation-drawer v-model="drawer" right fixed temporary width="400">
      <ProteinDetailsView v-if="drawer" :protein="detailsItem" />
    </v-navigation-drawer>
  </v-col>
</template>

<script lang="ts">
import LoadingView from "@/components/LoadingView.vue";
import { Component, Vue } from "vue-property-decorator";
import { groupModule } from "@/modules/group";
import { proteinModule } from "@/modules/protein";
import { ProteinDto } from "@airlab/shared/lib/protein/dto";
import ProteinDetailsView from "@/views/main/group/proteins/ProteinDetailsView.vue";
import ProteinExpandedView from "@/views/main/group/proteins/ProteinExpandedView.vue";

@Component({
  components: {
    ProteinExpandedView,
    ProteinDetailsView,
    LoadingView,
  },
})
export default class ProteinsListView extends Vue {
  readonly groupContext = groupModule.context(this.$store);
  readonly proteinContext = proteinModule.context(this.$store);

  get activeGroupId() {
    return this.groupContext.getters.activeGroupId;
  }

  get isGroupAdmin() {
    return this.groupContext.getters.isGroupAdmin;
  }

  readonly headers = [
    // {
    //   text: "Id",
    //   value: "id",
    //   align: "end",
    //   filterable: false,
    //   width: "80",
    // },
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Description",
      value: "description",
    },
    {
      text: "Actions",
      value: "action",
      sortable: false,
      filterable: false,
      width: "105",
    },
    {
      text: "",
      value: "data-table-expand",
    },
  ];

  drawer = false;
  detailsItem: ProteinDto | null = null;
  search = "";

  get items() {
    return this.proteinContext.getters.proteins;
  }

  showDetails(item: ProteinDto) {
    this.detailsItem = item;
    this.drawer = !this.drawer;
  }

  async mounted() {
    document.onkeydown = (evt) => {
      if (this.drawer && evt.key === "Escape") {
        this.drawer = false;
      }
    };
    await this.proteinContext.actions.getGroupProteins(+this.$router.currentRoute.params.groupId);
  }

  async deleteProtein(id: number) {
    if (self.confirm("Are you sure you want to delete the protein?")) {
      if (self.confirm("All children entities will be deleted!")) {
        await this.proteinContext.actions.deleteProtein(id);
      }
    }
  }
}
</script>

<style scoped>
.toolbar {
  margin-bottom: 10px;
}
</style>
