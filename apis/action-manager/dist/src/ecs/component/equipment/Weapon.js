"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponCategory = void 0;
/**
 * Weapon is a tag applied to a weapon class and is used to determine the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing gloves would deal no damage.
 */
var WeaponCategory;
(function (WeaponCategory) {
    WeaponCategory["ARROW"] = "Arrow";
    WeaponCategory["BOW"] = "Bow";
    WeaponCategory["BLADE"] = "Blade";
    WeaponCategory["BOOMERANG"] = "Boomerange";
    WeaponCategory["BROAD_SWORD"] = "Broadsword";
    WeaponCategory["BLUNT"] = "Blunt";
    WeaponCategory["CLAW"] = "Claw";
    WeaponCategory["CROSSBOW"] = "Crossbow";
    WeaponCategory["DAGGER"] = "Dagger";
    WeaponCategory["DART"] = "Dart";
    WeaponCategory["FLAIL"] = "Flail";
    WeaponCategory["HAMMER"] = "Hammer";
    WeaponCategory["HAND_AXE"] = "Hand Axe";
    WeaponCategory["HAND_SWORD"] = "Hand Sword";
    WeaponCategory["HATCHET"] = "Hatchet";
    WeaponCategory["KNIFE"] = "Knife";
    WeaponCategory["MACE"] = "Mace";
    WeaponCategory["POLEARM"] = "Polearm";
    WeaponCategory["SHIELD"] = "Shield";
    WeaponCategory["STAFF"] = "Staff";
    WeaponCategory["SWORD"] = "Sword";
    WeaponCategory["SHIELD_SWORD"] = "Shield Sword";
    WeaponCategory["RAPIER"] = "Rapiers";
    WeaponCategory["TOME"] = "Tome";
    WeaponCategory["TWO_HANDED_AXE"] = "Two-handed Axe";
    WeaponCategory["WAND"] = "Wand";
    WeaponCategory["UNARMED"] = "Unarmed";
    WeaponCategory["UNKNOWN"] = "Unknown";
    WeaponCategory["PENDANT"] = "Pendant";
    WeaponCategory["DUAL_KYOKETSU_SHOGE"] = "Dual Kyoketsu Shoge";
})(WeaponCategory = exports.WeaponCategory || (exports.WeaponCategory = {}));
/**
 * Axes
 * Axes are an extremely powerful branch of weapons that take a fierce amount of strength to wield but the damage provided by them is usually worth it.
 * Gear Slots – Right Hand AND Left Hand
 * Can be used by: Gunter
 */
class AsminsAze {
}
class GreatWail {
}
class Justice {
}
class Keystone {
}
/**
 * Boomerangs
 * Boomerangs – Boomerangs provide both a melee (slash) and a ranged (throw) attack.
 * If a boomerang is thrown make sure that it is not going to be caught or else you will be left without a weapon. If the weapon is caught then it maybe retrieved by defeating the enemy who caught it.
 * Gear Slots – Right Hand AND Left Hand
 * Can be used by: Traez
 */
class Assaulter {
}
class Striker {
}
/**
 * Shieldsword
 * They can also be used as a shield (Guard).
 *
 * Gear Slots – Right Hand AND Left Hand
 */
class EnergyBreaker {
    constructor() {
        this.description = 'An extremely large and heavy weapon that absorbs and releases energy.';
        // SPEED_DECREASE 1d5
        // FIRE 2d5
    }
}
class StoneBreaker {
}
class TheManSlayer {
}
/**
 * Broadsword
 * A heavy sword with a wide blade
 * They require two hands to wield, and difficult to maneuver yet have a strong attack.
 *
 * Gear Slots – Right Hand AND Left Hand
 */
class HerosBlade {
}
class SwordOfLawzon {
}
/**
 * Staff
 * Staffs are weapons designed as a focusing point for magical users to amplify and release their spells.
 * They can also be used to deal melee damage.
 */
class TinyTimer {
}
class Caduceus {
}
class Antediluvian {
}
/**
 * Rapiers
 * Rapiers are tremendously well crafted swords that have a narrow width.
 * Gear Slots – Right Hand OR Left Hand (only equipped one at a time)
 * Can be used by: Gaali
 */
class EternalFold {
}
class GoldRush {
}
class KingsBlade {
}
class RustyRapier {
}
/**
 * Pendants
 * Pendants – Pendants are Magical amplifiers that often increase the user’s stats and grants them new actions.
 * It takes two hands to be able to harness the power of the pendant.
 * Gear Slots – Necklace AND DISABLED (Right Hand AND Left Hand)
 * Can be used by: Loomee
 */
class MysteriousPendant {
}
class PeaceKeeper {
}
class TroubleMaker {
}
/**
 * Dual Kyoketsu Shoge
 * A weapon that can reach ranged targets.
 */
class StandardIssue {
}
/**
 * Knives
 * knives are small one handed weapons that are extremely quick to maneuver and deadly.
 * Gear Slots – Right Hand OR Left Hand
 * Can be used by: Malace
 */
// which one is Wisp’s Knife?
class Greed {
    constructor() {
        this.description = 'A intricate, powerful weapon that is capable of stealing the life from its target.';
        this.history = 'This weapon belonged to Wisp';
    }
}
class Liberty {
}
class Monarch {
}
class Regret {
}
class Viceroy {
}
class Violated {
}
/**
 * Shields
 */
// Buckler
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2VhcG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2Vjcy9jb21wb25lbnQvZXF1aXBtZW50L1dlYXBvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztHQUlHO0FBQ0gsSUFBWSxjQStCWDtBQS9CRCxXQUFZLGNBQWM7SUFDeEIsaUNBQWUsQ0FBQTtJQUNmLDZCQUFXLENBQUE7SUFDWCxpQ0FBZSxDQUFBO0lBQ2YsMENBQXdCLENBQUE7SUFDeEIsNENBQTBCLENBQUE7SUFDMUIsaUNBQWUsQ0FBQTtJQUNmLCtCQUFhLENBQUE7SUFDYix1Q0FBcUIsQ0FBQTtJQUNyQixtQ0FBaUIsQ0FBQTtJQUNqQiwrQkFBYSxDQUFBO0lBQ2IsaUNBQWUsQ0FBQTtJQUNmLG1DQUFpQixDQUFBO0lBQ2pCLHVDQUFxQixDQUFBO0lBQ3JCLDJDQUF5QixDQUFBO0lBQ3pCLHFDQUFtQixDQUFBO0lBQ25CLGlDQUFlLENBQUE7SUFDZiwrQkFBYSxDQUFBO0lBQ2IscUNBQW1CLENBQUE7SUFDbkIsbUNBQWlCLENBQUE7SUFDakIsaUNBQWUsQ0FBQTtJQUNmLGlDQUFlLENBQUE7SUFDZiwrQ0FBNkIsQ0FBQTtJQUM3QixvQ0FBa0IsQ0FBQTtJQUNsQiwrQkFBYSxDQUFBO0lBQ2IsbURBQWlDLENBQUE7SUFDakMsK0JBQWEsQ0FBQTtJQUNiLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLHFDQUFtQixDQUFBO0lBQ25CLDZEQUEyQyxDQUFBO0FBQzdDLENBQUMsRUEvQlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUErQnpCO0FBYUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFNBQVM7Q0FHZDtBQUVELE1BQU0sU0FBUztDQUlkO0FBRUQsTUFBTSxPQUFPO0NBSVo7QUFFRCxNQUFNLFFBQVE7Q0FJYjtBQUVEOzs7Ozs7R0FNRztBQUVILE1BQU0sU0FBUztDQUdkO0FBQ0QsTUFBTSxPQUFPO0NBSVo7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sYUFBYTtJQUFuQjtRQUdFLGdCQUFXLEdBQ1QsdUVBQXVFLENBQUM7UUFFMUUscUJBQXFCO1FBQ3JCLFdBQVc7SUFDYixDQUFDO0NBQUE7QUFFRCxNQUFNLFlBQVk7Q0FVakI7QUFFRCxNQUFNLFlBQVk7Q0FLakI7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVU7Q0FJZjtBQUVELE1BQU0sYUFBYTtDQUlsQjtBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFNBQVM7Q0FJZDtBQUVELE1BQU0sUUFBUTtDQUtiO0FBRUQsTUFBTSxZQUFZO0NBS2pCO0FBRUQ7Ozs7O0dBS0c7QUFFSCxNQUFNLFdBQVc7Q0FJaEI7QUFFRCxNQUFNLFFBQVE7Q0FJYjtBQUVELE1BQU0sVUFBVTtDQUlmO0FBRUQsTUFBTSxXQUFXO0NBSWhCO0FBRUQ7Ozs7OztHQU1HO0FBRUgsTUFBTSxpQkFBaUI7Q0FJdEI7QUFFRCxNQUFNLFdBQVc7Q0FHaEI7QUFFRCxNQUFNLFlBQVk7Q0FHakI7QUFFRDs7O0dBR0c7QUFFSCxNQUFNLGFBQWE7Q0FJbEI7QUFFRDs7Ozs7R0FLRztBQUVILDZCQUE2QjtBQUU3QixNQUFNLEtBQUs7SUFBWDtRQUdFLGdCQUFXLEdBQ1Qsb0ZBQW9GLENBQUM7UUFDdkYsWUFBTyxHQUFHLDhCQUE4QixDQUFDO0lBQzNDLENBQUM7Q0FBQTtBQUVELE1BQU0sT0FBTztDQUdaO0FBRUQsTUFBTSxPQUFPO0NBSVo7QUFFRCxNQUFNLE1BQU07Q0FHWDtBQUVELE1BQU0sT0FBTztDQU9aO0FBRUQsTUFBTSxRQUFRO0NBTWI7QUFFRDs7R0FFRztBQUNILFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdlYXBvbiBpcyBhIHRhZyBhcHBsaWVkIHRvIGEgd2VhcG9uIGNsYXNzIGFuZCBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgZGFtYWdlIHR5cGUgb2YgdGhlIHdlYXBvbi5cbiAqIEl0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFiaWxpdHksIHdlYWtuZXNzIGFuZCByZXNpc3RhbmNlLlxuICogRm9yIGV4YW1wbGUsIGEgY2hhcmFjdGVyIG1heSBiZSBpbW11bmUgdG8gdW5hcm1lZCBhdHRhY2tzIHRoZXJlZm9yZSBib3hpbmcgZ2xvdmVzIHdvdWxkIGRlYWwgbm8gZGFtYWdlLlxuICovXG5leHBvcnQgZW51bSBXZWFwb25DYXRlZ29yeSB7XG4gIEFSUk9XID0gJ0Fycm93JyxcbiAgQk9XID0gJ0JvdycsXG4gIEJMQURFID0gJ0JsYWRlJyxcbiAgQk9PTUVSQU5HID0gJ0Jvb21lcmFuZ2UnLFxuICBCUk9BRF9TV09SRCA9ICdCcm9hZHN3b3JkJyxcbiAgQkxVTlQgPSAnQmx1bnQnLFxuICBDTEFXID0gJ0NsYXcnLFxuICBDUk9TU0JPVyA9ICdDcm9zc2JvdycsXG4gIERBR0dFUiA9ICdEYWdnZXInLFxuICBEQVJUID0gJ0RhcnQnLFxuICBGTEFJTCA9ICdGbGFpbCcsXG4gIEhBTU1FUiA9ICdIYW1tZXInLFxuICBIQU5EX0FYRSA9ICdIYW5kIEF4ZScsXG4gIEhBTkRfU1dPUkQgPSAnSGFuZCBTd29yZCcsXG4gIEhBVENIRVQgPSAnSGF0Y2hldCcsXG4gIEtOSUZFID0gJ0tuaWZlJyxcbiAgTUFDRSA9ICdNYWNlJyxcbiAgUE9MRUFSTSA9ICdQb2xlYXJtJyxcbiAgU0hJRUxEID0gJ1NoaWVsZCcsXG4gIFNUQUZGID0gJ1N0YWZmJyxcbiAgU1dPUkQgPSAnU3dvcmQnLFxuICBTSElFTERfU1dPUkQgPSAnU2hpZWxkIFN3b3JkJyxcbiAgUkFQSUVSID0gJ1JhcGllcnMnLFxuICBUT01FID0gJ1RvbWUnLFxuICBUV09fSEFOREVEX0FYRSA9ICdUd28taGFuZGVkIEF4ZScsIC8vIHRvZG8gc2hvdWxkIHRoaXMgYmUgYmFzZWQgb24gd2VpZ2h0IGFuZCBkZXBlbmRlbnQgb24gY2hhcmFjdGVyXG4gIFdBTkQgPSAnV2FuZCcsXG4gIFVOQVJNRUQgPSAnVW5hcm1lZCcsXG4gIFVOS05PV04gPSAnVW5rbm93bicsXG4gIFBFTkRBTlQgPSAnUGVuZGFudCcsXG4gIERVQUxfS1lPS0VUU1VfU0hPR0UgPSAnRHVhbCBLeW9rZXRzdSBTaG9nZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2VhcG9uIHtcbiAgLy8gdGhlIG5hbWUgb2YgdGhlIHdlYXBvbiwgdXNlZCB0byBpZGVudGlmeSB0aGUgd2VhcG9uLlxuICBuYW1lOiBzdHJpbmc7XG4gIC8vIHRoZSBjYXRlZ29yeSBvZiB0aGUgd2VhcG9uLCB1c2VkIHRvIGRldGVybWluZSBlcXVhYmlsaXR5LCB3ZWFrbmVzcyBhbmQgcmVzaXN0YW5jZS5cbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5O1xuICAvLyB0aGUgaW1tZWRpYXRlbHkgZXZpZGVudCBhcHBlYXJhbmNlIG9mIHRoZSB3ZWFwb25cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8vIHRoZSBoaXN0b3J5IG9mIHRoZSB3ZWFwb24sIGNhbiBiZSByZXZlYWxlZCBieSBhIHNwZWNpYWwgYWJpbGl0eS5cbiAgaGlzdG9yeT86IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICogQXhlc1xuICogQXhlcyBhcmUgYW4gZXh0cmVtZWx5IHBvd2VyZnVsIGJyYW5jaCBvZiB3ZWFwb25zIHRoYXQgdGFrZSBhIGZpZXJjZSBhbW91bnQgb2Ygc3RyZW5ndGggdG8gd2llbGQgYnV0IHRoZSBkYW1hZ2UgcHJvdmlkZWQgYnkgdGhlbSBpcyB1c3VhbGx5IHdvcnRoIGl0LlxuICogR2VhciBTbG90cyDigJMgUmlnaHQgSGFuZCBBTkQgTGVmdCBIYW5kXG4gKiBDYW4gYmUgdXNlZCBieTogR3VudGVyXG4gKi9cbmNsYXNzIEFzbWluc0F6ZSBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6IFwiQXNtaW4ncyBBeGVcIjtcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LlRXT19IQU5ERURfQVhFO1xufVxuXG5jbGFzcyBHcmVhdFdhaWwgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnR3JlYXQgV2FpbCc7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5UV09fSEFOREVEX0FYRTtcbiAgZGVzY3JpcHRpb246ICdBIGxhcmdlIGF4ZSB0aGF0IGNhbiBicmVhayB0aHJvdWdoIGJvbmUgYW5kIG1ha2VzIGEgbG91ZCBzb3VuZCB3aGVuIHN3dW5nJztcbn1cblxuY2xhc3MgSnVzdGljZSBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6ICdKdXN0aWNlJztcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LlRXT19IQU5ERURfQVhFO1xuICBoaXN0b3J5OiBcIkd1bnRlcidzIHRyYWRlbWFyayBheGVcIjtcbn1cblxuY2xhc3MgS2V5c3RvbmUgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnS2V5c3RvbmUnO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuVFdPX0hBTkRFRF9BWEU7XG4gIGRlc2NyaXB0aW9uOiAnQSBnaWFudCBheGUgbWFkZSBvZiBmcm9tIGEgZ2lhbnQga2V5c3RvbmUgd2l0aCBhbiBpcm9uIGJhciBzdHVjayB0aHJvdWdoIGl0Lic7XG59XG5cbi8qKlxuICogQm9vbWVyYW5nc1xuICogQm9vbWVyYW5ncyDigJMgQm9vbWVyYW5ncyBwcm92aWRlIGJvdGggYSBtZWxlZSAoc2xhc2gpIGFuZCBhIHJhbmdlZCAodGhyb3cpIGF0dGFjay5cbiAqIElmIGEgYm9vbWVyYW5nIGlzIHRocm93biBtYWtlIHN1cmUgdGhhdCBpdCBpcyBub3QgZ29pbmcgdG8gYmUgY2F1Z2h0IG9yIGVsc2UgeW91IHdpbGwgYmUgbGVmdCB3aXRob3V0IGEgd2VhcG9uLiBJZiB0aGUgd2VhcG9uIGlzIGNhdWdodCB0aGVuIGl0IG1heWJlIHJldHJpZXZlZCBieSBkZWZlYXRpbmcgdGhlIGVuZW15IHdobyBjYXVnaHQgaXQuXG4gKiBHZWFyIFNsb3RzIOKAkyBSaWdodCBIYW5kIEFORCBMZWZ0IEhhbmRcbiAqIENhbiBiZSB1c2VkIGJ5OiBUcmFlelxuICovXG5cbmNsYXNzIEFzc2F1bHRlciBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6ICdBc3NhdWx0ZXInO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuQk9PTUVSQU5HO1xufVxuY2xhc3MgU3RyaWtlciBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6ICdTdHJpa2VyJztcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LkJPT01FUkFORztcbiAgZGVzY3JpcHRpb246ICcgQW4gZXh0cmVtZWx5IGZhc3QgYW5kIGRlYWRseSBib29tZXJhbmcuJztcbn1cblxuLyoqXG4gKiBTaGllbGRzd29yZFxuICogVGhleSBjYW4gYWxzbyBiZSB1c2VkIGFzIGEgc2hpZWxkIChHdWFyZCkuXG4gKlxuICogR2VhciBTbG90cyDigJMgUmlnaHQgSGFuZCBBTkQgTGVmdCBIYW5kXG4gKi9cbmNsYXNzIEVuZXJneUJyZWFrZXIgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnRW5lcmd5IEJyZWFrZXInO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuU0hJRUxEX1NXT1JEO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nID1cbiAgICAnQW4gZXh0cmVtZWx5IGxhcmdlIGFuZCBoZWF2eSB3ZWFwb24gdGhhdCBhYnNvcmJzIGFuZCByZWxlYXNlcyBlbmVyZ3kuJztcblxuICAvLyBTUEVFRF9ERUNSRUFTRSAxZDVcbiAgLy8gRklSRSAyZDVcbn1cblxuY2xhc3MgU3RvbmVCcmVha2VyIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ1N0b25lIEJyZWFrZXInO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuU0hJRUxEX1NXT1JEO1xuICBkZXNjcmlwdGlvbjogJ0FuIGV4dHJlbWVseSBsYXJnZSBhbmQgaGVhdnkgd2VhcG9uIHdpdGggYSBzcGVjaWFsIGd1aWxsb2NoZSBoYW5kbGUgZm9yIGdyaXAuJztcbiAgaGlzdG9yeTogJ0l0IHdhcyByZXBvcnRlZGx5IHVzZWQgYnkgR2FsYXggdG8gYnJpbmcgcGVhY2UuJztcblxuICAvLyBJbmNyZWFzZXMgd2FpdCB0aW1lXG4gIC8vIEluY3JlYXNlcyByZWNvdmVyeSB0aW1lXG4gIC8vIEluY3JlYXNlcyBkYW1hZ2VcbiAgLy8gSW5jcmVhc2VzIGV4cGVyaWVuY2UgZWFybmVkLlxufVxuXG5jbGFzcyBUaGVNYW5TbGF5ZXIgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnVGhlIE1hbiBTbGF5ZXInO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuU0hJRUxEX1NXT1JEO1xuICBkZXNjcmlwdGlvbjogJ0EgZ2lhbnQgYW5jaWVudCBoZWxsaXNoIGxvb2tpbmcgYmxhZGUuIEl0cyBoYW5kbGUgYmFyZXMgYSBkb2d0b290aCBkZXNpZ24uJztcbiAgaGlzdG9yeTogJ0l0IHdhcyByZXBvcnRlZGx5IHVzZWQgYnkgR2FsYXggdG8gYnJpbmcgcGVhY2UuJztcbn1cblxuLyoqXG4gKiBCcm9hZHN3b3JkXG4gKiBBIGhlYXZ5IHN3b3JkIHdpdGggYSB3aWRlIGJsYWRlXG4gKiBUaGV5IHJlcXVpcmUgdHdvIGhhbmRzIHRvIHdpZWxkLCBhbmQgZGlmZmljdWx0IHRvIG1hbmV1dmVyIHlldCBoYXZlIGEgc3Ryb25nIGF0dGFjay5cbiAqXG4gKiBHZWFyIFNsb3RzIOKAkyBSaWdodCBIYW5kIEFORCBMZWZ0IEhhbmRcbiAqL1xuY2xhc3MgSGVyb3NCbGFkZSBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6IFwiSGVybydzIEJsYWRlXCI7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5CUk9BRF9TV09SRDtcbiAgZGVzY3JpcHRpb246ICdBIG15c3RpY2FsIGJsYWRlIHRoYXQgaXMgZGVzdGluZSB0byBmYWxsIGludG8gdGhlIGhhbmRzIG9mIHRoZSBuZXh0IHRydWUgaGVyby4nO1xufVxuXG5jbGFzcyBTd29yZE9mTGF3em9uIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ1N3b3JkIG9mIExhd3pvbic7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5CUk9BRF9TV09SRDtcbiAgZGVzY3JpcHRpb246ICdBIGRpcnR5IHNpbXBsZSBzb2xpZCBibGFkZSBmb3JnZWQgb2YgaGFyZGVuIHN0ZWVsLic7XG59XG5cbi8qKlxuICogU3RhZmZcbiAqIFN0YWZmcyBhcmUgd2VhcG9ucyBkZXNpZ25lZCBhcyBhIGZvY3VzaW5nIHBvaW50IGZvciBtYWdpY2FsIHVzZXJzIHRvIGFtcGxpZnkgYW5kIHJlbGVhc2UgdGhlaXIgc3BlbGxzLlxuICogVGhleSBjYW4gYWxzbyBiZSB1c2VkIHRvIGRlYWwgbWVsZWUgZGFtYWdlLlxuICovXG5jbGFzcyBUaW55VGltZXIgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnVGlueSBUaW1lcic7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5TVEFGRjtcbiAgZGVzY3JpcHRpb246ICdBIGJhc2ljIHN0YWZmIGdpdmVuIHRvIE1hZ2kgaW4gdHJhaW5pbmcnO1xufVxuXG5jbGFzcyBDYWR1Y2V1cyBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6ICdDYWR1Y2V1cyc7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5TVEFGRjtcbiAgZGVzY3JpcHRpb246ICdBIHN0YWZmIHdpdGggdHdvIHNlcnBlbnRzIHdyYXBwZWQgYXJvdW5kIGl0IGJhc2UgYW5kIHR3byB3aW5ncyB0aGF0IGV4cGFuZCBmcm9tIGl0cyB0b3AuJztcbiAgaGlzdG9yeTogJ0FuIGFuY2llbnQgd2FuZCBzYWlkIHRvIGJlIGNhcnJpZWQgYnkgdGhlIG1lc3NlbmdlciBvZiBHb2QuJztcbn1cblxuY2xhc3MgQW50ZWRpbHV2aWFuIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ0FudGVkaWx1dmlhbic7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5TVEFGRjtcbiAgZGVzY3JpcHRpb246ICdBbiBhY2llbnQgd29vZGVuIHN0YWZmJztcbiAgaGlzdG9yeTogJ0FuIGFuY2llbnQgd2VhcG9uIHVzZWQgdG8gc2xheSBkZXZpbHMgb2YgdGhlIG9sZCB3b3JsZCc7XG59XG5cbi8qKlxuICogUmFwaWVyc1xuICogUmFwaWVycyBhcmUgdHJlbWVuZG91c2x5IHdlbGwgY3JhZnRlZCBzd29yZHMgdGhhdCBoYXZlIGEgbmFycm93IHdpZHRoLlxuICogR2VhciBTbG90cyDigJMgUmlnaHQgSGFuZCBPUiBMZWZ0IEhhbmQgKG9ubHkgZXF1aXBwZWQgb25lIGF0IGEgdGltZSlcbiAqIENhbiBiZSB1c2VkIGJ5OiBHYWFsaVxuICovXG5cbmNsYXNzIEV0ZXJuYWxGb2xkIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ0V0ZXJuYWwgRm9sZCc7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5SQVBJRVI7XG4gIGhpc3Rvcnk6ICdBIHN3b3JkIHRoYXQgaGFzIGJlZW4gZm9sZGVkIGJ5IGdlbmVyYXRpb25zIG9mIGJsYWNrc21pdGhzIHRvIGNyZWF0ZSBhIGZsYXdsZXNzIHN0ZWVsIHN3b3JkJztcbn1cblxuY2xhc3MgR29sZFJ1c2ggaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnR29sZCBSdXNoJztcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LlJBUElFUjtcbiAgZGVzY3JpcHRpb246ICdBIGdvbGRlbiBjb2xvciBzd29yZCB0aGF0IGxvb2tzIG1vcmUgZml0dGluZyBvbiBhIHdhbGwgdGhlbiBhIGJhdHRsZWZpZWxkLic7XG59XG5cbmNsYXNzIEtpbmdzQmxhZGUgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnS2luZ3MgQmxhZGUnO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuUkFQSUVSO1xuICBkZXNjcmlwdGlvbjogJ1dob21ldmVyIHBvc3NlcyB0aGlzIGJsYWRlIGlzIEtpbmcgb2YgUnVkbmVyLic7XG59XG5cbmNsYXNzIFJ1c3R5UmFwaWVyIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ1J1c3R5IFJhcGllcic7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5SQVBJRVI7XG4gIGRlc2NyaXB0aW9uOiAnQSBydXN0eSBzd29yZC4gQ2hhbmNlIG9mIHBvaXNvbmluZyB0YXJnZXQuJztcbn1cblxuLyoqXG4gKiBQZW5kYW50c1xuICogUGVuZGFudHMg4oCTIFBlbmRhbnRzIGFyZSBNYWdpY2FsIGFtcGxpZmllcnMgdGhhdCBvZnRlbiBpbmNyZWFzZSB0aGUgdXNlcuKAmXMgc3RhdHMgYW5kIGdyYW50cyB0aGVtIG5ldyBhY3Rpb25zLlxuICogSXQgdGFrZXMgdHdvIGhhbmRzIHRvIGJlIGFibGUgdG8gaGFybmVzcyB0aGUgcG93ZXIgb2YgdGhlIHBlbmRhbnQuXG4gKiBHZWFyIFNsb3RzIOKAkyBOZWNrbGFjZSBBTkQgRElTQUJMRUQgKFJpZ2h0IEhhbmQgQU5EIExlZnQgSGFuZClcbiAqIENhbiBiZSB1c2VkIGJ5OiBMb29tZWVcbiAqL1xuXG5jbGFzcyBNeXN0ZXJpb3VzUGVuZGFudCBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6ICdNeXN0ZXJpb3VzIFBlbmRhbnQnO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuUEVOREFOVDtcbiAgLy8gR3JhbnRzIFdhcmRcbn1cblxuY2xhc3MgUGVhY2VLZWVwZXIgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnUGVhY2VLZWVwZXInO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuUEVOREFOVDtcbn1cblxuY2xhc3MgVHJvdWJsZU1ha2VyIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ1Ryb3VibGUgTWFrZXInO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuUEVOREFOVDtcbn1cblxuLyoqXG4gKiBEdWFsIEt5b2tldHN1IFNob2dlXG4gKiBBIHdlYXBvbiB0aGF0IGNhbiByZWFjaCByYW5nZWQgdGFyZ2V0cy5cbiAqL1xuXG5jbGFzcyBTdGFuZGFyZElzc3VlIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ1N0YW5kYXJkIElzc3VlJztcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LkRVQUxfS1lPS0VUU1VfU0hPR0U7XG4gIGRlc2NyaXB0aW9uOiAnVGhlIGNvbW1vbiBEdWFsIEt5b2tldHN1IFNob2dlIGdpdmVuIHRvIGZhc2Npc3QuJztcbn1cblxuLyoqXG4gKiBLbml2ZXNcbiAqIGtuaXZlcyBhcmUgc21hbGwgb25lIGhhbmRlZCB3ZWFwb25zIHRoYXQgYXJlIGV4dHJlbWVseSBxdWljayB0byBtYW5ldXZlciBhbmQgZGVhZGx5LlxuICogR2VhciBTbG90cyDigJMgUmlnaHQgSGFuZCBPUiBMZWZ0IEhhbmRcbiAqIENhbiBiZSB1c2VkIGJ5OiBNYWxhY2VcbiAqL1xuXG4vLyB3aGljaCBvbmUgaXMgV2lzcOKAmXMgS25pZmU/XG5cbmNsYXNzIEdyZWVkIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ0dyZWVkJztcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LktOSUZFO1xuICBkZXNjcmlwdGlvbiA9XG4gICAgJ0EgaW50cmljYXRlLCBwb3dlcmZ1bCB3ZWFwb24gdGhhdCBpcyBjYXBhYmxlIG9mIHN0ZWFsaW5nIHRoZSBsaWZlIGZyb20gaXRzIHRhcmdldC4nO1xuICBoaXN0b3J5ID0gJ1RoaXMgd2VhcG9uIGJlbG9uZ2VkIHRvIFdpc3AnO1xufVxuXG5jbGFzcyBMaWJlcnR5IGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ0xpYmVydHknO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuS05JRkU7XG59XG5cbmNsYXNzIE1vbmFyY2ggaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnTW9uYXJjaCc7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5LTklGRTtcbiAgZGVzY3JpcHRpb246ICdBIGJyaWxsaWFudGx5IGRlc2lnbmVkIGluc2VjdCBsb29raW5nIGJsYWRlIHdpdGggYSBzaGFycCBhbmQgZGVhZGx5IHRpcCB0aGF0IGlzIGRyaXBwaW5nIHdpdGggcG9pc29uLic7XG59XG5cbmNsYXNzIFJlZ3JldCBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gIG5hbWU6ICdSZWdyZXQnO1xuICBjYXRlZ29yeTogV2VhcG9uQ2F0ZWdvcnkuS05JRkU7XG59XG5cbmNsYXNzIFZpY2Vyb3kgaW1wbGVtZW50cyBXZWFwb24ge1xuICBuYW1lOiAnVmljZXJveSc7XG4gIGNhdGVnb3J5OiBXZWFwb25DYXRlZ29yeS5LTklGRTtcbiAgZGVzY3JpcHRpb246ICdBIGJyaWxsaWFudGx5IGRlc2lnbmVkIGluc2VjdCBsb29raW5nIGJsYWRlIHdpdGggYSBzaGFycCBhbmQgZGVhZGx5IHRpcC4nO1xuICAvLyBUaGUgdmljZXJveSBsb29rcyBhbG1vc3QgaWRlbnRpY2FsIHRvIHRoZSBtb25hcmNoJztcbiAgLy8gQ2hhbmNlIG9mIGNhdXNpbmcgRmVhciBvbiBjb250YWN0IHdoZW4gdXNlZCB3aXRoIE1vbmFyY2hcbiAgLy8gQ2hhbmNlIG9mIHBvaXNvbmluZyBlbmVteSBvbiBjb250YWN0XG59XG5cbmNsYXNzIFZpb2xhdGVkIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgbmFtZTogJ1Zpb2xhdGVkJztcbiAgY2F0ZWdvcnk6IFdlYXBvbkNhdGVnb3J5LktOSUZFO1xuICAvLyBXZWFwb24gQWJzb3JicyB0aGUgcHJldmlvdXMgbW9uc3RlcnMgdHlwZSBhbmQgdXNlcyBpdCBmb3IgdGhlIG5leHQgYXR0YWNrLlxuICAvLyBUaGlzIHdlYXBvbiBtdXN0IGJlIHVzZWQgdG8gc2xheSB0aGUgbW9zdCBwb2lzb25vdXMgbW9uc3RlclxuICAvLyB0byBnZXQgYSBwb2lzb25vdXMgdGlwcGVkIGRhZ2dlciBhbmQgc2xheSBhbm90aGVyIG1vbnN0ZXJcbn1cblxuLyoqXG4gKiBTaGllbGRzXG4gKi9cbi8vIEJ1Y2tsZXJcbiJdfQ==