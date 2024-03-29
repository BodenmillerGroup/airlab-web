import { mainModule } from "@/modules/main";
import { Store } from "vuex";
import { Actions, Context } from "vuex-smart-module";
import { CloneState } from ".";
import { api } from "./api";
import { CloneGetters } from "./getters";
import { CloneMutations } from "./mutations";
import { CreateCloneDto, UpdateCloneDto } from "@airlab/shared/lib/clone/dto";
import { UpdateStateDto } from "@airlab/shared/lib/core/dto";

export class CloneActions extends Actions<CloneState, CloneGetters, CloneMutations, CloneActions> {
  // Declare context type
  main?: Context<typeof mainModule>;

  // Called after the module is initialized
  $init(store: Store<any>): void {
    // Create and retain main module context
    this.main = mainModule.context(store);
  }

  async createClone(payload: CreateCloneDto) {
    try {
      const data = await api.createClone(payload);
      this.mutations.addEntity(data);
      this.main!.mutations.addNotification({ content: "Clone successfully created", color: "success" });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getClone(id: number) {
    try {
      const data = await api.getClone(id);
      if (data) {
        this.mutations.setEntity(data);
      }
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async updateClone(payload: { id: number; data: UpdateCloneDto }) {
    try {
      const data = await api.updateClone(payload.id, payload.data);
      this.mutations.updateEntity(data);
      this.main!.mutations.addNotification({ content: "Clone successfully updated", color: "success" });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async deleteClone(id: number) {
    try {
      const data = await api.deleteClone(id);
      this.mutations.deleteEntity(data);
      this.main!.mutations.addNotification({ content: "Clone successfully deleted", color: "success" });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async updateCloneArchiveState(payload: { id: number; data: UpdateStateDto }) {
    try {
      const data = await api.updateCloneArchiveState(payload.id, payload.data);
      this.mutations.updateEntity(data);
      this.main!.mutations.addNotification({
        content: `Clone successfully ${payload.data.state ? "archived" : "unarchived"}`,
        color: "success",
      });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getGroupClones(groupId: number) {
    try {
      const data = await api.getGroupClones(groupId);
      if (data) {
        this.mutations.setEntities(data);
      }
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getGroupArchivedClones(groupId: number) {
    try {
      const data = await api.getGroupArchivedClones(groupId);
      if (data) {
        this.mutations.setEntities(data);
      }
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getCloneLots(cloneId: number) {
    try {
      return api.getCloneLots(cloneId);
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getCloneValidations(cloneId: number) {
    try {
      return api.getCloneValidations(cloneId);
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }
}
