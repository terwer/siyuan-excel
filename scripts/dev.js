const { executeVueCli, copyDir, copyFileToDir, joinPath } = require("./scriptutils");

// ==============================================

const siyuanPluginDir = "C:/Users/1/Documents/SiYuan/data/plugins/siyuan-excel"

async function doUpdatePlugin() {
    // 拷贝 plugin 目录的所有文件到 siyuanPluginDir 需要递归所有文件
    await copyDir("plugin", siyuanPluginDir)

    // 拷贝单个文件 到 siyuanPluginDir
    await copyFileToDir("package.json", siyuanPluginDir)
    await copyFileToDir("README.md", siyuanPluginDir)
    await copyFileToDir("README_zh_CN.md", siyuanPluginDir)
    await copyFileToDir("plugin.json", siyuanPluginDir)
    await copyFileToDir("preview.png", siyuanPluginDir)
    await copyFileToDir("icon.png", siyuanPluginDir)
}

async function doServe() {
    await copyDir("dist", joinPath(siyuanPluginDir, "dist"))
    // await executeVueCli("serve")
}

// ==============================================

(async () => {
    // console.log("vue app is serving on http://localhost:8080 ...")
    await doUpdatePlugin()
    console.log("plugin updated.please open siyuan-note and click topbar😄")
    await doServe()
})()