//将控制台的log输出到左上角
Cheat.ExecuteCommand('con_filter_enable 2');
Cheat.ExecuteCommand('developer 1');

//全局API以及hitbox
hitboxes = [
    'body',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    'neck'
];
var shots = 0;
var misses = 0;
var predicthc = 0;
var safety1 = 0;
var hitboxName = "";
var hitbox = "";
var choked1 = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
var nlogs = [];
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

//全局API对应fire,hit,miss
var target = -1;
var shots_fired = 0;
var hits = 0;
var misses = 0;
var lastUpdate = 0;
var logged = false;
var myPing = Math.floor(Local.Latency()*1000/1.5);
var tickrate = Globals.Tickrate()
var jopadeath = Math.floor(Local.Latency()*1000/2.5);

//HIT LOG
function hitlog() {
//API
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
      var simtime = Globals.Tickcount() % 17;

n4m3 = Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))

    var group = HitgroupName(Event.GetInt("hitgroup"))
    var dmg = Event.GetInt("dmg_health")
    var rem_health = Event.GetInt("health")
    var text = "Hit " +  n4m3 + " in the " + group + " for " + dmg + " damage(" + rem_health + " health remaining)"

    if (me == attackerIndex && me != victimIndex) {1
    if (hittype == "Hit ") {

Cheat.ExecuteCommand("echo " + '"' + text + '"'   );
        Cheat.PrintColor([250,176,119,255],"[onetap] ")

        }   
        }
        }

function main1() {
  Global.RegisterCallback("player_hurt", "hitlog");
}
main1();
