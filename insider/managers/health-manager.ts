import { Player } from "../models";

export class HealthManager {
  applyDamage(player: Player, damage: number): void {
    player.health = player.health - damage;
    if (player.health < 0) player.health = 0;
  }
}
