const shadow = extend(UnitType, "shadow", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect("shadow-spinner", unit.x, unity., Time.time *12);
                }
             });
shadow.constructor = () => extend(UnitEntity, {});
