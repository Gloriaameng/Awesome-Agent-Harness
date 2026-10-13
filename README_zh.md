<div align="center">

[English](README.md) | [中文](README_zh.md)

# 《Agent Harness for Large Language Model Agents: A Survey》

### 论文官方仓库与持续更新的证据索引

[![GitHub Stars](https://img.shields.io/github/stars/Gloriaameng/Awesome-Agent-Harness?style=social)](https://github.com/Gloriaameng/Awesome-Agent-Harness)
[![References](https://img.shields.io/badge/References-168-2b8a3e)](#5-研究资料库)
[![License](https://img.shields.io/badge/License-CC--BY--4.0-blue.svg)](license)

</div>

> **Agent 能力产生于 model–harness–environment configuration。** Harness 决定模型如何观察和行动、怎样使用工具、管理上下文与状态、跨越权限边界、从失败中恢复，并为评测留下可检查的证据。

这是综述论文 **《Agent Harness for Large Language Model Agents: A Survey》** 的官方仓库。论文是整个项目的中心：它界定研究对象，提出 ETCSLV 分析框架，梳理历史来源，比较代表系统，并组织评测版图与研究议程。下面的资源索引用于在论文版本之间持续维护这套证据基础。

📄 **[Paper v4](./Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf)** · 🌐 **[已归档预印本 v3](https://www.preprints.org/manuscript/202604.0428/v3)** · 🗂️ **Resource Index 2026.10**（证据截至 2026-10-13）· **Paper v5 正在修订**

[综述贡献](#这篇综述做了什么) · [概念框架](#1-概念框架) · [系统版图](#3-系统版图) · [评测版图](#4-评测版图) · [研究资料库](#5-研究资料库)

---

## 阅读与引用综述

**Qianyu Meng 等（2026），《Agent Harness for Large Language Model Agents: A Survey》。** 仓库内公开 PDF 为 **v4**；当前 DOI 对应已归档的 **v3** 预印本。Paper v5 的正文、图片与引用仍在修订，尚未发布。

- **阅读全文：**[Paper v4 PDF](./Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf)
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

多数 Agent 报告突出模型和任务分数，却把 runtime configuration 留在隐含位置。这篇综述把缺失的中间层明确出来，并把概念分析与系统、benchmark 和工程证据连接起来。

1. **提出联合分析单元。** 在 **model–harness–environment** 层面研究 Agent 行为，让结果能够回到产生它的完整 configuration。
2. **建立统一架构视角。** **ETCSLV** 将反复出现的 harness 功能整理为 execution、tool、context、state、lifecycle 与 evaluation。
3. **梳理历史来源。** 把软件 test harness、强化学习 environment、早期 LLM Agent framework 与今天的持久 Agent runtime 连到同一条演进线上。
4. **建立可比较的系统版图。** 用同一套证据编码矩阵分析 34 个系统，覆盖 coding、application runtime、办公、personal agent、OS 与 meta-harness 路线；比较集会随公开证据继续扩展，Claude Code、Codex、DeepSeek Harness 与 OpenClaw 作为等深度重点案例展开。
5. **重组评测版图。** 按真正改变的变量区分 harness-effect benchmark、lifecycle 与 security test、long-horizon recovery、protocol benchmark、evaluation infrastructure 和 task environment。
6. **提出面向演化 runtime 的研究议程。** 将 context、memory、tool、security、observability 与 cost 连接到 harness evolution 和有边界的 runtime self-improvement。

### 从这张版图中可以看到什么

- **Harness 是实验变量。** 即使模型固定，tool、context policy、state、permission 或 loop logic 的变化也会改变被观察到的行为。
- **架构覆盖与产品成熟度是不同问题。** ETCSLV 记录系统暴露了哪些能力；reliability、adoption 与 quality 需要各自的证据。
- **长时 Agent 让 trace 与 lifecycle event 成为研究对象。** 只看最终任务成功无法解释 recovery、policy decision、accumulated state 与 regression。
- **Runtime self-improvement 需要外部评测闭环。** 持久修改应当被隔离，在 held-out task 上评测，经过安全与成本门禁，并支持版本管理与回滚。

## 综述与仓库地图

README 沿用论文的论证顺序，而不是把项目堆成一份与综述脱节的软件清单。按编号阅读可以看到完整的概念论述；各目录则是对应论文部分持续维护的证据层。

| 综述问题 | 仓库部分 | 你会看到什么 |
|---|---|---|
| Harness layer 到底是什么？ | [1. 概念框架](#1-概念框架) | Model–harness–environment 边界与 ETCSLV |
| 这种架构从哪里演变而来？ | [2. 历史演进](#2-历史演进) | Test harness、RL environment、LLM Agent 与 runtime 的历史来源 |
| 哪些系统实现了它？ | [3. 系统版图](#3-系统版图) | 四个重点案例、开放的 34 系统证据矩阵与分类目录 |
| 应该如何评测？ | [4. 评测版图](#4-评测版图) | 30 个直接 harness benchmark、评测基础设施与任务环境 |
| 每类工程问题有哪些证据？ | [5. 研究资料库](#5-研究资料库) | 按工程问题组织的 168 篇论文、规范、架构说明与报告 |
| 如何收录，和论文版本是什么关系？ | [关于这篇综述](#关于这篇综述) | 证据规则、版本、引用与贡献指南 |

---

## 1. 概念框架

我们用 **H = (E, T, C, S, L, V)** 分析 harness：这是公开系统中反复出现的六类治理功能，用于统一比较架构；产品质量和生产成熟度使用独立证据评估。

<p align="center">
  <img src="assets/architecture_diagram.png" width="720" alt="H=(E,T,C,S,L,V) 六组件分析框架"/>
</p>

| 组件 | 符号 | 需要观察的内容 |
|---|:---:|---|
| Execution Loop | **E** | turn/step 控制、终止、重试、恢复、delegation |
| Tool Registry | **T** | typed tool、routing、validation、authorization、结果处理 |
| Context Manager | **C** | prompt assembly、retrieval、compaction、salience、provenance |
| State Store | **S** | 跨 turn 与跨 session 持久化、checkpoint、恢复 |
| Lifecycle Hooks | **L** | 认证、审批、策略、instrumentation、interception |
| Evaluation Interface | **V** | trajectory、中间状态、结果、实验、审计 |

---

## 2. 历史演进

<p align="center">
  <img src="assets/timeline.png" width="720" alt="Agent Harness 历史演进"/>
</p>

| 年份 | 里程碑 | 对 Harness 的意义 |
|---|---|---|
| 1997–2005 | JUnit、TestNG、xUnit family | 标准化 setup、execution、observation、assertion 与 teardown |
| 2016 | OpenAI Gym | 让 step/reset 成为 Agent 与 environment 之间的典型接口 |
| 2022 | ChatGPT 与 LangChain | 让 tool use 与可组合 LLM application 形成常见 runtime pattern |
| 2023 | ReAct、Toolformer、MemGPT、Reflexion、Voyager、AutoGPT | 建立 reasoning–acting、memory、reflection 与 skill accumulation 范式 |
| 2023 | CAMEL、ChatDev、Generative Agents | 把 orchestration 扩展到角色、团队与社会模拟 |
| 2023 | AgentBench、SWE-bench | 让 environment design 与 Agent evaluation 成为关键基础设施 |
| 2024 | MetaGPT、WebArena、ToolLLM、SWE-agent、OSWorld | 把 Agent 接入真实 tool、repository、browser 与 desktop |
| 2024 | CodeAct、LATS、Tree of Thoughts | 探索 executable action 与 search-based control policy |
| 2024 | Model Context Protocol | 标准化不断扩大的 tool-to-harness 边界 |
| 2025 | HAL、AIOS、LangGraph、A2A | 推进 evaluation infrastructure、Agent OS、durable graph 与 Agent interoperability |
| 2025 | MemoryOS、AgentBound† | 发展 memory abstraction 与 runtime enforcement |
| 2026 | Antigravity、办公与 personal agent、Harness-Bench、HarnessX、LongHorizon-Harness、HarnessAudit-Bench、SCLATE | Harness 扩展到 coding、办公与 personal agent，同时让 harness 选择、演化、长时运行、生命周期风险与可审计性成为直接研究对象 |

---

## 3. 系统版图

系统版图从深度走向广度：四个重点案例详细暴露 runtime，证据矩阵使用统一口径比较，目录继续保留更广的系统、substrate、能力模块与评测基础设施。比较集由证据门槛决定并持续开放；34 是当前应用收录规则的结果，不是预设目标，也不代表已经穷尽所有系统。产品形态不是排除条件：办公与 personal agent 只要有足够公开架构证据，同样属于 harness 研究对象。

### 四个重点系统

这四个系统是综述的重点案例。它们使用相同的分析框架和相近篇幅，因为它们分别回答了同一个 runtime 问题：如何把模型调用变成有治理、可持续、能使用工具的工作过程。

- **[Claude Code](https://github.com/anthropics/claude-code)** — 垂直整合的 coding harness，把仓库检查、编辑、命令、Web 与 MCP 工具、subagent、skills、hooks、权限、checkpoint 和会话继续放进同一条执行链。[Agent SDK](https://github.com/anthropics/claude-agent-sdk-python) 进一步把交互式与可编程使用中的执行和策略层暴露出来。
- **[Codex](https://github.com/openai/codex)** — 覆盖 terminal、IDE、app 与 cloud 工作流的开源 coding harness。runtime 组合了仓库工具、sandbox、审批、MCP、skills、subagent、context compaction、可恢复 thread 和结构化事件。共享 runtime 让不同界面中的长时工作都能被检查；OpenAI 的 [harness engineering](https://openai.com/index/harness-engineering/) 实践也说明这些控制如何支撑持续的软件工程工作。
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — plugin-native runtime；model adapter、loop、工具、context projection、storage、telemetry 与界面通过 profile、bundle 和有序 patch 组合。这些边界让团队能够分别替换和审计 loop、context policy、tool behavior 与 observability。[架构](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md)、[工具子系统](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/core/tools/README.md)和[压缩机制](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/subsystems/compaction.md)也为有边界、可评测、可回滚的 harness-level improvement 提供了具体底座。
- **[OpenClaw](https://github.com/openclaw/openclaw)** — 围绕 channel、session、tool、skill、memory、scheduled work、gateway routing 与 sandbox execution 构建的常驻个人 Agent harness。它把部署连续性放在中心：身份、凭据、后台任务、workspace state 与运行策略不会在一次对话结束后消失。这种运行方式使它成为研究持久个人 Agent，而非一次性 assistant 的关键案例。

### 证据编码比较矩阵

评分描述证据截止日期时能够由公开材料证明的组件覆盖。质量、生产成熟度与采用情况分别表达；stars 只作为采用信号。

**图例：**● **Full** — 内置且有文档证明 · ◐ **Partial** — 能力有限、可选或由官方扩展提供 · ○ **Absent** — 一方材料明确排除 · ? **Unverified** — 公开材料不足。

| 类别 | 系统 | E | T | C | S | L | V |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| 重点 coding harness | **Claude Code** | ● | ● | ● | ◐ | ● | ◐ |
| 重点 coding harness | **Codex** | ● | ● | ● | ● | ● | ◐ |
| 重点 coding harness | **DeepSeek Harness** | ● | ● | ● | ● | ● | ◐ |
| 重点 coding harness | **OpenClaw** | ● | ● | ● | ● | ● | ◐ |
| Coding harness | **Antigravity CLI** | ● | ● | ● | ● | ● | ◐ |
| Coding harness | **OpenCode** | ● | ● | ● | ● | ● | ◐ |
| Coding harness | **Goose** | ● | ● | ◐ | ◐ | ● | ◐ |
| Coding harness | **Grok Build** | ● | ● | ● | ● | ● | ◐ |
| Coding harness | **Cline** | ● | ● | ◐ | ● | ● | ◐ |
| Coding harness | **OpenHands** | ● | ● | ● | ● | ● | ◐ |
| Coding harness | **Deep Agents** | ● | ● | ● | ● | ● | ● |
| Coding harness | **Prime Agent** | ● | ● | ● | ● | ◐ | ◐ |
| Coding harness | **GitHub Copilot in VS Code** | ● | ● | ● | ● | ● | ● |
| Coding harness | **MiMo-Code** | ● | ● | ● | ● | ● | ● |
| 通用 runtime | **OpenAI Agents SDK** | ● | ● | ● | ● | ● | ● |
| 通用 runtime | **Google ADK** | ● | ● | ● | ● | ● | ● |
| 通用 runtime | **Microsoft Agent Framework** | ● | ● | ● | ● | ● | ● |
| 通用 runtime | **LangGraph** | ● | ◐ | ◐ | ● | ◐ | ◐ |
| 通用 runtime | **Mastra** | ● | ● | ● | ● | ● | ● |
| 持久、meta 与 operational harness | **DeerFlow** | ● | ● | ● | ● | ● | ◐ |
| 持久、meta 与 operational harness | **AOHP** | ● | ● | ● | ● | ● | ◐ |
| 持久、meta 与 operational harness | **Omnigent** | ● | ● | ◐ | ● | ● | ◐ |
| 持久、meta 与 operational harness | **TrueForge** | ● | ● | ● | ● | ● | ● |
| 持久、meta 与 operational harness | **LongHorizon-Harness** | ● | ◐ | ● | ● | ● | ● |
| 持久、meta 与 operational harness | **Hermes Agent** | ● | ● | ● | ● | ● | ● |
| 持久、meta 与 operational harness | **SandBase** | ● | ● | ◐ | ● | ● | ● |
| 办公与 personal-agent harness | **WorkBuddy** | ● | ● | ● | ● | ● | ● |
| 办公与 personal-agent harness | **Muse** | ● | ● | ● | ● | ● | ◐ |
| 办公与 personal-agent harness | **Amazon Quick** | ● | ● | ● | ● | ● | ● |
| 办公与 personal-agent harness | **OpenAI Workspace Agents** | ● | ● | ● | ● | ● | ◐ |
| 办公与 personal-agent harness | **QwenWork** | ● | ● | ● | ● | ● | ? |
| 办公与 personal-agent harness | **OpenAI dots** | ● | ● | ● | ● | ● | ◐ |
| 办公与 personal-agent harness | **Grok Bot** | ● | ● | ● | ● | ● | ? |
| 办公与 personal-agent harness | **OpenJarvis** | ● | ● | ● | ● | ● | ● |

### 系统目录

矩阵收录所有目前能够由一方公开材料对六项组件做出有用判断的系统。它不是“Top 34”，也不是成熟度排名。分析单位不同、证据尚不完整或只聚焦单项能力的项目仍保留在下面的分类目录中。

#### 进入比较矩阵的 Coding Harness

除上面的四个重点系统外，比较矩阵还包含以下十个 coding harness。

- **[Antigravity CLI](https://antigravity.google/blog/introducing-google-antigravity-2?hl=en)** — Google 当前的 coding harness，提供动态 subagent、异步任务、skill、hook、项目权限、定时任务，并把这些控制带入 CLI。它已经接替 Gemini CLI 的消费端用途；Google 另行说明了[迁移安排](https://github.com/google-gemini/gemini-cli/discussions/27274)。
- **[OpenCode](https://github.com/anomalyco/opencode)** — 具有 terminal 与 client/server 界面、多模型提供方、工具执行、session 与扩展机制的开源 coding agent。
- **[Goose](https://github.com/aaif-goose/goose)** — 本地、可扩展的 coding agent，通过 extension 与 MCP-compatible interface 接入工具和外部系统。
- **[Grok Build](https://github.com/xai-org/grok-build)** — xAI 面向仓库工作、工具使用、上下文处理与迭代验证开放的 coding-agent harness。
- **[Cline](https://github.com/cline/cline)** — IDE coding agent，提供 plan/act workflow、checkpoint、浏览器与 terminal 工具、MCP 集成和显式审批点。
- **[OpenHands](https://github.com/OpenHands/OpenHands)** — 面向软件开发 Agent 的平台，组合隔离 runtime、event stream、工具执行、浏览、delegation 与 evaluation integration。
- **[Deep Agents](https://github.com/langchain-ai/deepagents)** — 集成 planning、filesystem、subagent、context management、memory 与 LangGraph execution 的 batteries-included agent harness。
- **[Prime Agent](https://github.com/PrimeIntellect-ai/prime-agent)** — 聚焦长时仓库任务、execution environment、trajectory capture 与训练/评测 workflow 的 coding-agent 系统。
- **[GitHub Copilot in VS Code](https://code.visualstudio.com/blogs/2026/05/15/agent-harnesses-github-copilot-vscode/)** — editor-native production harness，公开架构包括针对不同模型的 context/tool adaptation、显式 loop control、可迁移 session、权限 hook 与自动评测流程。
- **[MiMo-Code](https://github.com/XiaomiMiMo/MiMo-Code)** — 小米开放的 terminal coding harness，包含持久项目记忆、checkpoint、context reconstruction、subagent、skill、MCP、permission rule，以及由独立 judge 驱动的研究与实验 loop。

#### 通用 Agent Runtime

- **[OpenAI Agents SDK](https://github.com/openai/openai-agents-python)** — 提供工具、handoff、guardrail、session、tracing 与 multi-agent workflow 的 runtime。OpenAI 的 [2026 架构更新](https://openai.com/index/the-next-evolution-of-the-agents-sdk/)把同一 runtime 延伸到更长时、有状态的工作。
- **[Google ADK](https://github.com/google/adk-python)** — 集成 workflow agent、工具、session、callback、evaluation 与 deployment integration 的 Agent 开发工具包。
- **[Microsoft Agent Framework](https://github.com/microsoft/agent-framework)** — Microsoft 面向 agent、workflow、middleware、memory、tool、observability 与 evaluation 的 runtime；其 [Build 2026 更新](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/)说明了当前平台方向。
- **[LangGraph](https://github.com/langchain-ai/langgraph)** — 支持 durable execution、checkpoint、interrupt、streaming 与 human-in-the-loop workflow 的有状态图 runtime。
- **[Mastra](https://github.com/mastra-ai/mastra)** — TypeScript-native application runtime，组合 autonomous agent、graph workflow、tool 与 MCP、持久 suspend/resume state、memory、observability 与内置 evaluation。

#### 持久、Meta、OS 与 Operational Harness

- **[DeerFlow](https://github.com/bytedance/deer-flow)** — 面向研究与 coding workflow 的模块化 harness，包含 subagent、skill、memory、sandbox execution 与 long-running task。
- **[AOHP](https://github.com/aohp-os/aohp)** — 面向个性化交互、本地资源、效率与安全边界的 OS-level harness。
- **[Omnigent](https://github.com/omnigent-ai/omnigent)** — 连接工具使用、state、memory、policy 与多界面执行的通用 Agent 平台。
- **[TrueForge](https://github.com/truefoundry/trueforge)** — self-hosted、vendor-neutral runtime 与 control plane，覆盖 model call、MCP/skill、sandbox、approval、deferred tool、context compaction、持久 session、身份管理、运行检查与可复现实验。[工程说明](https://www.truefoundry.com/blog/engineering/trueforge-open-source-agent-harness/)
- **[LongHorizon-Harness](https://github.com/AMAP-ML/LongHorizon-Harness)** — 在现有 coding agent 外包裹 plan–act–verify、durable state、role isolation、audit、checkpoint 与 recovery 的 meta-harness。[论文](https://arxiv.org/abs/2608.01964)
- **[Hermes Agent](https://github.com/nousresearch/hermes-agent)** — 持久个人 Agent runtime，提供 memory、Agent 自建 skill、多 channel gateway、多种 sandbox backend、subagent、approval、checkpoint、context compression、trajectory 与 batch evaluation。[文档](https://hermes-agent.nousresearch.com/docs/)
- **[SandBase](https://github.com/sandbaseai/sandbase-harness)** — local-first operations/security control plane，提供 resumable session、audit/replay、MCP toolset、credential/approval policy、多种 sandbox backend、typed SDK 与 conformance test。

#### 办公与 Personal-Agent Harness

- **[WorkBuddy](https://www.workbuddy.ai/)** — 腾讯云面向办公工作的 harness，可跨 IM、文档、邮件、会议与知识库规划并执行任务；其[开放平台](https://open.workbuddy.cn/en/docs/buddy-app)与[托管 Agent runtime](https://cloud.tencent.com/document/product/1831/138968)进一步公开 skill、MCP/OAuth/A2A、multi-agent orchestration、context compression、memory、隔离执行、恢复、trace、evaluation 与 lifecycle governance。
- **[Muse](https://muse.ai/)** — Meta 的 personal-agent harness；每位用户的 Agent 运行在持久隔离 VM 中，具有 browser、filesystem、terminal、memory、connected app、自建工具、定时和事件驱动工作、action approval、credential isolation 与完整 activity trail。[设计说明](https://introducing.muse.ai/) · [发布与安全架构](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent)
- **[Amazon Quick](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick/)** — 办公 harness，组合 autonomous background agent、可复用 flow、企业 data space、细粒度 autonomy、identity propagation、approval、monitoring，以及[带 log 和 watch variable 的 test run](https://docs.aws.amazon.com/quick/latest/userguide/automate-custom-agents.html)。
- **[OpenAI Workspace Agents](https://openai.com/index/introducing-workspace-agents-in-chatgpt/)** — Codex-powered 组织级 Agent，提供共享 skill、file、app 与 MCP、cloud execution、schedule/Slack trigger、approval handoff、role-based publishing、version history、analytics 与 Compliance API visibility。
- **[QwenWork](https://www.alibabacloud.com/help/en/qwenwork/qwenwork-intro)** — 面向个人和组织的工作平台，提供显式 Agent session、plan 与 intermediate result、file、skill、connector、scheduled task、computer use、workspace isolation 与敏感操作确认；公开的通用 evaluator 仍未核验。
- **[OpenAI dots](https://openai.com/index/introducing-dots/)** — always-on personal agent，具有独立 cloud computer/browser、plugin、持久 memory/note、scheduled/proactive work、本地与 Codex cloud action、custom rule、auto-review 和 approval。
- **[Grok Bot](https://x.ai/news/introducing-grok-bot)** — 运行在持久 cloud computer 上的 Agent，提供 browser、terminal、app、并行 bot、bot-to-bot coordination、chief-of-staff hierarchy 与 demonstration-to-routine；[企业版控制](https://x.ai/news/grok-bot-for-enterprise)补充 isolation、access、network 与 audit governance。
- **[OpenJarvis](https://github.com/open-jarvis/OpenJarvis)** — local-first、on-device personal-agent stack，具有 typed runtime primitive、多种 agent loop、tool/MCP、sandbox、多种 memory backend、scheduled operative、完整 trace、trace-driven routing，以及 accuracy、latency、energy、cost 联合评测。[论文](https://arxiv.org/abs/2605.17172)

#### 办公与 Personal-Agent 观察名单

这些系统继续收录，但公开架构、成熟度或独立分析单位仍在形成中。

- **[Microsoft Copilot Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/)** — 处于 preview 的办公 Agent，具有独立 identity、memory、computer、workspace 与企业治理；公开 tool 与 evaluation 文档仍有限。
- **[Google Workspace Studio](https://workspace.google.com/blog/product-announcements/introducing-google-workspace-studio-agents-for-everyday-work)** — agentic workplace flow builder；2026 年更新了[最小权限、HITL、DLP、drift detection 与 audit](https://workspace.google.com/blog/identity-and-security/defend-against-agentic-risks-with-multi-layered-protections-in-google-workspace-studio)。
- **[Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)** — 由 Claude Code 与 Cowork 思路演化出的共享、持久办公交互；在独立 runtime 边界公开前，作为该 lineage 的产品形态收录。
- **[Claude Managed Agents](https://www.anthropic.com/news/finance-agents)** — 提供 long-running session、per-tool permission、credential vault 与 audit log；作为 Claude runtime lineage 的 workplace deployment case 收录。
- **[nanoMuse](https://github.com/nano-muse/nanoMuse)** — 跨手机和桌面的新开源 personal agent，提供 scheduled goal、editable memory 与 risk gate；系统部分基于 DeepSeek Harness 和 OpenMinis。[论文](https://arxiv.org/abs/2610.08699)
- **[Qwen Book](https://www.alibabacloud.com/blog/603599)** — 早期“OS as harness”办公设备，组合 model、OS、app、cloud、context、memory、execution 与 governance；组件级公开证据仍有限。

#### 扩展目录

- **[Aider](https://github.com/Aider-AI/aider)** — 具有 repo map、edit format、git 集成与多模型支持的 terminal pair programming 工具。
- **[mini-SWE-agent](https://github.com/SWE-agent/mini-swe-agent)** — 有意保持极简的软件工程 Agent，采用短而线性的 loop，支持多种 sandbox、trajectory inspection 与广泛 benchmark；SWE-agent 维护者建议新工作优先使用它。
- **[SWE-agent](https://github.com/SWE-agent/SWE-agent)** — 为在仓库环境中解决软件工程 issue 而设计的 agent-computer interface。
- **[AutoGen](https://github.com/microsoft/autogen)** — 面向对话式与 multi-agent application 的 event-driven framework。
- **[MetaGPT](https://github.com/geekan/MetaGPT)** — 围绕角色、标准作业流程与共享产物组织的软件工程 multi-agent workflow。
- **[CAMEL](https://github.com/camel-ai/camel)** — 支持 role-playing、tool use、memory 与 agent society 的 multi-agent framework。
- **[ChatDev](https://github.com/OpenBMB/ChatDev)** — 通过分阶段开发过程协调专业 Agent 的虚拟软件公司。
- **[AIOS](https://github.com/agiresearch/AIOS)** — 将 Agent kernel 与独立 Cerebrum SDK 分开的研究型操作系统架构，在 model、tool、memory、storage 与 access control 之间提供中介；它具有重要历史价值，但分析单位以及公开 lifecycle/evaluation 证据与完整 runtime 矩阵并不一致。
- **[Raven](https://github.com/EverMind-AI/Raven)** — 用于组装和协调 Agent 能力的可组合 “harness of harnesses”。
- **[Open SWE](https://github.com/langchain-ai/open-swe)** — 面向委托式仓库工作的开源异步 coding-agent reference。
- **[QM](https://github.com/yc-software/qm)** — 探索自主仓库工作与 tool-driven development 的开源 coding-agent 项目。
- **[Eve](https://github.com/vercel/eve)** — Vercel 面向迭代软件工作与 execution-driven feedback 的开源 Agent 项目。
- **[Shepherd](https://github.com/shepherd-agents/shepherd)** — 用于协调开发任务与专业 worker 的 Agent orchestration 项目。
- **[YYLO](https://github.com/yylo-dev/yylo)** — 通过 plugin、证据记录与纵向 workflow 编排 coding agent 的 CLI。
- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** — Google 较早的开源 terminal agent。其消费端服务已于 2026 年 6 月迁移到 Antigravity CLI，原仓库仍可作为架构历史来源。[迁移公告](https://github.com/google-gemini/gemini-cli/discussions/27274)

#### 长时与领域型 Harness

- **[CheetahClaws](https://github.com/SAIL-Research-Lab/cheetahclaws)** — 面向固定模型做系统级 scaling 的研究 harness，涵盖 orchestration、tool、context 与并行工作。[论文](https://arxiv.org/abs/2605.26112)
- **[DataFlow-Harness](https://github.com/OpenDCAI/DataFlow-WebUI)** — 用于组合、运行和评测 Agent 数据 workflow 的 data-centric harness。[论文](https://arxiv.org/abs/2607.16617)

#### 持久执行、协议与 Sandbox 基础设施

这些项目提供 harness 可以承载或连接的基础设施。持久执行、协议托管或 sandbox 本身并不等于完整 Agent harness，因此单独列出。

- **[Google AX](https://github.com/google/ax)** — 面向分布式长时 Agent 的 durable execution 基础设施；Google 的 [Agent Executor 架构](https://cloud.google.com/blog/products/ai-machine-learning/agent-executor-googles-distributed-agent-runtime/)明确支持接入已有 harness。
- **[Agent Substrate](https://github.com/agent-substrate/substrate)** — 为 Agent runtime 提供 event log、snapshot、branch、suspend 与 resume 的持久化 substrate。
- **[VS Code Agent Host](https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture)** — 在编辑器侧协调 coding-agent session、tool、permission 与 lifecycle event 的 host。
- **[Agent Host Protocol](https://github.com/microsoft/agent-host-protocol)** — coding agent 与 host surface 之间的 transport 和 protocol 边界。

#### 能力模块与研究范式

这些项目按照各自聚焦的能力或研究范式评估，不使用 full-stack 组件覆盖口径。

- **[MemGPT](https://github.com/cpacker/MemGPT)** — 受操作系统启发的分层 memory 与 context management。
- **[Reflexion](https://github.com/noahshinn/reflexion)** — 跨 trial 的语言反馈与 reflective memory。
- **[Voyager](https://github.com/MineDojo/Voyager)** — 开放式 skill acquisition、curriculum generation 与可复用 code skill。
- **[Generative Agents](https://github.com/joonspk-research/generative_agents)** — 用 memory、reflection 与 planning 构建可信的社会性 Agent。
- **[Concordia](https://github.com/google-deepmind/concordia)** — 在物理、社会或数字世界中构建生成式 agent-based simulation 的 library。
- **[SkillOpt](https://github.com/microsoft/SkillOpt)** — 从带评分的 trajectory 生成有边界的 skill 优化，并通过 evaluation gate 控制更新。
- **[Harness²](https://github.com/google-research/harness2)** — 研究如何 propose、probe 和 compose 对 prompt、guardrail、memory、tool guidance、subagent、skill、script 与 plugin 的持久修改；当前作为早期研究代码收录。

#### 评测基础设施

- **[HAL](https://arxiv.org/abs/2510.11977)** — 统一的 Agent execution、evaluation 与 leaderboard infrastructure。
- **[Harbor](https://github.com/harbor-framework/harbor)** — 可替换 agent、model、dataset、container environment、trace 与 parallel rollout。[论文](https://arxiv.org/abs/2609.04298)
- **[AgentCompass](https://arxiv.org/abs/2607.13705)** — 将 benchmark、harness 与 environment 分开，以提高 Agent 评测可复现性的基础设施。
- **[BrowserGym](https://github.com/ServiceNow/BrowserGym)** — 面向 Web Agent 研究的通用 environment 与 evaluation layer。
- **[lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)** — 广泛使用的语言模型 evaluation runner，也是现代 Agent harness evaluation 的历史与命名参照。

---

## 4. 评测版图

这里收录的 benchmark 要能揭示**模型周围 runtime**的某一部分：组件选择、跨时间状态、恢复、权限、审计、协议行为或评测基础设施。报告结果时，应同时说明 model、harness、environment、task version、budget 与 evaluator。

### 1. Harness Effect

- **[Harness-Bench](https://arxiv.org/abs/2605.27922)** — 在共享的 sandbox task、environment、budget 与 evaluation 下比较 model–harness configuration。
- **[Beyond the Model](https://arxiv.org/abs/2609.32459)** — 分离 tool registry、context compression、planning、subagent 与 lazy skill 的影响。
- **[LongHarness Bench](https://arxiv.org/abs/2609.38137)** — 评测 long-context harness 的准确率与效率。
- **[Harness the Memory](https://arxiv.org/abs/2608.15008)** — 在共享 harness 中跨 model 与 task suite 比较 memory substrate。
- **[WildClawBench](https://arxiv.org/abs/2605.10912)** — 使用双语、多模态、人工编写的 CLI 任务，比较不同 harness 如何改变同一模型家族的表现。

### 2. Harness Evolution 与 Runtime Self-Improvement

- **[EVOHARNESSBENCH](https://arxiv.org/abs/2609.04280)** — 测量 tool、skill 与 agent 随时间变化时的保留与适应能力。
- **[SkillOpt](https://arxiv.org/abs/2605.23904)** — 从带评分 trajectory 生成有边界的 skill edit，并通过 held-out evaluation gate 决定是否接受。
- **[SCLATE](https://arxiv.org/abs/2609.32391)** — 把 session、scheduled task 与 memory consolidation 放到共享 event timeline 上。
- **[TaoLive](https://arxiv.org/abs/2608.15763)** — 研究 Agent 如何通过 harness-aware training 适应变化的 runtime。
- **[Meta-Harness](https://arxiv.org/abs/2603.28052)** — 端到端优化 model harness。
- **[AutoHarness](https://arxiv.org/abs/2603.03329)** — 围绕固定模型自动生成 code harness 以改善 Agent。
- **[VeRO](https://arxiv.org/abs/2602.22480)** — 让 Agent 评测和优化其他 Agent 的 evaluation harness。
- **[AgentSWE](https://arxiv.org/abs/2610.13361)** — 评测 Agent 创建、修改和改进 Agent 代码库的完整 lifecycle，使 harness 本身成为软件工作对象。

### 3. Lifecycle、Security 与 Audit

- **[HarnessRisk](https://arxiv.org/abs/2608.17597)** — 测试 configuration、extension、runtime、persistence、action 与 recovery 阶段的风险。
- **[HarnessSecurity-Bench](https://arxiv.org/abs/2610.07639)** — 测量真实 coding harness 与不同 permission setting 下的 utility 和 attack effect。
- **[Hearsay](https://arxiv.org/abs/2609.32495)** — 测试 harness 生成的记录能否支持独立审计。
- **[SandboxEscapeBench](https://arxiv.org/abs/2603.02277)** — 测量模型能否发现并利用刻意植入的 sandbox misconfiguration 与 vulnerability。
- **[HarnessAudit-Bench](https://arxiv.org/abs/2605.14271)** — 跨 harness configuration 评测 trajectory boundary compliance、execution fidelity 与 system stability，而不是只看最终答案。

### 4. Long-horizon Loop 与 Recovery

- **[LoopsBench](https://arxiv.org/abs/2608.00267)** — 评测持续开发循环以及 Agent 能否不断做出有效进展。
- **[Long-Horizon-Terminal-Bench](https://arxiv.org/abs/2607.08964)** — 测试 Agent 在状态持续积累的长时 terminal task 上的表现。
- **[SWE-Chain](https://arxiv.org/abs/2605.14415)** — 评测依赖性软件修改，以及沿任务链传播的后续义务。
- **[ChainSWE](https://arxiv.org/abs/2607.02606)** — 测量后续任务依赖前序修改和持久状态的仓库工作。
- **[Hell or High Water](https://arxiv.org/abs/2508.11027)** — 评测 Agent execution 遭遇外部故障后的恢复能力。

### 5. Protocol 与 Tool Substrate

- **[DynamicMCPBench](https://arxiv.org/abs/2607.20531)** — 评测实时变化的 MCP server、tool 与 state。
- **[MCP-Bench](https://arxiv.org/abs/2508.20453)** — 评测通过 Model Context Protocol 完成的端到端工具使用。
- **[MCP-AgentBench](https://arxiv.org/abs/2509.09734)** — 测试 MCP Agent 的工具发现、选择与执行。
- **[MCPAgentBench](https://arxiv.org/abs/2512.24565)** — 评测 tool discrimination 与 stateful MCP interaction。

### 6. Evaluation Infrastructure

- **[AgentCompass](https://arxiv.org/abs/2607.13705)** — 把 benchmark、harness 与 environment 明确为不同实验单元。
- **[Harbor](https://github.com/harbor-framework/harbor)** — 在 containerized dataset 中运行可替换 Agent 与模型，并记录 trace 和 parallel rollout。
- **[HAL](https://arxiv.org/abs/2510.11977)** — 为 Agent evaluation 提供统一执行与 leaderboard infrastructure。

### 任务环境

这些 benchmark 主要回答 **Agent 能完成什么任务**。Harness 研究把它们作为 task substrate，并增加控制变量以隔离 runtime 的影响。

- **[RoboQuest](https://github.com/declare-lab/RoboQuest)** — 面向通过工具调用控制机器人的多模态 Agent 的仿真移动操作任务；隐藏信息须通过搜索、检查或测试获得。[论文](https://arxiv.org/abs/2610.10388)
- **[AgencyBench](https://arxiv.org/abs/2601.11044)** — 面向自主 Agent 的长上下文、高后果任务；整体结果与原生生态观察应分别报告。
- **[ClawBench](https://github.com/TIGER-AI-Lab/ClawBench)** — 面向个人与 computer-use agent 的日常在线任务。[论文](https://arxiv.org/abs/2604.08523)
- **[OSWorld](https://github.com/xlang-ai/OSWorld)** — 真实操作系统环境中的开放式 computer task。
- **[WebArena](https://github.com/web-arena-x/webarena)** — 用真实网站和端到端任务评测自主 Web Agent。
- **[GAIA](https://arxiv.org/abs/2311.12983)** — 需要 reasoning、tool 与多模态信息的 general-assistant question。
- **[SWE-bench](https://github.com/swe-bench/SWE-bench)** — 在可执行仓库中解决真实 GitHub issue。

---

## 5. 研究资料库

### 历史渊源

#### 软件测试Harness (1990s–2000s)

- <u>JUnit</u>: **"JUnit: A Cook's Tour"**. *Beck & Gamma.* Java Report, 4(5), May 1999. [[存档文章](https://web.archive.org/web/20200101000000/http://junit.sourceforge.net/doc/cookstour/cookstour.htm)]

#### 强化学习环境Harness框架 (2016–2022)

- <u>OpenAI Gym</u>: **"OpenAI Gym"**. *Brockman et al.* arXiv 2016. [[论文](https://arxiv.org/abs/1606.01540)] [[代码](https://github.com/openai/gym)]
- <u>Gymnasium</u>: **"Gymnasium: A Standard Interface for Reinforcement Learning Environments"**. *Towers et al.* NeurIPS 2025. [[论文](https://arxiv.org/abs/2407.17032)] [[代码](https://github.com/Farama-Foundation/Gymnasium)]

#### 早期LLM Agent Harness (2023–2024)

- <u>ReAct</u>: **"ReAct: Synergizing Reasoning and Acting in Language Models"**. *Yao et al.* ICLR 2023. [[论文](https://arxiv.org/abs/2210.03629)] [[代码](https://github.com/ysymyth/ReAct)]
- <u>Toolformer</u>: **"Toolformer: Language Models Can Teach Themselves to Use Tools"**. *Schick et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2302.04761)]
- <u>AutoGPT</u>: **"Auto-GPT: An Autonomous GPT-4 Experiment"**. *Gravitas et al.* GitHub 2023. [[代码](https://github.com/Significant-Gravitas/AutoGPT)]
- <u>BabyAGI</u>: **"BabyAGI"**. *Nakajima.* GitHub 2023. [[代码](https://github.com/yoheinakajima/babyagi)]
- <u>HuggingGPT</u>: **"HuggingGPT: Solving AI Tasks with ChatGPT and Its Friends in Hugging Face"**. *Shen et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2303.17580)]
- <u>LangChain</u>: **"LangChain: Building Applications with LLMs through Composability"**. *Chase et al.* GitHub 2022. [[代码](https://github.com/langchain-ai/langchain)]

---

### 按工程问题阅读

Agent Harness 的难点不只存在于单个组件，而在执行、上下文、状态、权限与评测组合之后如何共同工作。下面按九个工程问题组织论文、benchmark 与实践材料；每一项都独立列出，便于继续检索和引用。

#### 安全与沙箱

**挑战：**智能体沙箱必须防止恶意工具使用，同时允许合法的系统访问——这比传统应用沙箱更困难，因为智能体**有意地**与敏感资源（文件系统、网络API、shell命令）交互。

**技术现状：**SandboxEscapeBench 测量模型能否利用人为设置的易受攻击 sandbox 配置，PRISM 则研究 runtime 拦截与纵深防御。两者共同指向对隔离边界和特权操作策略进行持续测试，但都不等于已经得到适用于所有 agent workload 的通用 sandbox 配置。

**开放问题：**组合式安全属性（证明智能体+Harness+环境满足安全规范）仍未解决。当前防御是反应式的（检测逃逸）而非预防式的（证明逃逸不可能）。

> **证据重点：**SandboxEscapeBench 测试模型能否发现并利用人为植入的 sandbox 错误配置与漏洞。它说明需要持续验证配置并采用纵深防御，不能被解释为正确配置容器的通用逃逸率。

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

#### 评估与基准测试

> **证据重点：**Harness 评测需要同时报告 runtime、environment、task version、budget、trajectory capture 与 evaluator。HAL、OSWorld 和 METR 分别展示执行方差、评测器误差以及 benchmark 接受与人工审查之间的差异。

- <u>AgencyBench</u>†: **"AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts"**. *Li et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2601.11044)]
- <u>AEGIS</u>†: **"AEGIS: No Tool Call Left Unchecked -- A Pre-Execution Firewall and Audit Layer for AI Agents"**. *Yuan et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.12621)]
- <u>Hell or High Water</u>†: **"Hell or High Water: Evaluating Agentic Recovery from External Failures"**. *Wang et al.* COLM 2025. [[Paper](https://arxiv.org/abs/2508.11027)]
- <u>SearchLLM</u>†: **"Aligning Large Language Models with Searcher Preferences"**. *Wu et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.10473)]
- <u>Meta-Harness</u>†: **"Meta-Harness: End-to-End Optimization of Model Harnesses"**. *Lee et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.28052)]
- <u>AutoHarness</u>†: **"AutoHarness: improving LLM agents by automatically synthesizing a code harness"**. *Lou et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.03329)]
- <u>MASEval</u>†: **"MASEval: Extending Multi-Agent Evaluation from Models to Systems"**. *Emde et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.08835)]
- <u>VeRO</u>†: **"VeRO: An Evaluation Harness for Agents to Optimize Agents"**. *Ursekar et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.22480)]
- <u>ClawBench</u>†: **"ClawBench: Can AI Agents Complete Everyday Online Tasks?"**. *Zhang et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2604.08523)] [[Code](https://github.com/TIGER-AI-Lab/ClawBench)] [[Project](https://claw-bench.com/)]
- <u>TheAgentCompany</u>†: **"TheAgentCompany: Benchmarking LLM Agents on Consequential Real-World Tasks"**. *Xu et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2412.14161)]
- <u>BrowserGym</u>†: **"The BrowserGym Ecosystem for Web Agent Research"**. *Le Sellier De Chezelles et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2412.05467)]
- <u>WorkArena</u>†: **"WorkArena: How Capable are Web Agents at Solving Common Knowledge Work Tasks?"**. *Drouin et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2403.07718)]
- <u>R-Judge</u>: **"R-Judge: Benchmarking Safety Risk Awareness for LLM Agents"**. *Yuan et al.* EMNLP 2024. [[Paper](https://arxiv.org/abs/2401.10019)]
- <u>R2E</u>: **"R2E: Turning any GitHub Repository into a Programming Agent Environment"**. *Jain et al.* ICML 2024. [[Paper](https://proceedings.mlr.press/v235/jain24c.html)]
- <u>Evaluation Survey</u>: **"Evaluation and Benchmarking of LLM Agents: A Survey"**. *Mohammadi et al.* KDD 2025. [[Paper](https://arxiv.org/abs/2507.21504)]
- <u>PentestJudge</u>†: **"PentestJudge: Judging Agent Behavior Against Operational Requirements"**. *Caldwell et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2508.02921)]
- <u>PerspectiveGap</u>†: **"PerspectiveGap: A Benchmark for Multi-Agent Orchestration Prompting"**. *Sun et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2606.08878)] [[代码](https://github.com/WhymustIhaveaname/PerspectiveGap)]
- <u>TraceDance</u>†: **"TraceDance: An Automated System for Building Agent Behavior Benchmarks from Real-World Agent Deployment Traces"**. *Min et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2609.33295)] [[项目](https://zhishanq.github.io/TraceDance/)]
  - 从部署轨迹构建特定行为的评测集，在固定的已记录 harness 上下文中评估模型的下一轮输出，不执行其动作，也不重放环境。
- <u>WildClawBench</u>†: **"WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation"**. *Ding et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.10912)]
- <u>HarnessAudit-Bench</u>†: **"Auditing Agent Harness Safety"**. *Liu et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.14271)]
- <u>AgentSWE</u>†: **"AgentSWE: Can Coding Agents Build the Agent You Actually Want?"**. *Wang et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2610.13361)]

#### 协议标准化

> **证据重点：**MCP、A2A、ACP 等协议处在不同接口层。协议的作用取决于语义、状态处理、授权、错误行为与可测试的互操作性，不能只比较协议名称。

- <u>MCP</u>: **"Model Context Protocol"**. *Anthropic.* Technical Report 2024. [[Spec](https://modelcontextprotocol.io)]
- <u>A2A</u>: **"Agent-to-Agent Protocol"**. *Google.* Technical Report 2025. [[规范](https://a2a-protocol.org/latest/)] [[公告](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)]
- <u>Protocol Comparison</u>†: **"A Survey of Agent Interoperability Protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP)"**. *Ehtesham et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2505.02279)]
- <u>Gorilla</u>: **"Gorilla: Large Language Model Connected with Massive APIs"**. *Patil et al.* NeurIPS 2023. [[Paper](https://arxiv.org/abs/2305.15334)] [[Code](https://github.com/ShishirPatil/gorilla)]

#### 运行时上下文管理

> **证据重点：**SkillsBench 与长上下文研究表明，增加上下文本身并不足够；选择、位置、压缩、来源和冲突处理共同决定新增材料是否真正帮助 agent。

- <u>SkillsBench</u>†: **"SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks"**. *Li et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.12670)]
- <u>ReadAgent</u>: **"A Human-Inspired Reading Agent with Gist Memory of Very Long Contexts"**. *Lee et al.* ICML 2024. [[Paper](https://arxiv.org/abs/2402.09727)]
- <u>MemoryOS</u>: **"Memory OS of AI Agent"**. *Kang et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2506.06326)]
- <u>CoALA</u>: **"Cognitive Architectures for Language Agents"**. *Sumers et al.* TMLR 2024. [[Paper](https://arxiv.org/abs/2309.02427)]
- <u>SkillFortify</u>†: **"Formal Analysis and Supply Chain Security for Agentic AI Skills"**. *Bhardwaj.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.00195)]
- <u>Lost in the Middle</u>: **"Lost in the Middle: How Language Models Use Long Contexts"**. *Liu et al.* TACL 2024. [[Paper](https://arxiv.org/abs/2307.03172)]
- <u>Context Engineering Survey</u>†: **"Context Engineering: A Survey of 1,400 Papers on Effective Context Management for LLM Agents"**. *Mei et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2507.13334)]

#### 工具使用与注册

> **证据重点：**工具可靠性不只取决于工具数量。工具选择、类型契约、语义授权、结果校验和恢复策略会在执行循环中共同作用。

- <u>CodeAct</u>: **"Executable Code Actions Elicit Better LLM Agents"**. *Wang et al.* ICML 2024. [[Paper](https://arxiv.org/abs/2402.01030)] [[Code](https://github.com/xingyaoww/code-act)]
- <u>Schema First</u>†: **"Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance"**. *Sigdel & Baral.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.13404)]
- <u>ToolLLM</u>: **"ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs"**. *Qin et al.* ICLR 2024. [[Paper](https://arxiv.org/abs/2307.16789)] [[Code](https://github.com/OpenBMB/ToolBench)]
- <u>ToolSandbox</u>†: **"ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities"**. *Lu et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2408.04682)]
- <u>AutoTool</u>†: **"AutoTool: Efficient Tool Selection for Large Language Model Agents"**. *Jia & Li.* AAAI 2026. [[Paper](https://arxiv.org/abs/2511.14650)]
- <u>Tool Learning Survey</u>: **"Tool Learning with Large Language Models: A Survey"**. *Qu et al.* Frontiers of Computer Science 2024. [[Paper](https://arxiv.org/abs/2405.17935)]
- <u>GoEX</u>†: **"GoEX: Perspectives and Designs Towards a Runtime for Autonomous LLM Applications"**. *Patil et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2404.06921)]
- <u>AgentTuning</u>: **"AgentTuning: Enabling Generalized Agent Abilities for LLMs"**. *Zeng et al.* ACL 2024. [[Paper](https://arxiv.org/abs/2310.12823)]
- <u>HEART</u>†: **"Harness Engineering in LLM Tool Use via Agent-Native Reusable Tool Primitives"**. *Jin et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2609.01736)]

#### 记忆架构

> **证据重点：**记忆系统需要在检索质量、写入策略、时间一致性、来源、延迟与成本之间取舍。没有一种 substrate 能在所有任务类型和交互时域中稳定占优。

- <u>Agent Workflow Memory (AWM)</u>†: **"Agent Workflow Memory"**. *Wang et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2409.07429)]
- <u>Mem0</u>†: **"Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory"**. *Khant et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2504.19413)]
- <u>A-MEM</u>†: **"A-MEM: Agentic Memory for LLM Agents"**. *Xu et al.* NeurIPS 2025. [[Paper](https://arxiv.org/abs/2502.12110)]
- <u>MemAct</u>†: **"Memory as Action: Autonomous Context Curation for Long-Horizon Agentic Tasks"**. *Zhang et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2510.12635)]
- <u>Memory Survey</u>†: **"Memory for Autonomous LLM Agents: Mechanisms, Evaluation, and Emerging Frontiers"**. *Du.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.07670)]
- <u>MemoryBank</u>: **"MemoryBank: Enhancing Large Language Models with Long-Term Memory"**. *Zhong et al.* AAAI 2024. [[Paper](https://arxiv.org/abs/2305.10250)]
- <u>LoCoMo</u>†: **"Evaluating Very Long-Term Conversational Memory of LLM Agents"**. *Maharana et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2402.17753)]
- <u>Memory Mechanisms Survey</u>†: **"A Survey on the Memory Mechanism of Large Language Model Based Agents"**. *Zhang et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2404.13501)]
- <u>Evo-Memory</u>†: **"Evo-Memory: Benchmarking LLM Agent Test-time Learning with Self-Evolving Memory"**. *Wei et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2511.20857)]

#### 规划与推理

> **关键数据：**SWE-agent ACI 研究表明，接口设计超越模型能力成为性能的首要决定因素。LATS 将MCTS与语言模型反馈集成用于状态空间搜索。Plan-on-Graph通过引导、记忆和反思机制在知识图谱上实现自适应自我修正规划。

- <u>Tree of Thoughts</u>: **"Tree of Thoughts: Deliberate Problem Solving with Large Language Models"**. *Yao et al.* NeurIPS 2023. [[Paper](https://arxiv.org/abs/2305.10601)] [[Code](https://github.com/princeton-nlp/tree-of-thought-llm)]
- <u>LATS</u>: **"Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models"**. *Zhou et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2310.04406)] [[Code](https://github.com/lapisrocks/LanguageAgentTreeSearch)]
- <u>Plan-on-Graph</u>: **"Plan-on-Graph: Self-Correcting Adaptive Planning of Large Language Model on Knowledge Graphs"**. *Chen et al.* NeurIPS 2024. [[Paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/4254e856d01a5e7b7ea050477c3ef9b9-Abstract-Conference.html)]
- <u>AFlow</u>†: **"AFlow: Automating Agentic Workflow Generation"**. *Zhang et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2410.10762)]
- <u>Agent Q</u>†: **"Agent Q: Advanced Reasoning and Learning for Autonomous AI Agents"**. *Putta et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2408.07199)]
- <u>OPENDEV</u>†: **"Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned"**. *Bui.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.05344)]
- <u>AOrchestra</u>†: **"AOrchestra: Automating Sub-Agent Creation for Agentic Orchestration"**. *Ruan et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.03786)]
- <u>RAP</u>: **"Reasoning with Language Model is Planning with World Model"**. *Hao et al.* EMNLP 2023. [[Paper](https://arxiv.org/abs/2305.14992)]
- <u>Inner Monologue</u>: **"Inner Monologue: Embodied Reasoning Through Planning with Language Models"**. *Huang et al.* CoRL 2022. [[Paper](https://arxiv.org/abs/2207.05608)]
- <u>Agent-Oriented Planning</u>: **"Agent-Oriented Planning in Multi-Agent Systems"**. *Li et al.* ICLR 2025. [[Paper](https://arxiv.org/abs/2410.02189)]
- <u>ExACT</u>†: **"ExACT: Teaching AI Agents to Explore with Reflective-MCTS and Exploratory Learning"**. *Yu et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2410.02052)]
- <u>Steer, Don't Solve</u>†: **"Steer, Don't Solve: Training Small Critic Models for Large Code Agents"**. *Gandhi et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2606.21811)] [[Code](https://github.com/shubhamrgandhi/critic-training)]
- <u>LongHorizon-Harness</u>†: **"LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks"**. *Ma et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2608.01964)] [[代码](https://github.com/AMAP-ML/LongHorizon-Harness)]


#### 多智能体协同

> **证据重点：**[AgencyBench](https://arxiv.org/abs/2601.11044) 报告闭源模型整体表现为 48.4%，开源模型为 32.1%，并另行观察到部分专有系统的原生生态优势。48.4% 不是原生 SDK 的成功率。

- <u>AdaptOrch</u>†: **"AdaptOrch: Task-Adaptive Multi-Agent Orchestration in the Era of LLM Performance Convergence"**. *Yu.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.16873)]
- <u>SAGA</u>†: **"SAGA: A Security Architecture for Governing AI Agentic Systems"**. *Syros et al.* NDSS 2026. [[Paper](https://arxiv.org/abs/2504.21034)]
- <u>MAS-FIRE</u>†: **"MAS-FIRE: Fault Injection and Reliability Evaluation for LLM-Based Multi-Agent Systems"**. *Jia et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.19843)]
- <u>Byzantine fault tolerance</u>†: **"Rethinking the Reliability of Multi-agent System: A Perspective from Byzantine Fault Tolerance"**. *Zheng et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2511.10400)]
- <u>Multi-agent baseline study</u>†: **"Rethinking the Value of Multi-Agent Workflow: A Strong Single Agent Baseline"**. *Xu et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2601.12307)]
- <u>AgentVerse</u>†: **"AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors"**. *Chen et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2308.10848)]
- <u>Mixture-of-Agents</u>†: **"Mixture-of-Agents Enhances Large Language Model Capabilities"**. *Wang et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2406.04692)]
- <u>Multi-Agent Survey</u>: **"Large Language Model Based Multi-Agents: A Survey of Progress and Challenges"**. *Guo et al.* IJCAI 2024. [[Paper](https://arxiv.org/abs/2402.01680)]
- <u>Concordia</u>†: **"Generative Agent-Based Modeling with Actions Grounded in Physical, Social, or Digital Space Using Concordia"**. *Vezhnevets et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2312.03664)]
- <u>PEvo</u>: **"Implicit Behavioral Alignment of Language Agents in High-Stakes Crowd Simulations"**. *Wang et al.* EMNLP 2025. [[论文](https://arxiv.org/abs/2509.16457)]
- <u>Agon</u>†: **"Agon: An Autonomous Large-Scale Omnidisciplinary Research System Built on Prompt Economy"**. *Sun et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2606.24177)] [[代码](https://github.com/AutoResearch-Factory/Agon)]

#### 计算经济学

> **证据重点：**Harness economics 应同时报告 token、wall-clock time、工具与环境成本、并发、重试、失败工作和结果质量。只报告吞吐量无法描述长时 agent task 的真实成本。

- <u>State of AI Report</u>: **"State of AI: An Empirical 100 Trillion Token Study with OpenRouter"**. *Aubakirova et al.* Andreessen Horowitz (a16z) and OpenRouter Inc., December 2025. [[报告](https://openrouter.ai/state-of-ai)]
- <u>BentoML Inference Report</u>: **"Beyond Tokens-per-Second: How to Balance Speed, Cost, and Quality in LLM Inference"**. *Yang.* BentoML Blog, January 2026. [[博客](https://www.bentoml.com/blog/beyond-tokens-per-second-how-to-balance-speed-cost-and-quality-in-llm-inference)]
- <u>H100 Price Spike</u>: **"H100 Price Spike: Understanding the 10% Surge in GPU Rental Costs"**. *Li.* Silicon Data Blog, January 2026. [[博客](https://www.silicondata.com/blog/h100-price-spike)]
- <u>NVIDIA GTC 2026</u>: **"NVIDIA GTC 2026: Live Updates on What's Next in AI"**. *NVIDIA.* NVIDIA Blog, March 2026. [[博客](https://blogs.nvidia.com/blog/gtc-2026-news/)]
- <u>Repo2Run</u>†: **"Repo2Run: Automated Building Executable Environment for Code Repository at Scale"**. *Hu et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2502.13681)]
- <u>Policy-First</u>†: **"Guardrails as Infrastructure: Policy-First Control for Tool-Orchestrated Workflows"**. *Sigdel & Baral.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.18059)]
- <u>Strong-Weak Collaboration</u>: **"An Empirical Study on Strong-Weak Model Collaboration for Repo-level Code Generation"**. *Gandhi et al.* EMNLP 2025. [[论文](https://aclanthology.org/2025.emnlp-main.1043/)] [[代码](https://github.com/shubhamrgandhi/codegen-strong-weak-collab)]

---

### Harness 架构与演化

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

- <u>LLM Agents Survey</u>: **"A Survey on Large Language Model Based Autonomous Agents"**. *Wang et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2308.11432)]
- <u>Rise of LLM Agents</u>: **"The Rise and Potential of Large Language Model Based Agents: A Survey"**. *Xi et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2309.07864)]
- <u>LLM Survey</u>: **"A Survey of Large Language Models"**. *Zhao et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2303.18223)]
- <u>AI Agent Systems</u>†: **"AI Agent Systems: Architectures, Applications, and Evaluation"**. *Xu.* arXiv 2025. [[Paper](https://arxiv.org/abs/2601.01743)]
- <u>AutoResearch Survey</u>†: **"What's Missing in Autonomous Research? A Systematization of Systems, Benchmarks, and Verification"**. *Ren et al.* 2026. [[论文](https://www.researchgate.net/publication/406952713)]
- <u>LLM Agents: A Survey</u>†: **"LLM Agents: A Survey"**. *Lee.* Preprints.org 2026. [[Paper](https://www.preprints.org/manuscript/202608.0265/v1)]
- <u>The Agent Loop</u>†: **"The Agent Loop: A Survey of Control Strategies, Skills, and Harnesses for LLM Agents"**. *Lee and Park.* SSRN 2026. [[Paper](https://github.com/js-lee-AI/awesome-agent-loop-papers/blob/main/paper/the-agent-loop-survey.pdf)]
- <u>Code as Agent Harness</u>†: **"Code as Agent Harness"**. *Ning et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2605.18747)]

### 业界实践报告与洞察

> 来自 Stripe、OpenAI、Cursor、METR 及其他前沿实践者的生产部署经验。

- <u>Building Effective Agents</u>: **"Building Effective Agents"**. *Anthropic.* Anthropic Engineering Blog, 2026. [[博客](https://www.anthropic.com/engineering)]
- <u>Demystifying Evals</u>: **"Demystifying Evals for AI Agents"**. *Anthropic.* Anthropic Engineering Blog, 2026. [[博客](https://www.anthropic.com/engineering)]
- <u>Context Engineering</u>: **"Context Engineering Our Way to Long-Horizon Agents"**. *Chase.* Sequoia Capital Podcast, 2026. [[播客](https://sequoiacap.com/podcast/context-engineering-our-way-to-long-horizon-agents-langchains-harrison-chase)]
- <u>Agent Frameworks, Runtimes, and Harnesses</u>: **"Agent Frameworks, Runtimes, and Harnesses"**. *LangChain.* LangChain Blog, 2025. [[博客](https://blog.langchain.com/agent-frameworks-runtimes-and-harnesses-oh-my/)]
- <u>We Removed 80% of Our Agent's Tools</u>: **"We Removed 80% of Our Agent's Tools"**. *Qu.* Vercel Engineering Blog, 2025. [[博客](https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools)]
- <u>Harness Problem</u>: **"I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed."**. *Can.* Personal blog (blog.can.ac), February 2026. [[博客](https://blog.can.ac/2026/02/12/the-harness-problem/)]
- <u>AI Adoption Journey</u>: **"My AI Adoption Journey"**. *Hashimoto.* Personal blog, February 2026. [[博客](https://mitchellh.com/writing/my-ai-adoption-journey)]
- <u>The Harness Gap</u>: **"The Harness Gap: AI Coding Output Rose 59% in 2025 While Teams Shipped 7% Less"**. *Zoom In AI.* Medium (Write A Catalyst), March 2026. [[博客](https://medium.com/write-a-catalyst/the-harness-gap-ai-coding-output-rose-59-in-2025-while-teams-shipped-7-less-082d3d07cff8)]
- <u>Stripe Minions</u>: **"Minions: Stripe's one-shot, end-to-end coding agents"**. *Gray.* Stripe Dev Blog, Feb 2026. [[博客](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)]
- <u>Harness Engineering (OpenAI)</u>: **"Harness engineering: leveraging Codex in an agent-first world"**. *Lopopolo.* OpenAI Blog, Feb 2026. [[博客](https://openai.com/index/harness-engineering/)]
- <u>Self-Driving Codebases</u>: **"Towards self-driving codebases"**. *Lin.* Cursor Blog, Feb 2026. [[博客](https://cursor.com/blog/self-driving-codebases)]
- <u>METR SWE-bench Analysis</u>: **"Many SWE-bench-Passing PRs Would Not Be Merged into Main"**. *Whitfill et al.* METR Notes, Mar 2026. [[报告](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/)]
- <u>Harness-Aware Training</u>†: **"Training Agents to Evolve with Their Harness: TaoLive Digital Avatar Agent Technical Report"**. *TaoLive AIGC LLM Team.* arXiv, August 2026. [[论文](https://arxiv.org/abs/2608.15763)]
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

综述中识别的八个开放研究方向（无精选论文列表——这些是前瞻性方向）：

- **形式化Agent Harness规范语言** — 用于指定和验证 H=(E,T,C,S,L,V) 组件的领域特定语言（DSL）
- **跨Agent Harness基准测试套件** — 跨不兼容执行器生态系统的可移植性测试
- **安全分类与威胁模型** — 将OWASP Top 10扩展至智能体执行器攻击面
- **协议互操作性（MCP/A2A）** — 桥接工具级和智能体级协议
- **长时域评估方法论** — 在多会话、多天任务下不会退化的指标
- **Agent Harness感知微调** — 训练模型使其感知执行环境
- **记忆接口标准化** — 跨平面式、情节式和图式存储的可移植记忆API
- **Agent Harness透明性规范** — 运行时决策的可审计性和可解释性

---

---

## 关于这篇综述

### 证据与收录方法

这是一份**有判断的研究索引**。如果一个项目贡献了不同的 harness 架构、直接相关的 benchmark、可复用组件，或能改变 runtime 构建与评测方式的证据，它就值得进入这份列表。

- **优先一方证据：**source code、官方文档、论文、specification 与明确标注的一方实践报告。
- **说明收录理由：**每个系统和 benchmark 都用一句话说明它对 harness 层的贡献。
- **拆开实验单元：**分别说明 model、harness、environment、task、budget 与 evaluator。
- **拆开不同层级：**full harness、能力模块、安全层、任务环境和 evaluation runner 分区收录。
- **保留不确定性：**`Unverified` 记录公开材料不足；`Absent` 必须有一方材料明确证明。
- **记录截止时间：**评分反映截至 **2026-10-13** 的公开证据；系统更新后可能变化。

---

### 论文版本与引用

| 产物 | 当前版本 | 日期 / 截止时间 | 状态 |
|---|---|---|---|
| 资源索引 | **2026.10** | 证据核验截至 **2026-10-13** | 当前 README；最后更新于 **2026-10-13** |
| 仓库论文 | **v4** | 2026-04-14 | [公开 PDF](./Agent_Harness_for_LLM_Agents__A_Survey__v4.pdf) |
| 已归档预印本 | **v3** | 2026-04-09 | [DOI 记录](https://doi.org/10.20944/preprints202604.0428.v3) |
| Paper v5 | 修订中 | — | 正文、图片与引用正在审查 |

仓库目前公开的是 **Paper v4**。资源索引更新更晚，作为综述持续维护的证据层；Paper v5 会在正文、图片和引用完成审查后纳入已核验材料。完整引用已放在 [README 顶部](#阅读与引用综述)。

### 参与贡献

发现遗漏的系统、benchmark、论文或失效链接？可以[提交 issue](https://github.com/Gloriaameng/Awesome-Agent-Harness/issues)或[发起 pull request](https://github.com/Gloriaameng/Awesome-Agent-Harness/pulls)。

一份清楚的投稿应包含：

1. 项目、论文或 specification 的 canonical link。
2. 一句话说明它为什么与 harness 层有关。
3. 支撑架构判断或定量结果的一方证据。
4. 对可能变化的结论注明 version、commit、benchmark setup 与 access date。
5. 选择准确类别：full harness、module、benchmark、task environment、protocol 或 evaluation infrastructure。

修正与建议：gloriamenng@gmail.com · wangyanan@mail.dlut.edu.cn · chenliyi@xiaohongshu.com

### 更新日志

| 更新轨道 | 版本 | 日期 | 变更 |
|---|---|---|---|
| 资源索引 | **2026.10** | 2026-10-13 | 恢复论文标题、引用与综述叙事；页首只保留 stars、总参考资料与 license；开放证据矩阵由 20 项扩为 34 项并补入八条办公与 personal-agent 路线；补入 4–10 月系统、benchmark、架构报告与完整分类目录 |
| 论文 | **v4** | 2026-04-14 | 当前仓库 PDF；早于 2026.10 资源索引 |
| 已归档预印本 | **v3** | 2026-04-09 | DOI 对应的公开预印本 |

---

<p align="center">
  <i>† 表示所列版本为尚未经过同行评审的预印本。</i><br>
  <i>由 Qianyu Meng 与 Liyi Chen 维护，欢迎提交经过筛选的补充材料。</i>
</p>
