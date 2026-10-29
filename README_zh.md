<div align="center">

[English](README.md) | [中文](README_zh.md)

# 《Agent Harness for Large Language Model Agents: A Survey》

### 论文官方仓库与持续更新的证据索引

[![GitHub 星标](https://img.shields.io/github/stars/Gloriaameng/Awesome-Agent-Harness?style=social)](https://github.com/Gloriaameng/Awesome-Agent-Harness)
[![参考资料](https://img.shields.io/badge/%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99-168-2b8a3e)](#5-研究资料库)
[![许可证](https://img.shields.io/badge/%E8%AE%B8%E5%8F%AF%E8%AF%81-CC--BY--4.0-blue.svg)](license)

</div>

<p align="center">
  <a href="assets/architecture_p2.png"><img src="assets/architecture_p2.png" width="1100" alt="Agent harness architecture: execution, tools, context, state, lifecycle and evidence"/></a>
</p>

Harness统筹重复行动、上下文、状态与证据。L展示代表性生命周期介入点；V导出事件与轨迹，不承担结果打分。机器人为执行过程的示意符号。

> **智能体能力产生于模型、harness 与环境的共同配置。** Harness 决定模型如何观察与行动、如何使用工具、管理上下文和状态、跨越权限边界、从失败中恢复，并为评测留下可核查的证据。

这是综述论文 **《Agent Harness for Large Language Model Agents: A Survey》** 的官方仓库。论文是整个项目的中心：它界定研究对象，提出 ETCSLV 分析框架，梳理历史来源，比较代表系统，并组织评测版图与研究议程。下面的资源索引用于在论文版本之间持续维护这套证据基础。

📄 **[论文 v4](./Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf)** · 🌐 **[已归档预印本 v3](https://www.preprints.org/manuscript/202604.0428/v3)** · 🗂️ **资源索引 2026.10**（证据截至 2026-10-13）· **论文 v5 正在修订**

[综述贡献](#这篇综述做了什么) · [概念框架](#1-概念框架) · [系统版图](#3-系统版图) · [评测版图](#4-评测版图) · [研究资料库](#5-研究资料库)

---

## 阅读与引用综述

**Qianyu Meng 等（2026），《Agent Harness for Large Language Model Agents: A Survey》。** 仓库内公开的 PDF 为 **v4**；当前 DOI 对应已归档的 **v3** 预印本。论文 v5 的正文、图片与参考文献仍在修订，尚未发布。

- **阅读全文：**[论文 v4 PDF](./Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf)
- **预印本：**[已归档 v3 页面](https://www.preprints.org/manuscript/202604.0428/v3)
- **引用：**[DOI 10.20944/preprints202604.0428.v3](https://doi.org/10.20944/preprints202604.0428.v3)

```bibtex
@article{meng2026agentharness,
  title     = {Agent Harness for Large Language Model Agents: A Survey},
  author    = {Meng, Qianyu and Wang, Yanan and Chen, Liyi and Wu, Wei and
               Li, Yihang and Jiang, Wenyuan and Wang, Qimeng and
               Lu, Chengqiang and Gao, Yan and Wu, Yi and Hu, Yao},
  year      = {2026},
  doi       = {10.20944/preprints202604.0428.v3},
  url       = {https://www.preprints.org/manuscript/202604.0428/v3},
  publisher = {Preprints}
}
```

---

## 这篇综述做了什么

多数智能体研究突出模型和任务得分，却没有充分说明运行时配置。这篇综述将这一长期被忽略的中间层明确为研究对象，并把概念分析与系统、基准测试和工程证据连接起来。

1. **提出联合分析单元。** 在**模型—harness—环境**这一完整配置层面研究智能体行为，使实验结果能够追溯到产生它的具体条件。
2. **建立统一架构视角。** **ETCSLV** 将公开系统中反复出现的 harness 功能归纳为执行、工具、上下文、状态、生命周期与评测六类。
3. **梳理历史来源。** 将软件测试 harness、强化学习环境、早期大语言模型智能体框架与当今的持久化智能体运行时纳入同一条演进脉络。
4. **建立可比较的系统版图。** 使用统一的证据编码矩阵分析 34 个系统，覆盖编程、通用应用运行时、办公、个人智能体、操作系统和上层编排型 harness 等路线。比较集会随公开证据继续扩展；Claude Code、Codex、DeepSeek Harness 与 OpenClaw 四个重点案例按相同分析深度展开。
5. **重组评测版图。** 按实际改变的实验变量，区分 harness 效应、生命周期与安全、长时运行与恢复、协议与工具基础、评测基础设施以及任务环境。
6. **提出面向演化型运行时的研究议程。** 将上下文、记忆、工具、安全、可观测性与成本纳入 harness 演化和有边界的运行时自我改进。

### 从这张版图中可以看到什么

- **Harness 本身就是实验变量。** 即使模型保持不变，工具、上下文策略、状态、权限或循环逻辑的变化也会改变观察到的行为。
- **架构覆盖与产品成熟度是两个不同的问题。** ETCSLV 记录系统公开了哪些能力；可靠性、采用情况与产品质量需要分别寻找证据。
- **长时运行的智能体使轨迹和生命周期事件成为研究对象。** 只看最终是否完成任务，无法解释恢复过程、策略决策、累积状态与性能回归。
- **运行时自我改进需要外部评测闭环。** 持久化修改应在隔离环境中进行，并使用留出任务评测；只有通过安全与成本审查，才能发布新版本，同时必须支持回滚。

## 综述与仓库地图

README 沿用论文的论证顺序，而不是把项目堆成一份与综述脱节的软件清单。按编号阅读可以看到完整的概念论述；各目录则是对应论文部分持续维护的证据层。

| 综述问题 | 仓库部分 | 你会看到什么 |
|---|---|---|
| Harness 层到底是什么？ | [1. 概念框架](#1-概念框架) | 模型—harness—环境边界与 ETCSLV |
| 这种架构从哪里演变而来？ | [2. 历史演进](#2-历史演进) | 测试 harness、强化学习环境、大语言模型智能体与运行时的历史来源 |
| 哪些系统实现了它？ | [3. 系统版图](#3-系统版图) | 四个重点案例、开放的 34 系统证据矩阵与分类目录 |
| 应该如何评测？ | [4. 评测版图](#4-评测版图) | 30 个直接研究 harness 的基准、评测基础设施与任务环境 |
| 每类工程问题有哪些证据？ | [5. 研究资料库](#5-研究资料库) | 按工程问题组织的 168 篇论文、规范、架构说明与报告 |
| 如何收录，和论文版本是什么关系？ | [关于这篇综述](#关于这篇综述) | 证据规则、版本、引用与贡献指南 |

---

## 1. 概念框架

我们用 **H = (E, T, C, S, L, V)** 分析 harness：这是公开系统中反复出现的六类治理功能，用于统一比较架构；产品质量和生产成熟度使用独立证据评估。

| 组件 | 符号 | 需要观察的内容 |
|---|:---:|---|
| 执行循环 | **E** | 轮次与步骤控制、终止、重试、恢复、任务委派 |
| 工具注册表 | **T** | 类型化工具、路由、校验、授权、结果处理 |
| 上下文管理器 | **C** | 提示词组装、检索、压缩、重要性筛选、来源追踪 |
| 状态存储 | **S** | 跨轮次和跨会话持久化、检查点、恢复 |
| 生命周期钩子 | **L** | 认证、审批、策略、插桩、拦截 |
| 评测接口 | **V** | 执行轨迹、中间状态、结果、实验、审计 |

<p align="center">
  <a href="assets/step_state_p2.png"><img src="assets/step_state_p2.png" width="1000" alt="Illustrative tool-using execution path"/></a>
</p>

工具调用子路径示例：区分事件、条件、分发前授权、结果提交和有条件重试。不穷举直接完成、拒绝、取消或超时分支；泳道表示关联职责。

---

## 2. 历史演进

<p align="center">
  <img src="assets/timeline_p2.png" width="1080" alt="Agent Harness 历史演进"/>
</p>

本图选择性展示历史贡献，不是完整年表或首创断言。各列为类别时期，不代表等比例时间。论文采用所引出版年，软件与协议采用所引来源记录年，不表示首发；汇聚表示分析综合，不证明直接因果继承。下表保留更广的里程碑清单。

| 年份 | 里程碑 | 对 Harness 的意义 |
|---|---|---|
| 1997–2005 | JUnit、TestNG、xUnit 系列 | 标准化准备、执行、观察、断言与清理过程 |
| 2016 | OpenAI Gym | 将 `step/reset` 确立为智能体与环境之间的典型接口 |
| 2022 | ChatGPT 与 LangChain | 使工具使用和可组合的大语言模型应用成为常见运行模式 |
| 2023 | ReAct、Toolformer、MemGPT、Reflexion、Voyager、AutoGPT | 建立推理—行动、记忆、反思与技能积累等范式 |
| 2023 | CAMEL、ChatDev、Generative Agents | 将编排机制扩展到角色、团队与社会模拟 |
| 2023 | AgentBench、SWE-bench | 使环境设计和智能体评测成为关键基础设施 |
| 2024 | MetaGPT、WebArena、ToolLLM、SWE-agent、OSWorld | 将智能体接入真实工具、代码仓库、浏览器与桌面环境 |
| 2024 | CodeAct、LATS、Tree of Thoughts | 探索可执行动作与基于搜索的控制策略 |
| 2024 | Model Context Protocol | 规范不断扩展的工具与 harness 之间的边界 |
| 2025 | HAL、AIOS、LangGraph、A2A | 推进评测基础设施、智能体操作系统、持久图执行与智能体互操作性 |
| 2025 | MemoryOS、AgentBound† | 发展记忆抽象与运行时约束机制 |
| 2026 | Antigravity、办公与个人智能体、Harness-Bench、HarnessX、LongHorizon-Harness、HarnessAudit-Bench、SCLATE | Harness 扩展到编程、办公与个人智能体场景；harness 选择与演化、长时运行、生命周期风险和可审计性也成为直接研究对象 |

---

## 3. 系统版图

系统版图兼顾分析深度与覆盖广度：四个重点案例用于深入说明运行机制，证据矩阵按统一口径进行比较，分类目录则保留更广泛的系统、底层支撑、能力模块与评测基础设施。比较集依据证据门槛持续扩展；当前的 34 个系统是按照现行收录规则筛选的结果，并非预设数量，也不表示已经穷尽相关系统。产品形态本身不是排除条件：办公系统与个人智能体只要具有足够的公开架构证据，同样属于 harness 的研究对象。

<p align="center">
  <a href="assets/landscape_p2.png"><img src="assets/landscape_p2.png" width="1000" alt="Five runtime comparison groups and four adjacent analysis units"/></a>
</p>

34个比较系统按五个报告组组织（4／10／5／7／8）。除四个重点系统外，图内名称为代表例子。四类相邻分析单元不计入运行系统矩阵；类别归属不代表性能或安全性。

### 四个重点系统

这四个系统是综述的重点案例，采用相同的分析框架和相近篇幅展开。它们分别回答同一个运行时问题：如何将模型调用转化为受治理、可持续且能够使用工具的工作过程。

- **[Claude Code](https://github.com/anthropics/claude-code)** — 垂直整合的编程 harness，将仓库检查、编辑、命令行、Web 与 MCP 工具、子智能体、技能、钩子、权限、检查点和会话续接纳入同一条执行链。持久计划与工作区规则也支持多轮代码仓库任务。[Agent SDK](https://github.com/anthropics/claude-agent-sdk-python) 进一步公开了交互式使用和可编程调用中的执行层与策略层。
- **[Codex](https://github.com/openai/codex)** — 覆盖终端、IDE、桌面应用与云端工作流的开源编程 harness。其运行时组合了代码仓库工具、沙箱、审批、MCP、技能、子智能体、上下文压缩、可恢复任务和结构化事件。共享运行时使不同界面中的长时工作都可检查；OpenAI 的 [harness 工程实践](https://openai.com/index/harness-engineering/)也说明了这些控制机制如何支撑持续的软件工程工作。
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — 以插件为基本组合单元的运行时。模型适配器、执行循环、工具、上下文投影、存储、遥测与界面通过配置方案、组件包和有序补丁组合。清晰的组件边界使团队可以分别替换和审计执行循环、上下文策略、工具行为与可观测性。[架构](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md)、[工具子系统](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/core/tools/README.md)和[压缩机制](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/subsystems/compaction.md)也为有边界、可评测且可回滚的 harness 层改进提供了具体基础。
- **[OpenClaw](https://github.com/openclaw/openclaw)** — 围绕通信渠道、会话、工具、技能、记忆、定时任务、网关路由与沙箱执行构建的常驻个人智能体 harness。它将部署连续性置于核心位置：身份、凭据、后台任务、工作区状态和运行策略不会随一次对话结束而消失。因此，它是研究持久型个人智能体，而非一次性助手的重要案例。

### 证据编码比较矩阵

评分表示截至证据截止日期，公开材料能够证明的组件覆盖情况。产品质量、生产成熟度与采用情况分别判断；GitHub 星标数只作为采用情况的一个信号。

<p align="center">
  <a href="assets/component_matrix_p2.svg"><img src="assets/component_matrix_p2.svg" width="1000" alt="Documentation-backed component coverage for 34 systems"/></a>
</p>

与下表相同的34个系统及ETCSLV证据覆盖。图中单元格F／P／A／?分别表示完整／部分／明确缺失／尚未核实，组别代码另计。覆盖情况不是性能、质量或安全排名；单格细节可点击查看原图。

**图例：**● **完整（Full）** — 内置能力且有文档证明 · ◐ **部分（Partial）** — 能力有限、可选或由官方扩展提供 · ○ **明确缺失（Absent）** — 第一方材料明确说明不具备 · ? **尚未核实（Unverified）** — 公开材料不足。

| 类别 | 系统 | E | T | C | S | L | V |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| 重点编程 harness | **Claude Code** | ● | ● | ● | ◐ | ● | ◐ |
| 重点编程 harness | **Codex** | ● | ● | ● | ● | ● | ◐ |
| 重点编程 harness | **DeepSeek Harness** | ● | ● | ● | ● | ● | ◐ |
| 重点编程 harness | **OpenClaw** | ● | ● | ● | ● | ● | ◐ |
| 编程 harness | **Antigravity CLI** | ● | ● | ● | ● | ● | ◐ |
| 编程 harness | **OpenCode** | ● | ● | ● | ● | ● | ◐ |
| 编程 harness | **Goose** | ● | ● | ◐ | ◐ | ● | ◐ |
| 编程 harness | **Grok Build** | ● | ● | ● | ● | ● | ◐ |
| 编程 harness | **Cline** | ● | ● | ◐ | ● | ● | ◐ |
| 编程 harness | **OpenHands** | ● | ● | ● | ● | ● | ◐ |
| 编程 harness | **Deep Agents** | ● | ● | ● | ● | ● | ● |
| 编程 harness | **Prime Agent** | ● | ● | ● | ● | ◐ | ◐ |
| 编程 harness | **GitHub Copilot in VS Code** | ● | ● | ● | ● | ● | ● |
| 编程 harness | **MiMo-Code** | ● | ● | ● | ● | ● | ● |
| 通用运行时 | **OpenAI Agents SDK** | ● | ● | ● | ● | ● | ● |
| 通用运行时 | **Google ADK** | ● | ● | ● | ● | ● | ● |
| 通用运行时 | **Microsoft Agent Framework** | ● | ● | ● | ● | ● | ● |
| 通用运行时 | **LangGraph** | ● | ◐ | ◐ | ● | ◐ | ◐ |
| 通用运行时 | **Mastra** | ● | ● | ● | ● | ● | ● |
| 持久型、上层编排型与运维型 harness | **DeerFlow** | ● | ● | ● | ● | ● | ◐ |
| 持久型、上层编排型与运维型 harness | **AOHP** | ● | ● | ● | ● | ● | ◐ |
| 持久型、上层编排型与运维型 harness | **Omnigent** | ● | ● | ◐ | ● | ● | ◐ |
| 持久型、上层编排型与运维型 harness | **TrueForge** | ● | ● | ● | ● | ● | ● |
| 持久型、上层编排型与运维型 harness | **LongHorizon-Harness** | ● | ◐ | ● | ● | ● | ● |
| 持久型、上层编排型与运维型 harness | **Hermes Agent** | ● | ● | ● | ● | ● | ● |
| 持久型、上层编排型与运维型 harness | **SandBase** | ● | ● | ◐ | ● | ● | ● |
| 办公与个人智能体 harness | **WorkBuddy** | ● | ● | ● | ● | ● | ● |
| 办公与个人智能体 harness | **Muse** | ● | ● | ● | ● | ● | ◐ |
| 办公与个人智能体 harness | **Amazon Quick** | ● | ● | ● | ● | ● | ● |
| 办公与个人智能体 harness | **OpenAI Workspace Agents** | ● | ● | ● | ● | ● | ◐ |
| 办公与个人智能体 harness | **QwenWork** | ● | ● | ● | ● | ● | ? |
| 办公与个人智能体 harness | **OpenAI dots** | ● | ● | ● | ● | ● | ◐ |
| 办公与个人智能体 harness | **Grok Bot** | ● | ● | ● | ● | ● | ? |
| 办公与个人智能体 harness | **OpenJarvis** | ● | ● | ● | ● | ● | ● |

### 系统目录

矩阵收录当前已有第一方公开材料、足以对六项组件作出有效判断的系统。它既不是“前 34 名”，也不是成熟度排名。分析单位不同、证据尚不完整或只聚焦单项能力的项目，仍保留在下方的分类目录中。

#### 进入比较矩阵的编程 Harness

除上述四个重点系统外，比较矩阵还包含以下十个编程 harness。

- **[Antigravity CLI](https://antigravity.google/blog/introducing-google-antigravity-2?hl=en)** — Google 当前的编程 harness，提供动态子智能体、异步任务、技能、钩子、项目权限和定时任务，并将这些控制能力带入 CLI。它已接替 Gemini CLI 面向普通用户的用途；Google 另行说明了[迁移安排](https://github.com/google-gemini/gemini-cli/discussions/27274)。
- **[OpenCode](https://github.com/anomalyco/opencode)** — 开源编程智能体，提供终端和客户端/服务器界面，支持多种模型提供方、工具执行、会话与扩展机制。
- **[Goose](https://github.com/aaif-goose/goose)** — 可在本地运行和扩展的编程智能体，通过扩展与兼容 MCP 的接口接入工具和外部系统。
- **[Grok Build](https://github.com/xai-org/grok-build)** — xAI 开源的编程智能体 harness，面向代码仓库工作、工具使用、上下文处理与迭代验证。
- **[Cline](https://github.com/cline/cline)** — IDE 编程智能体，提供规划/执行工作流、检查点、浏览器和终端工具、MCP 集成与显式审批节点。
- **[OpenHands](https://github.com/OpenHands/OpenHands)** — 面向软件开发智能体的平台，将隔离运行时、事件流、工具执行、浏览、任务委派与评测集成在一起。
- **[Deep Agents](https://github.com/langchain-ai/deepagents)** — 功能完备的智能体 harness，集成规划、文件系统、子智能体、上下文管理、记忆与 LangGraph 执行机制。
- **[Prime Agent](https://github.com/PrimeIntellect-ai/prime-agent)** — 面向长时代码仓库任务的编程智能体系统，重点支持执行环境、轨迹记录以及训练与评测流程。
- **[GitHub Copilot in VS Code](https://code.visualstudio.com/blogs/2026/05/15/agent-harnesses-github-copilot-vscode/)** — 深度集成编辑器的生产级 harness。公开架构包括针对不同模型的上下文与工具适配、显式循环控制、可迁移会话、权限钩子和自动评测流程。
- **[MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code)** — 小米开源的终端编程 harness，包含持久化项目记忆、检查点、上下文重建、子智能体、技能、MCP、权限规则，以及由独立评判器驱动的研究与实验循环。

#### 通用智能体运行时

- **[OpenAI Agents SDK](https://github.com/openai/openai-agents-python)** — 提供工具、任务交接、防护机制、会话、链路追踪与多智能体工作流的运行时。OpenAI 的 [2026 年架构更新](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)将同一运行时扩展到更长时、有状态的工作。
- **[Google ADK](https://github.com/google/adk-python)** — 智能体开发工具包，集成工作流智能体、工具、会话、回调、评测与部署支持。
- **[Microsoft Agent Framework](https://github.com/microsoft/agent-framework)** — Microsoft 面向智能体、工作流、中间件、记忆、工具、可观测性与评测的运行时；其 [Build 2026 更新](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/)说明了当前的平台方向。
- **[LangGraph](https://github.com/langchain-ai/langgraph)** — 有状态的图运行时，支持持久执行、检查点、中断、流式输出与人在环工作流。
- **[Mastra](https://github.com/mastra-ai/mastra)** — 原生支持 TypeScript 的应用运行时，组合自主智能体、图工作流、工具与 MCP、可持久化的暂停/恢复状态、记忆、可观测性和内置评测。

#### 持久型、上层编排型、操作系统与运维型 Harness

- **[DeerFlow](https://github.com/bytedance/deer-flow)** — 面向研究与编程工作流的模块化 harness，包含子智能体、技能、记忆、沙箱执行与长时任务支持。
- **[AOHP](https://github.com/aohp-os/aohp)** — 面向个性化交互、本地资源、执行效率与安全边界的操作系统级 harness。
- **[Omnigent](https://github.com/omnigent-ai/omnigent)** — 将工具使用、状态、记忆、策略与多界面执行连接起来的通用智能体平台。
- **[TrueForge](https://github.com/truefoundry/trueforge)** — 可自行托管且不绑定模型供应商的运行时与控制平面，覆盖模型调用、MCP 与技能、沙箱、审批、延迟工具调用、上下文压缩、持久会话、身份管理、运行检查与可复现实验。[工程说明](https://www.truefoundry.com/blog/engineering/trueforge-open-source-agent-harness/)
- **[LongHorizon-Harness](https://github.com/AMAP-ML/LongHorizon-Harness)** — 包裹在现有编程智能体外部的上层 harness，提供“规划—行动—验证”循环、持久状态、角色隔离、审计、检查点与恢复机制。[论文](https://arxiv.org/abs/2608.01964)
- **[Hermes Agent](https://github.com/nousresearch/hermes-agent)** — 持久型个人智能体运行时，提供记忆、智能体自主创建技能、多渠道网关、多种沙箱后端、子智能体、审批、检查点、上下文压缩、执行轨迹与批量评测。[文档](https://hermes-agent.nousresearch.com/docs/)
- **[SandBase](https://github.com/sandbaseai/sandbase-harness)** — 本地优先的运维与安全控制平面，提供可恢复会话、审计与重放、MCP 工具集、凭据与审批策略、多种沙箱后端、类型化 SDK 和一致性测试。
- **[CUGA](https://github.com/cuga-project/cuga-agent)** — IBM Research 基于 LangGraph 构建的开源通用智能体 harness，在可配置策略（意图防护、流程指引、工具审批）下执行 API（OpenAPI、MCP、LangChain 工具）、Web 及混合任务，并支持技能、A2A 子智能体和 ACP。[论文](https://arxiv.org/abs/2510.23856)
- **[oh-my-agent](https://github.com/first-fluke/oh-my-agent)** — 叠加在现有编程智能体之上的开源 harness，可安装到 Claude Code、Codex CLI、Cursor 等 14 种运行时，将统一的 `.agents/skills/` 目录中的技能共享给支持的运行时，并提供可选的 Stop 钩子，在智能体结束前运行项目的类型检查、测试或代码检查脚本。

#### 办公与个人智能体 Harness

- **[WorkBuddy](https://www.workbuddy.ai/)** — 腾讯云面向办公场景的 harness，可跨即时通信、文档、邮件、会议与知识库规划和执行任务；其[开放平台](https://open.workbuddy.cn/en/docs/buddy-app)与[托管智能体运行时](https://cloud.tencent.com/document/product/1831/138968)进一步公开了技能、MCP/OAuth/A2A、多智能体编排、上下文压缩、记忆、隔离执行、恢复、轨迹、评测与生命周期治理能力。
- **[Muse](https://muse.ai/)** — Meta 的个人智能体 harness。每位用户的智能体运行在持久隔离的虚拟机中，具有浏览器、文件系统、终端、记忆、已连接应用、自建工具、定时与事件驱动任务、操作审批、凭据隔离和完整活动记录。[设计说明](https://introducing.muse.ai/) · [发布与安全架构](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent)
- **[Amazon Quick](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick/)** — 办公 harness，组合自主后台智能体、可复用流程、企业数据空间、细粒度自主权、身份传递、审批与监控，并提供[含日志和监视变量的测试运行](https://docs.aws.amazon.com/quick/latest/userguide/automate-custom-agents.html)。
- **[OpenAI Workspace Agents](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)** — 由 Codex 驱动的组织级智能体，提供共享技能、文件、应用与 MCP、云端执行、定时任务与 Slack 触发器、审批交接、基于角色的发布、版本历史、分析功能和 Compliance API 可见性。
- **[QwenWork](https://www.alibabacloud.com/help/en/qwenwork/qwenwork-intro)** — 面向个人和组织的工作平台，提供显式智能体会话、计划与中间结果、文件、技能、连接器、定时任务、计算机操作、工作区隔离和敏感操作确认；公开材料尚不足以核实其通用评测器。
- **[OpenAI dots](https://openai.com/index/introducing-dots/)** — 持续在线的个人智能体，具有独立的云端计算机与浏览器、插件、持久记忆与笔记、定时和主动任务、本地与 Codex 云端操作、自定义规则、自动审查和审批机制。
- **[Grok Bot](https://x.ai/news/introducing-grok-bot)** — 运行在持久云端计算机上的智能体，提供浏览器、终端、应用、并行机器人、机器人间协作、负责人层级和“演示转例行任务”能力；[企业版控制](https://x.ai/news/grok-bot-for-enterprise)进一步提供隔离、访问控制、网络限制与审计治理。
- **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** — 本地优先、在设备端运行的个人智能体技术栈，具有类型化运行时原语、多种智能体循环、工具与 MCP、沙箱、多种记忆后端、定时操作、完整轨迹、轨迹驱动的路由，以及准确率、延迟、能耗和成本联合评测。[论文](https://arxiv.org/abs/2605.17172)

#### 办公与个人智能体观察名单

这些系统继续收录，但公开架构、成熟度或独立分析单位仍在形成中。

- **[Microsoft Copilot Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)** — 尚处于预览阶段的办公智能体，具有独立身份、记忆、计算机、工作区与企业治理机制；公开的工具与评测文档仍然有限。
- **[Google Workspace Studio](https://workspace.google.com/blog/product-announcements/introducing-google-workspace-studio-agents-for-everyday-work)** — 面向办公场景的智能体流程构建器；2026 年更新了[最小权限、人在环、数据防泄漏、漂移检测与审计机制](https://workspace.google.com/blog/identity-and-security/defend-against-agentic-risks-with-multi-layered-protections-in-google-workspace-studio)。
- **[Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)** — 从 Claude Code 与 Cowork 的设计思路演化而来的共享、持久化办公交互产品；在独立运行时边界公开前，暂作为该技术路线的产品形态收录。
- **[Claude Managed Agents](https://www.anthropic.com/news/finance-agents)** — 提供长时会话、逐工具权限、凭据保管库与审计日志；作为 Claude 运行时技术路线在办公场景的部署案例收录。
- **[nanoMuse](https://github.com/nano-muse/nanoMuse)** — 跨手机和桌面的新开源个人智能体，提供定时目标、可编辑记忆与风险门控；系统部分基于 DeepSeek Harness 和 OpenMinis。[论文](https://arxiv.org/abs/2610.08699)
- **[Qwen Book](https://www.alibabacloud.com/blog/603599)** — 早期采用“操作系统即 harness”思路的办公设备，将模型、操作系统、应用、云端服务、上下文、记忆、执行与治理组合在一起；目前组件级公开证据仍然有限。

#### 扩展目录

- **[Aider](https://github.com/Aider-AI/aider)** — 终端结对编程工具，提供代码仓库映射、编辑格式、Git 集成与多模型支持。
- **[mini-SWE-agent](https://github.com/SWE-agent/mini-swe-agent)** — 有意保持极简的软件工程智能体，采用短而线性的执行循环，支持多种沙箱、轨迹检查和广泛的基准测试；SWE-agent 维护者建议新项目优先使用它。
- **[SWE-agent](https://github.com/SWE-agent/SWE-agent)** — 为在代码仓库环境中解决软件工程问题而设计的智能体—计算机接口。
- **[AutoGen](https://github.com/microsoft/autogen)** — 面向对话式应用与多智能体应用的事件驱动框架。
- **[MetaGPT](https://github.com/geekan/MetaGPT)** — 围绕角色、标准作业流程与共享产物组织的软件工程多智能体工作流。
- **[CAMEL](https://github.com/camel-ai/camel)** — 支持角色扮演、工具使用、记忆与智能体社会的多智能体框架。
- **[ChatDev](https://github.com/OpenBMB/ChatDev)** — 通过分阶段开发过程协调专业智能体的虚拟软件公司。
- **[AIOS](https://github.com/agiresearch/AIOS)** — 将智能体内核与独立 Cerebrum SDK 分开的研究型操作系统架构，在模型、工具、记忆、存储与访问控制之间提供中介。它具有重要的历史价值，但其分析单位及公开的生命周期与评测证据，尚不能与完整运行时矩阵采用同一口径比较。
- **[Raven](https://github.com/EverMind-AI/Raven)** — 用于组装和协调智能体能力、并可组合其他 harness 的上层 harness。
- **[Open SWE](https://github.com/langchain-ai/open-swe)** — 面向委托式代码仓库工作的开源异步编程智能体参考实现。
- **[QM](https://github.com/yc-software/qm)** — 探索自主代码仓库工作与工具驱动开发的开源编程智能体项目。
- **[Eve](https://github.com/vercel/eve)** — Vercel 面向迭代软件工作和执行反馈的开源智能体项目。
- **[Shepherd](https://github.com/shepherd-agents/shepherd)** — 用于协调开发任务与专业工作智能体的编排项目。
- **[YYLO](https://github.com/yylo-dev/yylo)** — 通过插件、证据记录与纵向工作流编排编程智能体的 CLI。
- **[Orbi](https://github.com/orbi-build/orbi)** — 面向 GitHub 的 Issue 到合并交付 harness（[官网](https://orbi.build/zh/?ref=dir-gloriaameng)）：打上 `ai-ready` 的 Issue 在隔离 worktree 中实现并开 PR，由另一个 AI 会话独立评审、修复，评审与 CI 通过后才合并；GitHub Issues 是唯一状态存储。
- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** — Google 较早开源的终端智能体。其面向普通用户的服务已于 2026 年 6 月迁移到 Antigravity CLI，原仓库仍可作为架构历史资料。[迁移公告](https://github.com/google-gemini/gemini-cli/discussions/27274)

#### 长时运行与领域型 Harness

- **[RobotUse](https://github.com/robotuse-team/RobotUse)** — 面向机器人的 Agent harness，结合视觉目标与位姿选择、子 Agent 的局部交互历史，以及用于从执行经验中学习的持久化 playbook；几何计算、运动规划与控制由后端负责。[论文](https://arxiv.org/abs/2610.04929) · [项目主页](https://robotuse-team.github.io/)
- **[CheetahClaws](https://github.com/SAIL-Research-Lab/cheetahclaws)** — 研究固定模型条件下系统级扩展的 harness，涵盖编排、工具、上下文与并行工作。[论文](https://arxiv.org/abs/2605.26112)
- **[DataFlow-Harness](https://github.com/OpenDCAI/DataFlow-WebUI)** — 以数据为中心的 harness，用于组合、运行和评测智能体数据工作流。[论文](https://arxiv.org/abs/2607.16617)

#### 持久执行、协议与沙箱基础设施

这些项目提供可供 harness 承载或连接的基础设施。持久执行、协议托管或沙箱本身并不等于完整的智能体 harness，因此单独列出。

- **[Google AX](https://github.com/google/ax)** — 面向分布式长时智能体的持久执行基础设施；Google 的 [Agent Executor 架构](https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime/)明确支持接入已有 harness。
- **[Agent Substrate](https://github.com/agent-substrate/substrate)** — 为智能体运行时提供事件日志、快照、分支、暂停与恢复能力的持久化底层支撑。
- **[VS Code Agent Host](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)** — 在编辑器侧协调编程智能体的会话、工具、权限与生命周期事件的宿主。
- **[Agent Host Protocol](https://github.com/microsoft/agent-host-protocol)** — 规定编程智能体与宿主界面之间传输和交互方式的协议边界。

#### 能力模块与研究范式

这些项目按照各自聚焦的能力或研究范式进行评估，不使用全栈组件覆盖口径。

- **[MemGPT](https://github.com/cpacker/MemGPT)** — 受操作系统启发的分层记忆与上下文管理机制。
- **[Reflexion](https://github.com/noahshinn/reflexion)** — 跨多次尝试积累语言反馈与反思记忆的方法。
- **[Voyager](https://github.com/MineDojo/Voyager)** — 面向开放式技能获取、课程生成与可复用代码技能的研究系统。
- **[Generative Agents](https://github.com/joonspk-research/generative_agents)** — 使用记忆、反思与规划构建可信社会性智能体的研究系统。
- **[Concordia](https://github.com/google-deepmind/concordia)** — 用于在物理、社会或数字世界中构建生成式多智能体模拟的程序库。
- **[SkillOpt](https://github.com/microsoft/SkillOpt)** — 根据带评分的执行轨迹生成有边界的技能优化方案，并通过评测门控决定是否更新。
- **[Harness²](https://github.com/google-research/harness2)** — 研究如何提出、探测并组合对提示词、防护机制、记忆、工具指导、子智能体、技能、脚本与插件的持久修改；当前作为早期研究代码收录。

#### 评测基础设施

- **[HAL](https://arxiv.org/abs/2510.11977)** — 统一智能体执行、评测与排行榜的基础设施。
- **[Harbor](https://github.com/harbor-framework/harbor)** — 支持替换智能体、模型、数据集与容器环境，并记录轨迹和并行试验。[论文](https://arxiv.org/abs/2609.04298)
- **[AgentCompass](https://arxiv.org/abs/2607.13705)** — 将基准、harness 与环境分开，以提高智能体评测的可复现性。
- **[BrowserGym](https://github.com/ServiceNow/BrowserGym)** — 面向 Web 智能体研究的通用环境与评测层。
- **[lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)** — 广泛使用的语言模型评测运行器，也是现代智能体 harness 评测在历史与命名上的参照。

---

## 4. 评测版图

这里收录的基准必须能够揭示**围绕模型运行的系统**的某个方面，例如组件选择、跨时间状态、恢复、权限、审计、协议行为或评测基础设施。报告结果时，应同时说明模型、harness、环境、任务版本、预算和评测器。

<p align="center">
  <a href="assets/evaluation_attribution_p2.png"><img src="assets/evaluation_attribution_p2.png" width="1000" alt="Three sources of evaluation attribution risk"/></a>
</p>

环境漂移、任务歧义和harness耦合可能影响结果归因。图中为条件性的解释路径；跨列虚线表示交互，下方为控制与诊断建议，不表示已测得的效应大小。

### 1. Harness 效应

- **[Harness-Bench](https://arxiv.org/abs/2605.27922)** — 在相同的沙箱任务、环境、预算和评测条件下，比较不同的模型—harness 配置。
- **[Beyond the Model](https://arxiv.org/abs/2609.32459)** — 分离工具注册表、上下文压缩、规划、子智能体与按需加载技能的影响。
- **[LongHarness Bench](https://arxiv.org/abs/2609.38137)** — 评测长上下文 harness 的准确率与效率。
- **[Harness the Memory](https://arxiv.org/abs/2608.15008)** — 在共享 harness 中，跨模型与任务集比较不同记忆底层。
- **[WildClawBench](https://arxiv.org/abs/2605.10912)** — 使用双语、多模态、人工编写的 CLI 任务，比较不同 harness 对同一模型家族表现的影响。

### 2. Harness 演化与运行时自我改进

- **[EVOHARNESSBENCH](https://arxiv.org/abs/2609.04280)** — 测量工具、技能与智能体随时间变化时，系统保留既有能力和适应变化的水平。
- **[SkillOpt](https://arxiv.org/abs/2605.23904)** — 根据带评分的轨迹生成有边界的技能修改，并通过留出集评测门控决定是否接受。
- **[SCLATE](https://arxiv.org/abs/2609.32391)** — 将会话、定时任务与记忆整合放到统一的事件时间线上。
- **[TaoLive](https://arxiv.org/abs/2608.15763)** — 研究智能体如何通过感知 harness 的训练方式适应不断变化的运行时。
- **[Meta-Harness](https://arxiv.org/abs/2603.28052)** — 对模型 harness 进行端到端优化。
- **[AutoHarness](https://arxiv.org/abs/2603.03329)** — 围绕固定模型自动生成代码 harness，以改进智能体表现。
- **[VeRO](https://arxiv.org/abs/2602.22480)** — 让智能体评测和优化其他智能体的评测 harness。
- **[AgentSWE](https://arxiv.org/abs/2610.13361)** — 评测智能体创建、修改和改进智能体代码库的完整生命周期，使 harness 本身成为软件工程任务的对象。

### 3. 生命周期、安全与审计

- **[HarnessRisk](https://arxiv.org/abs/2608.17597)** — 测试配置、扩展、运行、持久化、操作与恢复各阶段的风险。
- **[HarnessSecurity-Bench](https://arxiv.org/abs/2610.07639)** — 测量真实编程 harness 在不同权限设置下的效用与攻击效果。
- **[Hearsay](https://arxiv.org/abs/2609.32495)** — 测试 harness 生成的记录能否支持独立审计。
- **[SandboxEscapeBench](https://arxiv.org/abs/2603.02277)** — 测量模型能否发现并利用刻意植入的沙箱错误配置与漏洞。
- **[HarnessAudit-Bench](https://arxiv.org/abs/2605.14271)** — 跨不同 harness 配置评测轨迹是否遵守边界、执行是否忠实以及系统是否稳定，而非只看最终答案。

### 4. 长时循环与恢复

- **[LoopsBench](https://arxiv.org/abs/2608.00267)** — 评测持续开发循环，以及智能体能否不断取得有效进展。
- **[Long-Horizon-Terminal-Bench](https://arxiv.org/abs/2607.08964)** — 测试智能体在状态持续积累的长时终端任务中的表现。
- **[SWE-Chain](https://arxiv.org/abs/2605.14415)** — 评测依赖性软件修改，以及沿任务链传播的后续义务。
- **[ChainSWE](https://arxiv.org/abs/2607.02606)** — 测量后续任务依赖前序修改和持久状态的仓库工作。
- **[Hell or High Water](https://arxiv.org/abs/2508.11027)** — 评测智能体在执行过程中遭遇外部故障后的恢复能力。

### 5. 协议与工具基础

- **[DynamicMCPBench](https://arxiv.org/abs/2607.20531)** — 评测实时变化的 MCP 服务器、工具与状态。
- **[MCP-Bench](https://arxiv.org/abs/2508.20453)** — 评测通过 Model Context Protocol 完成的端到端工具使用。
- **[MCP-AgentBench](https://arxiv.org/abs/2509.09734)** — 测试 MCP 智能体的工具发现、选择与执行能力。
- **[MCPAgentBench](https://arxiv.org/abs/2512.24565)** — 评测工具辨别与有状态的 MCP 交互。

### 6. 评测基础设施

- **[AgentCompass](https://arxiv.org/abs/2607.13705)** — 将基准、harness 与环境明确为不同的实验单元。
- **[Harbor](https://github.com/harbor-framework/harbor)** — 在容器化数据集中运行可替换的智能体与模型，并记录轨迹和并行试验。
- **[HAL](https://arxiv.org/abs/2510.11977)** — 为智能体评测提供统一的执行与排行榜基础设施。

### 任务环境

这些基准主要回答**智能体能完成什么任务**。Harness 研究将它们作为任务基础，并增加控制变量，以隔离运行时的影响。

- **[RoboQuest](https://github.com/declare-lab/RoboQuest)** — 面向通过工具调用控制机器人的多模态 Agent 的仿真移动操作任务；隐藏信息须通过搜索、检查或测试获得。[论文](https://arxiv.org/abs/2610.10388)
- **[AgencyBench](https://arxiv.org/abs/2601.11044)** — 面向自主智能体的长上下文、结果影响重大的任务；整体结果与原生生态优势的观察应分别报告。
- **[ClawBench](https://github.com/TIGER-AI-Lab/ClawBench)** — 面向个人智能体和计算机操作智能体的日常在线任务。[论文](https://arxiv.org/abs/2604.08523)
- **[OSWorld](https://github.com/xlang-ai/OSWorld)** — 真实操作系统环境中的开放式计算机任务。
- **[WebArena](https://github.com/web-arena-x/webarena)** — 使用真实网站和端到端任务评测自主 Web 智能体。
- **[GAIA](https://arxiv.org/abs/2311.12983)** — 需要推理、工具使用与多模态信息的通用助手问题集。
- **[SWE-bench](https://github.com/swe-bench/SWE-bench)** — 要求智能体在可执行代码仓库中解决真实 GitHub 问题。
- **[EC2-Bench](https://github.com/OpenBMB/EC2-Bench)** — 由可调用云端模型的端侧模型执行 OpenClaw 工作区任务，比较由外部路由器或端侧智能体控制云端调用时的任务完成情况、成本与隐私暴露。[论文](https://arxiv.org/abs/2610.17816)

---

## 5. 研究资料库

### 历史渊源

#### 软件测试 Harness（1990—2000 年代）

- <u>JUnit</u>: **"JUnit: A Cook's Tour"**. *Beck & Gamma.* Java Report, 4(5)，1999 年 5 月。[[存档文章](https://web.archive.org/web/20200101000000/http://junit.sourceforge.net/doc/cookstour/cookstour.htm)]

#### 强化学习环境与 Harness 框架（2016—2022 年）

- <u>OpenAI Gym</u>: **"OpenAI Gym"**. *Brockman et al.* arXiv 2016. [[论文](https://arxiv.org/abs/1606.01540)] [[代码](https://github.com/openai/gym)]
- <u>Gymnasium</u>: **"Gymnasium: A Standard Interface for Reinforcement Learning Environments"**. *Towers et al.* NeurIPS 2025. [[论文](https://arxiv.org/abs/2407.17032)] [[代码](https://github.com/Farama-Foundation/Gymnasium)]

#### 早期大语言模型智能体 Harness（2023—2024 年）

- <u>ReAct</u>: **"ReAct: Synergizing Reasoning and Acting in Language Models"**. *Yao et al.* ICLR 2023. [[论文](https://arxiv.org/abs/2210.03629)] [[代码](https://github.com/ysymyth/ReAct)]
- <u>Toolformer</u>: **"Toolformer: Language Models Can Teach Themselves to Use Tools"**. *Schick et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2302.04761)]
- <u>AutoGPT</u>: **"Auto-GPT: An Autonomous GPT-4 Experiment"**. *Gravitas et al.* GitHub 2023. [[代码](https://github.com/Significant-Gravitas/AutoGPT)]
- <u>BabyAGI</u>: **"BabyAGI"**. *Nakajima.* GitHub 2023. [[代码](https://github.com/yoheinakajima/babyagi)]
- <u>HuggingGPT</u>: **"HuggingGPT: Solving AI Tasks with ChatGPT and Its Friends in Hugging Face"**. *Shen et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2303.17580)]
- <u>LangChain</u>: **"LangChain: Building Applications with LLMs through Composability"**. *Chase et al.* GitHub 2022. [[代码](https://github.com/langchain-ai/langchain)]

---

### 按工程问题阅读

智能体 harness 的难点不只在于单个组件，还在于执行、上下文、状态、权限与评测组合之后能否协同工作。下面按九类工程问题组织论文、基准与实践材料；每项资料均独立列出，便于继续检索和引用。

#### 安全与沙箱

**挑战：**智能体沙箱既要防止恶意工具调用，又要允许合法的系统访问。这比传统应用沙箱更困难，因为智能体会主动与文件系统、网络 API 和 Shell 命令等敏感资源交互。

**技术现状：**SandboxEscapeBench 测量模型能否利用人为设置的易受攻击沙箱配置，PRISM 则研究运行时拦截与纵深防御。两者都说明隔离边界和特权操作策略需要持续测试，但都不能证明已经存在适用于所有智能体负载的通用沙箱配置。

**开放问题：**如何证明智能体、harness 与环境的组合满足安全规范，仍是尚未解决的问题。当前防御主要在逃逸发生时进行检测，还难以预先证明逃逸不可能发生。

> **证据重点：**SandboxEscapeBench 测试模型能否发现并利用人为植入的沙箱错误配置与漏洞。其结果说明配置需要持续验证，并应采用纵深防御；这些结果不能解释为正确配置容器的通用逃逸率。

- <u>SandboxEscapeBench</u>†: **"Quantifying Frontier LLM Capabilities for Container Sandbox Escape"**. *Marchand et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.02277)]
- <u>InjecAgent</u>: **"InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents"**. *Zhan et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2403.02691)]
- <u>ToolHijacker</u>†: **"Prompt Injection Attack to Tool Selection in LLM Agents"**. *Shi et al.* NDSS 2026. [[论文](https://arxiv.org/abs/2504.19793)]
- <u>Securing MCP</u>†: **"Securing the Model Context Protocol (MCP): Risks, Controls, and Governance"**. *Errico et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2511.20920)]
- <u>SHIELDA</u>†: **"SHIELDA: Structured Handling of Exceptions in LLM-Driven Agentic Workflows"**. *Zhou et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2508.07935)]
- <u>PALADIN</u>†: **"PALADIN: Self-Correcting Language Model Agents to Cure Tool-Failure Cases"**. *Vuddanti et al.* ICLR 2026. [[论文](https://arxiv.org/abs/2509.25238)]
- <u>AgentBound</u>†: **"Securing AI Agent Execution"**. *Bühler et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2510.21236)]
- <u>AgentSpec</u>†: **"Agentspec: Customizable runtime enforcement for safe and reliable llm agents"**. *Wang et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2503.18666)]
- <u>AgentSys</u>†: **"AgentSys: Secure and Dynamic LLM Agents Through Explicit Hierarchical Memory Management"**. *Wen et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.07398)]
- <u>Docker</u>: **"Docker: Lightweight Linux Containers for Consistent Development and Deployment"**. *Merkel.* Linux Journal 2014(239). [[论文](https://www.linuxjournal.com/content/docker-lightweight-linux-containers-consistent-development-and-deployment)]
- <u>gVisor</u>: **"The True Cost of Containing: A gVisor Case Study"**. *Young et al.* HotCloud '19. [[论文](https://www.usenix.org/conference/hotcloud19/presentation/young)]
- <u>Firecracker</u>: **"Firecracker: Lightweight Virtualization for Serverless Applications"**. *Agache et al.* NSDI 2020. [[论文](https://www.usenix.org/conference/nsdi20/presentation/agache)]
- <u>WebAssembly</u>: **"Bringing the Web up to Speed with WebAssembly"**. *Haas et al.* PLDI 2017. [[论文](https://doi.org/10.1145/3062341.3062363)]
- <u>Indirect Prompt Injection</u>: **"Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection"**. *Greshake et al.* AISec 2023. [[论文](https://arxiv.org/abs/2302.12173)]
- <u>Misevolution Risks</u>†: **"Your agent may misevolve: Emergent risks in self-evolving llm agents"**. *Shao et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2509.26354)]
- <u>Security Threat Modeling</u>†: **"Security Threat Modeling for Emerging AI-Agent Protocols: A Comparative Analysis of MCP, A2A, Agora, and ANP"**. *Anbiaee et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.11327)]
- <u>AgentHarm</u>†: **"AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents"**. *Andriushchenko et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2410.09024)]
- <u>TrustAgent</u>: **"TrustAgent: Towards Safe and Trustworthy LLM-Based Agents"**. *Hua et al.* EMNLP 2024. [[论文](https://arxiv.org/abs/2402.01586)]
- <u>ToolEmu</u>†: **"Identifying the Risks of LM Agents with an LM-Emulated Sandbox"**. *Ruan et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2309.15817)]
- <u>Ignore Previous Prompt</u>: **"Ignore Previous Prompt: Attack Techniques For Language Models"**. *Perez & Ribeiro.* NeurIPS ML Safety Workshop 2022. [[论文](https://arxiv.org/abs/2211.09527)]
- <u>AgentFlow</u>†: **"Synthesizing Multi-Agent Harnesses for Vulnerability Discovery"**. *Liu et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2604.20801)]

#### 评测与基准测试

> **证据重点：**Harness 评测需要同时报告运行时、环境、任务版本、预算、轨迹记录方式与评测器。HAL、OSWorld 和 METR 分别揭示了执行方差、评测器误差，以及通过基准与通过人工审查之间的差异。

- <u>AgencyBench</u>†: **"AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts"**. *Li et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2601.11044)]
- <u>AEGIS</u>†: **"AEGIS: No Tool Call Left Unchecked -- A Pre-Execution Firewall and Audit Layer for AI Agents"**. *Yuan et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.12621)]
- <u>Hell or High Water</u>†: **"Hell or High Water: Evaluating Agentic Recovery from External Failures"**. *Wang et al.* COLM 2025. [[论文](https://arxiv.org/abs/2508.11027)]
- <u>SearchLLM</u>†: **"Aligning Large Language Models with Searcher Preferences"**. *Wu et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.10473)]
- <u>Meta-Harness</u>†: **"Meta-Harness: End-to-End Optimization of Model Harnesses"**. *Lee et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.28052)]
- <u>AutoHarness</u>†: **"AutoHarness: improving LLM agents by automatically synthesizing a code harness"**. *Lou et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.03329)]
- <u>MASEval</u>†: **"MASEval: Extending Multi-Agent Evaluation from Models to Systems"**. *Emde et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.08835)]
- <u>VeRO</u>†: **"VeRO: An Evaluation Harness for Agents to Optimize Agents"**. *Ursekar et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.22480)]
- <u>ClawBench</u>†: **"ClawBench: Can AI Agents Complete Everyday Online Tasks?"**. *Zhang et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2604.08523)] [[代码](https://github.com/TIGER-AI-Lab/ClawBench)] [[项目](https://claw-bench.com/)]
- <u>TheAgentCompany</u>†: **"TheAgentCompany: Benchmarking LLM Agents on Consequential Real-World Tasks"**. *Xu et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2412.14161)]
- <u>BrowserGym</u>†: **"The BrowserGym Ecosystem for Web Agent Research"**. *Le Sellier De Chezelles et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2412.05467)]
- <u>WorkArena</u>†: **"WorkArena: How Capable are Web Agents at Solving Common Knowledge Work Tasks?"**. *Drouin et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2403.07718)]
- <u>R-Judge</u>: **"R-Judge: Benchmarking Safety Risk Awareness for LLM Agents"**. *Yuan et al.* EMNLP 2024. [[论文](https://arxiv.org/abs/2401.10019)]
- <u>R2E</u>: **"R2E: Turning any GitHub Repository into a Programming Agent Environment"**. *Jain et al.* ICML 2024. [[论文](https://proceedings.mlr.press/v235/jain24c.html)]
- <u>Evaluation Survey</u>: **"Evaluation and Benchmarking of LLM Agents: A Survey"**. *Mohammadi et al.* KDD 2025. [[论文](https://arxiv.org/abs/2507.21504)]
- <u>PentestJudge</u>†: **"PentestJudge: Judging Agent Behavior Against Operational Requirements"**. *Caldwell et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2508.02921)]
- <u>PerspectiveGap</u>†: **"PerspectiveGap: A Benchmark for Multi-Agent Orchestration Prompting"**. *Sun et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2606.08878)] [[代码](https://github.com/WhymustIhaveaname/PerspectiveGap)]
- <u>TraceDance</u>†: **"TraceDance: An Automated System for Building Agent Behavior Benchmarks from Real-World Agent Deployment Traces"**. *Min et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2609.33295)] [[项目](https://zhishanq.github.io/TraceDance/)]
  - 从部署轨迹构建特定行为的评测集，在固定的已记录 harness 上下文中评估模型的下一轮输出，不执行其动作，也不重放环境。
- <u>WildClawBench</u>†: **"WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation"**. *Ding et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.10912)]
- <u>HarnessAudit-Bench</u>†: **"Auditing Agent Harness Safety"**. *Liu et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.14271)]
- <u>AgentSWE</u>†: **"AgentSWE: Can Coding Agents Build the Agent You Actually Want?"**. *Wang et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2610.13361)]
- <u>EC2-Bench</u>†: **"Empowering Edge Agents: A Systematic Analysis of Edge-Cloud Collaboration in LLM Agent Execution"**. *Huang et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2610.17816)] [[代码](https://github.com/OpenBMB/EC2-Bench)] [[项目](https://passionate11.github.io/ec2-bench-project-page/)]

#### 协议标准化

> **证据重点：**MCP、A2A、ACP 等协议处在不同接口层。协议的作用取决于语义、状态处理、授权、错误行为与可测试的互操作性，不能只比较协议名称。

- <u>MCP</u>: **"Model Context Protocol"**. *Anthropic.* 技术报告，2024 年。[[规范](https://modelcontextprotocol.io)]
- <u>A2A</u>: **"Agent-to-Agent Protocol"**. *Google.* 技术报告，2025 年。[[规范](https://a2a-protocol.org/latest/)] [[公告](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)]
- <u>Protocol Comparison</u>†: **"A Survey of Agent Interoperability Protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP)"**. *Ehtesham et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2505.02279)]
- <u>Gorilla</u>: **"Gorilla: Large Language Model Connected with Massive APIs"**. *Patil et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2305.15334)] [[代码](https://github.com/ShishirPatil/gorilla)]

#### 运行时上下文管理

> **证据重点：**SkillsBench 与长上下文研究表明，单纯增加上下文并不足够；内容选择、位置、压缩、来源与冲突处理共同决定新增材料能否真正帮助智能体。

- <u>SkillsBench</u>†: **"SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks"**. *Li et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.12670)]
- <u>ReadAgent</u>: **"A Human-Inspired Reading Agent with Gist Memory of Very Long Contexts"**. *Lee et al.* ICML 2024. [[论文](https://arxiv.org/abs/2402.09727)]
- <u>MemoryOS</u>: **"Memory OS of AI Agent"**. *Kang et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2506.06326)]
- <u>CoALA</u>: **"Cognitive Architectures for Language Agents"**. *Sumers et al.* TMLR 2024. [[论文](https://arxiv.org/abs/2309.02427)]
- <u>SkillFortify</u>†: **"Formal Analysis and Supply Chain Security for Agentic AI Skills"**. *Bhardwaj.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.00195)]
- <u>Lost in the Middle</u>: **"Lost in the Middle: How Language Models Use Long Contexts"**. *Liu et al.* TACL 2024. [[论文](https://arxiv.org/abs/2307.03172)]
- <u>Context Engineering Survey</u>†: **"Context Engineering: A Survey of 1,400 Papers on Effective Context Management for LLM Agents"**. *Mei et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2507.13334)]

#### 工具使用与注册

> **证据重点：**工具可靠性不只取决于工具数量。工具选择、类型契约、语义授权、结果校验和恢复策略会在执行循环中共同作用。

<p align="center">
  <a href="assets/tool_governance_p2.png"><img src="assets/tool_governance_p2.png" width="1000" alt="Tool governance across the execution lifecycle"/></a>
</p>

工具治理覆盖注册、选择、分发、执行、结果处理与恢复。格式有效不等于行动获权；返回内容仍不可信，沙箱取决于配置，日志不等于独立审计。


- <u>CodeAct</u>: **"Executable Code Actions Elicit Better LLM Agents"**. *Wang et al.* ICML 2024. [[论文](https://arxiv.org/abs/2402.01030)] [[代码](https://github.com/xingyaoww/code-act)]
- <u>Schema First</u>†: **"Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance"**. *Sigdel & Baral.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.13404)]
- <u>ToolLLM</u>: **"ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs"**. *Qin et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2307.16789)] [[代码](https://github.com/OpenBMB/ToolBench)]
- <u>ToolSandbox</u>†: **"ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities"**. *Lu et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2408.04682)]
- <u>AutoTool</u>†: **"AutoTool: Efficient Tool Selection for Large Language Model Agents"**. *Jia & Li.* AAAI 2026. [[论文](https://arxiv.org/abs/2511.14650)]
- <u>Tool Learning Survey</u>: **"Tool Learning with Large Language Models: A Survey"**. *Qu et al.* Frontiers of Computer Science 2024. [[论文](https://arxiv.org/abs/2405.17935)]
- <u>GoEX</u>†: **"GoEX: Perspectives and Designs Towards a Runtime for Autonomous LLM Applications"**. *Patil et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2404.06921)]
- <u>AgentTuning</u>: **"AgentTuning: Enabling Generalized Agent Abilities for LLMs"**. *Zeng et al.* ACL 2024. [[论文](https://arxiv.org/abs/2310.12823)]
- <u>HEART</u>†: **"Harness Engineering in LLM Tool Use via Agent-Native Reusable Tool Primitives"**. *Jin et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2609.01736)]

#### 记忆架构

> **证据重点：**记忆系统需要在检索质量、写入策略、时间一致性、来源、延迟与成本之间取舍。没有一种底层方案能在所有任务类型和交互时域中稳定占优。

- <u>Agent Workflow Memory (AWM)</u>†: **"Agent Workflow Memory"**. *Wang et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2409.07429)]
- <u>Mem0</u>†: **"Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory"**. *Khant et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2504.19413)]
- <u>A-MEM</u>†: **"A-MEM: Agentic Memory for LLM Agents"**. *Xu et al.* NeurIPS 2025. [[论文](https://arxiv.org/abs/2502.12110)]
- <u>MemAct</u>†: **"Memory as Action: Autonomous Context Curation for Long-Horizon Agentic Tasks"**. *Zhang et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2510.12635)]
- <u>Memory Survey</u>†: **"Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers"**. *Du.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.07670)]
- <u>MemoryBank</u>: **"MemoryBank: Enhancing Large Language Models with Long-Term Memory"**. *Zhong et al.* AAAI 2024. [[论文](https://arxiv.org/abs/2305.10250)]
- <u>LoCoMo</u>†: **"Evaluating Very Long-Term Conversational Memory of LLM Agents"**. *Maharana et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2402.17753)]
- <u>Memory Mechanisms Survey</u>†: **"A Survey on the Memory Mechanism of Large Language Model Based Agents"**. *Zhang et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2404.13501)]
- <u>Evo-Memory</u>†: **"Evo-Memory: Benchmarking LLM Agent Test-time Learning with Self-Evolving Memory"**. *Wei et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2511.20857)]

#### 规划与推理

> **证据重点：**SWE-agent 的 ACI 研究表明，接口设计会显著影响系统表现，且在其实验设置中影响大于模型差异。LATS 将 MCTS 与语言模型反馈结合起来搜索状态空间；Plan-on-Graph 则通过引导、记忆和反思，在知识图谱上实现可自我修正的适应性规划。

- <u>Tree of Thoughts</u>: **"Tree of Thoughts: Deliberate Problem Solving with Large Language Models"**. *Yao et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2305.10601)] [[代码](https://github.com/princeton-nlp/tree-of-thought-llm)]
- <u>LATS</u>: **"Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models"**. *Zhou et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2310.04406)] [[代码](https://github.com/lapisrocks/LanguageAgentTreeSearch)]
- <u>Plan-on-Graph</u>: **"Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs"**. *Chen et al.* NeurIPS 2024. [[论文](https://proceedings.neurips.cc/paper_files/paper/2024/hash/4254e856d01a5e7b7ea050477c3ef9b9-Abstract-Conference.html)]
- <u>AFlow</u>†: **"AFlow: Automating Agentic Workflow Generation"**. *Zhang et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2410.10762)]
- <u>Agent Q</u>†: **"Agent Q: Advanced Reasoning and Learning for Autonomous AI Agents"**. *Putta et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2408.07199)]
- <u>OPENDEV</u>†: **"Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned"**. *Bui.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.05344)]
- <u>AOrchestra</u>†: **"AOrchestra: Automating Sub-Agent Creation for Agentic Orchestration"**. *Ruan et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.03786)]
- <u>RAP</u>: **"Reasoning with Language Model is Planning with World Model"**. *Hao et al.* EMNLP 2023. [[论文](https://arxiv.org/abs/2305.14992)]
- <u>Inner Monologue</u>: **"Inner Monologue: Embodied Reasoning Through Planning with Language Models"**. *Huang et al.* CoRL 2022. [[论文](https://arxiv.org/abs/2207.05608)]
- <u>Agent-Oriented Planning</u>: **"Agent-Oriented Planning in Multi-Agent Systems"**. *Li et al.* ICLR 2025. [[论文](https://arxiv.org/abs/2410.02189)]
- <u>ExACT</u>†: **"ExACT: Teaching AI Agents to Explore with Reflective-MCTS and Exploratory Learning"**. *Yu et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2410.02052)]
- <u>Steer, Don't Solve</u>†: **"Steer, Don't Solve: Training Small Critic Models for Large Code Agents"**. *Gandhi et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2606.21811)] [[代码](https://github.com/shubhamrgandhi/critic-training)]
- <u>LongHorizon-Harness</u>†: **"LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks"**. *Ma et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2608.01964)] [[代码](https://github.com/AMAP-ML/LongHorizon-Harness)]


#### 多智能体协同

> **证据重点：**[AgencyBench](https://arxiv.org/abs/2601.11044) 报告闭源模型整体表现为 48.4%，开源模型为 32.1%，并另行观察到部分专有系统的原生生态优势。48.4% 不是原生 SDK 的成功率。

<p align="center">
  <a href="assets/multi_agent_topology_p2.png"><img src="assets/multi_agent_topology_p2.png" width="1000" alt="Multi-agent coordination patterns and runtime responsibilities"/></a>
</p>

不同协同模式带来不同的身份、权限、状态一致性和证据责任。模式可以组合；仅有拓扑结构不代表权限分离、执行隔离或安全保证。


- <u>AdaptOrch</u>†: **"AdaptOrch: Task-Adaptive Multi-Agent Orchestration in the Era of LLM Performance Convergence"**. *Yu.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.16873)]
- <u>SAGA</u>†: **"SAGA: A Security Architecture for Governing AI Agentic Systems"**. *Syros et al.* NDSS 2026. [[论文](https://arxiv.org/abs/2504.21034)]
- <u>MAS-FIRE</u>†: **"MAS-FIRE: Fault Injection and Reliability Evaluation for LLM-Based Multi-Agent Systems"**. *Jia et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2602.19843)]
- <u>Byzantine fault tolerance</u>†: **"Rethinking the Reliability of Multi-agent System: A Perspective from Byzantine Fault Tolerance"**. *Zheng et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2511.10400)]
- <u>Multi-agent baseline study</u>†: **"Rethinking the Value of Multi-Agent Workflow: A Strong Single Agent Baseline"**. *Xu et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2601.12307)]
- <u>AgentVerse</u>†: **"AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors"**. *Chen et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2308.10848)]
- <u>Mixture-of-Agents</u>†: **"Mixture-of-Agents Enhances Large Language Model Capabilities"**. *Wang et al.* arXiv 2024. [[论文](https://arxiv.org/abs/2406.04692)]
- <u>Multi-Agent Survey</u>: **"Large Language Model Based Multi-Agents: A Survey of Progress and Challenges"**. *Guo et al.* IJCAI 2024. [[论文](https://arxiv.org/abs/2402.01680)]
- <u>Concordia</u>†: **"Generative Agent-Based Modeling with Actions Grounded in Physical, Social, or Digital Space Using Concordia"**. *Vezhnevets et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2312.03664)]
- <u>PEvo</u>: **"Implicit Behavioral Alignment of Language Agents in High-Stakes Crowd Simulations"**. *Wang et al.* EMNLP 2025. [[论文](https://arxiv.org/abs/2509.16457)]
- <u>Agon</u>†: **"Agon: An Autonomous Large-Scale Omnidisciplinary Research System Built on Prompt Economy"**. *Sun et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2606.24177)] [[代码](https://github.com/AutoResearch-Factory/Agon)]

#### 计算经济学

> **证据重点：**Harness 的经济性分析应同时报告令牌用量、实际耗时、工具与环境成本、并发规模、重试次数、无效工作和结果质量。只报告吞吐量，无法说明长时智能体任务的真实成本。

- <u>State of AI Report</u>: **"State of AI: An Empirical 100 Trillion Token Study with OpenRouter"**. *Aubakirova et al.* Andreessen Horowitz (a16z) 与 OpenRouter Inc.，2025 年 12 月。[[报告](https://openrouter.ai/state-of-ai)]
- <u>BentoML Inference Report</u>: **"Beyond Tokens-per-Second: How to Balance Speed, Cost, and Quality in LLM Inference"**. *Yang.* BentoML 博客，2026 年 1 月。[[博客](https://www.bentoml.com/blog/beyond-tokens-per-second-how-to-balance-speed-cost-and-quality-in-llm-inference)]
- <u>H100 Price Spike</u>: **"H100 Price Spike: Understanding the 10% Surge in GPU Rental Costs"**. *Li.* Silicon Data 博客，2026 年 1 月。[[博客](https://www.silicondata.com/blog/h100-price-spike)]
- <u>NVIDIA GTC 2026</u>: **"NVIDIA GTC 2026: Live Updates on What's Next in AI"**. *NVIDIA.* NVIDIA 博客，2026 年 3 月。[[博客](https://blogs.nvidia.com/blog/gtc-2026-news/)]
- <u>Repo2Run</u>†: **"Repo2Run: Automated Building Executable Environment for Code Repository at Scale"**. *Hu et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2502.13681)]
- <u>Policy-First</u>†: **"Guardrails as Infrastructure: Policy-First Control for Tool-Orchestrated Workflows"**. *Sigdel & Baral.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.18059)]
- <u>Strong-Weak Collaboration</u>: **"An Empirical Study on Strong-Weak Model Collaboration for Repo-level Code Generation"**. *Gandhi et al.* EMNLP 2025. [[论文](https://aclanthology.org/2025.emnlp-main.1043/)] [[代码](https://github.com/shubhamrgandhi/codegen-strong-weak-collab)]

---

### Harness 架构与演化

<p align="center">
  <a href="assets/meta_harness_p2.png"><img src="assets/meta_harness_p2.png" width="1000" alt="Reported Meta-Harness code-evaluation-history feedback loop"/></a>
</p>

Meta-Harness通过候选harness代码、任务评测、执行轨迹与累积历史反馈后续提议。图示为harness层优化，不代表模型权重更新或无约束递归改进，也不作数值性能断言。

- <u>AutoRef</u>†: **"AutoRef: Harness Optimization for Agentic Multi-Reference Image Generation"**. *Oshima et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2609.35530)] [[代码](https://github.com/KuOnoda/AutoRef)]
- <u>Harness Engineering for Language Agents</u>†: **"Harness Engineering for Language Agents: The Harness Layer as Control, Agency, and Runtime"**. *He et al.* Preprints 2026. [[论文](https://doi.org/10.20944/preprints202603.1756.v2)]
- <u>DeepAgent</u>†: **"Deepagent: A general reasoning agent with scalable toolsets"**. *Li et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2510.21618)]
- <u>Natural-Language Harnesses</u>†: **"Natural-Language Agent Harnesses"**. *Pan et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.25723)]
- <u>Self-Evolving Agents Survey</u>†: **"A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence"**. *Gao et al.* TMLR 2026. [[论文](https://arxiv.org/abs/2507.21046)]
- <u>Self-RAG</u>: **"Self-RAG: Learning to Retrieve, Generate, and Critique Through Self-Reflection"**. *Asai et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2310.11511)]
- <u>Constitutional AI</u>: **"Constitutional AI: Harmlessness from AI Feedback"**. *Bai et al.* arXiv 2022. [[论文](https://arxiv.org/abs/2212.08073)]
- <u>AppAgent</u>†: **"AppAgent: Multimodal Agents as Smartphone Users"**. *Zhang et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2312.13771)]
- <u>Scaling the Harness</u>†: **"From Model Scaling to System Scaling: Scaling the Harness in Agentic AI"**. *Gu.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.26112)] [[代码](https://github.com/SAIL-Research-Lab/cheetahclaws)]
- <u>HarnessX</u>†: **"HarnessX: A Composable, Adaptive, and Evolvable Agent Harness Foundry"**. *Chen et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2606.14249)]
- <u>DataFlow-Harness</u>†: **"DataFlow-Harness: A Grounded Code-Agent Platform for Constructing Editable LLM Data Pipelines"**. *He et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2607.16617)] [[代码](https://github.com/OpenDCAI/DataFlow-WebUI)]

### 相关综述

- <u>LLM Agents Survey</u>: **"A Survey on Large Language Model Based Autonomous Agents"**. *Wang et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2308.11432)]
- <u>Rise of LLM Agents</u>: **"The Rise and Potential of Large Language Model Based Agents: A Survey"**. *Xi et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2309.07864)]
- <u>LLM Survey</u>: **"A Survey of Large Language Models"**. *Zhao et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2303.18223)]
- <u>AI Agent Systems</u>†: **"AI Agent Systems: Architectures, Applications, and Evaluation"**. *Xu.* arXiv 2025. [[论文](https://arxiv.org/abs/2601.01743)]
- <u>AutoResearch Survey</u>†: **"What's Missing in Autonomous Research? A Systematization of Systems, Benchmarks, and Verification"**. *Ren et al.* 2026. [[论文](https://www.researchgate.net/publication/406952713)]
- <u>LLM Agents: A Survey</u>†: **"LLM Agents: A Survey"**. *Lee.* Preprints.org 2026. [[论文](https://www.preprints.org/manuscript/202608.0265/v1)]
- <u>The Agent Loop</u>†: **"The Agent Loop: A Survey of Control Strategies, Skills, and Harnesses for LLM Agents"**. *Lee and Park.* SSRN 2026. [[论文](https://github.com/js-lee-AI/awesome-agent-loop-papers/blob/main/paper/the-agent-loop-survey.pdf)]
- <u>Code as Agent Harness</u>†: **"Code as Agent Harness"**. *Ning et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.18747)]

### 业界实践报告与洞察

> 汇集 Stripe、OpenAI、Cursor、METR 等团队公开的生产部署经验。

- <u>Building Effective Agents</u>: **"Building Effective Agents"**. *Anthropic.* Anthropic 工程博客，2026 年。[[博客](https://www.anthropic.com/engineering)]
- <u>Demystifying Evals</u>: **"Demystifying Evals for AI Agents"**. *Anthropic.* Anthropic 工程博客，2026 年。[[博客](https://www.anthropic.com/engineering)]
- <u>Context Engineering</u>: **"Context Engineering Our Way to Long-Horizon Agents"**. *Chase.* Sequoia Capital 播客，2026 年。[[播客](https://sequoiacap.com/podcast/context-engineering-our-way-to-long-horizon-agents-langchains-harrison-chase)]
- <u>Agent Frameworks, Runtimes, and Harnesses</u>: **"Agent Frameworks, Runtimes, and Harnesses"**. *LangChain.* LangChain 博客，2025 年。[[博客](https://blog.langchain.com/agent-frameworks-runtimes-and-harnesses-oh-my/)]
- <u>We Removed 80% of Our Agent's Tools</u>: **"We Removed 80% of Our Agent's Tools"**. *Qu.* Vercel 工程博客，2025 年。[[博客](https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools)]
- <u>Harness Problem</u>: **"I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed."**. *Can.* 个人博客（blog.can.ac），2026 年 2 月。[[博客](https://blog.can.ac/2026/02/12/the-harness-problem/)]
- <u>AI Adoption Journey</u>: **"My AI Adoption Journey"**. *Hashimoto.* 个人博客，2026 年 2 月。[[博客](https://mitchellh.com/writing/my-ai-adoption-journey)]
- <u>The Harness Gap</u>: **"The Harness Gap: AI Coding Output Rose 59% in 2025 While Teams Shipped 7% Less"**. *Zoom In AI.* Medium（Write A Catalyst），2026 年 3 月。[[博客](https://medium.com/write-a-catalyst/the-harness-gap-ai-coding-output-rose-59-in-2025-while-teams-shipped-7-less-082d3d07cff8)]
- <u>Stripe Minions</u>: **"Minions: Stripe's one-shot, end-to-end coding agents"**. *Gray.* Stripe 开发者博客，2026 年 2 月。[[博客](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)]
- <u>Harness Engineering (OpenAI)</u>: **"Harness engineering: leveraging Codex in an agent-first world"**. *Lopopolo.* OpenAI 博客，2026 年 2 月。[[博客](https://openai.com/index/harness-engineering/)]
- <u>Self-Driving Codebases</u>: **"Towards self-driving codebases"**. *Lin.* Cursor 博客，2026 年 2 月。[[博客](https://cursor.com/blog/self-driving-codebases)]
- <u>METR SWE-bench Analysis</u>: **"Many SWE-bench-Passing PRs Would Not Be Merged into Main"**. *Whitfill et al.* METR Notes，2026 年 3 月。[[报告](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/)]
- <u>Harness-Aware Training</u>†: **"Training Agents to Evolve with Their Harness: TaoLive Digital Avatar Agent Technical Report"**. *TaoLive AIGC LLM Team.* arXiv，2026 年 8 月。[[论文](https://arxiv.org/abs/2608.15763)]
- <u>Agents SDK Evolution</u>: **"The Next Evolution of the Agents SDK"**. *OpenAI.* 2026 年 4 月。[[文章](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)]
- <u>Copilot Harness Architecture</u>: **"Agent Harnesses: The Secret Sauce Behind GitHub Copilot in VS Code"**. *Visual Studio Code Team.* 2026 年 5 月。[[文章](https://code.visualstudio.com/blogs/2026/05/15/agent-harnesses-github-copilot-vscode/)]
- <u>Antigravity 2.0</u>: **"Introducing Google Antigravity 2.0"**. *Google.* 2026 年 5 月。[[文章](https://antigravity.google/blog/introducing-google-antigravity-2?hl=en)]
- <u>Agent Executor</u>: **"Agent Executor: Google's Distributed Agent Runtime"**. *Google Cloud.* 2026 年 5 月。[[文章](https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime/)]
- <u>Agent Framework at Build</u>: **"Microsoft Agent Framework at Build 2026"**. *Microsoft.* 2026 年 6 月。[[文章](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/)]
- <u>Custom Agent Harness</u>: **"How to Build a Custom Agent Harness"**. *LangChain.* 2026 年 6 月。[[文章](https://www.langchain.com/blog/how-to-build-a-custom-agent-harness)]
- <u>Token-Efficient Harnesses</u>: **"Improving Token Efficiency in GitHub Copilot"**. *Visual Studio Code Team.* 2026 年 6 月。[[文章](https://code.visualstudio.com/blogs/2026/06/17/improving-token-efficiency-in-github-copilot)]
- <u>50,000 Agent Runs</u>: **"What 50,000 Runs Taught Us"**. *Visual Studio Code Team.* 2026 年 6 月。[[文章](https://code.visualstudio.com/blogs/2026/06/19/what-50000-runs-taught-us)]
- <u>Provider-Specific Harness Tuning</u>: **"Optimizing the VS Code Coding Harness for Model Providers"**. *Visual Studio Code Team.* 2026 年 7 月。[[文章](https://code.visualstudio.com/blogs/2026/07/06/optimizing-vscode-coding-harness-model-providers)]
- <u>Scaling the Claw or Harness</u>: **"Agent Harness: Scaling the Claw or Harness Capabilities"**. *Microsoft.* 2026 年 7 月。[[文章](https://devblogs.microsoft.com/agent-framework/agent-harness-scaling-the-claw-or-harness-capabilities/)]
- <u>TrueForge Engineering</u>: **"TrueForge: An Open-Source Agent Harness"**. *TrueFoundry.* 2026 年 8 月。[[文章](https://www.truefoundry.com/blog/engineering/trueforge-open-source-agent-harness/)]
- <u>Agent Host Architecture</u>: **"Agent Host Architecture"**. *Visual Studio Code Team.* 2026 年 8 月。[[文章](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)]
- <u>Agent Factory</u>: **"Agent Factory Recap: Agent Harnesses, Shifting Left, and Autonomous Coding"**. *Google Cloud.* 2026 年 9 月。[[文章](https://cloud.google.com/blog/topics/developers-practitioners/agent-factory-recap-agent-harnesses-shifting-left-and-autonomous-coding/)]
- <u>Hermes Agent Runtime</u>: **"Hermes Agent Documentation"**. *Nous Research.* 2026。[[文档](https://hermes-agent.nousresearch.com/docs/)]
- <u>MiMo-Code Runtime</u>: **"MiMo-Code: Open-Source Coding Agent Harness"**. *XiaomiMiMo.* 2026。[[仓库](https://github.com/XiaomiMiMo/MiMo-Code)]
- <u>Mastra Runtime</u>: **"Mastra: TypeScript Agent Framework and Runtime"**. *Mastra.* 2026。[[仓库](https://github.com/mastra-ai/mastra)]
- <u>SandBase Runtime</u>: **"SandBase Harness"**. *SandBase.* 2026。[[仓库](https://github.com/sandbaseai/sandbase-harness)]
- <u>WorkBuddy Open Platform</u>: **"Buddy App: An AI Harness for a Vertical Industry"**. *Tencent Cloud.* 2026。[[文档](https://open.workbuddy.cn/en/docs/buddy-app)]
- <u>Muse Design and Runtime</u>: **"How We Designed Muse"**. *Meta.* 2026 年 9 月。[[文章](https://introducing.muse.ai/)] [[架构](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent)]
- <u>Amazon Quick Autonomous Agents</u>: **"Amazon Quick Announces Autonomous Agents"**. *AWS.* 2026 年 6 月。[[公告](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick/)] [[文档](https://docs.aws.amazon.com/quick/latest/userguide/automate-custom-agents.html)]
- <u>OpenAI Workspace Agents</u>: **"Introducing Workspace Agents in ChatGPT"**. *OpenAI.* 2026 年 4 月。[[文章](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)]
- <u>QwenWork Runtime</u>: **"QwenWork International Edition: Product Guide"**. *Alibaba Cloud.* 2026 年 8 月。[[文档](https://www.alibabacloud.com/help/en/qwenwork/qwenwork-intro)]
- <u>OpenAI dots</u>: **"Introducing dots"**. *OpenAI.* 2026 年 9 月。[[文章](https://openai.com/index/introducing-dots/)]
- <u>Grok Bot</u>: **"Introducing Grok Bot"**. *xAI.* 2026 年 8 月。[[文章](https://x.ai/news/introducing-grok-bot)] [[企业版](https://x.ai/news/grok-bot-for-enterprise)]
- <u>OpenJarvis</u>†: **"OpenJarvis: Personal AI, on Personal Devices"**. *OpenJarvis Team.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.17172)] [[代码](https://github.com/open-jarvis/OpenJarvis)]

---

### 未来方向

综述归纳出以下八个开放研究方向。它们属于前瞻性议题，因此不附精选论文列表。

- **形式化智能体 harness 规范语言** — 设计用于描述和验证 H=(E,T,C,S,L,V) 组件的领域特定语言（DSL）
- **跨 harness 基准测试套件** — 检验不同且不兼容的执行器生态之间的可移植性
- **安全分类与威胁模型** — 将 OWASP Top 10 扩展到智能体执行器的攻击面
- **协议互操作性（MCP/A2A）** — 桥接工具级和智能体级协议
- **长时域评测方法** — 建立在多会话、多日任务中仍能保持有效性的指标
- **感知 harness 的微调方法** — 训练模型识别并适应自身的执行环境
- **记忆接口标准化** — 建立可跨平面式、情节式和图式存储迁移的记忆 API
- **智能体 harness 透明性规范** — 提高运行时决策的可审计性与可解释性

---

## 关于这篇综述

### 证据与收录方法

这是一份**经过筛选和判断的研究索引**。如果一个项目提出了不同的 harness 架构、直接相关的基准、可复用组件，或提供了能够改变运行时构建与评测方式的证据，就值得纳入本索引。

- **优先采用第一方证据：**包括源代码、官方文档、论文、规范，以及明确标注来源的第一方实践报告。
- **说明收录理由：**每个系统和基准都用一句话说明其对 harness 层的贡献。
- **区分实验单元：**分别说明模型、harness、环境、任务、预算与评测器。
- **区分不同层级：**将完整 harness、能力模块、安全层、任务环境与评测运行器分区收录。
- **保留不确定性：**“尚未核实（Unverified）”表示公开材料不足；“明确缺失（Absent）”必须有第一方材料作为依据。
- **记录截止时间：**评分反映截至 **2026-10-13** 的公开证据；系统更新后可能变化。

---

### 论文版本与引用

| 产物 | 当前版本 | 日期 / 截止时间 | 状态 |
|---|---|---|---|
| 资源索引 | **2026.10** | 证据核验截至 **2026-10-13** | 当前 README；最后更新于 **2026-10-14** |
| 仓库论文 | **v4** | 2026-04-14 | [公开 PDF](./Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf) |
| 已归档预印本 | **v3** | 2026-04-09 | [DOI 记录](https://doi.org/10.20944/preprints202604.0428.v3) |
| 论文 v5 | 修订中 | — | 正文、图片与参考文献正在审查 |

仓库目前公开的是**论文 v4**。资源索引的更新时间更晚，是为综述持续维护的证据层；论文 v5 将在正文、图片和参考文献完成审查后纳入已核验材料。完整引用信息见 [README 顶部](#阅读与引用综述)。

### 参与贡献

如果发现遗漏的系统、基准、论文或失效链接，可以[提交议题](https://github.com/Gloriaameng/Awesome-Agent-Harness/issues)或[发起拉取请求](https://github.com/Gloriaameng/Awesome-Agent-Harness/pulls)。

一份清晰的投稿应包含：

1. 项目、论文或规范的权威链接。
2. 一句话说明它为什么与 harness 层有关。
3. 支撑架构判断或定量结果的第一方证据。
4. 对可能变化的结论注明版本、提交记录、基准配置与访问日期。
5. 选择准确类别：完整 harness、能力模块、基准、任务环境、协议或评测基础设施。

修正与建议：gloriamenng@gmail.com · wangyanan@mail.dlut.edu.cn · chenliyi@xiaohongshu.com

### 更新日志

| 更新轨道 | 版本 | 日期 | 变更 |
|---|---|---|---|
| 资源索引 | **2026.10** | 2026-10-14 | 恢复论文标题、引用与综述叙事；页首仅保留星标数、参考资料总数与许可证；开放证据矩阵由 20 项扩为 34 项，并补入八条办公与个人智能体路线；新增 4—10 月出现的系统、基准、架构报告与完整分类目录；使用通行术语和自然、严谨的书面表达重写中文版 README |
| 论文 | **v4** | 2026-04-14 | 当前仓库 PDF；早于 2026.10 资源索引 |
| 已归档预印本 | **v3** | 2026-04-09 | DOI 对应的公开预印本 |

---

<p align="center">
  <i>† 表示所列版本为未经同行评审的预印本。</i><br>
  <i>由 Qianyu Meng 与 Liyi Chen 维护，欢迎提交经过筛选的补充材料。</i>
</p>
