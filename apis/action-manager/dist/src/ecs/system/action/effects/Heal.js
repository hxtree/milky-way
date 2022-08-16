"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAction_1 = require("./BaseAction");
const Effects_1 = require("../WIP/Effects");
const Attribute_1 = require("../WIP/Attribute");
class HealAction extends BaseAction_1.BaseAction {
    /* {@inheritDoc} */
    get waitTime() {
        let avgSpeed = 0;
        this._targets.forEach(target => {
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }
    /* {@inheritDoc} */
    get executionTime() {
        let avgSpeed = 0;
        this._targets.forEach(target => {
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }
    /* {@inheritDoc} */
    get recoveryTime() {
        let avgSpeed = 0;
        this._targets.forEach(target => {
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }
    /* {@inheritDoc} */
    get cooldownTime() {
        let avgSpeed = 0;
        this._targets.forEach(target => {
            avgSpeed += target.speed;
        });
        return Date.now() + (avgSpeed * this._targets.length);
    }
    /* {@inheritDoc} */
    execute(actors, targets) {
        let effects = [];
        for (let target of targets) {
            let amount = Math.floor(Math.random() * 10);
            effects.push(new Effects_1.Effect(target.id, Attribute_1.Attribute.Life, amount));
        }
        return effects;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9lY3Mvc3lzdGVtL2FjdGlvbi9lZmZlY3RzL0hlYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBMEQ7QUFFMUQsNENBQXNDO0FBQ3RDLGdEQUEyQztBQUUzQyxNQUFNLFVBQVcsU0FBUSx1QkFBVTtJQU8vQixtQkFBbUI7SUFDbkIsSUFBVyxRQUFRO1FBQ2YsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLFFBQVEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLElBQVcsYUFBYTtRQUNwQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsSUFBVyxZQUFZO1FBQ25CLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELG1CQUFtQjtJQUNuQixJQUFXLFlBQVk7UUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLFFBQVEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLE9BQU8sQ0FBQyxNQUFvQixFQUFFLE9BQXFCO1FBQy9DLElBQUksT0FBTyxHQUFrQixFQUFFLENBQUM7UUFDaEMsS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUFjdGlvbiwgQWN0aW9uQ2F0ZWdvcnkgfSBmcm9tIFwiLi9CYXNlQWN0aW9uXCI7XG5pbXBvcnQge1RoaW5nfSBmcm9tIFwiLi4vY2hhcmFjdGVyL1RoaW5nXCI7XG5pbXBvcnQge0VmZmVjdH0gZnJvbSBcIi4uL1dJUC9FZmZlY3RzXCI7XG5pbXBvcnQge0F0dHJpYnV0ZX0gZnJvbSBcIi4uL1dJUC9BdHRyaWJ1dGVcIjtcblxuY2xhc3MgSGVhbEFjdGlvbiBleHRlbmRzIEJhc2VBY3Rpb24ge1xuXG4gICAgcHJvdGVjdGVkIF9pZDogMDtcbiAgICBwcm90ZWN0ZWQgX25hbWU6IFwiSGVhbFwiO1xuICAgIHByb3RlY3RlZCBfZGVzY3JpcHRpb246IFwiSGVhbCBhIHRhcmdldFwiO1xuICAgIHByb3RlY3RlZCBfY2F0ZWdvcnk6IEFjdGlvbkNhdGVnb3J5Lk1FTlU7XG4gICAgICBcbiAgICAvKiB7QGluaGVyaXREb2N9ICovXG4gICAgcHVibGljIGdldCB3YWl0VGltZSgpIDogbnVtYmVyIHtcbiAgICAgICAgbGV0IGF2Z1NwZWVkID0gMDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7IFxuICAgICAgICAgICAgYXZnU3BlZWQgKz0gdGFyZ2V0LnNwZWVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKyAoYXZnU3BlZWQgKiB0aGlzLl90YXJnZXRzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoge0Bpbmhlcml0RG9jfSAqL1xuICAgIHB1YmxpYyBnZXQgZXhlY3V0aW9uVGltZSgpIDogbnVtYmVyIHtcbiAgICAgICAgbGV0IGF2Z1NwZWVkID0gMDtcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5mb3JFYWNoKHRhcmdldCA9PiB7IFxuICAgICAgICAgICAgYXZnU3BlZWQgKz0gdGFyZ2V0LnNwZWVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCkgKyAoYXZnU3BlZWQgKiB0aGlzLl90YXJnZXRzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoge0Bpbmhlcml0RG9jfSAqL1xuICAgIHB1YmxpYyBnZXQgcmVjb3ZlcnlUaW1lKCkgOiBudW1iZXIge1xuICAgICAgICBsZXQgYXZnU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLl90YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IHsgXG4gICAgICAgICAgICBhdmdTcGVlZCArPSB0YXJnZXQuc3BlZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKSArIChhdmdTcGVlZCAqIHRoaXMuX3RhcmdldHMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKiB7QGluaGVyaXREb2N9ICovXG4gICAgcHVibGljIGdldCBjb29sZG93blRpbWUoKSA6IG51bWJlciB7XG4gICAgICAgIGxldCBhdmdTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuX3RhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4geyBcbiAgICAgICAgICAgIGF2Z1NwZWVkICs9IHRhcmdldC5zcGVlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpICsgKGF2Z1NwZWVkICogdGhpcy5fdGFyZ2V0cy5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qIHtAaW5oZXJpdERvY30gKi9cbiAgICBleGVjdXRlKGFjdG9yczogQXJyYXk8VGhpbmc+LCB0YXJnZXRzOiBBcnJheTxUaGluZz4pIHtcbiAgICAgICAgbGV0IGVmZmVjdHM6IEFycmF5PEVmZmVjdD4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgZWZmZWN0cy5wdXNoKG5ldyBFZmZlY3QodGFyZ2V0LmlkLCBBdHRyaWJ1dGUuTGlmZSwgYW1vdW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVmZmVjdHM7XG4gICAgfVxufVxuIl19