var workerMiner = require("workerMiner");

var overseerMiners = {
    run: function(sources, minerNames){
        var sourceMax = [1, 1];

        // calcuate how many workers have been assigned to each source
        var sourceCur = [0, 0]; 
        for(const nameIndex in minerNames){
            var creep = Game.creeps[minerNames[nameIndex]];
            var minerSourceIndex = creep.memory.targetSourceIndex;

            console.log(creep);
            console.log(minerSourceIndex);

            sourceCur[minerSourceIndex]++;
        }

        // if there aren't enough workers at a source, spawn a new one
        // and assign it to that source
        for(var i = 0; i < sources.length; i++){
            if(sourceCur[i] < sourceMax[i] &&
               !Game.spawns["Spawn1"].spawning){

                console.log("Insufficient miners at source "+i+"Spawning...");
                var attributes = [WORK, CARRY, MOVE];
                var name = "Miner" + Game.time;
                var opts = {memory: {role: 'miner', targetSourceIndex: i}};
                Game.spawns["Spawn1"].spawnCreep(attributes, name, opts);
            }
        }



        // tell the workers to keep working
        for(const nameIndex in minerNames){
            var creep = Game.creeps[minerNames[nameIndex]];
            workerMiner.run(creep, sources);
        }
    }
};

module.exports = overseerMiners;
