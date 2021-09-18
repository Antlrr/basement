//this is just so I can arrange the tiers in game

const detonate = extendContent(UnitType, "detonate", {});
detonate.constructor = () => extend(UnitEntity, {
});

const discharge = extendContent(UnitType, "discharge", {});
discharge.constructor = () => extend(UnitEntity, {
});

const disentegrate = extendContent(UnitType, "disentegrate", {});
disentegrate.constructor = () => extend(UnitEntity, {
});

const ignite = extendContent(UnitType, "ignite", {});
ignite.constructor = () => extend(UnitEntity, {
});

const forcer = extendContent(UnitType, "forcer", {});
forcer.constructor = () => extend(MechUnit, {
});

const impulse = extendContent(UnitType, "impulse", {});
impulse.constructor = () => extend(LegsUnit, {
});

const outburst = extendContent(UnitType, "outburst", {});
outburst.constructor = () => extend(LegsUnit, {
});
