<template>
  <v-container fluid>
    <v-toolbar dense>
      <v-toolbar-title>Create Tag</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn @click="cancel" text color="primary">Cancel</v-btn>
        <v-btn @click="reset" text color="primary">Reset</v-btn>
        <v-btn @click="submit" text :disabled="!valid" color="primary">Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card class="mt-4 px-4">
      <v-card-text>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field label="Name" v-model="name" :rules="nameRules" />
          <v-text-field label="Description" v-model="description" />
          <v-select label="Status" v-model="status" :items="statuses" item-value="value" item-text="text" dense />
          <v-checkbox label="Metal" v-model="isMetal" />
          <v-text-field v-if="isMetal" label="Mass" v-model.number="mw" :rules="mwRules" type="number" />
          <v-checkbox label="Fluorophore" v-model="isFluorophore" />
          <v-checkbox label="Enzyme" v-model="isEnzyme" />
          <v-checkbox label="Biotin" v-model="isBiotin" />
          <v-checkbox label="Other" v-model="isOther" />
          <v-text-field
            v-if="isFluorophore"
            label="Emission"
            v-model.number="emission"
            :rules="emissionRules"
            type="number"
          />
          <v-text-field
            v-if="isFluorophore"
            label="Excitation"
            v-model.number="excitation"
            :rules="excitationRules"
            type="number"
          />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { required } from "@/utils/validators";
import { Component, Vue } from "vue-property-decorator";
import { tagModule } from "@/modules/tag";
import { CreateTagDto } from "@airlab/shared/lib/tag/dto";
import { groupModule } from "@/modules/group";
import { tagStatusEnum, tagTypeEnum } from "@/utils/enums";

@Component
export default class CreateTag extends Vue {
  readonly groupContext = groupModule.context(this.$store);
  readonly tagContext = tagModule.context(this.$store);

  private massRequired(value) {
    if (!this.isMetal) return true;
    if (!!value) return true;
    return "Required";
  }

  readonly tagTypes = tagTypeEnum;
  readonly statuses = tagStatusEnum;

  readonly nameRules = [required];
  readonly mwRules = [this.massRequired];
  readonly emissionRules = [];
  readonly excitationRules = [];

  valid = true;
  name = "";
  isMetal = false;
  isFluorophore = false;
  isEnzyme = false;
  isBiotin = false;
  isOther = false;
  description: string | null = null;
  mw: number | null = null;
  emission: number | null = null;
  excitation: number | null = null;
  status = 0;

  get activeGroupId() {
    return this.groupContext.getters.activeGroupId;
  }

  reset() {
    this.name = "";
    this.isMetal = false;
    this.isFluorophore = false;
    this.isEnzyme = false;
    this.isBiotin = false;
    this.isOther = false;
    this.description = null;
    this.mw = null;
    this.emission = null;
    this.excitation = null;
    this.status = 0;
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
        isMetal: this.isMetal,
        isFluorophore: this.isFluorophore,
        isEnzyme: this.isEnzyme,
        isBiotin: this.isBiotin,
        isOther: this.isOther,
        description: this.description,
        mw: this.mw,
        emission: this.emission,
        excitation: this.excitation,
        status: this.status,
      };
      await this.tagContext.actions.createTag(data);
      this.$router.back();
    }
  }
}
</script>
