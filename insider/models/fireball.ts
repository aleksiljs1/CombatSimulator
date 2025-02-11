import { AbilityConsts } from "../consts/ability-consts";
import { StatusConsts } from "../consts/status-consts";
import { Ability } from "./ability";

export class Fireball implements Ability {
  private name: string = AbilityConsts.Fireball;
  private damage: number = 40;
  private status: string = StatusConsts.Burning;

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
