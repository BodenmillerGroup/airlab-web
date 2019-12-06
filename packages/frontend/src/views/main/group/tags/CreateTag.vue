<template>
  <v-container fluid>
    <v-card class="ma-4 pa-4">
      <v-card-title primary-title>
        <div class="headline primary--text">Create Tag</div>
      </v-card-title>
      <v-card-text>
        <template>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="Name" v-model="name" :rules="nameRules" />
            <v-text-field label="MW" v-model.number="mw" :rules="mwRules" type="number" />
            <v-checkbox label="Fluorophore" v-model="isFluorophore" />
            <v-checkbox label="Metal" v-model="isMetal" />
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
import { tagModule } from "@/modules/tag";
import { CreateTagDto } from "@airlab/shared/lib/tag/dto";
import { groupModule } from "@/modules/group";

@Component
export default class CreateTag extends Vue {
  readonly groupContext = groupModule.context(this.$store);
  readonly tagContext = tagModule.context(this.$store);

  readonly nameRules = [required];
  readonly mwRules = [];

  valid = true;
  name = "";
  mw: number | null = null;
  isFluorophore = false;
  isMetal = false;

  get activeGroupId() {
    return this.groupContext.getters.activeGroupId;
  }

  reset() {
    this.name = "";
    this.mw = null;
    this.isFluorophore = false;
    this.isMetal = false;
    (this.$refs.form as any).resetValidation();
  }

  cancel() {
    this.$router.back();
  }

  async submit() {
    if ((this.$refs.form as any).validate() && this.activeGroupId) {
      const data: CreateTagDto = {
        groupId: this.activeGroupId,
        name: this.name,
        mw: this.mw,
        isFluorophore: this.isFluorophore,
        isMetal: this.isMetal,
      };
      await this.tagContext.actions.createTag(data);
      this.$router.back();
    }
  }
}
</script>