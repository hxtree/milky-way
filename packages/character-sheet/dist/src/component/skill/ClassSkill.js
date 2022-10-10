"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rage = exports.Light = exports.Protection = exports.Reflect = exports.Steal = exports.Search = exports.Mock = exports.Protect = exports.Sacrifice = exports.Ward = exports.Lullaby = exports.Seal = exports.Pickpocket = exports.Mimic = exports.Scout = exports.Inspire = exports.Hope = exports.Support = exports.Cheer = exports.Scan = exports.Hide = exports.Grapple = exports.Focus = exports.Dismiss = exports.Disguise = exports.Boast = exports.Barrier = exports.ClassSkill = exports.ClassSkillList = exports.Focusable = void 0;
// fuel?
// Whether when performing move if character can hold action to put more effort into action
var Focusable;
(function (Focusable) {
    Focusable["STAMINA"] = "Stamina";
    Focusable["TRUE"] = "True";
    Focusable["FALSE"] = "False";
})(Focusable = exports.Focusable || (exports.Focusable = {}));
var ClassSkillList;
(function (ClassSkillList) {
    ClassSkillList["BARRIER"] = "Barrier";
    ClassSkillList["BOAST"] = "Boast";
    ClassSkillList["DISGUISE"] = "Disguise";
    ClassSkillList["FOCUS"] = "Focus";
    ClassSkillList["GRAPPLE"] = "Grapple";
    ClassSkillList["HIDE"] = "Hide";
    ClassSkillList["SCAN"] = "Scan";
    ClassSkillList["CHEER"] = "Cheer";
    ClassSkillList["SUPPORT"] = "Support";
    ClassSkillList["HOPE"] = "Hope";
    ClassSkillList["INSPIRE"] = "Inspire";
    ClassSkillList["SCOUT"] = "Scout";
    ClassSkillList["MIMIC"] = "Mimic";
    ClassSkillList["PICKPOCKET"] = "Pickpocket";
    ClassSkillList["SEAL"] = "Seal";
    ClassSkillList["LULLABY"] = "Lullaby";
    ClassSkillList["WARD"] = "Ward";
    ClassSkillList["SACRIFICE"] = "Sacrifice";
    ClassSkillList["PROTECT"] = "Protect";
    ClassSkillList["MOCK"] = "Mock";
    ClassSkillList["SEARCH"] = "Search";
    ClassSkillList["STEAL"] = "Steal";
    ClassSkillList["PROTECTION"] = "Protection";
    ClassSkillList["LIGHT"] = "Light";
    ClassSkillList["REFLECT"] = "Reflect";
    ClassSkillList["RAGE"] = "Rage";
    ClassSkillList["DISMISS"] = "Dismiss";
})(ClassSkillList = exports.ClassSkillList || (exports.ClassSkillList = {}));
// todo really what makes something a class skill is whether it can be earned via class? decouple
/**
 * Class Skills are motor programs that a character learns to preform.
 * Each skill can be acquired via items, etc. but often
 * progression is determined by class.
 */
class ClassSkill {
}
exports.ClassSkill = ClassSkill;
class Barrier extends ClassSkill {
}
exports.Barrier = Barrier;
class Boast extends ClassSkill {
}
exports.Boast = Boast;
class Disguise extends ClassSkill {
}
exports.Disguise = Disguise;
class Dismiss extends ClassSkill {
}
exports.Dismiss = Dismiss;
class Focus extends ClassSkill {
}
exports.Focus = Focus;
class Grapple extends ClassSkill {
}
exports.Grapple = Grapple;
class Hide extends ClassSkill {
}
exports.Hide = Hide;
class Scan extends ClassSkill {
}
exports.Scan = Scan;
class Cheer extends ClassSkill {
}
exports.Cheer = Cheer;
class Support extends ClassSkill {
}
exports.Support = Support;
class Hope extends ClassSkill {
}
exports.Hope = Hope;
class Inspire extends ClassSkill {
}
exports.Inspire = Inspire;
class Scout extends ClassSkill {
}
exports.Scout = Scout;
class Mimic extends ClassSkill {
}
exports.Mimic = Mimic;
class Pickpocket extends ClassSkill {
}
exports.Pickpocket = Pickpocket;
class Seal extends ClassSkill {
}
exports.Seal = Seal;
class Lullaby extends ClassSkill {
}
exports.Lullaby = Lullaby;
class Ward extends ClassSkill {
}
exports.Ward = Ward;
class Sacrifice extends ClassSkill {
}
exports.Sacrifice = Sacrifice;
class Protect extends ClassSkill {
}
exports.Protect = Protect;
class Mock extends ClassSkill {
}
exports.Mock = Mock;
class Search extends ClassSkill {
}
exports.Search = Search;
class Steal extends ClassSkill {
}
exports.Steal = Steal;
class Reflect extends ClassSkill {
}
exports.Reflect = Reflect;
class Protection extends ClassSkill {
}
exports.Protection = Protection;
class Light extends ClassSkill {
}
exports.Light = Light;
class Rage extends ClassSkill {
}
exports.Rage = Rage;
// "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhc3NTa2lsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnQvc2tpbGwvQ2xhc3NTa2lsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxRQUFRO0FBQ1IsMkZBQTJGO0FBQzNGLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQixnQ0FBbUIsQ0FBQTtJQUNuQiwwQkFBYSxDQUFBO0lBQ2IsNEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFFRCxJQUFZLGNBNEJYO0FBNUJELFdBQVksY0FBYztJQUN4QixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsdUNBQXFCLENBQUE7SUFDckIsaUNBQWUsQ0FBQTtJQUNmLHFDQUFtQixDQUFBO0lBQ25CLCtCQUFhLENBQUE7SUFDYiwrQkFBYSxDQUFBO0lBQ2IsaUNBQWUsQ0FBQTtJQUNmLHFDQUFtQixDQUFBO0lBQ25CLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsaUNBQWUsQ0FBQTtJQUNmLDJDQUF5QixDQUFBO0lBQ3pCLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQiwrQkFBYSxDQUFBO0lBQ2IseUNBQXVCLENBQUE7SUFDdkIscUNBQW1CLENBQUE7SUFDbkIsK0JBQWEsQ0FBQTtJQUNiLG1DQUFpQixDQUFBO0lBQ2pCLGlDQUFlLENBQUE7SUFDZiwyQ0FBeUIsQ0FBQTtJQUN6QixpQ0FBZSxDQUFBO0lBQ2YscUNBQW1CLENBQUE7SUFDbkIsK0JBQWEsQ0FBQTtJQUNiLHFDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUE1QlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUE0QnpCO0FBRUQsaUdBQWlHO0FBRWpHOzs7O0dBSUc7QUFDSCxNQUFzQixVQUFVO0NBSy9CO0FBTEQsZ0NBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBSXBDO0FBSkQsc0JBSUM7QUFFRCxNQUFhLFFBQVMsU0FBUSxVQUFVO0NBS3ZDO0FBTEQsNEJBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBSXBDO0FBSkQsc0JBSUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBS25DO0FBTEQsb0JBS0M7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBSW5DO0FBSkQsb0JBSUM7QUFFRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBSXBDO0FBSkQsc0JBSUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBSW5DO0FBSkQsb0JBSUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBS3BDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBSXBDO0FBSkQsc0JBSUM7QUFFRCxNQUFhLFVBQVcsU0FBUSxVQUFVO0NBS3pDO0FBTEQsZ0NBS0M7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBS25DO0FBTEQsb0JBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBS25DO0FBTEQsb0JBS0M7QUFFRCxNQUFhLFNBQVUsU0FBUSxVQUFVO0NBSXhDO0FBSkQsOEJBSUM7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBS3RDO0FBTEQsMEJBS0M7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBS25DO0FBTEQsb0JBS0M7QUFFRCxNQUFhLE1BQU8sU0FBUSxVQUFVO0NBSXJDO0FBSkQsd0JBSUM7QUFFRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBS3BDO0FBTEQsc0JBS0M7QUFFRCxNQUFhLE9BQVEsU0FBUSxVQUFVO0NBSXRDO0FBSkQsMEJBSUM7QUFFRCxNQUFhLFVBQVcsU0FBUSxVQUFVO0NBSXpDO0FBSkQsZ0NBSUM7QUFDRCxNQUFhLEtBQU0sU0FBUSxVQUFVO0NBSXBDO0FBSkQsc0JBSUM7QUFFRCxNQUFhLElBQUssU0FBUSxVQUFVO0NBSW5DO0FBSkQsb0JBSUM7QUFFRCx3RUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VmZmVjdFRhYmxlfSBmcm9tICcuLi9lZmZlY3QvRWZmZWN0VGFibGUnO1xuaW1wb3J0IHtNZW51U2xvdH0gZnJvbSAnLi4vY2hhcmFjdGVyL01lbnVTbG90JztcbmltcG9ydCB7QmFzZVNraWxsfSBmcm9tICcuL0Jhc2VTa2lsbCc7XG5cbi8vIGZ1ZWw/XG4vLyBXaGV0aGVyIHdoZW4gcGVyZm9ybWluZyBtb3ZlIGlmIGNoYXJhY3RlciBjYW4gaG9sZCBhY3Rpb24gdG8gcHV0IG1vcmUgZWZmb3J0IGludG8gYWN0aW9uXG5leHBvcnQgZW51bSBGb2N1c2FibGUge1xuICBTVEFNSU5BID0gJ1N0YW1pbmEnLFxuICBUUlVFID0gJ1RydWUnLFxuICBGQUxTRSA9ICdGYWxzZScsXG59XG5cbmV4cG9ydCBlbnVtIENsYXNzU2tpbGxMaXN0IHtcbiAgQkFSUklFUiA9ICdCYXJyaWVyJyxcbiAgQk9BU1QgPSAnQm9hc3QnLFxuICBESVNHVUlTRSA9ICdEaXNndWlzZScsXG4gIEZPQ1VTID0gJ0ZvY3VzJyxcbiAgR1JBUFBMRSA9ICdHcmFwcGxlJyxcbiAgSElERSA9ICdIaWRlJyxcbiAgU0NBTiA9ICdTY2FuJyxcbiAgQ0hFRVIgPSAnQ2hlZXInLFxuICBTVVBQT1JUID0gJ1N1cHBvcnQnLFxuICBIT1BFID0gJ0hvcGUnLFxuICBJTlNQSVJFID0gJ0luc3BpcmUnLFxuICBTQ09VVCA9ICdTY291dCcsXG4gIE1JTUlDID0gJ01pbWljJyxcbiAgUElDS1BPQ0tFVCA9ICdQaWNrcG9ja2V0JyxcbiAgU0VBTCA9ICdTZWFsJyxcbiAgTFVMTEFCWSA9ICdMdWxsYWJ5JyxcbiAgV0FSRCA9ICdXYXJkJyxcbiAgU0FDUklGSUNFID0gJ1NhY3JpZmljZScsXG4gIFBST1RFQ1QgPSAnUHJvdGVjdCcsXG4gIE1PQ0sgPSAnTW9jaycsXG4gIFNFQVJDSCA9ICdTZWFyY2gnLFxuICBTVEVBTCA9ICdTdGVhbCcsXG4gIFBST1RFQ1RJT04gPSAnUHJvdGVjdGlvbicsXG4gIExJR0hUID0gJ0xpZ2h0JyxcbiAgUkVGTEVDVCA9ICdSZWZsZWN0JyxcbiAgUkFHRSA9ICdSYWdlJyxcbiAgRElTTUlTUyA9ICdEaXNtaXNzJyxcbn1cblxuLy8gdG9kbyByZWFsbHkgd2hhdCBtYWtlcyBzb21ldGhpbmcgYSBjbGFzcyBza2lsbCBpcyB3aGV0aGVyIGl0IGNhbiBiZSBlYXJuZWQgdmlhIGNsYXNzPyBkZWNvdXBsZVxuXG4vKipcbiAqIENsYXNzIFNraWxscyBhcmUgbW90b3IgcHJvZ3JhbXMgdGhhdCBhIGNoYXJhY3RlciBsZWFybnMgdG8gcHJlZm9ybS5cbiAqIEVhY2ggc2tpbGwgY2FuIGJlIGFjcXVpcmVkIHZpYSBpdGVtcywgZXRjLiBidXQgb2Z0ZW5cbiAqIHByb2dyZXNzaW9uIGlzIGRldGVybWluZWQgYnkgY2xhc3MuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbGFzc1NraWxsIGltcGxlbWVudHMgQmFzZVNraWxsIHtcbiAgYWJzdHJhY3QgbmFtZTogc3RyaW5nO1xuICBhYnN0cmFjdCBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhYnN0cmFjdCBlZmZlY3Q6IEVmZmVjdFRhYmxlO1xuICBtZW51U2xvdDogTWVudVNsb3QuRmlyc3Q7XG59XG5cbmV4cG9ydCBjbGFzcyBCYXJyaWVyIGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LkJBUlJJRVI7XG4gIGRlc2NyaXB0aW9uOiAnJztcbiAgZWZmZWN0OiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEJvYXN0IGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LkJPQVNUO1xuICBkZXNjcmlwdGlvbjogJ2luY3JlYXNlIHBhcnR54oCZcyBtb3JhbCc7XG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBEaXNndWlzZSBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5ESVNHVUlTRTtcbiAgZGVzY3JpcHRpb246ICdDaGFuZ2VzIGFwcGVhcmFuY2UgYW5kIGRpc2FibGVzIGNvbW1hbmQgbWVudSB1bnRpbCBjYW5jZWxlZC4nO1xuICBlZmZlY3Q6IFtdO1xuICAvLyBzdGFtaW5hXG59XG5cbmV4cG9ydCBjbGFzcyBEaXNtaXNzIGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LkRJU01JU1M7XG4gIGRlc2NyaXB0aW9uOiAnUmVsZWFzZSBhIHN1bW1vbi4nO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgRm9jdXMgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuRk9DVVM7XG4gIGRlc2NyaXB0aW9uOiAncmFpc2UgYXR0YWNrIGFuZCBhdHRhY2sgcGVyY2VudCBmb3IgZm9sbG93aW5nIG1vdmUuJztcbiAgZWZmZWN0OiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEdyYXBwbGUgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuR1JBUFBMRTtcbiAgZGVzY3JpcHRpb246ICdMb3dlcnMgY2hhcmFjdGVyIGFuZCBvcHBvbmVudHMgbGlmZS4nO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgSGlkZSBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5ISURFO1xuICBkZXNjcmlwdGlvbjogJ0VuZW15IGNhbm5vdCBzZWUgeW91JztcbiAgZWZmZWN0OiBbXTtcbiAgLy8gW3N0YW1pbmFdXG59XG5cbmV4cG9ydCBjbGFzcyBTY2FuIGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LlNDQU47XG4gIGRlc2NyaXB0aW9uOiAnUmVhZCBlbmVtaWVzIHN0YXRzLic7XG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVlciBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5DSEVFUjtcbiAgZGVzY3JpcHRpb246ICdUYXJnZXRzIFNwaXJpdCBpbmNyZWFzZXMgYnkgMTAlIGZvciBhIGR1cmF0aW9uJztcbiAgZWZmZWN0OiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFN1cHBvcnQgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuU1VQUE9SVDtcbiAgZGVzY3JpcHRpb246ICdSZWFkIGVuZW1pZXMgc3RhdHMuJztcbiAgZWZmZWN0OiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEhvcGUgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuSE9QRTtcbiAgZGVzY3JpcHRpb246ICdUaGUgbW9zdCBwb3dlcmZ1bCBzdGF0dXMgYm9udXMnO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgSW5zcGlyZSBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5JTlNQSVJFO1xuICBkZXNjcmlwdGlvbjogJ0luY3JlYXNlcyB0YXJnZXQgRHJpdmUgZ2F1Z2UnO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgU2NvdXQgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuU0NPVVQ7XG4gIGRlc2NyaXB0aW9uOiAnTW92ZSBhaGVhZCBvZiBwYXJ0eS4nO1xuICBlZmZlY3Q6IFtdO1xuICAvLyBjb25zdGFudGx5IGNvbnN1bWVzIHN0YW1pbmFcbn1cblxuZXhwb3J0IGNsYXNzIE1pbWljIGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0Lk1JTUlDO1xuICBkZXNjcmlwdGlvbjogJ1VzZSB0aGUgc2FtZSBtb3ZlIHRoYXQgd2FzIHVzZWQgb24geW91IG9uIHRoZSBlbmVteS4nO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgUGlja3BvY2tldCBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5QSUNLUE9DS0VUO1xuICBkZXNjcmlwdGlvbjogJ1N0ZWFsIGZyb20gZW5lbXkuJztcbiAgZWZmZWN0OiBbXTtcbiAgLy8gY29zdCBbc3RhbWluYV1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYWwgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuU0VBTDtcbiAgZGVzY3JpcHRpb246ICdLZWVwIGVuZW1pZXMgZnJvbSBnZXR0aW5nIGNsb3NlLic7IC8vaG9sZCBhbiBlbmVteSBvZmZcbiAgLy8gIChHb29kIGZvciB3aGVuIHBhcnR5IGlzIHBvd2VyaW5nIHVwKVxuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgTHVsbGFieSBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5MVUxMQUJZO1xuICBkZXNjcmlwdGlvbjogJ1NlbmQgZW5lbWllcyBtb3ZlcyBiYWNrIGF0IHRoZW0nO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgV2FyZCBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5XQVJEO1xuICBkZXNjcmlwdGlvbjogJ1wiS2VlcCBlbmVtaWVzIGZyb20gZ2V0dGluZyBjbG9zZS4nO1xuICAvLyAgKEdvb2QgZm9yIHdoZW4gcGFydHkgaXMgcG93ZXJpbmcgdXApXG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBTYWNyaWZpY2UgZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuU0FDUklGSUNFO1xuICBkZXNjcmlwdGlvbjogJyc7XG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBQcm90ZWN0IGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LlBST1RFQ1Q7XG4gIGRlc2NyaXB0aW9uOiAnZ3VhcmQgcGFydHkgbWVtYmVycyBiZWhpbmQgeW91Lic7XG4gIC8vIFtzdGFtaW5hXVxuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgTW9jayBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5NT0NLO1xuICBkZXNjcmlwdGlvbjogJ21ha2UgYSBtb2NraW5nIGFjdGlvbiB0byBjYXVzZSBCZXJzZXJrIG9uIHRoZSBvcHBvbmVudCc7XG4gIC8vIHN0YW1pbmFdXG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuU0VBUkNIO1xuICBkZXNjcmlwdGlvbjogJ3NjYW4gbmVhcmJ5IGFyZWEgZm9yIGdvb2RzLic7XG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBTdGVhbCBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5TVEVBTDtcbiAgZGVzY3JpcHRpb246ICdUYWtlIGl0ZW0gZnJvbSBvcHBvbmVudCc7XG4gIC8vIFtzdGFtaW5hXVxuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgUmVmbGVjdCBleHRlbmRzIENsYXNzU2tpbGwge1xuICBuYW1lOiBDbGFzc1NraWxsTGlzdC5SRUZMRUNUO1xuICBkZXNjcmlwdGlvbjogJ1NlbmQgZW5lbWllcyBtb3ZlcyBiYWNrIGF0IHRoZW0uJztcbiAgZWZmZWN0OiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb3RlY3Rpb24gZXh0ZW5kcyBDbGFzc1NraWxsIHtcbiAgbmFtZTogQ2xhc3NTa2lsbExpc3QuUFJPVEVDVElPTjtcbiAgZGVzY3JpcHRpb246ICdDcmVhdGUgYSBiYXJyaWVyIGFyb3VuZCBhIGFsbHknO1xuICBlZmZlY3Q6IFtdO1xufVxuZXhwb3J0IGNsYXNzIExpZ2h0IGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LkxJR0hUO1xuICBkZXNjcmlwdGlvbjogJ0tlZXAgZW5lbWllcyBmcm9tIG1vdmluZyBmb3IgYSBkdXJhdGlvbiBvZiB0aW1lLiBDaGFuY2UgUHV0cyBlbmVteSB0byBzbGVlcC4gU3RvcHMgcmFnZSc7XG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBSYWdlIGV4dGVuZHMgQ2xhc3NTa2lsbCB7XG4gIG5hbWU6IENsYXNzU2tpbGxMaXN0LlJBR0U7XG4gIGRlc2NyaXB0aW9uOiAnSW5jcmVhc2UgcG93ZXIgZGVjcmVhc2Ugd2lzZG9tJztcbiAgZWZmZWN0OiBbXTtcbn1cblxuLy8gXCIxMlwiLFwiQm9hc3QvUmFsbHkvSW5zcGlyZVwiLFwiSW5jcmVhc2UgYWxsaWVzIGRldGVybWluYXRpb25cIixcIjEwXCIsLFwiMTBcIlxuIl19