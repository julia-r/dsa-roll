
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
            // Body skills
            athletics: {
                name: "Athletik",
                attributes: ["ge", "ko", "kk"],
                value: 7
            },
            climb: {
                name: "Klettern",
                attributes: ["mu", "ge", "kk"],
                value: 7
            },
            body: {
                name: "Körperbeherrschung",
                attributes: ["mu", "in", "ge"],
                value: 7
            },
            sneek: {
                name: "Schleichen",
                attributes: ["mu", "in", "ge"],
                value: 7
            },
            swim: {
                name: "Schwimmen",
                attributes: ["ge", "ko", "kk"],
                value: 7
            },
            self: {
                name: "Sich verstecken",
                attributes: ["mu", "in", "ge"],
                value: 13
            },
            hide: {
                name: "Selbstbeherrschung",
                attributes: ["mu", "ko", "kk"],
                value: 9
            },
            sing: {
                name: "Singen",
                attributes: ["in", "ch", "ch"],
                value: 0
            },
            sinn: {
                name: "Sinnenschärfe",
                attributes: ["kl", "in", "in"],
                value: 9
            },
            voices: {
                name: "Stimmen imitieren",
                attributes: ["kl", "in", "ch"],
                value: 1
            },
            dance: {
                name: "Tanzen",
                attributes: ["ch", "ge", "ge"],
                value: 1
            },
            drink: {
                name: "Zechen",
                attributes: ["in", "ko", "kk"],
                value: 2
            },

            // society skills
            etiquette: {
                name: "Etikette",
                attributes: ["kl", "in", "ch"],
                value: 6
            },
            peopleskills: {
                name: "Menschenkenntnis",
                attributes: ["kl", "in", "ch"],
                value: 7
            },
            persuade: {
                name: "Überreden",
                attributes: ["mu", "in", "ch"],
                value: 5
            },

            // Nature skills
            tracks: {
                name: "Fährtensuchen",
                attributes: ["kl", "in", "ko"],
                value: 10
            },
            traps: {
                name: "Fallen stellen",
                attributes: ["kl", "ff", "kk"],
                value: 9
            },
            bind: {
                name: "Fesseln/Entfesseln",
                attributes: ["ff", "ge", "kk"],
                value: 8
            },
            fish: {
                name: "Fischen/Angeln",
                attributes: ["in", "ff", "kk"],
                value: 10
            },
            orientation: {
                name: "Orientierung",
                attributes: ["kl", "in", "in"],
                value: 8
            },
            weather: {
                name: "Wettervorhersage",
                attributes: ["kl", "in", "in"],
                value: 5
            },
            survival: {
                name: "Wildnisleben",
                attributes: ["in", "ge", "ko"],
                value: 12
            },
            bind: {
                name: "Fesseln/Entfesseln",
                attributes: ["ff", "ge", "kk"],
                value: 8
            },
            fish: {
                name: "Fischen/Angeln",
                attributes: ["in", "ff", "kk"],
                value: 10
            },
            orientation: {
                name: "Orientierung",
                attributes: ["kl", "in", "in"],
                value: 8
            },
            weather: {
                name: "Wettervorhersage",
                attributes: ["kl", "in", "in"],
                value: 5
            },
            survival: {
                name: "Wildnisleben",
                attributes: ["in", "ge", "ko"],
                value: 12
            },

            //Knowledge skills
            gods: {
                name: "Götter und Kulte",
                attributes: ["kl", "kl", "in"],
                value: 1
            },
            herbalism: {
                name: "Pflanzenkunde",
                attributes: ["kl", "in", "ff"],
                value: 12
            },
            calc: {
                name: "Rechnen",
                attributes: ["kl", "kl", "in"],
                value: 9
            },
            legends: {
                name: "Sagen und Legenden",
                attributes: ["kl", "in", "ch"],
                value: 2
            },
            animals: {
                name: "Tierkunde",
                attributes: ["mu", "kl", "in"],
                value: 12
            },

             //Craft skills
            train: {
                name: "Abrichten",
                attributes: ["mu", "in", "ch"],
                value: 8
            },
            farm: {
                name: "Ackerbau",
                attributes: ["in", "ff", "ko"],
                value: 1
            },
            bows: {
                name: "Bogenbau",
                attributes: ["kl", "in", "ff"],
                value: 9
            },
            boots: {
                name: "Boote fahren",
                attributes: ["ge", "ko", "kk"],
                value: 0
            },
            tan: {
                name: "Gerber/Kürschner",
                attributes: ["kl", "ff", "ko"],
                value: 7
            },
            housekeeping: {
                name: "Hauswirtschaft",
                attributes: ["in", "ch", "ff"],
                value: 7
            },
            healPoison: {
                name: "Heilkunde: Gift",
                attributes: ["mu", "kl", "in"],
                value: 7
            },
            healIllness: {
                name: "Heilkunde: Krankheiten",
                attributes: ["mu", "kl", "ch"],
                value: 6
            },
            healWounds: {
                name: "Heilkunde: Wunden",
                attributes: ["kl", "ch", "ff"],
                value: 9
            },
            woodwork: {
                name: "Holzbearbeitung",
                attributes: ["kl", "ff", "kk"],
                value: 7
            },
            cook: {
                name: "Kochen",
                attributes: ["kl", "in", "ff"],
                value: 8
            },
            leatherwork: {
                name: "Lederarbeiten",
                attributes: ["kl", "ff", "ff"],
                value: 8
            },
            draw: {
                name: "Malen/Zeichnen",
                attributes: ["kl", "in", "ff"],
                value: 0
            },
            sew: {
                name: "Schneidern",
                attributes: ["kl", "ff", "ff"],
                value: 7
            }
        },
        logs: "",
        editMode: "false"
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
        },

        toogleEdit: function(){
            if(this.editMode === true){
                this.editMode = false;
            }
            else {
                this.editMode = true;
            }
        }
    },
    config: {
        debug: true
    }
});