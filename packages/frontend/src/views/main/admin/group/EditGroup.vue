<template>
  <v-container fluid>
    <v-card class="ma-4 pa-4">
      <v-card-title primary-title>
        <div class="headline primary--text">Edit Group</div>
      </v-card-title>
      <v-card-text>
        <template>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="Name" v-model="name" :rules="nameRules" />
            <v-text-field label="Institution" v-model="institution" />
            <v-text-field label="Coordinates" v-model="coordinates" />
            <v-text-field label="URL" v-model="url" />
            <v-checkbox label="Accept Requests" v-model="acceptRequests" />
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
import { groupModule } from "@/modules/group";
import { UpdateGroupDto } from "@airlab/shared/lib/group/dto";

@Component
export default class EditGroup extends Vue {
  readonly groupContext = groupModule.context(this.$store);

  readonly nameRules = [required];

  valid = true;
  name = "";
  institution = "";
  coordinates = "";
  url = "";
  acceptRequests = false;

  get group() {
    return this.groupContext.getters.getGroup(+this.$router.currentRoute.params.id);
  }

  async mounted() {
    await this.groupContext.actions.getGroups();
    this.reset();
  }

  reset() {
    this.name = "";
    this.institution = "";
    this.coordinates = "";
    this.url = "";
    this.acceptRequests = false;
    if (this.$refs.form) {
      (this.$refs.form as any).resetValidation();
    }
    if (this.group) {
      this.name = this.group.name;
      this.institution = this.group.institution;
      this.coordinates = this.group.coordinates;
      this.url = this.group.url;
      this.acceptRequests = this.group.acceptRequests;
    }
  }

  cancel() {
    this.$router.back();
  }

  async submit() {
    if ((this.$refs.form as any).validate()) {
      const data: UpdateGroupDto = {
        name: this.name,
        institution: this.institution,
        coordinates: this.coordinates,
        url: this.url,
        acceptRequests: this.acceptRequests,
      };
      await this.groupContext.actions.updateGroup({
        id: this.group!.id,
        data: data,
      });
      this.$router.back();
    }
  }
}
</script>