<template>
  <v-container fluid>
    <v-card class="ma-4 pa-4">
      <v-card-title primary-title>
        <div class="headline primary--text">Create Species</div>
      </v-card-title>
      <v-card-text>
        <template>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="Name" v-model="name" :rules="nameRules" />
            <v-text-field label="Acronym" v-model="acronym" :rules="acronymRules" />
          </v-form>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="cancel">Cancel</v-btn>
        <v-btn @click="reset">Reset</v-btn>
        <v-btn @click="submit" :disabled="!valid">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { required } from "@/utils/validators";
import { Component, Vue } from "vue-property-decorator";
import { speciesModule } from "@/modules/species";
import { CreateSpeciesDto } from "@airlab/shared/lib/species/dto";
import { groupModule } from "@/modules/group";

@Component
export default class CreateSpecies extends Vue {
  readonly groupContext = groupModule.context(this.$store);
  readonly speciesContext = speciesModule.context(this.$store);

  readonly nameRules = [required];
  readonly acronymRules = [required];

  valid = true;
  name = "";
  acronym = "";

  get activeGroupId() {
    return this.groupContext.getters.activeGroupId;
  }

  reset() {
    this.name = "";
    this.acronym = "";
    (this.$refs.form as any).resetValidation();
  }

  cancel() {
    this.$router.back();
  }

  async submit() {
    if ((this.$refs.form as any).validate() && this.activeGroupId) {
      const data: CreateSpeciesDto = {
        groupId: this.activeGroupId,
        name: this.name,
        acronym: this.acronym,
      };
      await this.speciesContext.actions.createSpecies(data);
      this.$router.back();
    }
  }
}
</script>