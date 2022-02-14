var overseerMiners = require("overseerMiners");

module.exports.loop = function(){
    if(Object.keys(Game.spawns).length < 1){
        console.log("No spawns in room; Aborting...");
        return;
    }

    var sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES);

    var minerNames = [];

    for(name in Game.creeps){
        var creep = Game.creeps[name];
        if(creep.memory.role == "miner"){
            minerNames.push(name);
        }else{
            console.log("ERR: creep does not fall into a category");
        }
    }

    overseerMiners.run(sources, minerNames);

};
