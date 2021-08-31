const statuses = require("libs/statuses")
const refresh = require("libs/refresh")

const forcer = extendContent(UnitType, "forcer", {});
forcer.constructor = () => extend(UnitEntity, {
});
Events.on(ClientLoadEvent, b  => {

   forcer.abilities.add(new StatusFieldAbility(statuses.swiftStatus, 180, 60, 80));
});
