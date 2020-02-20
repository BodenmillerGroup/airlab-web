import { mainModule } from "@/modules/main";
import { Store } from "vuex";
import { Actions, Context } from "vuex-smart-module";
import { ReagentState } from ".";
import { api } from "./api";
import { ReagentGetters } from "./getters";
import { ReagentMutations } from "./mutations";
import { CreateReagentDto, UpdateReagentDto } from "@airlab/shared/lib/reagent/dto";

export class ReagentActions extends Actions<ReagentState, ReagentGetters, ReagentMutations, ReagentActions> {
  // Declare context type
  main?: Context<typeof mainModule>;

  // Called after the module is initialized
  $init(store: Store<any>): void {
    // Create and retain main module context
    this.main = mainModule.context(store);
  }

  async createReagent(payload: CreateReagentDto) {
    try {
      const data = await api.createReagent(payload);
      this.mutations.addEntity(data);
      this.main!.mutations.addNotification({ content: "Reagent successfully created", color: "success" });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getReagent(id: number) {
    try {
      const data = await api.getReagent(id);
      if (data) {
        this.mutations.setEntity(data);
      }
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async updateReagent(payload: { id: number; data: UpdateReagentDto }) {
    try {
      const data = await api.updateReagent(payload.id, payload.data);
      this.mutations.updateEntity(data);
      this.main!.mutations.addNotification({ content: "Reagent successfully updated", color: "success" });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async deleteReagent(id: number) {
    try {
      const data = await api.deleteReagent(id);
      this.mutations.deleteEntity(data);
      this.main!.mutations.addNotification({ content: "Reagent successfully deleted", color: "success" });
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getGroupReagents(groupId: number) {
    try {
      const data = await api.getGroupReagents(groupId);
      if (data) {
        this.mutations.setEntities(data);
      }
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }

  async getReagentLots(id: number) {
    try {
      return api.getReagentLots(id);
    } catch (error) {
      await this.main!.actions.checkApiError(error);
    }
  }
}
