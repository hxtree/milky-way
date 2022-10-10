"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Healer = exports.Assassin = exports.XSolider = exports.Warrior = exports.Thief = exports.Summoner = exports.Solider = exports.Scout = exports.Rebel = exports.Royalty = exports.Rouge = exports.Mechanic = exports.Knight = exports.Hero = exports.Gaurdian = exports.Gaurd = exports.MagiYellow = exports.MagiWhite = exports.MagiPurple = exports.MagiPink = exports.MagiGreen = exports.MagiBrown = exports.MagiBlue = exports.MagiBlack = exports.Magi = exports.Commander = exports.Cheerleader = exports.Cook = exports.BodyBuilder = exports.Historian = exports.Wizard = exports.Gymnast = exports.BaseDiscipline = exports.Discipline = exports.DisciplineCategory = void 0;
var DisciplineCategory;
(function (DisciplineCategory) {
    DisciplineCategory["PROFESSION"] = "Profession";
    DisciplineCategory["ARCHETYPE"] = "Archetype";
    // Combat Classes
    // Specialty Classes
    // Drive Classes
    // Omega Classes
    //  | Spirit Class | Drive Class | Omega Class
})(DisciplineCategory = exports.DisciplineCategory || (exports.DisciplineCategory = {}));
var Discipline;
(function (Discipline) {
    Discipline["AMBER_ASSASSIN"] = "Amber Assassin";
    Discipline["ASSASSIN"] = "Assassin";
    Discipline["BARD"] = "Bard";
    Discipline["BERSERKER"] = "Berserker";
    Discipline["BODY_BUILDER"] = "Body Builder";
    Discipline["CHEERLEADER"] = "Cheerleader";
    Discipline["COMMANDER"] = "Commander";
    Discipline["COOK"] = "Cook";
    Discipline["DUELIST"] = "Duelist";
    Discipline["ELITE_ASSASIN"] = "Elite Assasin";
    Discipline["ENGINEER"] = "Engineer";
    Discipline["GAURD"] = "Gaurd";
    Discipline["GUARDIAN"] = "Guardian";
    Discipline["GYMNAST"] = "Gymnast";
    Discipline["HEALER"] = "Healer";
    Discipline["HERO"] = "Hero";
    Discipline["HISTORIAN"] = "Historian";
    Discipline["KEEPER"] = "Keeper";
    Discipline["KNIGHT"] = "Knight";
    Discipline["LIGHTENING_WARRIOR"] = "Lightening Warrior";
    Discipline["MADIEN"] = "Madien";
    Discipline["MAGI"] = "Magi";
    Discipline["MAGI_BLACK"] = "Magi Black";
    Discipline["MAGI_BLUE"] = "Magi Blue";
    Discipline["MAGI_BROWN"] = "Magi Brown";
    Discipline["MAGI_GREEN"] = "Magi Green";
    Discipline["MAGI_PINK"] = "Magi Pink";
    Discipline["MAGI_PURPLE"] = "Magi Purple";
    Discipline["MAGI_WHITE"] = "Magi White";
    Discipline["MAGI_YELLOW"] = "Magi Yellow";
    Discipline["MECHANIC"] = "Mechanic";
    Discipline["NINJA"] = "Ninja";
    Discipline["ONI"] = "Oni";
    Discipline["OUROBOROS"] = "Ouroboros";
    Discipline["POSSESSED"] = "Possessed";
    Discipline["REBEL"] = "Rebel";
    Discipline["ROUGE"] = "Rouge";
    Discipline["ROYALTY"] = "Royalty";
    Discipline["RUNE_KING"] = "Rune King";
    Discipline["SAGE"] = "Sage";
    Discipline["SCOUT"] = "Scout";
    Discipline["SOLIDER"] = "Solider";
    Discipline["SUMMONER"] = "Summoner";
    Discipline["THIEF"] = "Thief";
    Discipline["WARRIOR"] = "Warrior";
    Discipline["WIZARD"] = "Wizard";
    Discipline["XSOLIDER"] = "XSolider";
})(Discipline = exports.Discipline || (exports.Discipline = {}));
class BaseDiscipline {
    constructor(experience = 0) {
        this._experience = experience;
    }
    get level() {
        return Math.floor(Math.sqrt(this._experience / 100));
    }
    get nextLevel() {
        return this._experience - ((this.level * (this.level - 1)) / 2) * 100;
    }
    get experienceToNextLevel() {
        return this.nextLevel - this._experience;
    }
    get experienceToNextLevelPercentage() {
        return this.experienceToNextLevel / this.nextLevel;
    }
    // todo load from Class
    get effects() {
        return [];
    }
}
exports.BaseDiscipline = BaseDiscipline;
// TODO add
// Bard,
// Duelist,
// Knight,
// RuneKing,
// Maiden,
// Keeper,
// Sage,
// Guardian'
// Possessed,
// Ouroboros,?
// Berserker,
// Ninja,
// AmberAssassin,
// EliteAssasin,
// Engineer,
// LighteningWarrior,
class Gymnast extends BaseDiscipline {
}
exports.Gymnast = Gymnast;
class Wizard extends BaseDiscipline {
}
exports.Wizard = Wizard;
class Historian extends BaseDiscipline {
}
exports.Historian = Historian;
class BodyBuilder extends BaseDiscipline {
}
exports.BodyBuilder = BodyBuilder;
// may be anyone can become a cook?>
class Cook extends BaseDiscipline {
}
exports.Cook = Cook;
class Cheerleader extends BaseDiscipline {
}
exports.Cheerleader = Cheerleader;
class Commander extends BaseDiscipline {
}
exports.Commander = Commander;
class Magi extends BaseDiscipline {
}
exports.Magi = Magi;
class MagiBlack extends BaseDiscipline {
}
exports.MagiBlack = MagiBlack;
class MagiBlue extends BaseDiscipline {
}
exports.MagiBlue = MagiBlue;
class MagiBrown extends BaseDiscipline {
}
exports.MagiBrown = MagiBrown;
class MagiGreen extends BaseDiscipline {
}
exports.MagiGreen = MagiGreen;
class MagiPink extends BaseDiscipline {
}
exports.MagiPink = MagiPink;
class MagiPurple extends BaseDiscipline {
}
exports.MagiPurple = MagiPurple;
class MagiWhite extends BaseDiscipline {
}
exports.MagiWhite = MagiWhite;
class MagiYellow extends BaseDiscipline {
}
exports.MagiYellow = MagiYellow;
class Gaurd extends BaseDiscipline {
}
exports.Gaurd = Gaurd;
class Gaurdian extends BaseDiscipline {
}
exports.Gaurdian = Gaurdian;
class Hero extends BaseDiscipline {
}
exports.Hero = Hero;
class Knight extends BaseDiscipline {
}
exports.Knight = Knight;
class Mechanic extends BaseDiscipline {
}
exports.Mechanic = Mechanic;
class Rouge extends BaseDiscipline {
}
exports.Rouge = Rouge;
class Royalty extends BaseDiscipline {
}
exports.Royalty = Royalty;
class Rebel extends BaseDiscipline {
}
exports.Rebel = Rebel;
class Scout extends BaseDiscipline {
}
exports.Scout = Scout;
class Solider extends BaseDiscipline {
}
exports.Solider = Solider;
class Summoner extends BaseDiscipline {
}
exports.Summoner = Summoner;
class Thief extends BaseDiscipline {
}
exports.Thief = Thief;
class Warrior extends BaseDiscipline {
}
exports.Warrior = Warrior;
class XSolider extends BaseDiscipline {
}
exports.XSolider = XSolider;
class Assassin extends BaseDiscipline {
}
exports.Assassin = Assassin;
class Healer extends BaseDiscipline {
}
exports.Healer = Healer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzY2lwbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvY2hhcmFjdGVyL0Rpc2NpcGxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBc0NBLElBQVksa0JBUVg7QUFSRCxXQUFZLGtCQUFrQjtJQUM1QiwrQ0FBeUIsQ0FBQTtJQUN6Qiw2Q0FBdUIsQ0FBQTtJQUN2QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsOENBQThDO0FBQ2hELENBQUMsRUFSVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQVE3QjtBQUVELElBQVksVUFnRFg7QUFoREQsV0FBWSxVQUFVO0lBQ3BCLCtDQUFpQyxDQUFBO0lBQ2pDLG1DQUFxQixDQUFBO0lBQ3JCLDJCQUFhLENBQUE7SUFDYixxQ0FBdUIsQ0FBQTtJQUN2QiwyQ0FBNkIsQ0FBQTtJQUM3Qix5Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBdUIsQ0FBQTtJQUN2QiwyQkFBYSxDQUFBO0lBQ2IsaUNBQW1CLENBQUE7SUFDbkIsNkNBQStCLENBQUE7SUFDL0IsbUNBQXFCLENBQUE7SUFDckIsNkJBQWUsQ0FBQTtJQUNmLG1DQUFxQixDQUFBO0lBQ3JCLGlDQUFtQixDQUFBO0lBQ25CLCtCQUFpQixDQUFBO0lBQ2pCLDJCQUFhLENBQUE7SUFDYixxQ0FBdUIsQ0FBQTtJQUN2QiwrQkFBaUIsQ0FBQTtJQUNqQiwrQkFBaUIsQ0FBQTtJQUNqQix1REFBeUMsQ0FBQTtJQUN6QywrQkFBaUIsQ0FBQTtJQUNqQiwyQkFBYSxDQUFBO0lBQ2IsdUNBQXlCLENBQUE7SUFDekIscUNBQXVCLENBQUE7SUFDdkIsdUNBQXlCLENBQUE7SUFDekIsdUNBQXlCLENBQUE7SUFDekIscUNBQXVCLENBQUE7SUFDdkIseUNBQTJCLENBQUE7SUFDM0IsdUNBQXlCLENBQUE7SUFDekIseUNBQTJCLENBQUE7SUFDM0Is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RCxNQUFhLEtBQU0sU0FBUSxjQUFjO0NBS3hDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLFFBQVMsU0FBUSxjQUFjO0NBSzNDO0FBTEQsNEJBS0M7QUFFRCxNQUFhLElBQUssU0FBUSxjQUFjO0NBS3ZDO0FBTEQsb0JBS0M7QUFFRCxNQUFhLE1BQU8sU0FBUSxjQUFjO0NBS3pDO0FBTEQsd0JBS0M7QUFFRCxNQUFhLFFBQVMsU0FBUSxjQUFjO0NBSzNDO0FBTEQsNEJBS0M7QUFFRCxNQUFhLEtBQU0sU0FBUSxjQUFjO0NBS3hDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxjQUFjO0NBSzFDO0FBTEQsMEJBS0M7QUFFRCxNQUFhLEtBQU0sU0FBUSxjQUFjO0NBS3hDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLEtBQU0sU0FBUSxjQUFjO0NBS3hDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxjQUFjO0NBSzFDO0FBTEQsMEJBS0M7QUFFRCxNQUFhLFFBQVMsU0FBUSxjQUFjO0NBUzNDO0FBVEQsNEJBU0M7QUFFRCxNQUFhLEtBQU0sU0FBUSxjQUFjO0NBS3hDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxjQUFjO0NBSzFDO0FBTEQsMEJBS0M7QUFFRCxNQUFhLFFBQVMsU0FBUSxjQUFjO0NBSzNDO0FBTEQsNEJBS0M7QUFFRCxNQUFhLFFBQVMsU0FBUSxjQUFjO0NBSzNDO0FBTEQsNEJBS0M7QUFFRCxNQUFhLE1BQU8sU0FBUSxjQUFjO0NBS3pDO0FBTEQsd0JBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb2FzdCxcbiAgQ2hlZXIsXG4gIERpc21pc3MsXG4gIEhvcGUsXG4gIEluc3BpcmUsXG4gIFJhZ2UsXG4gIFNjYW4sXG4gIFN1cHBvcnQsXG59IGZyb20gJy4uL3NraWxsL0NsYXNzU2tpbGwnO1xuaW1wb3J0IHtBcHByYWlzZSwgUHJlcGFyZUZvb2R9IGZyb20gJy4uL3NraWxsL0l0ZW1Ta2lsbCc7XG5pbXBvcnQge0JhY2tGbGlwLCBEb3VibGVCYWNrRmxpcCwgSGlnaEp1bXB9IGZyb20gJy4uL3NraWxsL01vdmVtZW50U2tpbGwnO1xuaW1wb3J0IHtDb25jZW50cmF0aW9ufSBmcm9tICcuLi9za2lsbC9QYXNzaXZlU2tpbGwnO1xuaW1wb3J0IHtcbiAgQXF1YSxcbiAgQmxpenphcmQsXG4gIENoYXJtLFxuICBDaGlsbCxcbiAgRGFya25lc3MsXG4gIERlc29sYXRlLFxuICBEcmFpbixcbiAgRmxhcmUsXG4gIEZyb3N0LFxuICBHdXN0LFxuICBIYXN0ZSxcbiAgSGVhbCxcbiAgTGFuZHNsaWRlLFxuICBMZWVjaCxcbiAgTGlnaHQsXG4gIFF1YWtlLFxuICBTbG93LFxuICBTdG9wLFxuICBUc3VuYW1pLFxufSBmcm9tICcuLi9za2lsbC9TcGVsbFNraWxsJztcbmltcG9ydCB7SGVyYWxkaWNMaW9uLCBTdW1tb259IGZyb20gJy4uL3NraWxsL1N1bW1vblNraWxsJztcbmltcG9ydCB7Q29tbWFuZCwgRm9ybWF0aW9ucywgT3JkZXJ9IGZyb20gJy4uL3NraWxsL1RlYW13b3JrU2tpbGwnO1xuaW1wb3J0IHtDbGVhdmV9IGZyb20gJy4uL3NraWxsL1dlYXBvblNraWxsJztcblxuZXhwb3J0IGVudW0gRGlzY2lwbGluZUNhdGVnb3J5IHtcbiAgUFJPRkVTU0lPTiA9ICdQcm9mZXNzaW9uJyxcbiAgQVJDSEVUWVBFID0gJ0FyY2hldHlwZScsXG4gIC8vIENvbWJhdCBDbGFzc2VzXG4gIC8vIFNwZWNpYWx0eSBDbGFzc2VzXG4gIC8vIERyaXZlIENsYXNzZXNcbiAgLy8gT21lZ2EgQ2xhc3Nlc1xuICAvLyAgfCBTcGlyaXQgQ2xhc3MgfCBEcml2ZSBDbGFzcyB8IE9tZWdhIENsYXNzXG59XG5cbmV4cG9ydCBlbnVtIERpc2NpcGxpbmUge1xuICBBTUJFUl9BU1NBU1NJTiA9ICdBbWJlciBBc3Nhc3NpbicsXG4gIEFTU0FTU0lOID0gJ0Fzc2Fzc2luJyxcbiAgQkFSRCA9ICdCYXJkJyxcbiAgQkVSU0VSS0VSID0gJ0JlcnNlcmtlcicsXG4gIEJPRFlfQlVJTERFUiA9ICdCb2R5IEJ1aWxkZXInLFxuICBDSEVFUkxFQURFUiA9ICdDaGVlcmxlYWRlcicsXG4gIENPTU1BTkRFUiA9ICdDb21tYW5kZXInLFxuICBDT09LID0gJ0Nvb2snLFxuICBEVUVMSVNUID0gJ0R1ZWxpc3QnLFxuICBFTElURV9BU1NBU0lOID0gJ0VsaXRlIEFzc2FzaW4nLFxuICBFTkdJTkVFUiA9ICdFbmdpbmVlcicsXG4gIEdBVVJEID0gJ0dhdXJkJyxcbiAgR1VBUkRJQU4gPSAnR3VhcmRpYW4nLFxuICBHWU1OQVNUID0gJ0d5bW5hc3QnLFxuICBIRUFMRVIgPSAnSGVhbGVyJyxcbiAgSEVSTyA9ICdIZXJvJyxcbiAgSElTVE9SSUFOID0gJ0hpc3RvcmlhbicsXG4gIEtFRVBFUiA9ICdLZWVwZXInLFxuICBLTklHSFQgPSAnS25pZ2h0JyxcbiAgTElHSFRFTklOR19XQVJSSU9SID0gJ0xpZ2h0ZW5pbmcgV2FycmlvcicsXG4gIE1BRElFTiA9ICdNYWRpZW4nLFxuICBNQUdJID0gJ01hZ2knLFxuICBNQUdJX0JMQUNLID0gJ01hZ2kgQmxhY2snLFxuICBNQUdJX0JMVUUgPSAnTWFnaSBCbHVlJyxcbiAgTUFHSV9CUk9XTiA9ICdNYWdpIEJyb3duJyxcbiAgTUFHSV9HUkVFTiA9ICdNYWdpIEdyZWVuJyxcbiAgTUFHSV9QSU5LID0gJ01hZ2kgUGluaycsXG4gIE1BR0lfUFVSUExFID0gJ01hZ2kgUHVycGxlJyxcbiAgTUFHSV9XSElURSA9ICdNYWdpIFdoaXRlJyxcbiAgTUFHSV9ZRUxMT1cgPSAnTWFnaSBZZWxsb3cnLFxuICBNRUNIQU5JQyA9ICdNZWNoYW5pYycsXG4gIE5JTkpBID0gJ05pbmphJyxcbiAgT05JID0gJ09uaScsXG4gIE9VUk9CT1JPUyA9ICdPdXJvYm9yb3MnLFxuICBQT1NTRVNTRUQgPSAnUG9zc2Vzc2VkJyxcbiAgUkVCRUwgPSAnUmViZWwnLFxuICBST1VHRSA9ICdSb3VnZScsXG4gIFJPWUFMVFkgPSAnUm95YWx0eScsXG4gIFJVTkVfS0lORyA9ICdSdW5lIEtpbmcnLFxuICBTQUdFID0gJ1NhZ2UnLFxuICBTQ09VVCA9ICdTY291dCcsXG4gIFNPTElERVIgPSAnU29saWRlcicsXG4gIFNVTU1PTkVSID0gJ1N1bW1vbmVyJyxcbiAgVEhJRUYgPSAnVGhpZWYnLFxuICBXQVJSSU9SID0gJ1dhcnJpb3InLFxuICBXSVpBUkQgPSAnV2l6YXJkJyxcbiAgWFNPTElERVIgPSAnWFNvbGlkZXInLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZURpc2NpcGxpbmUge1xuICBhYnN0cmFjdCBuYW1lOiBzdHJpbmc7XG4gIGFic3RyYWN0IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFic3RyYWN0IGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnk7XG4gIHByZXJlcXVpc2l0ZXM/OiBBcnJheTxEaXNjaXBsaW5lPjsgLy8gY291bGQgYWxzbyBiZSBldmVudCBsaWtlIGRlZmVhdGVkIExhd3pvbiwgYnV0IG1heSBiZSB0aGF0J3MgdG9vIGNoYXJhY3RlciBzcGVjaWZpYz9cblxuICBwcm90ZWN0ZWQgX2V4cGVyaWVuY2U6IG51bWJlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZXhwZXJpZW5jZTogbnVtYmVyID0gMCkge1xuICAgIHRoaXMuX2V4cGVyaWVuY2UgPSBleHBlcmllbmNlO1xuICB9XG5cbiAgcHVibGljIGdldCBsZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguc3FydCh0aGlzLl9leHBlcmllbmNlIC8gMTAwKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5leHRMZXZlbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leHBlcmllbmNlIC0gKCh0aGlzLmxldmVsICogKHRoaXMubGV2ZWwgLSAxKSkgLyAyKSAqIDEwMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXhwZXJpZW5jZVRvTmV4dExldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmV4dExldmVsIC0gdGhpcy5fZXhwZXJpZW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXhwZXJpZW5jZVRvTmV4dExldmVsUGVyY2VudGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmV4cGVyaWVuY2VUb05leHRMZXZlbCAvIHRoaXMubmV4dExldmVsO1xuICB9XG5cbiAgLy8gdG9kbyBsb2FkIGZyb20gQ2xhc3NcbiAgcHVibGljIGdldCBlZmZlY3RzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG4vLyBUT0RPIGFkZFxuLy8gQmFyZCxcbi8vIER1ZWxpc3QsXG4vLyBLbmlnaHQsXG4vLyBSdW5lS2luZyxcbi8vIE1haWRlbixcbi8vIEtlZXBlcixcbi8vIFNhZ2UsXG4vLyBHdWFyZGlhbidcbi8vIFBvc3Nlc3NlZCxcbi8vIE91cm9ib3Jvcyw/XG4vLyBCZXJzZXJrZXIsXG4vLyBOaW5qYSxcbi8vIEFtYmVyQXNzYXNzaW4sXG4vLyBFbGl0ZUFzc2FzaW4sXG4vLyBFbmdpbmVlcixcbi8vIExpZ2h0ZW5pbmdXYXJyaW9yLFxuXG5leHBvcnQgY2xhc3MgR3ltbmFzdCBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5HWU1OQVNUO1xuICBkZXNjcmlwdGlvbjogJ1N0dWRpZXMgbXlzdGVyaW91cyBmb3JjZXMuJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5QUk9GRVNTSU9OO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IEJhY2tGbGlwXSxcbiAgICBbbGV2ZWw6IDI1LCBza2lsbDogRG91YmxlQmFja0ZsaXBdLFxuICAgIFtsZXZlbDogNTAsIHNraWxsOiBIaWdoSnVtcF0sXG4gICAgW2xldmVsOiA3MCwgc2tpbGw6IENvbmNlbnRyYXRpb25dLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgV2l6YXJkIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLldJWkFSRDtcbiAgZGVzY3JpcHRpb246ICdTdHVkaWVzIG15c3RlcmlvdXMgZm9yY2VzLic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuUFJPRkVTU0lPTjtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW1xuICAgIFtsZXZlbDogMTAsIHNraWxsOiBHdXN0XSxcbiAgICBbbGV2ZWw6IDI1LCBza2lsbDogRmxhcmVdLFxuICAgIFtsZXZlbDogNTAsIHNraWxsOiBIZWFsXSxcbiAgICBbbGV2ZWw6IDcwLCBza2lsbDogTGlnaHRdLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgSGlzdG9yaWFuIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLkhJU1RPUklBTjtcbiAgZGVzY3JpcHRpb246ICdTdHVkaWVzIHRoZSB3b3JsZCBhcyBpdCB3YXMuJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5QUk9GRVNTSU9OO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IEFwcHJhaXNlXSxcbiAgICBbbGV2ZWw6IDI1LCBza2lsbDogU2Nhbl0sXG4gICAgW2xldmVsOiA1MCwgc2tpbGw6IEhlcmFsZGljTGlvbl0sXG4gIF07XG59XG5leHBvcnQgY2xhc3MgQm9keUJ1aWxkZXIgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuQk9EWV9CVUlMREVSO1xuICBkZXNjcmlwdGlvbjogJ0RvIHlvdSBldmVuIGxpZnQ/JztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5QUk9GRVNTSU9OO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IEFwcHJhaXNlXSxcbiAgICBbbGV2ZWw6IDI1LCBza2lsbDogU2Nhbl0sXG4gICAgW2xldmVsOiA1MCwgc2tpbGw6IEhlcmFsZGljTGlvbl0sXG4gIF07XG59XG5cbi8vIG1heSBiZSBhbnlvbmUgY2FuIGJlY29tZSBhIGNvb2s/PlxuZXhwb3J0IGNsYXNzIENvb2sgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuQ09PSztcbiAgZGVzY3JpcHRpb246ICdTb21lb25lIHdobyBwcmVwYXJlcyBhbmQgY29va3MgZm9vZCc7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuUFJPRkVTU0lPTjtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW1tsZXZlbDogMTAsIHNraWxsOiBQcmVwYXJlRm9vZF1dO1xuICAvLyB0b2RvIHByZXBhcmUgZGlmZmVyZW50IGZvb2QgaXRlbXNcbn1cblxuZXhwb3J0IGNsYXNzIENoZWVybGVhZGVyIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLkNIRUVSTEVBREVSO1xuICBkZXNjcmlwdGlvbjogJ1NvbWVvbmUgd2hvIGNoZWVyIGZvciB0aGVpciB0ZWFtIGFzIGEgZm9ybSBvZiBlbmNvdXJhZ2VtZW50Lic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuUFJPRkVTU0lPTjtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW1xuICAgIFtsZXZlbDogMSwgc2tpbGw6IENoZWVyXSxcbiAgICBbbGV2ZWw6IDEwLCBza2lsbDogU3VwcG9ydF0sXG4gICAgW2xldmVsOiA0MCwgc2tpbGw6IEluc3BpcmVdLFxuICAgIFtsZXZlbDogNTAsIHNraWxsOiBIb3BlXSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbW1hbmRlciBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5DT01NQU5ERVI7XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6ZSBpbiBnaXZpbmcgb3JkZXJzIHRvIG90aGVycy4nO1xuICBjYXRlZ29yeTogRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW1xuICAgIFtsZXZlbDogMSwgc2tpbGw6IEJvYXN0XSxcbiAgICBbbGV2ZWw6IDEwLCBza2lsbDogRm9ybWF0aW9uc10sXG4gICAgW2xldmVsOiA1MCwgc2tpbGw6IE9yZGVyXSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hZ2kgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuTUFHSTtcbiAgZGVzY3JpcHRpb246ICdIYXMgYSBiYXNpYyB1bmRlcnN0YW5kaW5nIG9mIE1hZ2ljJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtdO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hZ2lCbGFjayBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5NQUdJX0JMQUNLO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgZGVzdHJ1Y3Rpb24gTWFnaWMnO1xuICBoaXN0b3J5OiAnSGFybmVzc2VkIGZyb20gdGhlIHBvd2VyIG9mIE91cmVuJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IERhcmtuZXNzXSxcbiAgICBbbGV2ZWw6IDI1LCBza2lsbDogRGVzb2xhdGVdLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTWFnaUJsdWUgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuTUFHSV9CTFVFO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgd2F0ZXIgTWFnaWMnO1xuICBoaXN0b3J5OiAnSGFybmVzc2VkIGZyb20gdGhlIHBvd2VyIG9mIEdlbmtpJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IFJhZ2VdLFxuICAgIFtsZXZlbDogMTUsIHNraWxsOiBBcXVhXSxcbiAgICBbbGV2ZWw6IDI1LCBza2lsbDogVHN1bmFtaV0sXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBNYWdpQnJvd24gZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuTUFHSV9CUk9XTjtcbiAgZGVzY3JpcHRpb246ICdTcGVjaWFsaXplIHJvY2sgTWFnaWMnO1xuICBoaXN0b3J5OiAnSGFybmVzc2VkIGZyb20gdGhlIHBvd2VyIG9mIEFzbWluJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbW2xldmVsOiAxMCwgc2tpbGw6IFF1YWtlXSwgW2xldmVsOiAxNSwgc2tpbGw6IExhbmRzbGlkZV1dO1xufVxuXG5leHBvcnQgY2xhc3MgTWFnaUdyZWVuIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLk1BR0lfR1JFRU47XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6ZSB0aW1lIE1hZ2ljJztcbiAgaGlzdG9yeTogJ0hhcm5lc3NlZCBmcm9tIHRoZSBwb3dlciBvZiBWb2lkJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IFN0b3BdLFxuICAgIFtsZXZlbDogMTUsIHNraWxsOiBTbG93XSxcbiAgICBbbGV2ZWw6IDE1LCBza2lsbDogSGFzdGVdLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgTWFnaVBpbmsgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuTUFHSV9QSU5LO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgY2hhcm0gTWFnaWMnO1xuICBoaXN0b3J5OiAnSGFybmVzc2VkIGZyb20gdGhlIHBvd2VyIG9mIFN1eXJpJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbW2xldmVsOiAxMCwgc2tpbGw6IENoYXJtXSwgW2xldmVsOiAxNSwgc2tpbGw6IENoaWxsXV07XG59XG5cbmV4cG9ydCBjbGFzcyBNYWdpUHVycGxlIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLk1BR0lfUFVSUExFO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgPz8/IE1hZ2ljJztcbiAgaGlzdG9yeTogJ0hhcm5lc3NlZCBmcm9tIHRoZSBwb3dlciBvZiBEaWFnJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbW2xldmVsOiAxMCwgc2tpbGw6IFF1YWtlXV07IC8vID8/IGlzIHF1YWtlIGNvcnJlY3Rcbn1cblxuZXhwb3J0IGNsYXNzIE1hZ2lXaGl0ZSBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5NQUdJX1dISVRFO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgc25vdyBNYWdpYyc7XG4gIGhpc3Rvcnk6ICdIYXJuZXNzZWQgZnJvbSB0aGUgcG93ZXIgb2YgTGF3em9uJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHByZXJlcXVpc2l0ZXM6IFtEaXNjaXBsaW5lLk1BR0ldO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXG4gICAgW2xldmVsOiAxMCwgc2tpbGw6IEJsaXp6YXJkXSxcbiAgICBbbGV2ZWw6IDEwLCBza2lsbDogRnJvc3RdLFxuICAgIFtsZXZlbDogMTAsIHNraWxsOiBDaGlsbF0sXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBNYWdpWWVsbG93IGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLk1BR0lfWUVMTE9XO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgYWJzb3JwdGlvbiBNYWdpYyc7XG4gIGhpc3Rvcnk6ICdIYXJuZXNzZWQgZnJvbSB0aGUgcG93ZXIgb2YgV2lzcCc7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBwcmVyZXF1aXNpdGVzOiBbRGlzY2lwbGluZS5NQUdJXTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW1xuICAgIFtsZXZlbDogMTAsIHNraWxsOiBEcmFpbl0sXG4gICAgW2xldmVsOiAyNSwgc2tpbGw6IExlZWNoXSxcbiAgICBbbGV2ZWw6IDUwLCBza2lsbDogRHJhaW5dLFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgR2F1cmQgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuR0FVUkQ7XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6ZSBpbiBwcm90ZWN0aW9uLic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEdhdXJkaWFuIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLkdVQVJESUFOO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemUgaW4gcHJvdGVjdGlvbi4nO1xuICBjYXRlZ29yeTogRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW107XG59XG5cbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLkhFUk87XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6ZSBpbiBzYXZpbmcgb3RoZXJzLic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEtuaWdodCBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5LTklHSFQ7XG4gIGRlc2NyaXB0aW9uOiAnQSBob25vcmVkIGZpZ2h0ZXIgZm9yIHByb3RlY3RzIHRoZSBraW5nZG9tLic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1lY2hhbmljIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLk1FQ0hBTklDO1xuICBkZXNjcmlwdGlvbjogJ1NwZWNpYWxpemVzIGluIGVsZWN0cm9tZWNoYW5pY2FsIGVuZ2luZWVyaW5nJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHNraWxsUHJvZ3Jlc3Npb246IFtdOyAvLyBBY3Rpb25zOiBUb29sc1xufVxuXG5leHBvcnQgY2xhc3MgUm91Z2UgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuUk9VR0U7XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6ZXMgc25lYWsgYXR0YWNrcyBhbmQgcGlja2luZyBsb2Nrcyc7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFJveWFsdHkgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuUk9ZQUxUWTtcbiAgZGVzY3JpcHRpb246ICdTcGVjaWFsaXplcyBpbiBydWxpbmcgb3RoZXJzJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHNraWxsUHJvZ3Jlc3Npb246IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgUmViZWwgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuUkVCRUw7XG4gIGRlc2NyaXB0aW9uOiAnUmViZWwnO1xuICBjYXRlZ29yeTogRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW107XG59XG5cbmV4cG9ydCBjbGFzcyBTY291dCBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5TQ09VVDtcbiAgZGVzY3JpcHRpb246ICdTcGVjaWFsaXplIGluIG1vdmluZyBhaGVhZCBvZiB0aGUgcGFydHkgdG8gZ2F0aGVyaW5nIGluZm9ybWF0aW9uIGFuZCByZWNvbm5haXNzYW5jZS4nO1xuICBjYXRlZ29yeTogRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW107XG59XG5cbmV4cG9ydCBjbGFzcyBTb2xpZGVyIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLlNPTElERVI7XG4gIGRlc2NyaXB0aW9uOiAnQSBzb2xpZGVyIGlzIGEgZm9sbG93ZXIgb2YgdGhlIFVuaXRlZCBGb3JjZXMuIFRoZXkgc3BlY2lhbGl6ZSBpbiBwZXJmb3JtaW5nIHN0cmljdCBtYW5ldXZlcnMuJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHNraWxsUHJvZ3Jlc3Npb246IFtbbGV2ZWw6IDEwLCBza2lsbDogQ2xlYXZlXV07XG59XG5cbmV4cG9ydCBjbGFzcyBTdW1tb25lciBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5TVU1NT05FUjtcbiAgZGVzY3JpcHRpb246ICdBIHNvbGlkZXIgaXMgYSBmb2xsb3dlciBvZiB0aGUgVW5pdGVkIEZvcmNlcy4gVGhleSBzcGVjaWFsaXplIGluIHBlcmZvcm1pbmcgc3RyaWN0IG1hbmV1dmVycy4nO1xuICBjYXRlZ29yeTogRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW1xuICAgIFtsZXZlbDogMTAsIHNraWxsOiBTdW1tb25dLFxuICAgIFtsZXZlbDogMTAsIHNraWxsOiBEaXNtaXNzXSxcbiAgICBbbGV2ZWw6IDEwLCBza2lsbDogQ29tbWFuZF0sXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBUaGllZiBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5USElFRjtcbiAgZGVzY3JpcHRpb246ICcnO1xuICBjYXRlZ29yeTogRGlzY2lwbGluZUNhdGVnb3J5LkFSQ0hFVFlQRTtcbiAgc2tpbGxQcm9ncmVzc2lvbjogW107XG59XG5cbmV4cG9ydCBjbGFzcyBXYXJyaW9yIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLldBUlJJT1I7XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6emVzIGluIGNvbWJhdCBvbiB0aGUgYmF0dGxlZmllbGQuJztcbiAgY2F0ZWdvcnk6IERpc2NpcGxpbmVDYXRlZ29yeS5BUkNIRVRZUEU7XG4gIHNraWxsUHJvZ3Jlc3Npb246IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgWFNvbGlkZXIgZXh0ZW5kcyBCYXNlRGlzY2lwbGluZSB7XG4gIG5hbWU6IERpc2NpcGxpbmUuWFNPTElERVI7XG4gIGRlc2NyaXB0aW9uOiAnU29sZGllcnMgdGhhdCBoYXZlIGdvbmUgYWdhaW5zdCB0aGVpciB0ZWFjaGluZ3MgdG8gZ2FpbiBuZXcgc2tpbGxzLic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEFzc2Fzc2luIGV4dGVuZHMgQmFzZURpc2NpcGxpbmUge1xuICBuYW1lOiBEaXNjaXBsaW5lLkFTU0FTU0lOO1xuICBkZXNjcmlwdGlvbjogJyc7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEhlYWxlciBleHRlbmRzIEJhc2VEaXNjaXBsaW5lIHtcbiAgbmFtZTogRGlzY2lwbGluZS5IRUFMRVI7XG4gIGRlc2NyaXB0aW9uOiAnU3BlY2lhbGl6ZSBpbiBoZWFsaW5nLic7XG4gIGNhdGVnb3J5OiBEaXNjaXBsaW5lQ2F0ZWdvcnkuQVJDSEVUWVBFO1xuICBza2lsbFByb2dyZXNzaW9uOiBbXTtcbn1cbiJdfQ==