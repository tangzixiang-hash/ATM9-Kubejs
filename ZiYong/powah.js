ServerEvents.recipes(event => {
 /*注册一个充能台事件 里面输入输出各自物品数量不能超过6个
[inputs, ...] 这个代表一个数组，里面如果想往充能台里面塞入多个物品时，用,作为分隔符，后面加入另一个，最多6个
输出物品如果要多个，就在物品id前面加上数量x和空格。
.energizing([inputs, ...], output, energy)
*/
    event.recipes.powah.energizing(["ae2:quartz_block","ae2:quartz_block","ae2:quartz_block","ae2:quartz_block","ae2:quartz_block","ae2:quartz_block"],"24x ae2:charged_certus_quartz_crystal", 480000)

})
PowahEvents.registerCoolants(event => {
    // .addFluid(fluid, coolness)
	event.addFluid("industrialforegoing:ether_gas", -1000);
    
    // .addSolid(fluid, coolness)
	//event.addSolid("minecraft:cobblestone", -1000,);
/*
    这是因为在KubeJS中，使用Item.of("item", size)可以更方便地创建新的物品实例。
    这个方法可以接受两个参数：字符串类型的item和整数类型的size。
    item参数指定了要创建的物品的名称，而size参数指定了要创建的物品的数量。例如，如果您想创建一个包含100个鹅卵石的物品堆栈，您可以使用以下代码：

    Item.of('minecraft:cobblestone', 100)

    这个代码片段将创建一个包含100个鹅卵石的物品堆栈。您可以将这个物品堆栈用于自定义配方、添加新的物品等等。

    在您提供的代码中，event.addSolid(Item.of("minecraft:cobblestone", 100), -1000,)
    使用了Item.of()方法来创建一个包含100个鹅卵石的物品堆栈，并将其作为参数传递给event.addSolid()方法。
    这个方法用于向Powah注册新的固体冷却剂。第一个参数是物品堆栈，第二个参数是冷却剂的冷却值。

    希望这可以帮到您！如果您有任何其他问题，请随时问我。
*/
   /*注册一个固态冷却剂
   格式如下
   event.addSolid(Item.of("物品ID", 加入打反应堆后的mb大小), 温度(记得写负号),);
   */
    event.addSolid(Item.of("minecraft:cobblestone", 100), -1000,);
})

//注册一个热源
PowahEvents.registerHeatSource(event => {
    // .add(block, hotness)
	event.add("minecraft:cobblestone", 10);
})

//注册一个冷却流体
PowahEvents.registerMagmaticFluid(event => {
    // .add(fluid, hotness)
	event.add("minecraft:water", 10);
})
