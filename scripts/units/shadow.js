const shadow = extend(UnitType, "shadow", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect("shadow-spinner", unit.x, unit.y, Time.time * 12);
                Draw.rect("shadow-spinner", unit.x, unit.y, (Time.time +6) * 12);
                Draw.rect("shadow-spinner", unit.x, unit.y, (Time.time -6) * 12);
                Draw.rect("shadow-spinner", unit.x, unit.y, (Time.time +12) * 12);
                Draw.rect("shadow-spinner", unit.x, unit.y, (Time.time -12) * 12);
                Draw.rect("shadow-spinner-outline", unit.x, unit.y, Time.time * 12);
                Draw.rect("shadow-spinner-outline", unit.x, unit.y, (Time.time +6) * 12);
                Draw.rect("shadow-spinner-outline", unit.x, unit.y, (Time.time -6) * 12);
                Draw.rect("shadow-spinner-outline", unit.x, unit.y, (Time.time +12) * 12);
                Draw.rect("shadow-spinner-outline", unit.x, unit.y, (Time.time -12) * 12);
                }
             });
shadow.constructor = () => extend(UnitEntity, {});
