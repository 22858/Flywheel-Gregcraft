ServerEvents.recipes(event => {
    event.remove({ type: 'enderio:alloy_smelting' })
    event.remove({ type: 'enderio:sag_mill' })
    event.remove({ id: 'enderio:sag_mill' })
    event.remove({ id: 'enderio:primitive_alloy_smelter' })
    event.remove({ id: 'enderio:slice_and_splice' })
    event.recipes.gtceu.assembler('z_logic')
        .itemInputs('2x #forge:plates/soularium', '1x minecraft:zombie_head', '2x #forge:dusts/silicon', '1x #gtceu:circuits/hv')
        .itemOutputs('1x enderio:z_logic_controller')
        .inputFluids(Fluid.of('gtceu:redstone_alloy', 144))
        .duration(272)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    //event.remove({ id: 'enderio:soul_binder' })
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:soul_binder'}, 'enderio:energized_gear' , '#forge:gears/energetic_alloy')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:soul_binder'}, '#forge:ingots/soularium' , '#forge:plates/soularium')
    //event.remove({ id: 'enderio:powered_spawner' })
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:powered_spawner'}, '#forge:ingots/soularium' , '#forge:plates/soularium')
    event.remove({ id: 'enderio:soul_engine' })
    event.remove({ id: 'enderio:xp_obelisk' })
    event.remove({ id: 'enderio:iron_gear' })
    event.remove({ id: 'enderio:vibrant_gear' })
    event.remove({ id: 'enderio:energized_gear' })
    event.remove({ id: 'enderio:stone_gear' })
    event.remove({ id: 'enderio:stone_gear_upgrade' })
    event.remove({ id: 'enderio:wood_gear' })
    event.remove({ id: 'enderio:wood_gear_corner' })
    event.remove({ id: 'enderio:void_chassis' })
    event.recipes.gtceu.assembler('void_chassis')
        .itemInputs('1x gtceu:dark_steel_frame', '4x enderio:dark_steel_bars')
        .itemOutputs('1x enderio:void_chassis')
        .inputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(450)
        .EUt(480)
    event.remove({ id: 'enderio:ensouled_chassis' })
    event.recipes.gtceu.assembler('ensouled_chassis')
        .itemInputs('1x gtceu:soularium_frame', '2x #forge:plates/nether_quartz', '4x enderio:soul_chain')
        .itemOutputs('1x enderio:ensouled_chassis')
        .duration(450)
        .EUt(480)
    event.remove({ id: 'enderio:soul_chain' })
    event.recipes.gtceu.chemical_bath('soul_chain')
        .itemInputs('1x minecraft:chain')
        .itemOutputs('1x enderio:soul_chain')
        .inputFluids(Fluid.of('gtceu:soulium', 288))
        .duration(90)
        .EUt(120)
    event.remove({ id: 'enderio:conduit_binder_composite' })
    //event.remove({ id: 'enderio:soularium_grinding_ball' })
    event.recipes.gtceu.fluid_solidifier('soularium_ball')
        .notConsumable('gtceu:ball_casting_mold')
        .itemOutputs('1x enderio:soularium_grinding_ball')
        .inputFluids(Fluid.of('gtceu:soularium', 72))
        .duration(100)
        .EUt(30)
    event.remove({ id: 'enderio:conductive_alloy_grinding_ball' })
    event.remove({ id: 'enderio:pulsating_alloy_grinding_ball' })
    event.remove({ id: 'enderio:redstone_alloy_grinding_ball' })
    event.remove({ id: 'enderio:vibrant_alloy_grinding_ball' })
    event.remove({ id: 'enderio:energetic_alloy_grinding_ball' })
    event.remove({ id: 'enderio:copper_alloy_grinding_ball' })
    //event.remove({ id: 'enderio:dark_steel_grinding_ball' })
    event.recipes.gtceu.fluid_solidifier('dark_steel_ball')
        .notConsumable('gtceu:ball_casting_mold')
        .itemOutputs('1x enderio:dark_steel_grinding_ball')
        .inputFluids(Fluid.of('gtceu:dark_steel', 72))
        .duration(100)
        .EUt(30)
    event.remove({ id: 'enderio:end_steel_grinding_ball' })
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:staff_of_levity'}, 'enderio:infinity_rod' , '#forge:rods/dark_steel')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:staff_of_travelling'}, '#forge:ingots/dark_steel' , '#forge:rods/dark_steel')
    event.remove({ id: 'enderio:pulsating_crystal' })
    event.recipes.gtceu.autoclave('pulsating_crystal')
        .itemInputs('1x #forge:dusts/diamond')
        .itemOutputs('1x enderio:pulsating_crystal')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 288))
        .duration(180)
        .EUt(480)
    event.remove({ id: 'enderio:vibrant_crystal' })
    event.recipes.gtceu.autoclave('vibrant_crystal')
        .itemInputs('1x #forge:dusts/emerald')
        .itemOutputs('1x enderio:vibrant_crystal')
        .inputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(180)
        .EUt(480)
    event.remove({ id: 'enderio:weather_crystal' })
    event.recipes.gtceu.assembler('weather_crystal')
        .itemInputs('2x enderio:pulsating_crystal', '2x enderio:vibrant_crystal', '1x enderio:ender_crystal')
        .itemOutputs('1x enderio:weather_crystal')
        .duration(370)
        .EUt(7680)
    event.remove({ id: 'enderio:infinity_rod' })
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:reinforced_obsidian_block'}, 'enderio:grains_of_infinity' , '#forge:dusts/black_steel')
    event.remove({ id: 'enderio:enchanter' })
    event.recipes.gtceu.assembler('enderio_enchanter')
        .itemInputs('2x enderio:ender_crystal', '1x minecraft:book', '1x gtceu:end_steel_frame', '4x #forge:plates/dark_steel')
        .itemOutputs('1x enderio:enchanter')
        .duration(330)
        .EUt(1920)
    event.remove({ id: 'enderio:basic_capacitor' })
    event.recipes.gtceu.assembler('enderio_basic_capacitor')
        .itemInputs('2x #forge:foils/electrum', '2x #forge:dusts/black_steel', '1x #forge:plates/annealed_copper')
        .itemOutputs('1x enderio:basic_capacitor')
        .duration(124)
        .EUt(480)
    event.remove({ id: 'enderio:double_layer_capacitor' })
    event.recipes.gtceu.assembler('enderio_double_layer_capacitor')
        .itemInputs('2x #forge:plates/energetic_alloy', '2x enderio:basic_capacitor', '2x #forge:dusts/graphene')
        .itemOutputs('1x enderio:double_layer_capacitor')
        .duration(158)
        .EUt(1920)
    event.remove({ id: 'enderio:octadic_capacitor' })
    event.recipes.gtceu.assembler('enderio_octadic_capacitor')
        .itemInputs('2x #forge:plates/vibrant_alloy', '4x enderio:double_layer_capacitor', '4x #forge:dusts/naquadah')
        .itemOutputs('1x enderio:octadic_capacitor')
        .inputFluids(Fluid.of('gtceu:glowstone', 288))
        .duration(174)
        .EUt(7680)
    event.remove({ id: 'enderio:energy_conduit' })
    event.recipes.gtceu.assembler('enderio_energy_conduit')
        .itemInputs('2x enderio:conduit_binder', '1x gtceu:conductive_alloy_double_wire')
        .itemOutputs('2x enderio:energy_conduit')
        .duration(56)
        .EUt(480)
    event.remove({ id: 'enderio:redstone_conduit' })
    event.recipes.gtceu.assembler('enderio_redstone_conduit')
        .itemInputs('2x enderio:conduit_binder', '1x gtceu:redstone_alloy_double_wire')
        .itemOutputs('2x enderio:redstone_conduit')
        .duration(56)
        .EUt(480)
    event.remove({ id: 'enderio:item_conduit' })
    event.recipes.gtceu.assembler('enderio_item_conduit')
        .itemInputs('2x enderio:conduit_binder', '1x #forge:plates/pulsating_alloy')
        .itemOutputs('2x enderio:item_conduit')
        .duration(56)
        .EUt(480)
    event.remove({ id: 'enderio:ae_covered_cable' })
    event.remove({ id: 'enderio:ae_glass_cable' })
    event.recipes.gtceu.assembler('enderio_me_conduit')
        .itemInputs('2x enderio:conduit_binder', '1x #ae2:covered_cable')
        .itemOutputs('1x enderio:me_conduit')
        .duration(48)
        .EUt(1920)
    event.remove({ id: 'enderio:dense_me_conduit' })
    event.recipes.gtceu.assembler('enderio_dense_me_conduit')
        .itemInputs('4x enderio:conduit_binder', '1x #ae2:covered_dense_cable')
        .itemOutputs('1x enderio:dense_me_conduit')
        .duration(62)
        .EUt(1920)
    event.remove({ id: 'enderio:fluid_conduit' })
    event.recipes.gtceu.assembler('enderio_fluid_conduit')
        .itemInputs('4x enderio:conduit_binder', '1x gtceu:polyethylene_small_fluid_pipe', '1x #forge:plates/tin_alloy')
        .itemOutputs('4x enderio:fluid_conduit')
        .duration(72)
        .EUt(480)
    event.remove({ id: 'enderio:pressurized_fluid_conduit' })
    event.remove({ id: 'enderio:pressurized_fluid_conduit_upgrade' })
    event.recipes.gtceu.assembler('enderio_pressurized_fluid_conduit')
        .itemInputs('2x enderio:conduit_binder', '1x #forge:plates/energetic_alloy', '1x enderio:fluid_conduit')
        .itemOutputs('2x enderio:pressurized_fluid_conduit')
        .duration(104)
        .EUt(480)
    event.remove({ id: 'enderio:ender_fluid_conduit' })
    event.remove({ id: 'enderio:ender_fluid_conduit_upgrade' })
    event.recipes.gtceu.assembler('enderio_ender_fluid_conduit')
        .itemInputs('4x enderio:conduit_binder', '1x #forge:plates/vibrant_alloy', '1x enderio:pressurized_fluid_conduit')
        .itemOutputs('2x enderio:ender_fluid_conduit')
        .duration(158)
        .EUt(480)
    event.recipes.gtceu.mixer('conduit_binder_composite_mixer')
        .itemInputs('2x gtceu:clay_dust', '2x gtceu:quartz_sand_dust', '5x gtceu:flint_dust', '3x gtceu:polytetrafluoroethylene_dust', '3x gtceu:silicone_rubber_dust')
        .itemOutputs('9x enderio:conduit_binder_composite')
        .circuit(1)
        .duration(560)
        .EUt(480)
    event.recipes.gtceu.create_mixer('conduit_binder_composite_cmixer')
        .itemInputs('2x gtceu:clay_dust', '2x gtceu:quartz_sand_dust', '5x gtceu:flint_dust', '3x gtceu:polytetrafluoroethylene_dust', '3x gtceu:silicone_rubber_dust')
        .itemOutputs('9x enderio:conduit_binder_composite')
        .circuit(1)
        .duration(280)
        .EUt(480)
        .rpm(64)
    event.recipes.gtceu.autoclave('ender_crystal')
        .itemInputs('1x gtceu:vibrant_alloy_dust', '1x gtceu:pulsating_alloy_dust')
        .itemOutputs('1x enderio:ender_crystal')
        .inputFluids(Fluid.of('gtceu:end_steel', 576))
        .duration(240)
        .EUt(480)
    event.smelting('enderio:clear_glass', '#forge:glass/colorless')
    event.smelting('enderio:fused_quartz', 'ae2:quartz_glass')
    event.recipes.gtceu.alloy_smelter('eio_clear_glass_d')
        .itemInputs('1x enderio:clear_glass', '4x gtceu:amethyst_dust')
        .itemOutputs('1x enderio:clear_glass_d')
        .duration(140)
        .EUt(30)
    event.recipes.gtceu.alloy_smelter('eio_clear_glass_e')
        .itemInputs('1x enderio:clear_glass', '4x minecraft:glowstone_dust')
        .itemOutputs('1x enderio:clear_glass_e')
        .duration(140)
        .EUt(30)
    event.recipes.gtceu.alloy_smelter('eio_quartz_glass_d')
        .itemInputs('1x enderio:fused_quartz', '4x gtceu:amethyst_dust')
        .itemOutputs('1x enderio:fused_quartz_d')
        .duration(140)
        .EUt(30)
    event.recipes.gtceu.alloy_smelter('eio_quartz_glass_e')
        .itemInputs('1x enderio:fused_quartz', '4x minecraft:glowstone_dust')
        .itemOutputs('1x enderio:fused_quartz_e')
        .duration(140)
        .EUt(30)

    event.remove({ id: 'enderio:black_paper' })
    event.recipes.gtceu.mixer('black_paper_mixer')
        .itemInputs('2x minecraft:paper', '1x #forge:dyes/black', '1x #forge:dusts/silicon')
        .itemOutputs('2x enderio:black_paper')
        .circuit(2)
        .duration(240)
        .EUt(120)
    event.recipes.gtceu.create_mixer('black_paper_cmixer')
        .itemInputs('2x minecraft:paper', '1x #forge:dyes/black', '1x #forge:dusts/silicon')
        .itemOutputs('2x enderio:black_paper')
        .circuit(2)
        .duration(120)
        .EUt(120)
        .rpm(16)
    event.remove({ id: 'enderio:basic_item_filter' })
    event.recipes.gtceu.assembler('eio_basic_item_filter')
        .itemInputs('2x enderio:black_paper', '2x #forge:plates/energetic_alloy', '1x minecraft:hopper')
        .inputFluids(Fluid.of('gtceu:red_alloy', 144))
        .itemOutputs('1x enderio:basic_item_filter')
        .duration(148)
        .EUt(120)
    event.remove({ id: 'enderio:advanced_item_filter' })
    event.recipes.gtceu.assembler('eio_advanced_item_filter')
        .itemInputs('2x enderio:black_paper', '2x #forge:plates/pulsating_alloy', '1x enderio:z_logic_controller')
        .inputFluids(Fluid.of('gtceu:conductive_alloy', 144))
        .itemOutputs('1x enderio:advanced_item_filter')
        .duration(206)
        .EUt(480)
        .cleanroom(CleanroomType.CLEANROOM)
    event.remove({ id: 'enderio:basic_fluid_filter' })
    event.recipes.gtceu.assembler('eio_basic_fluid_filter')
        .itemInputs('2x enderio:black_paper', '2x #forge:plates/tin_alloy', '1x minecraft:bucket')
        .inputFluids(Fluid.of('gtceu:red_alloy', 144))
        .itemOutputs('1x enderio:basic_fluid_filter')
        .duration(148)
        .EUt(120)

    event.replaceInput({mod:'enderio', type: 'crafting_shaped'}, '#forge:gears/iron' , 'gtceu:stainless_steel_gear')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:travel_anchor'}, '#forge:ingots/iron' , 'gtceu:enderite_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:vacuum_chest'}, '#forge:ingots/iron' , 'gtceu:pulsating_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:xp_vacuum'}, '#forge:ingots/iron' , 'gtceu:pulsating_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:fluid_tank'}, '#forge:ingots/iron' , 'gtceu:pulsating_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:basic_capacitor_bank'}, '#forge:ingots/iron' , 'gtceu:pulsating_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:pressurized_fluid_tank'}, '#forge:ingots/dark_steel' , 'gtceu:dark_steel_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped'}, '#forge:ingots/copper_alloy' , 'gtceu:copper_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped'}, '#forge:ingots/redstone_alloy' , 'gtceu:redstone_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped'}, '#forge:ingots/energetic_alloy' , 'gtceu:energetic_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped'}, '#forge:ingots/vibrant_alloy' , 'gtceu:vibrant_alloy_plate')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:drain'}, 'minecraft:bucket' , 'gtceu:steel_fluid_cell')
    event.replaceInput({mod:'enderio', type: 'crafting_shaped', output:'enderio:yeta_wrench'}, 'enderio:stone_gear' , 'gtceu:copper_alloy_gear')
})