const shadow = extend(UnitType, "shadow", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect("basement-shadow-spinner", unit.x, unit.y, Time.time * 12);
                Draw.rect("basement-shadow-spinner-outline", unit.x, unit.y, Time.time * 12);
                }
             });
shadow.constructor = () => extend(UnitEntity, {});
