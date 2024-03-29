<template>
  <v-container fluid>
    <v-toolbar dense>
      <v-toolbar-title>Create Group Member</v-toolbar-title>
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
          <v-autocomplete
            label="User"
            v-model="userId"
            :items="users"
            item-text="name"
            item-value="id"
            :rules="userRules"
            dense
          />
          <div class="text-subtitle-1">Role</div>
          <v-btn-toggle v-model="role">
            <v-btn small value="100">Admin</v-btn>
            <v-btn small value="10">Standard</v-btn>
            <v-btn small value="0">Guest</v-btn>
          </v-btn-toggle>
          <v-checkbox label="Active" v-model="isActive" hint="Access is permited" />
          <v-row>
            <v-checkbox label="Can access all panels" v-model="allPanels" class="mr-4" />
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { groupModule } from "@/modules/group";
import { memberModule } from "@/modules/member";
import { CreateMemberDto } from "@airlab/shared/lib/member/dto";
import { userModule } from "@/modules/user";
import { required } from "@/utils/validators";

@Component
export default class CreateMember extends Vue {
  readonly groupContext = groupModule.context(this.$store);
  readonly userContext = userModule.context(this.$store);
  readonly memberContext = memberModule.context(this.$store);

  readonly userRules = [required];

  valid = true;
  userId: number | null = null;
  role = "0";
  isActive = false;
  allPanels = false;

  get activeGroupId() {
    return this.groupContext.getters.activeGroupId;
  }

  get users() {
    return this.userContext.getters.users.map((item) => ({
      id: item.id,
      name: `${item.name} [${item.email}]`,
    }));
  }

  reset() {
    this.userId = null;
    this.role = "0";
    this.isActive = false;
    this.allPanels = false;
    (this.$refs.form as any).resetValidation();
  }

  cancel() {
    this.$router.back();
  }

  async submit() {
    if ((this.$refs.form as any).validate() && this.activeGroupId) {
      const data: CreateMemberDto = {
        groupId: this.activeGroupId,
        userId: Number(this.userId),
        role: !this.role || this.role === "" ? 0 : Number(this.role),
        isActive: this.isActive,
        allPanels: this.allPanels,
      };
      await this.memberContext.actions.createMember(data);
      this.$router.back();
    }
  }

  async mounted() {
    await this.userContext.actions.getUsers();
  }
}
</script>
