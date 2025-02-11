import { AbilityConsts } from "../consts/ability-consts";
import { StatusConsts } from "../consts/status-consts";
import { Ability } from "./ability";

export class IceBlast implements Ability {
  private name: string = AbilityConsts.IceBlast;
  private damage: number = 30;
  private status: string = StatusConsts.Frozen;

  getName(): string {
    return this.name;
  }

  getDamageDealing(): number {
    return this.damage;
  }

  getStatusEffect() {
    return this.status;
  }
}
