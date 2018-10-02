
var vm = new Vue({
    el: '#app',
    data: {
        myAttributes: {
            mu: {
                name: "Mut",
                value: 14
            },
            kl:{
                name: "Klugheit",
                value: 11
            },
            in: {
                name: "Intuition",
                value: 14,
            },
            ch: {
                name: "Charisma",
                value: 11,
            },
            ff: {
                name: "Fingerfertigkeit",
                value: 13
            },
            ge: {
                name: "Gewandtheit",
                value: 14
            },
            ko: {
                name: "Konstitution",
                value: 13
            },
            kk: {
                name: "Körperkraft",
                value: 15
            }            
        },
        skills: {
            sneek: {
                name: "Schleichen",
                attributes: ["mu", "in", "ge"],
                value: 7
            }
        },
        logs: ""
    },
    computed: {},
    watch: {},
    methods: {
        rollSkill: function(skillID) {
            var self = this;
            var roll, thisAttribute, attributeName, attributeValue;
            var skillName = self.skills[skillID].name;
            var skillValue = self.skills[skillID].value;
            var skillCheck = skillValue;
            
            var tempLog = "<h3>Würfele " + skillName +" (" + skillValue + ") </h3>";
            for(i = 0; i < 3; i++){
                roll = self.rollD20();
                thisAttribute = self.skills[skillID].attributes[i];
                attributeName = this.myAttributes[thisAttribute].name;
                attributeValue = this.myAttributes[thisAttribute].value;
                if(roll <= attributeValue){
                    tempLog += attributeName + " (" + attributeValue + "): <span class='green'>" + roll + "</span>  <br>";
                }
                else {
                    tempLog += attributeName + " (" + attributeValue + "): <span class='red'>" + roll + "</span> <br>";
                    skillCheck -= roll - attributeValue;
                } 
            }
            if(skillCheck >= 0){
                tempLog += "<span class='green'>Erfolg: " + skillCheck + "</span>";
            }
            else {
                tempLog += "<span class='red'>Misserfolg: " + skillCheck + "</span>";
            }
            self.logs = tempLog;
        },

        rollD20: function(){
            return Math.floor(Math.random()*(20)+1);
        }
    },
    config: {
        debug: true
    }
});