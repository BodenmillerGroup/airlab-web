<template>
  <v-container fluid>
    <v-card class="ma-4 pa-4">
      <v-card-title primary-title>
        <div class="text-h5 primary--text">Set Password</div>
      </v-card-title>
      <v-card-text>
        <div class="my-4">
          <div class="subtitle-1 primary--text text--lighten-2">User</div>
          <div class="text-h6 primary--text text--darken-2">
            {{ userProfile.email }}
          </div>
        </div>
        <v-form ref="form">
          <v-text-field type="password" ref="password" label="Password" :rules="password1Rules" v-model="password1">
          </v-text-field>
          <v-text-field type="password" label="Confirm Password" :rules="password2Rules" v-model="password2">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="cancel">Cancel</v-btn>
        <v-btn @click="reset">Reset</v-btn>
        <v-btn @click="submit" :disabled="!valid">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { mainModule } from "@/modules/main";
import { required } from "@/utils/validators";
import { Component, Vue } from "vue-property-decorator";
import { UpdatePasswordDto } from "@airlab/shared/lib/user/dto";

@Component
export default class UserProfileEdit extends Vue {
  readonly mainContext = mainModule.context(this.$store);

  readonly password1Rules = [required];
  readonly password2Rules = [required, this.passwordIsEqual];

  passwordIsEqual(v) {
    return v === this.password1 || "Password should be the same";
  }

  valid = true;
  password1 = "";
  password2 = "";

  get userProfile() {
    return this.mainContext.getters.userProfile;
  }

  reset() {
    this.password1 = "";
    this.password2 = "";
    (this.$refs.form as any).resetValidation();
  }

  cancel() {
    this.$router.back();
  }

  async submit() {
    if ((this.$refs.form as any).validate()) {
      const data: UpdatePasswordDto = {
        password: this.password1,
      };
      await this.mainContext.actions.updatePassword(data);
      this.$router.back();
    }
  }
}
</script>
