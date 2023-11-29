/**
 * feat：新功能更新
 * fix：修补某功能的bug
 * perf: 性能优化等
 * style：改变代码格式，如删除空行、格式化代码、去除不必要的分号等等，不影响代码功能逻辑的操作
 * docs:仅仅修改了文档,如README, CHANGELOG, CONTRIBUTE等。
 * test: 添加测试用例或者修改测试用例
 * refactor：代码重构时使用，不是功能更新也不是 bug 修复的更改
 * build：由打包工具造成的改变（如gulp、webpack编译文件）
 * ci:自动化流程相关的改动,如 workflows, CI/CD 脚本等。
 * chore：更改构建过程、修改配置文件，添加/删除辅助工具或者库
 * revert：撤销之前的提交
 * wip:工作正在进行中,还未完成的提交。
 * workflow:工作流优化,如 git 工作流、pull request 流程优化。
 * types:类型定义文件的更改,如 ts 类型定义文件。
 * release:发布新版本。
 */
module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release",
      ],
    ],
  },
}
