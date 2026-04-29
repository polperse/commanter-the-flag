# Commander the Flag

**Official Format Rules**  
**Version:** v1.0 Playtest — Edge Case Update  
**Created by:** Pol Persello (@polperse)  
**Invented on:** December 19, 2025

Commander the Flag is a fan-made casual 2v2 Commander format for *Magic: The Gathering*, built around territorial objectives, siege combat, team coordination, and dramatic flag captures.

Each team defends a Tower that contains its Flag and a Flag Keeper. The goal is to break through the enemy Tower, defeat its Flag Keeper, capture the enemy Flag, and secure it in your own Tower long enough to win.

This format replaces normal player life totals with team-based Tower rules.

---

## 1. Format Overview

Commander the Flag is designed for two teams of two players.

The format prioritizes:

- meaningful combat
- team coordination
- clear tactical decisions
- epic siege and recovery moments
- reduced reliance on locks, infinite combos, and abusive global effects

Commander the Flag is not intended to be a competitive format. It is strategic, thematic, social, and currently in playtest.

---

## 2. Teams, Shared Turns, And Player Resources

Commander the Flag uses **shared team turns**, similar to Two-Headed Giant.

Both players on a team take their turn at the same time. They untap together, draw together, move through phases together, declare attacks together, and end the turn together.

Teammates may openly discuss strategy, look at each other's hands, and decide actions together.

However, each player still controls only their own cards, permanents, mana, graveyard, library, and commander unless a card or Commander the Flag rule says otherwise.

### 2.1 No Normal Player Life Totals

Commander the Flag replaces normal player life totals.

Players do not start with individual life totals. Instead, each team has:

- a Tower
- a Wall HP total
- a Flag
- a Flag Keeper
- Morale, once the Wall has been broken

Effects that refer to a player's life total, losing life, gaining life, paying life, poison counters, or similar life-based resources are handled by the rules in this document.

### 2.2 Individual Players Still Exist

Even though life totals are replaced, players still exist for all other rules purposes.

Players may still be targeted by spells and abilities if those spells or abilities can legally target players. When those effects would affect life, damage, poison, or similar resources, apply the Commander the Flag replacement rules below.

---

## 3. Win Condition

A team wins the game if both conditions are true:

1. That team's own Flag is **Home-Secured** in its Tower Zone.
2. The enemy Flag is **Seized** in that team's Tower Zone.

That team must keep both conditions true for **3 consecutive team upkeeps**.

A team cannot win if its own Flag is not Home-Secured, even if it controls the enemy Flag.

### 3.1 Tracking The Win Condition

At the beginning of a team's upkeep, after all Flag securing and Flag returning checks for that upkeep have been resolved, check whether that team meets the win condition.

- If that team's own Flag is Home-Secured in its Tower Zone and the enemy Flag is Seized in that team's Tower Zone, that team gains 1 victory count.
- If either condition is not true, that team's victory count resets to 0.
- If a team's victory count reaches 3, that team wins the game.

The upkeep in which the enemy Flag becomes Seized may count as the first victory upkeep, as long as that team's own Flag is also Home-Secured at that same checkpoint.

---

## 4. Game Zones

Commander the Flag uses all normal Magic zones and adds one special format zone.

### 4.1 Tower Zone

The Tower Zone is a special zone separate from the battlefield.

Each team's Tower Zone may contain:

- that team's own Flag, if it is Home-Secured
- the enemy Flag, if it is Seized in that Tower
- that team's Flag Keeper, if it has not been defeated
- that team's Wall HP
- that team's Morale, if active

Permanents and objects in the Tower Zone are not on the battlefield and cannot be affected by spells or abilities that affect creatures or permanents on the battlefield, unless a Commander the Flag rule explicitly says otherwise.

Effects such as "each creature", "all creatures", or similar global battlefield effects do not affect objects in the Tower Zone.

### 4.2 Objects In The Tower Zone

Objects in the Tower Zone are not creatures, permanents, artifacts, enchantments, battles, planeswalkers, players, or tokens unless a Commander the Flag rule explicitly says otherwise.

The Tower Zone exists to track format objectives and defensive resources.

---

## 5. Flag States

Each Flag always has an owner team and one current state.

A Flag can be in exactly one of the following four official states:

1. **Home-Secured**
2. **Seized**
3. **Carried**
4. **Dropped**

### 5.1 Home-Secured

A Flag is Home-Secured when it is secured in its owner team's Tower Zone.

Example: The Blue Flag is in Team Blue's Tower Zone.

### 5.2 Seized

A Flag is Seized when it is secured in the enemy team's Tower Zone.

Example: The Blue Flag is in Team Red's Tower Zone.

A Seized Flag counts toward the enemy team's victory condition, but only if the enemy team's own Flag is also Home-Secured.

### 5.3 Carried

A Flag is Carried when it is being transported by a creature.

While a creature carries a Flag:

- it gains Ward {2} from the Flag
- it is considered the Flag Carrier
- if it leaves the battlefield for any reason, the Flag becomes Dropped
- it cannot change controllers
- copy effects do not copy Flags or the status of carrying a Flag

A creature can carry only one Flag at a time.

### 5.4 Dropped

A Flag is Dropped when it is in the open and has no carrier.

A Dropped Flag:

- remains Dropped until a creature successfully picks it up
- is not a permanent
- cannot be targeted by spells or abilities
- cannot be copied, cloned, stolen, exiled, bounced, destroyed, or otherwise affected by noncombat effects
- can only be interacted with through combat using the Pick Up rules

### 5.5 Capture And Recovery Are Actions, Not States

"Capture" and "recover" describe what a team is doing when it picks up a Flag.

- If a team picks up the enemy team's Flag, that Flag is being captured.
- If a team picks up its own Flag, that Flag is being recovered.

In both cases, the Flag becomes **Carried**.

---

## 6. The Wall

Each team's Tower begins the game with **20 Wall HP**.

The Wall is not a permanent. It is a team defensive resource.

While a team's Wall HP is greater than 0:

- the enemy team cannot interact with that team's Flag Keeper
- the enemy team cannot access any Flags in that Tower Zone
- that team does not have Morale

### 6.1 Damaging The Wall

The Wall can be damaged in the following ways:

- creatures attack the Tower and deal unblocked combat damage to the Wall
- trample damage left over after blockers is dealt to the Wall
- spells or abilities that can deal damage to "any target" or to a player may damage the Wall
- effects that would cause players on that team to lose life reduce that team's Wall HP instead

For Commander the Flag rules, the Wall may be chosen as though it were a player for spells and abilities that deal damage to a player.

The Wall is not actually a player, permanent, creature, artifact, battle, or planeswalker.

Direct spell or ability damage to the Wall cannot be blocked. Combat damage can be blocked normally.

Damage dealt to the Wall is not damage dealt to a player unless a playgroup agrees otherwise before the game.

Sources with infect or wither deal normal damage to the Wall. They do not place counters on the Wall and do not give poison counters while the Wall is up.

Deathtouch has no destructive effect against the Wall beyond the normal damage dealt by that source.

### 6.2 Paying Life While The Wall Is Up

While a team's Wall HP is greater than 0, if a cost requires a player on that team to pay life, that team pays that much Wall HP instead.

Paying Wall HP this way is a cost, not life loss.

Your team must have enough Wall HP to pay the full cost. If your team does not have enough Wall HP, that cost cannot be paid.

**Example:** If your Wall has 1 HP and an ability requires you to pay 2 life, you cannot pay that cost.

### 6.3 Life Loss And Noncombat Damage While The Wall Is Up

While a team's Wall HP is greater than 0, life loss and noncombat damage that would be dealt to a player on that team are applied to that team's Wall HP instead.

Life loss is not the same as paying life.

If an effect causes a player on that team to lose life, that team loses that much Wall HP instead. This can reduce the Wall HP to 0 and break the Wall.

If an effect would deal noncombat damage to a player on that team, that team loses that much Wall HP instead. This can reduce the Wall HP to 0 and break the Wall.

If life loss or noncombat damage would reduce a team's Wall HP below 0, reduce it to 0 instead. Excess life loss or damage does not carry over to Morale unless the playgroup agrees otherwise before the game.

If an effect would cause a player on that team to gain life while Wall HP is greater than 0, that team repairs that much Wall HP instead, up to a maximum of 20.

If an effect would cause multiple players on the same team to lose life, gain life, or be dealt noncombat damage at the same time, apply that effect to that team's Wall HP only once.

**Example:** If your Wall has 1 HP and a spell says "target player loses 2 life", your Wall loses 2 HP, is reduced to 0, and breaks. The extra 1 life loss does not carry over to Morale.

**Example:** If a spell says "each opponent loses 2 life", the opposing team loses 2 Wall HP, not 4.

**Example:** If an ability says "whenever a creature dies, each opponent loses 1 life", the opposing team loses 1 Wall HP per trigger, not 2.

Wall HP loss is not life loss.

### 6.4 Poison, Infect, And Wither While The Wall Is Up

While a team's Wall HP is greater than 0, that team's Tower is treated as an inert defensive object for poison, infect, and wither purposes.

Poison counters do not affect the Wall.

Wither and infect do not place counters on the Wall.

Effects that would give poison counters to a player on that team do nothing while that team's Wall HP is greater than 0.

Sources with infect or wither still deal normal damage to the Wall.

### 6.5 Repairing The Wall

A team may repair its Wall only while that Wall HP is greater than 0.

Once a team's Wall reaches 0 HP for the first time, that Wall is considered broken for the rest of the game and cannot be repaired by any means.

There are two ways to repair your Wall before it breaks:

1. If an effect would cause a player on your team to gain life while your Wall HP is greater than 0, your team repairs that much Wall HP instead.
2. Your team may use the Heal Wall special action.

### 6.6 Heal Wall

Heal Wall is a special format action.

During your team's first main phase, players on your team may sacrifice 1/1 creatures to repair your Wall.

For each 1/1 creature sacrificed this way, your team repairs 1 Wall HP.

Heal Wall has the following restrictions:

- it can only be used during your team's first main phase
- it cannot be used during the second main phase
- it cannot be used outside your team's turn
- it cannot be used if your Wall has already reached 0 HP this game
- your Wall HP cannot go above 20
- your team cannot repair more than 5 Wall HP per turn this way

This restriction is intended to prevent abuse from tokens created after combat.

---

## 7. Morale

When a team's Wall reaches 0 HP for the first time, that team gains **20 Morale**.

Once Morale is active, it remains active for the rest of the game.

Morale represents the defenders' remaining will to keep fighting after the Tower has been breached.

Morale is not life, but it is used for effects that would normally require or affect life once the Wall has been broken.

Morale cannot go above 20 and cannot go below 0.

A team does not lose the game for having 0 Morale.

Wall HP loss and Morale loss are not life loss.

### 7.1 Paying Life

If an effect requires a player on your team to pay life while your team has Morale, your team pays that much Morale instead.

If your team does not have enough Morale to pay the full cost, that cost cannot be paid.

Paying Morale this way is a payment, not life loss. It does not trigger abilities that trigger when a player loses life.

### 7.2 Losing Life

If an effect would cause a player on your team to lose life while your team has Morale, your team loses that much Morale instead.

If an effect would cause multiple players on the same team to lose life at the same time, apply that effect to that team's Morale only once.

Morale loss is not life loss.

### 7.3 Noncombat Damage To Players

If an effect would deal noncombat damage to a player on your team while your team has Morale, your team loses that much Morale instead.

If an effect would deal noncombat damage to multiple players on the same team at the same time, apply that effect to that team's Morale only once.

### 7.4 Gaining Life

If an effect would cause a player on your team to gain life while your team has Morale, your team gains that much Morale instead.

Morale cannot go above 20.

If an effect would cause multiple players on the same team to gain life at the same time, apply that effect to that team's Morale only once.

### 7.5 Lifelink

Lifelink functions normally.

If a player would gain life from lifelink, that player's team repairs Wall HP if its Wall is still standing, or gains Morale if Morale is active.

### 7.6 Checking Or Setting Life Totals

If an effect checks a player's life total, use that player's team's current Wall HP if the Wall has not been broken, or that player's team's current Morale if Morale is active.

Effects that would set a player's life total to a specific number are ignored unless the playgroup agrees before the game to handle them differently.

### 7.7 Morale And The Flag Keeper

Morale modifies your Flag Keeper during attacks against it.

- While your team has 16 to 20 Morale, your Flag Keeper gets +1/+1.
- While your team has 6 to 15 Morale, your Flag Keeper gets no modifier.
- While your team has 1 to 5 Morale, your Flag Keeper gets -1/-1.
- While your team has 0 Morale, your Flag Keeper loses Defensive Aura, Heavy Armor, and Defensive Slash.

These modifiers only matter while creatures are attacking your Flag Keeper.

### 7.8 Poison After The Wall Is Broken

If an effect would give poison counters to a player on a team that has Morale, that team loses 2 Morale for each poison counter instead.

Players do not receive poison counters in Commander the Flag.

### 7.9 Wither And Infect After The Wall Is Broken

If a source with wither or infect would deal damage to a Flag Keeper, that damage is treated as normal damage to the Flag Keeper.

Wither and infect do not place -1/-1 counters on the Flag Keeper, and poison counters are not created.

In addition to the normal damage dealt to the Flag Keeper, the defending team loses that much Morale.

Deathtouch applies normally. If a source with deathtouch deals damage to a Flag Keeper, that damage is enough to destroy the Flag Keeper.

---

## 8. The Flag Keeper

Each Tower is protected by a Flag Keeper.

At the beginning of the game, each team randomly chooses or is assigned one Flag Keeper from the official playtest list.

The Flag Keeper exists only in the Tower Zone.

A Flag Keeper is a special format object with power, toughness, and abilities for Commander the Flag combat purposes. It is not a permanent and is not on the battlefield.

Although a Flag Keeper is not a normal creature permanent, it uses power, toughness, damage, and creature combat concepts when creatures attack it.

### 8.1 Flag Keeper Properties

A Flag Keeper:

- has permanent shroud
- cannot be targeted by spells or abilities
- cannot leave the Tower Zone for any reason
- can only be damaged or destroyed through combat while creatures are attacking that Tower
- cannot be copied, cloned, stolen, exiled, bounced, reanimated, or replaced

The Flag Keeper functions as a defensive boss, not as a normal creature.

### 8.2 Defeated Flag Keepers

When a Flag Keeper is destroyed, it remains defeated for the rest of the game.

It does not return to the Tower Zone and cannot be revived, restored, copied, or replaced unless a future Commander the Flag rule explicitly says otherwise.

Defeating the Flag Keeper is a permanent milestone.

### 8.3 Protection From A Random Color

If a Flag Keeper has protection from a color, determine the protected color randomly at the beginning of the game.

Damage that would be dealt to that Flag Keeper by sources of the protected color is prevented.

Other aspects of protection, such as targeting, enchanting, equipping, or blocking restrictions, apply only if relevant under Commander the Flag rules.

A creature of the protected color may still attack the Tower and reach the Flag Keeper, but damage from that creature to the Flag Keeper is prevented.

---

## 9. Commanders

Each player has a commander and follows the normal Commander rules for that commander, except where Commander the Flag rules say otherwise.

Commanders are not the only creatures that can capture Flags.

Any creature with base power 2 or greater can capture or pick up a Flag if the relevant requirements are met.

Commander damage does not cause a player or team to lose the game in Commander the Flag.

---

## 10. Combat And Attack Options

During combat, an attacking team may declare attacks against:

- an enemy Tower
- an enemy creature carrying that team's Flag
- a Dropped Flag, if attempting to recover, capture, or contest it
- planeswalkers, battles, and other normally attackable permanents, following normal Magic rules

Players cannot normally be attacked directly in Commander the Flag.

The attacking team may attack with creatures controlled by either teammate.

The defending team may block with creatures controlled by either teammate, following normal blocking rules and restrictions unless a Commander the Flag rule says otherwise.

### 10.1 Goad And Effects That Require Attacking Players

If an effect requires a creature to attack a player, that requirement may be satisfied by attacking that player's team's Tower, a planeswalker that player controls, a battle that player protects, or another legal attackable object controlled or protected by that player.

If a creature is goaded or otherwise required to attack, it must attack if able, but its controller may choose any legal attackable objective unless the effect specifically restricts that choice.

---

## 11. Attack The Tower

"Attack the Tower" is the official action used to damage the Wall, fight the Flag Keeper, or access Flags inside a Tower Zone.

A Tower can be attacked whether its Wall is standing, broken, or already fully breached.

The result of attacking a Tower depends on the current state of that Tower at the time attackers are declared:

1. If the Tower has Wall HP greater than 0, attacking creatures are attacking the Wall.
2. If the Tower has 0 Wall HP and its Flag Keeper is still alive, attacking creatures are attacking the Flag Keeper.
3. If the Tower has 0 Wall HP and its Flag Keeper has already been defeated, attacking creatures may attempt to access any available Flags in that Tower Zone.

The defending team may declare blockers normally against creatures attacking its Tower.

### 11.1 Attacking The Wall

When creatures attack a Tower while its Wall HP is greater than 0, they are attacking the Wall.

The defending team may block with creatures on the battlefield.

Unblocked combat damage is dealt to the Wall.

Trample damage left over after blockers is dealt to the Wall.

If the Wall reaches 0 HP during combat, it breaks after combat damage is dealt. Attacking creatures do not continue to the Flag Keeper or to Flags during that same combat unless a playgroup agrees otherwise before the game.

### 11.2 Attacking The Flag Keeper

When a Tower's Wall HP is 0 and its Flag Keeper is still alive, creatures attacking that Tower are attacking the Flag Keeper.

Process:

1. The attacking team declares creatures as attacking the Tower.
2. Because the Wall is broken and the Flag Keeper is alive, those creatures are considered to be attacking the Flag Keeper.
3. The defending team declares blockers from the battlefield.
4. Blocked creatures fight their blockers on the battlefield.
5. Unblocked creatures reach the Flag Keeper.
6. Relevant Flag Keeper abilities trigger or apply.
7. Combat damage involving the Flag Keeper is resolved using the special Flag Keeper combat rules.
8. If the Flag Keeper receives lethal damage, it is destroyed.
9. If the Flag Keeper is destroyed and one or more eligible attacking creatures survived and reached it, those creatures may access available Flags in that Tower Zone after combat damage is resolved.

### 11.3 Accessing Flags In A Tower

If a Tower has 0 Wall HP and its Flag Keeper has been defeated, unblocked attacking creatures may access available Flags in that Tower Zone.

After blockers are declared and combat damage is resolved, each surviving unblocked attacking creature with base power 2 or greater may pick up one available Flag from that Tower Zone.

A creature can carry only one Flag at a time.

If multiple eligible creatures survive, each may pick up one available Flag.

The attacking team chooses which eligible creature picks up which available Flag.

### 11.4 Available Flags

A Tower Zone may contain zero, one, or two Flags.

A Flag is available if it is currently secured in that Tower Zone, whether it is Home-Secured or Seized.

The state of Flags outside the attacked Tower Zone does not matter when determining which Flags are available in that Tower.

If a creature picks up a Flag that belongs to the defending team, that Flag is being captured.

If a creature picks up a Flag that belongs to the attacking team, that Flag is being recovered.

In both cases, the picked-up Flag becomes Carried by that creature.

### 11.5 Examples Of Available Flags

**Example 1 — One Home-Secured Flag:** Team Red's Tower contains only the Red Flag in the Home-Secured state. If Team Blue successfully attacks that Tower and an eligible creature accesses the Flag, Team Blue captures the Red Flag.

**Example 2 — One Seized Flag:** Team Red's Tower contains only the Blue Flag in the Seized state. If Team Blue successfully attacks that Tower and an eligible creature accesses the Flag, Team Blue recovers the Blue Flag.

**Example 3 — Two Flags:** Team Red's Tower contains the Red Flag in the Home-Secured state and the Blue Flag in the Seized state. If Team Blue successfully attacks that Tower with two eligible creatures, one may recover the Blue Flag and the other may capture the Red Flag. If only one eligible creature survives, Team Blue chooses which single Flag to pick up.

---

## 12. Evasion While Attacking The Tower

Evasion abilities apply normally when determining whether defending creatures can block attacking creatures.

For example, if a flying creature attacks the Tower and the defending team has no creatures with flying or reach, that flying creature cannot be blocked by the defending team's ground creatures.

Landwalk, menace, fear, intimidate, shadow, flying, reach, and similar abilities may help attacking creatures get past battlefield defenders.

However, no evasion ability allows an attacking creature to bypass the Flag Keeper or capture a Flag directly.

If an attacking creature is not blocked while attacking a Tower whose Wall is broken and whose Flag Keeper is alive, that creature reaches the Flag Keeper and must fight the Flag Keeper before any Flag can be captured or recovered.

The Flag Keeper itself cannot be bypassed by flying, landwalk, unblockable effects, or similar evasion abilities.

Landwalk also functions against the Wall. When a creature with landwalk attacks a Tower, if the defending team controls a land of the relevant type, that creature cannot be blocked and its combat damage is dealt directly to the Wall.

---

## 13. Flag Keeper Combat Damage

During combat against a Flag Keeper, each unblocked attacking creature that reaches the Flag Keeper may deal combat damage to the Flag Keeper according to normal combat damage timing.

The Flag Keeper deals combat damage equal to its power to each unblocked attacking creature that reaches it.

This is a special Commander the Flag combat rule. The Flag Keeper does not divide its combat damage among attacking creatures.

If a blocked creature deals trample damage to the Flag Keeper, that creature is considered to have reached the Flag Keeper for damage purposes and receives combat damage from the Flag Keeper.

If the Flag Keeper has first strike or double strike, use the appropriate combat damage steps. If the Flag Keeper has double strike, it may deal its full combat damage to each relevant attacking creature during both the first-strike combat damage step and the regular combat damage step, if it survives long enough to do so.

---

## 14. Flag Keeper Special Abilities

Flag Keeper abilities function only while creatures are attacking the Flag Keeper.

They do not affect attacks against the Wall.

They do not affect creatures outside that combat.

### 14.1 Defensive Aura

Defensive Aura reduces damage dealt to the Flag Keeper by 1 from each source.

This applies to all damage, including combat damage.

Damage reduced this way cannot be reduced below 0.

### 14.2 Heavy Armor

Heavy Armor reduces damage dealt to the Flag Keeper by 2 from each source.

This applies to all damage, including combat damage.

Damage reduced this way cannot be reduced below 0.

### 14.3 Defensive Slash

Defensive Slash deals 1 pre-combat damage to each creature attacking that Flag Keeper.

Defensive Slash happens before the first-strike combat damage step.

If Defensive Slash destroys a creature, that creature does not deal combat damage during that combat.

This damage:

- happens before combat damage during a fight against the Flag Keeper
- does not replace normal combat damage
- can combine with other defensive abilities
- is normal damage, but is not combat damage
- does not apply deathtouch, lifelink, wither, infect, double strike, or any other damage-modifying ability unless a rule or Flag Keeper explicitly says otherwise

### 14.4 Second Wind

Second Wind is a Flag Keeper ability.

The first time a Flag Keeper with Second Wind would be destroyed, instead remove all damage from it and put a +1/+1 counter on it.

A Flag Keeper saved by Second Wind is not considered defeated.

---

## 15. Capturing, Recovering, And Carrying Flags

A creature may pick up a Flag only if it has **base power 2 or greater**.

Temporary power boosts, +1/+1 counters, Equipment, Auras, anthem effects, and similar modifiers do not allow a creature with base power 1 or less to capture, recover, or pick up a Flag.

For creatures with variable power, use the creature's base power as defined by its printed characteristics or characteristic-defining abilities, ignoring counters, temporary effects, Equipment, Auras, and anthem effects.

### 15.1 Capturing A Flag

A team captures a Flag when an eligible creature controlled by that team picks up the enemy team's Flag.

The captured Flag becomes Carried by that creature.

### 15.2 Recovering A Flag

A team recovers a Flag when an eligible creature controlled by that team picks up its own Flag.

The recovered Flag becomes Carried by that creature.

### 15.3 Ward From The Flag

The Flag grants Ward {2} to its holder.

Whenever a Flag Carrier becomes the target of a spell or ability an opponent controls, counter that spell or ability unless that player pays {2}.

### 15.4 Retreat And Securing A Carried Flag

A creature that picks up a Flag does not secure it immediately.

The Flag remains Carried until the beginning of that creature's team's next upkeep.

At the beginning of that upkeep, if the Flag Carrier is still on the battlefield:

- if the Flag belongs to the carrier's team, the Flag becomes Home-Secured in its owner team's Tower Zone
- if the Flag belongs to the enemy team, the Flag becomes Seized in the carrier team's Tower Zone

The creature itself does not enter the Tower Zone.

After the Flag becomes Home-Secured or Seized, that creature stops being the Flag Carrier.

---

## 16. Dropped Flags

If a Flag Carrier dies, is exiled, is bounced, phases out, or otherwise leaves the battlefield, the carried Flag becomes Dropped.

A Dropped Flag remains Dropped until a creature successfully picks it up.

A Dropped Flag:

- is a valid combat objective
- exists on the battlefield as a special format objective
- is not a permanent
- cannot be targeted by spells or abilities
- cannot be copied, cloned, stolen, exiled, bounced, destroyed, or otherwise affected by noncombat effects
- can only be interacted with through combat using the Pick Up rules

While a Flag is Dropped:

- creatures from the Flag's owner team may attack the Dropped Flag to recover it
- creatures from the opposing team may attack the Dropped Flag to capture, recapture, or secure it again
- enemy creatures may block those attacks to protect or contest the Flag

### 16.1 Picking Up A Dropped Flag

A creature can pick up a Dropped Flag if:

- it has base power 2 or greater
- it attacked the Dropped Flag with the intent to recover, capture, recapture, or secure it
- it was not stopped by blockers

That creature becomes the new Flag Carrier and gains Ward {2} from the Flag.

If a team picks up its own Flag, that Flag is being recovered.

If a team picks up the enemy Flag, that Flag is being captured again.

---

## 17. Recovering A Flag From An Enemy Flag Carrier

To recover your own Flag from an enemy Flag Carrier, you must defeat that carrier through combat.

The Flag Carrier may be attacked directly, as though it were a planeswalker.

The Flag Carrier must be dealt lethal combat damage by one or more attacking creatures controlled by your team, and at least one of those creatures must have base power 2 or greater.

At least one eligible creature that dealt combat damage to the Flag Carrier must survive combat in order to pick up the Flag.

If the Flag Carrier is defeated in combat but no eligible creature survives to pick up the Flag, the Flag becomes Dropped.

Direct damage spells, sacrifice effects, exile effects, bounce effects, and similar noncombat effects do not recover the Flag.

If the Flag Carrier leaves the battlefield outside combat, the Flag becomes Dropped instead.

---

## 18. Control, Auras, And Flag Carriers

A creature carrying a Flag has one mission: return to its Tower Zone.

While a creature carries a Flag:

- effects that prevent attacking or blocking do not stop it from transporting the Flag
- its tapped, untapped, stunned, unable-to-attack, or unable-to-block status does not prevent it from retreating with the Flag
- it gains Ward {2}
- it cannot change controllers
- it can be attacked normally by opponents during the retreat
- it is conceptually retreating, not actively joining normal combat

Copy effects do not copy Flags or the status of carrying a Flag.

---

## 19. Alternative Win And Loss Effects

The only way to win Commander the Flag is through the Flag victory condition.

Effects that say a player wins the game, loses the game, cannot win the game, or cannot lose the game are ignored.

Effects that would cause a player to lose the game for drawing from an empty library, having poison counters, or similar state-based conditions are also ignored unless Commander the Flag rules explicitly convert them into Wall HP or Morale loss.

Playgroups may choose before the game to allow alternative win conditions, but they are not part of the default v1.0 playtest rules.

---

## 20. Additional Balance Rules

The following balance rules apply:

- Flags cannot be copied, cloned, or duplicated.
- Flag Keepers cannot be copied, cloned, or duplicated.
- Global effects that say "each creature", "all creatures", or similar do not affect Flag Keepers in the Tower Zone.
- Global effects that say "each creature", "all creatures", or similar do not affect secured Flags or other objects in the Tower Zone.
- A creature with base power 1 or less cannot capture or pick up a Flag, even if its current power is 2 or greater due to modifiers.
- A Flag Keeper cannot be bypassed by flying, landwalk, unblockable effects, or any similar evasion ability.
- Players cannot be attacked directly.
- Planeswalkers, battles, and other normally attackable permanents may still be attacked following normal Magic rules.
- Wall HP loss and Morale loss are not life loss.
- Paying Wall HP or Morale as a replacement for paying life is not life loss.

---

## 21. Spirit Of The Format

Commander the Flag is built around siege gameplay, coordination, and table stories.

The intended experience is:

- break the enemy Wall
- survive the Flag Keeper
- capture the Flag
- defend the carrier
- recover from disaster
- win through teamwork

Players are encouraged to avoid strategies that undermine the format's core play pattern, such as hard locks, infinite combo kills, repeated non-games, or interactions that bypass the siege structure entirely.

---

## 22. Flag Keeper Appendix

The following Flag Keepers are part of the v1.0 playtest pool.

### 22.1 Weak Flag Keepers

Weak Flag Keepers may later be used in pairs if a "Weak Garrison" variant is tested.

#### Lantern Moth Adept

**Stats:** 2/1

**Abilities:**

- First Strike
- Defensive Slash

**Flavor:** A mystical moth that burns invaders as they enter.

**Gameplay:** Kills 1/1s, weakens 2/2s, and dies easily.

#### Clockwork Page

**Stats:** 1/3

**Abilities:**

- Second Wind
- Defensive Aura

**Second Wind:** The first time this Flag Keeper would be destroyed, instead remove all damage from it and put a +1/+1 counter on it.

**Flavor:** A minor defender, annoying but fragile.

**Gameplay:** Excellent against chip damage, but not a real threat.

### 22.2 Intermediate Flag Keepers

Intermediate Flag Keepers are the core of the format.

#### Runestone Gargoyle

**Stats:** 3/3

**Abilities:**

- Protection from a random color
- Defensive Aura

**Protection color:** Determine the protected color randomly at the beginning of the game.

**Flavor:** A runic guardian attuned to a specific kind of magic.

**Gameplay:** Forces attackers to attack through another color.

#### Ashclaw Duelist

**Stats:** 3/2

**Abilities:**

- Double Strike
- Defensive Slash

**Flavor:** Two daggers, two cuts before falling.

**Gameplay:** Brutal against swarm attacks, but dies to concentrated damage.

#### Mirrorlake Otter Mage

**Stats:** 2/4

**Abilities:**

- Protection from a random color
- Defensive Aura

**Protection color:** Determine the protected color randomly at the beginning of the game.

**Flavor:** Fluid magic makes it difficult to wear down with chip damage.

**Gameplay:** Excellent wall without being oppressive.

#### Grimroot Stag

**Stats:** 4/4

**Abilities:**

- Gym
- Defensive Aura

**Gym:** After each combat in which this Flag Keeper was attacked and survived, put a training counter on it. Remove 2 training counters from it: put a +1/+1 counter on it.

**Flavor:** An ancestral beast that pressures attackers without tricks.

**Gameplay:** Honest boss, clear read.

#### Stormcoil Serpent

**Stats:** 3/5

**Abilities:**

- Yummy
- Defensive Aura

**Yummy:** Whenever a creature is dealt lethal damage by this Flag Keeper and dies as a result, track one kill. For every three kills tracked this way, put a +1/+1 counter on this Flag Keeper.

**Flavor:** An electric serpent that controls space.

**Gameplay:** Punishes repeated medium-sized attacks.

#### Bastion Badger

**Stats:** 3/3

**Abilities:**

- Deathtouch
- Defensive Slash

**Flavor:** Small, but lethal on entry.

**Gameplay:** Forces coordination. You cannot just throw creatures into it.

### 22.3 Strong Flag Keepers

#### Obsidian Tortoise Matriarch

**Stats:** 5/6

**Abilities:**

- Protection from a random color
- Heavy Armor

**Protection color:** Determine the protected color randomly at the beginning of the game.

**Flavor:** Impenetrable shell plus magical affinity.

**Gameplay:** Pure defensive boss. Requires a real commitment.

#### Ironfur Dire Bear

**Stats:** 6/5

**Abilities:**

- Double Strike
- Heavy Armor

**Flavor:** Two claws, iron hide.

**Gameplay:** The "you do not enter with trash" guardian, but it falls to a plan.

---

## 23. Future Considerations

These items are not final rules, but are active playtest topics:

- Whether weak Flag Keepers should be used in pairs.
- Whether recovered Flags should return immediately or require a full turn cycle.
- Whether all creatures should gain haste while their team's Flag is captured.
- Whether Heal Wall's 5 HP per turn cap needs adjustment.
- Whether Morale thresholds should be tuned after testing.
- Whether wither and infect should always convert to Morale loss, or only when damaging Flag Keepers.
- Whether poison-to-Morale conversion should be 1:1, 2:1, or scale another way.
- Whether defeated Flag Keepers should ever return in longer games.
- Whether Clockwork Page's Second Wind creates enough defensive identity without making weak Flag Keepers too resilient.

---

## 24. Community Submissions

Custom Flag Keepers and format variants are planned for future community development.

For now, submissions should be routed through the Commander the Flag community Discord once it exists.

Suggested submission format:

- Flag Keeper name
- stats
- tier: weak, intermediate, or strong
- abilities
- flavor text
- gameplay role
- notes about possible balance concerns

Community submissions should support the core siege-and-capture structure of the format and avoid hard locks, non-combat wins, or designs that make the Flag Keeper impossible to meaningfully attack.

---

**End of Rules**  
**Commander the Flag — v1.0 Playtest Edge Case Update**
