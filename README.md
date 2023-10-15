# clean-ui 组件库

# author: 刘家宝

# email: 13739251750@163.com

Vite 天然支持引入 .ts 文件。请注意，Vite 仅执行 .ts 文件的转译工作，并不执行任何类型检查。并假定类型检查已经被你的 IDE 或构建过程处理了。
Vite 本质上是双引擎架构——内部除了 Rollup 之外，还集成了另一个构建工具 Esbuild。Esbuild 有着超快的编译速度，它在其中负责第三方库构建和 TS/JSX 语法编译
无论是构建模式还是开发服务器模式，Vite 都通过 Esbuild 来将 ts 文件转译为 js
我们可以理解为，Vite 为了保证构建效率，内部并没有执行完整的 tsc 编译过程，而是每当遇到一个 ts 文件，就组装出一个最小化的、剔除了所有与类型检查相关配置的 tsconfig，交由 Esbuild 做转译工作——这个转译只确保生成对应的 js 产物，不做任何多余的事情。因此，仅仅做单文件的转译几乎不需要多少 tsconfig 配置，以至于在没有 tsconfig.json 的情况下，Vite 的转译工作都能在绝大多数情况下获得正确预期结果。
既然 tsconfig 对于 Vite 构建的影响如此之小，那么我们配置它更多地是为了什么？其实 Vite 文档中的那句 “假定类型检查已经被你的 IDE 或构建过程处理了” 就很好地揭示了答案：

tsconfig 主要写给 IDE 看的，为了让 IDE 能够实现类型检查，提示我们代码中的类型错误。
Vite 不负责类型检查，并且推荐我们在构建过程中于另一个进程单独执行类型检查，那么 tsconfig 就应该提供给执行检查任务的编译器 tsc。

# volar bug fixed

原因：
1、volar 插件没开 takeover 模式
去看 volar 插件介绍，开 takeover 模式
2、volar 未选择 tyscript 最新版本
解决：
1、在当前项目的工作空间下，用 Ctrl + Shift + P (macOS：Cmd + Shift + P) 唤起命令面板。
2、输入 built，然后选择“Extensions：Show Built-in Extensions”。
3、在插件搜索框内输入 typescript (不要删除 @builtin 前缀)。
4、点击“TypeScript and JavaScript Language Features”右下角的小齿轮，然后选择“Disable (Workspace)”。
5、重新加载工作空间。Takeover 模式将会在你打开一个 Vue 或者 TS 文件时自动启用。

# https://zhuanlan.zhihu.com/p/406510652
