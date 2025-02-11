import { AbilityConsts } from "../consts/ability-consts";
import { Ability } from "../models/ability";
import { Fireball, IceBlast } from "../models";

export class AbilityFactory {
  static createAbility(type: string): Ability {
    switch (type) {
      case AbilityConsts.Fireball:
        return new Fireball();
      case AbilityConsts.IceBlast:
        return new IceBlast();
      default:
        throw new Error("This Ability does not exist");
    }
  }
}
