const shadow = extend(UnitType, "shadow", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect("basement-shadow-spinner", unit.x, unit.y, Time.time * 10);
                Draw.rect("basement-shadow-spinner-outline", unit.x, unit.y, Time.time * 10);
                Draw.rect("basement-shadow-glow", unit.x, unit.y, Time.time * -10);
                }
             });
shadow.constructor = () => extend(UnitEntity, {});

const carrier = extendContent(UnitType, "carrier", {});
carrier.constructor = () => extend(UnitEntity, {
});

const support-truck = extendContent(UnitType, "support-truck", {});
support-truck.constructor = () => extend(UnitEntity, {
});

const oxypoly = extendContent(UnitType, "oxypoly", {});
oxypoly.constructor = () => extend(UnitEntity, {
});
