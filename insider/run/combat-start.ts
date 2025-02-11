import { AbilityFactory } from "../factories/ability-factory";
import { Ability } from "../models/ability";
import { HealthManager } from "../managers/health-manager";
import { Player } from "../models";

export class CombatStart {
  private player: Player;
  private ability: Ability;
  private healthManager: HealthManager;

  constructor(abilityChoise: string) {
    this.ability = AbilityFactory.createAbility(abilityChoise);
    this.healthManager = new HealthManager();
    this.player = { health: 100 } as Player;
  }

  startCombat(): void {
    console.log("Combat is starting");
    const damage: number = this.ability.getDamageDealing();
    this.healthManager.applyDamage(this.player, damage);
    console.log(`${this.ability.getName()} has hit for ${damage} damage`);
    console.log(`Player has ${this.player.health} health remaining`);
  }
}
