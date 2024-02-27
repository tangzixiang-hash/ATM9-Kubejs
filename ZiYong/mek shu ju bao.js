ServerEvents.recipes(r => {
  r.custom(
    { //数据包配方
      type: `mekanism:crushing`, //通用机械的粉碎机
      input: {
        ingredient: {
          item: `minecraft:netherrack`//我的世界下界岩
        }
      },
      output: {
        item: `create:cinder_flour`//余烬面粉
      }
    });

  r.custom(
    {
      type: `mekanism:crushing`,
      input: {
        ingredient: {
          item: `minecraft:ender_pearl`
        }
      },
      output: {
        item: `thermal:ender_pearl_dust`
      }
    });
  })