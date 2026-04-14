<div align="center">

[English](README.md) | [中文](README_zh.md)

# Agent Harness综述

[![GitHub Stars](https://img.shields.io/github/stars/Gloriaameng/LLM-Agent-Harness-Survey?style=social)](https://github.com/Gloriaameng/LLM-Agent-Harness-Survey/stargazers)
[![License](https://img.shields.io/badge/License-CC--BY--4.0-blue.svg)](LICENSE)
[![Papers](https://img.shields.io/badge/Papers-150%2B-green)]()
[![Version](https://img.shields.io/badge/Version-v4-orange)]()
[![HuggingFace](https://img.shields.io/badge/%F0%9F%A4%97-Dataset-yellow)](https://huggingface.co/datasets/GloriaaaM/LLM-Agent-Harness-Survey)
[![DOI](https://img.shields.io/badge/DOI-10.20944%2Fpreprints202604.0428.v2-blue)](https://www.preprints.org/manuscript/202604.0428/v2)

</div>

<p align="center">
  <img src="assets/architecture_diagram.png" width="720" alt="H=(E,T,C,S,L,V) 六组件架构"/>
</p>

> ⭐ **本仓库持续更新中。如果对你有帮助，欢迎 Star 关注最新进展，也帮助更多人发现它。**

---

> **Agent Harness——而非模型本身——是智能体大规模部署可靠性的首要决定因素。**  
> 本综述将Agent Harness形式化为一级架构对象 **H = (E, T, C, S, L, V)**，系统调研了涵盖23个系统的110余篇论文、博客和报告，并总结了9项开放性技术挑战。  
> 📄 **[阅读最新版论文 (PDF)](./Agent_Harness_for_LLM_Agents__A_Survey_v3.pdf)** （最新版本，目前在审）  
> 🌐 **[阅读 Preprints 版本 (v2)](https://www.preprints.org/manuscript/202604.0428/v2)**  
> ✉️ 勘误与建议：gloriamenng@gmail.com; wangyanan@mail.dlut.edu.cn; chenliyi@xiaohongshu.com 

如果本综述对您有所帮助，请引用：

```bibtex
@article{meng2026agentharness,  
  title     = {Agent Harness for Large Language Model Agents: A Survey},  
  author    = {Meng, Qianyu and Wang, Yanan and Chen, Liyi and Wu, Wei and  
               Li, Yihang and Jiang, Wenyuan and Wang, Qimeng and  
               Lu, Chengqiang and Gao, Yan and Wu, Yi and Hu, Yao},  
  year      = {2026},  
  doi       = {10.20944/preprints202604.0428.v2},  
  url       = {https://www.preprints.org/manuscript/202604.0428/v2},  
  publisher = {Preprints},  
}  
```

---

## 🆕 新闻与更新

- **[2026-04-03]** 首次发布
- **[2026-04-07]** 仓库更新
- **[2026-04-07]** 预印本索引
- **[2026-04-14]** 引用更新
---

## 目录

- [概述](#概述)
- [历史时间线](#历史时间线)
- [Agent_Harness完备性矩阵](#Agent_Harness完备性矩阵)
- [论文列表](#论文列表)
  - [历史渊源](#历史渊源)
  - [Agent_Harness分类](#Agent_Harness分类)
  - [技术挑战](#技术挑战)
    - [安全与沙箱](#安全与沙箱)
    - [评估与基准测试](#评估与基准测试)
    - [协议标准化](#协议标准化)
    - [运行时上下文管理](#运行时上下文管理)
    - [工具使用与注册](#工具使用与注册)
    - [记忆架构](#记忆架构)
    - [规划与推理](#规划与推理)
    - [多智能体协同](#多智能体协同)
    - [计算经济学](#计算经济学)
  - [新兴主题](#新兴主题)
  - [未来方向](#未来方向)
- [引用](#引用)
- [更新日志](#更新日志)

---

## 概述

大语言模型（LLM）智能体正日益部署于自主规划、工具使用和多步骤交互环境中。主流叙事将智能体性能归因于底层模型能力。**本综述挑战了这一假设。**

我们提出了**Agent Harness**的形式化定义，将其定义为包含六个组件的元组：

| 组件 | 符号 | 作用 |
|------|------|------|
| 执行循环 | **E** | 观察-思考-行动循环，终止条件，错误恢复 |
| 工具注册表 | **T** | 类型化工具目录，路由，监控，模式校验 |
| 上下文管理器 | **C** | 上下文窗口内容选择，压缩，检索 |
| 状态存储 | **S** | 跨回合/会话持久化，崩溃恢复 |
| 生命周期钩子 | **L** | 认证，日志，策略执行，监测埋点 |
| 评估接口 | **V** | 行动轨迹，中间状态，成功信号 |

**Agent Harness重要性的关键实证证据：**
- 🔥 Pi Research：Grok Code Fast 1 模型在 SWE-bench 上从 **6.7% → 68.3%**，仅通过修改Agent Harness的编辑工具格式——模型不变
- 💀 OpenAI Codex：5个月内生成**100万行代码，0行手写**——失败归因于"环境规范不足"而非模型能力
- ⚡ Stripe Minions：**每周1300个PR，0行人工代码**——Agent Harness优先
- 📉 METR：通过基准测试的PR人工合并率**低24.2个百分点**，差距以9.6pp/年速度扩大——评估Agent Harness有效性危机
- 💬 *"Agent Harness是底盘；模型是引擎。"* ——2026年业界共识

<p align="center">
  <img src="assets/root_cause_diagram.png" width="640" alt="根因分析"/>
</p>

### 本综述的学术贡献

**概念贡献：**我们将Agent Harness形式化为具有六个可治理组件（E, T, C, S, L, V）的架构对象，将其从隐式基础设施提升为显式研究目标。

**实证范围：**我们系统性地综述了110余篇论文，涵盖学术研究（评估基准、安全框架、记忆架构）和生产部署（Stripe、OpenAI、Cursor、METR），确立了Agent Harness设计是已部署智能体可靠性的约束瓶颈这一观点。

**方法论进展：**我们引入了**Agent Harness完备性矩阵**——一个结构化评估框架，映射每个系统实现了六个组件中的哪些——使得先前综述无法实现的异构智能体系统直接对比成为可能。

**已识别的开放挑战：**我们记录了九项技术挑战，这些挑战当前研究仅提供了部分解决方案而无生产级基础设施：形式化安全模型、跨工程框架可移植性、协议互操作性（MCP/A2A）、百万级token/任务的上下文经济性、多智能体系统中的拜占庭容错、组合式验证。

**学术界与业界的桥梁：**与先前仅关注模型能力或孤立组件（记忆、规划、工具使用）的综述不同，我们综合了同行评审研究与生产部署报告，展示了理论与实践的交汇点——以及仍存在的关键差距。

**目标读者：**设计智能体基础设施的研究者、构建生产系统的实践者、以及试图理解为何基准测试性能常无法预测部署结果的评估者。

---

## 历史时间线

<p align="center">
  <img src="assets/timeline.png" width="720" alt="Agent Harness的历史演进"/>
</p>

| 年份 | 里程碑 | 意义 |
|------|--------|------|
| 1997–2005 | JUnit, TestNG, xUnit 家族 | 软件测试Harness范式；标准化观察-断言生命周期 |
| 2016 | OpenAI Gym (Brockman et al.) | 强化学习环境Harness框架；step/reset API 成为规范接口 |
| 2022年11月 | ChatGPT 公开发布；LangChain 出现 | 面向LLM的智能体框架萌芽；工具使用成为一级公民 |
| 2023 | ReAct, Toolformer, MemGPT, Reflexion, Voyager, AutoGPT | 核心智能体模式：推理-行动、记忆、反思、技能积累 |
| 2023 | CAMEL, ChatDev, Generative Agents | 多智能体协同；社会仿真Harness |
| 2023 | AgentBench, SWE-bench | 智能体评估基础设施涌现 |
| 2024 | MetaGPT, WebArena, ToolLLM, SWE-agent, OSWorld | 全栈执行器；真实世界环境基准测试 |
| 2024 | CodeAct, LATS, Tree of Thoughts | 结构化动作空间；搜索增强规划 |
| 2024年11月 | Anthropic 发布 MCP 协议 | 首个主要工具↔Harness标准化（2–15ms延迟） |
| 2025 | HAL, AIOS, LangGraph | 基准测试统一（21,730次评估）；操作系统级调度（2.1×加速） |
| 2025 | Google 发布 A2A 协议 | 智能体↔智能体标准化（50–200ms） |
| 2025 | MemoryOS, SkillsBench†, AgentBound† | 记忆操作系统抽象；技能即上下文（+16.2pp）；安全认证 |
| 2026年1–3月 | AgencyBench†, SandboxEscapeBench†, PRISM†, AEGIS†, SkillFortify†, Schema First† | 计算经济学；15–35%逃逸率；运行时安全；模式规范 |

*† 表示预印本，尚未经同行评审*

---

## Agent Harness完备性矩阵

**图例：** ✓ 完全支持 · ≈ 部分支持 · ✗ 缺失

<table align="center">
  <thead>
    <tr>
      <th>类别</th>
      <th>系统</th>
      <th title="执行循环">E</th>
      <th title="工具注册表">T</th>
      <th title="上下文管理器">C</th>
      <th title="状态存储">S</th>
      <th title="生命周期钩子">L</th>
      <th title="评估接口">V</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><strong>全栈式<br>Agent Harness</strong></td>
      <td>Claude Code</td>
      <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>≈</td>
    </tr>
    <tr>
      <td>OpenClaw / PRISM</td>
      <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td>
    </tr>
    <tr>
      <td>AIOS</td>
      <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>≈</td>
    </tr>
    <tr>
      <td>OpenHands</td>
      <td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>≈</td>
    </tr>
    <tr>
      <td rowspan="6"><strong>多智能体<br>执行器</strong></td>
      <td>MetaGPT</td>
      <td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>≈</td>
    </tr>
    <tr>
      <td>AutoGen</td>
      <td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>≈</td>
    </tr>
    <tr>
      <td>ChatDev</td>
      <td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>≈</td><td>≈</td>
    </tr>
    <tr>
      <td>CAMEL</td>
      <td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>✗</td><td>≈</td>
    </tr>
    <tr>
      <td>DeerFlow</td>
      <td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>≈</td>
    </tr>
    <tr>
      <td>DeepAgents</td>
      <td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>≈</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>通用<br>框架</strong></td>
      <td>LangChain</td>
      <td>✓</td><td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>✗</td>
    </tr>
    <tr>
      <td>LangGraph</td>
      <td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>✗</td><td>✗</td>
    </tr>
    <tr>
      <td>LlamaIndex</td>
      <td>≈</td><td>✓</td><td>✓</td><td>≈</td><td>✗</td><td>✗</td>
    </tr>
    <tr>
      <td rowspan="1"><strong>专用<br>约束工程</strong></td>
      <td>SWE-agent</td>
      <td>✓</td><td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>✓</td>
    </tr>
    <tr>
      <td rowspan="5"><strong>能力<br>模块</strong></td>
      <td>MemGPT</td>
      <td>✗</td><td>✗</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td>
    </tr>
    <tr>
      <td>Voyager</td>
      <td>✓</td><td>✓</td><td>≈</td><td>✓</td><td>✗</td><td>≈</td>
    </tr>
    <tr>
      <td>Reflexion</td>
      <td>≈</td><td>✗</td><td>≈</td><td>✓</td><td>✗</td><td>≈</td>
    </tr>
    <tr>
      <td>Generative Agents</td>
      <td>✓</td><td>✗</td><td>≈</td><td>✓</td><td>✗</td><td>≈</td>
    </tr>
    <tr>
      <td>Concordia</td>
      <td>✓</td><td>✗</td><td>≈</td><td>✓</td><td>✗</td><td>≈</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>评估<br>基础设施</strong></td>
      <td>HAL</td>
      <td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>✓</td>
    </tr>
    <tr>
      <td>AgentBench</td>
      <td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>✗</td><td>✓</td>
    </tr>
    <tr>
      <td>OSWorld</td>
      <td>✓</td><td>≈</td><td>≈</td><td>≈</td><td>✗</td><td>✓</td>
    </tr>
    <tr>
      <td>BrowserGym</td>
      <td>✓</td><td>✓</td><td>≈</td><td>≈</td><td>✗</td><td>✓</td>
    </tr>
  </tbody>
</table>

---

## 论文列表

### 历史渊源

#### 软件测试Harness (1990s–2000s)

- <u>JUnit</u>: **"JUnit: A Cook's Tour"**. *Beck & Gamma.* Java Report, 4(5), May 1999. [[文章](http://junit.sourceforge.net/doc/cookstour/cookstour.htm)]

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

### Agent Harness分类

**分类依据：**我们根据**Agent Harness完备性**对智能体系统进行分类——即每个系统实现了六个组件（E, T, C, S, L, V）中的哪些——从而区分全栈Harness（全部六个组件）与专用框架（部分实现）。

**重要性：**先前的分类法按应用领域（编程、网页导航、具身AI）或模型架构（单智能体、多智能体）对智能体进行分类。这些分类无法解释为何使用相似模型的系统会产生不同的可靠性结果。我们以Agent Harness框架为中心的分类法揭示，生产级系统收敛于完整的ETCSLV实现，而研究原型往往仅实现2-3个组件。

**核心发现：**没有任何智能体框架能够在不实现**全部六个治理组件**的情况下达到生产可靠性。缺少L组件（生命周期钩子）的系统无法执行安全策略。缺少V组件（评估接口）的系统无法调试故障。缺少S组件（状态持久化）的系统无法从崩溃中恢复。

#### 全栈式Agent Harness

- <u>PRISM/OpenClaw</u>: **"OpenClaw PRISM: A Zero-Fork, Defense-in-Depth Runtime Security Layer for Tool-Augmented LLM Agents"**. *Li.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.11853)]
- <u>AIOS</u>: **"AIOS: LLM Agent Operating System"**. *Mei et al.* COLM 2025. [[论文](https://arxiv.org/abs/2403.16971)] [[代码](https://github.com/agiresearch/AIOS)]
- <u>OpenHands</u>: **"OpenHands: An Open Platform for AI Software Developers as Generalist Agents"**. *Wang et al.* ICLR 2025. [[论文](https://arxiv.org/abs/2407.16741)] [[代码](https://github.com/All-Hands-AI/OpenHands)]
- <u>SWE-agent</u>: **"SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"**. *Yang et al.* NeurIPS 2024. [[论文](https://arxiv.org/abs/2405.15793)] [[代码](https://github.com/SWE-agent/SWE-agent)]
- <u>HAL</u>: **"Holistic Agent Leaderboard: The Missing Infrastructure for AI Agent Evaluation"**. *Kapoor et al.* ICLR 2026. [[论文](https://arxiv.org/abs/2510.11977)]

#### 多智能体Agent Harness

- <u>MetaGPT</u>: **"MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework"**. *Hong et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2308.00352)] [[代码](https://github.com/geekan/MetaGPT)]
- <u>AutoGen</u>: **"AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation"**. *Wu et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2308.08155)] [[代码](https://github.com/microsoft/autogen)]
- <u>ChatDev</u>: **"ChatDev: Communicative Agents for Software Development"**. *Qian et al.* ACL 2024. [[论文](https://arxiv.org/abs/2307.07924)] [[代码](https://github.com/OpenBMB/ChatDev)]
- <u>CAMEL</u>: **"CAMEL: Communicative Agents for 'Mind' Exploration of Large Language Model Society"**. *Li et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2303.17760)] [[代码](https://github.com/camel-ai/camel)]

#### 框架与模块

- <u>LangGraph</u>: **"LangGraph: Build Resilient Language Agents as Graphs"**. *LangChain team.* GitHub 2024. [[代码](https://github.com/langchain-ai/langgraph)]
- <u>CrewAI</u>: **"CrewAI: Framework for Orchestrating Role-Playing, Autonomous AI Agents"**. *Moura et al.* GitHub 2024. [[代码](https://github.com/crewAIInc/crewAI)]
- <u>PydanticAI</u>: **"PydanticAI: Agent Framework for Production-Grade GenAI Applications"**. *Pydantic Team.* GitHub 2024. [[代码](https://github.com/pydantic/pydantic-ai)]
- <u>smolagents</u>: **"smolagents: A Smol Library to Build Great Agentic Systems"**. *Roucher et al.* GitHub 2025. [[代码](https://github.com/huggingface/smolagents)]
- <u>Hermes Agent</u>: **"Hermes Agent: Self-Improving AI Agent Framework"**. *Nous Research.* GitHub 2026. [[代码](https://github.com/nousresearch/hermes-agent)] [[文档](https://hermes-agent.nousresearch.com/docs/)]
- <u>AWS Multi-Agent Orchestrator</u>: **"Multi-Agent Orchestrator"**. *Amazon Web Services.* GitHub 2024. [[代码](https://github.com/awslabs/agent-squad)]
- <u>MemGPT</u>: **"MemGPT: Towards LLMs as Operating Systems"**. *Packer et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2310.08560)] [[代码](https://github.com/cpacker/MemGPT)]
- <u>Voyager</u>: **"Voyager: An Open-Ended Embodied Agent with Large Language Models"**. *Wang et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2305.16291)] [[代码](https://github.com/MineDojo/Voyager)]
- <u>Reflexion</u>: **"Reflexion: Language Agents with Verbal Reinforcement Learning"**. *Shinn et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2303.11366)] [[代码](https://github.com/noahshinn/reflexion)]
- <u>Generative Agents</u>: **"Generative Agents: Interactive Simulacra of Human Behavior"**. *Park et al.* UIST 2023. [[论文](https://arxiv.org/abs/2304.03442)] [[代码](https://github.com/joonspk-research/generative_agents)]
- <u>LangChain</u>: **"LangChain: Building Applications with LLMs through Composability"**. *Chase et al.* GitHub 2022. [[代码](https://github.com/langchain-ai/langchain)]
- <u>LlamaIndex</u>: **"LlamaIndex: A Data Framework for LLM Applications"**. *Liu et al.* GitHub 2022. [[代码](https://github.com/run-llama/llama_index)]
- <u>DeerFlow</u>: **"DeerFlow: Distributed Workflow Engine for LLM Agents"**. *GitHub 2024.* [[代码](https://github.com/modelscope/DeerFlow)]
- <u>DeepAgents</u>: **"DeepAgents: Multi-Agent Framework for Deep Learning"**. *GitHub 2024.* [[代码](https://github.com/deepagents/deepagents)]

#### 评估基础设施

- <u>lm-evaluation-harness</u>: **"lm-evaluation-harness"**. *Gao et al.* GitHub 2021. [[代码](https://github.com/EleutherAI/lm-evaluation-harness)]
- <u>API-Bank</u>: **"Api-bank: A comprehensive benchmark for tool-augmented llms"**. *Li et al.* EMNLP 2023. [[论文](https://aclanthology.org/2023.emnlp-main.187/)]
- <u>AgentBench</u>: **"AgentBench: Evaluating LLMs as Agents"**. *Liu et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2308.03688)] [[代码](https://github.com/THUDM/AgentBench)]
- <u>SWE-bench</u>: **"SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"**. *Jimenez et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2310.06770)] [[代码](https://github.com/swebench/SWE-bench)]
- <u>OSWorld</u>: **"OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments"**. *Xie et al.* NeurIPS 2024. [[论文](https://arxiv.org/abs/2404.07972)] [[代码](https://github.com/xlang-ai/OSWorld)]
- <u>WebArena</u>: **"WebArena: A Realistic Web Environment for Building Autonomous Agents"**. *Zhou et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2307.13854)] [[代码](https://github.com/web-arena-x/webarena)]
- <u>GAIA</u>: **"GAIA: A Benchmark for General AI Assistants"**. *Mialon et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2311.12983)]
- <u>Mind2Web</u>: **"Mind2Web: Towards a Generalist Agent for the Web"**. *Deng et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2306.06070)]
- <u>AgentBoard</u>: **"AgentBoard: An Analytical Evaluation Board of Multi-Turn LLM Agents"**. *Ma et al.* NeurIPS 2024. [[论文](https://arxiv.org/abs/2401.13178)]
- <u>InterCode</u>: **"InterCode: Standardizing and Benchmarking Interactive Coding with Execution Feedback"**. *Yang et al.* NeurIPS 2023. [[论文](https://arxiv.org/abs/2306.14898)]

---

### 技术挑战

**范围界定：**我们识别了九项开放研究问题，当前Agent Harness基础设施针对这些问题仅提供了部分解决方案，而缺乏生产级、可推广的框架。每项挑战都代表了学术原型所展示的成果与已部署系统所需条件之间的差距。

**评估标准：**对于每项挑战，我们评估：(1) **学术覆盖度**——同行评审解决方案（如有）；(2) **生产成熟度**——是否有任何已部署系统在规模上解决了该问题；(3) **阻塞严重性**——未解决的问题是阻止部署还是仅限制性能。

**横切主题：**大多数挑战源于**组合问题**——单个组件（安全沙箱、记忆存储、评估指标）可以独立工作，但将它们组合成连贯的执行器会浮现涌现性故障。形式化验证、可移植性测试和协议互操作性都需要当前研究尚未解决的组合式推理。

#### 安全与沙箱

**挑战：**智能体沙箱必须防止恶意工具使用，同时允许合法的系统访问——这比传统应用沙箱更困难，因为智能体**有意地**与敏感资源（文件系统、网络API、shell命令）交互。

**技术现状：**SandboxEscapeBench 显示前沿模型能够逃逸容器；PRISM 展示了零分叉纵深防御是可能的，但需要操作系统级监测。尚不存在适用于所有智能体用例且无需人工逐任务配置的通用沙箱。

**开放问题：**组合式安全属性（证明智能体+Harness+环境满足安全规范）仍未解决。当前防御是反应式的（检测逃逸）而非预防式的（证明逃逸不可能）。

> **关键数据：**SandboxEscapeBench——前沿LLM达到**15–35%容器逃逸率**；PRISM——10个钩子的零分叉运行时将逃逸降至接近零，开销<5ms。

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

#### 评估与基准测试

> **关键数据：**HAL 统一了**20,000+次评估**，将数周的评估压缩至数小时；OSWorld 报告了**28%假阴性率**的自动化评估；METR 发现通过基准测试的PR人工合并率**低24.2个百分点**，差距以9.6pp/年速度扩大。

- <u>AgencyBench</u>†: **"AgencyBench: Benchmarking the Frontiers of Autonomous Agents in 1M-Token Real-World Contexts"**. *Li et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2601.11044)]
- <u>AEGIS</u>†: **"AEGIS: No Tool Call Left Unchecked -- A Pre-Execution Firewall and Audit Layer for AI Agents"**. *Yuan et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.12621)]
- <u>Hell or High Water</u>†: **"Hell or High Water: Evaluating Agentic Recovery from External Failures"**. *Wang et al.* COLM 2025. [[Paper](https://arxiv.org/abs/2508.11027)]
- <u>SearchLLM</u>†: **"Aligning Large Language Models with Searcher Preferences"**. *Wu et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.10473)]
- <u>Meta-Harness</u>†: **"Meta-Harness: End-to-End Optimization of Model Harnesses"**. *Lee et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.28052)]
- <u>AutoHarness</u>†: **"AutoHarness: improving LLM agents by automatically synthesizing a code harness"**. *Lou et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.03329)]
- <u>MASEval</u>†: **"MASEval: Extending Multi-Agent Evaluation from Models to Systems"**. *Emde et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.08835)]
- <u>VeRO</u>†: **"VeRO: An Evaluation Harness for Agents to Optimize Agents"**. *Ursekar et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.22480)]
- <u>TheAgentCompany</u>†: **"TheAgentCompany: Benchmarking LLM Agents on Consequential Real-World Tasks"**. *Xu et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2412.14161)]
- <u>BrowserGym</u>†: **"The BrowserGym Ecosystem for Web Agent Research"**. *Le Sellier De Chezelles et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2412.05467)]
- <u>WorkArena</u>†: **"WorkArena: How Capable are Web Agents at Solving Common Knowledge Work Tasks?"**. *Drouin et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2403.07718)]
- <u>R-Judge</u>: **"R-Judge: Benchmarking Safety Risk Awareness for LLM Agents"**. *Yuan et al.* EMNLP 2024. [[Paper](https://arxiv.org/abs/2401.10019)]
- <u>R2E</u>: **"R2E: Turning any GitHub Repository into a Programming Agent Environment"**. *Jain et al.* ICML 2024. [[Paper](https://proceedings.mlr.press/v235/jain24c.html)]
- <u>Evaluation Survey</u>: **"Evaluation and Benchmarking of LLM Agents: A Survey"**. *Mohammadi et al.* KDD 2025. [[Paper](https://arxiv.org/abs/2507.21504)]
- <u>PentestJudge</u>†: **"PentestJudge: Judging Agent Behavior Against Operational Requirements"**. *Caldwell et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2508.02921)]

#### 协议标准化

> **关键数据：**MCP（工具↔约束工程）：2–15ms延迟；A2A（智能体↔智能体）：50–200ms；ACP（意图级，IBM）——三种协议服务于互补角色。

- <u>MCP</u>: **"Model Context Protocol"**. *Anthropic.* Technical Report 2024. [[Spec](https://modelcontextprotocol.io)]
- <u>A2A</u>: **"Agent-to-Agent Protocol"**. *Google.* Technical Report 2025. [[规范](https://google.github.io/A2A/)] [[公告](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)]
- <u>Protocol Comparison</u>†: **"A Survey of Agent Interoperability Protocols: Model Context Protocol (MCP), Agent Communication Protocol (ACP), Agent-to-Agent Protocol (A2A), and Agent Network Protocol (ANP)"**. *Ehtesham et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2505.02279)]
- <u>Gorilla</u>: **"Gorilla: Large Language Model Connected with Massive APIs"**. *Patil et al.* NeurIPS 2023. [[Paper](https://arxiv.org/abs/2305.15334)] [[Code](https://github.com/ShishirPatil/gorilla)]

#### 运行时上下文管理

> **关键数据：**SkillsBench——精选技能注入产生**+16.2pp**改进；"迷失在中间"效应已被记录；长上下文模型将问题从*保留*转移至*显著性*。

- <u>SkillsBench</u>†: **"SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks"**. *Li et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.12670)]
- <u>ReadAgent</u>: **"A Human-Inspired Reading Agent with Gist Memory of Very Long Contexts"**. *Lee et al.* ICML 2024. [[Paper](https://arxiv.org/abs/2402.09727)]
- <u>MemoryOS</u>: **"Memory OS of AI Agent"**. *Kang et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2506.06326)]
- <u>CoALA</u>: **"Cognitive Architectures for Language Agents"**. *Sumers et al.* TMLR 2024. [[Paper](https://arxiv.org/abs/2309.02427)]
- <u>SkillFortify</u>†: **"Formal Analysis and Supply Chain Security for Agentic AI Skills"**. *Bhardwaj.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.00195)]
- <u>Lost in the Middle</u>: **"Lost in the Middle: How Language Models Use Long Contexts"**. *Liu et al.* TACL 2024. [[Paper](https://arxiv.org/abs/2307.03172)]
- <u>Context Engineering Survey</u>†: **"Context Engineering: A Survey of 1,400 Papers on Effective Context Management for LLM Agents"**. *Mei et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2507.13334)]

#### 工具使用与注册

> **关键数据：**Vercel 发现移除**80%工具**比任何模型升级都更有帮助；Schema First (Sigdel & Baral, 2026) —— 一项受控的初步研究表明，基于 schema 的工具契约可以减少**接口层面**的误用（如格式校验失败），但无法减少**语义层面**的误用（即格式正确但任务不当的调用），且各实验条件下端到端任务成功率均为零，表明仅靠接口设计不足以保证工具调用的可靠性；CodeAct 在**17/17项Mint基准**上表现优异，**回合数减少20%**。

- <u>CodeAct</u>: **"Executable Code Actions Elicit Better LLM Agents"**. *Wang et al.* ICML 2024. [[Paper](https://arxiv.org/abs/2402.01030)] [[Code](https://github.com/xingyaoww/code-act)]
- <u>Schema First</u>†: **"Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance"**. *Sigdel & Baral.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.13404)]
- <u>ToolLLM</u>: **"ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs"**. *Qin et al.* ICLR 2024. [[Paper](https://arxiv.org/abs/2307.16789)] [[Code](https://github.com/OpenBMB/ToolBench)]
- <u>ToolSandbox</u>†: **"ToolSandbox: A Stateful, Conversational, Interactive Evaluation Benchmark for LLM Tool Use Capabilities"**. *Lu et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2408.04682)]
- <u>AutoTool</u>†: **"AutoTool: Efficient Tool Selection for Large Language Model Agents"**. *Jia & Li.* AAAI 2026. [[Paper](https://arxiv.org/abs/2511.14650)]
- <u>Tool Learning Survey</u>: **"Tool Learning with Large Language Models: A Survey"**. *Qu et al.* Frontiers of Computer Science 2024. [[Paper](https://arxiv.org/abs/2405.17935)]
- <u>GoEX</u>†: **"GoEX: Perspectives and Designs Towards a Runtime for Autonomous LLM Applications"**. *Patil et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2404.06921)]
- <u>AgentTuning</u>: **"AgentTuning: Enabling Generalized Agent Abilities for LLMs"**. *Zeng et al.* ACL 2024. [[Paper](https://arxiv.org/abs/2310.12823)]

#### 记忆架构

> **关键数据：**Mem0 实现了相比完整上下文**90% token减少**；Zep 时序知识：**+18.5% QA准确率**；Agent Workflow Memory：在Mind2Web上**+14.9%**。六种架构模式：平面缓冲区→层次化→情节式→语义式→过程式→图式。

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


#### 多智能体协同

> **关键数据：**AgencyBench——智能体在原生SDKAgent Harness上达到**48.4%成功率**，而在独立Agent Harness上显著更低，展示了Harness和Agent之间的紧密耦合。对抗性多智能体设置中的拜占庭容错仍是开放问题。

<p align="center">
  <img src="https://raw.githubusercontent.com/Gloriaameng/LLM-Agent-Harness-Survey/main/assets/multi_agent_topology.png" width="680" alt="多智能体协同拓扑"/>
</p>

- <u>AdaptOrch</u>†: **"AdaptOrch: Task-Adaptive Multi-Agent Orchestration in the Era of LLM Performance Convergence"**. *Yu.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.16873)]
- <u>SAGA</u>†: **"SAGA: A Security Architecture for Governing AI Agentic Systems"**. *Syros et al.* NDSS 2026. [[Paper](https://arxiv.org/abs/2504.21034)]
- <u>MAS-FIRE</u>†: **"MAS-FIRE: Fault Injection and Reliability Evaluation for LLM-Based Multi-Agent Systems"**. *Jia et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2602.19843)]
- <u>Byzantine fault tolerance</u>†: **"Rethinking the Reliability of Multi-agent System: A Perspective from Byzantine Fault Tolerance"**. *Zheng et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2511.10400)]
- <u>Multi-agent baseline study</u>†: **"Rethinking the Value of Multi-Agent Workflow: A Strong Single Agent Baseline"**. *Xu et al.* arXiv 2026. [[Paper](https://arxiv.org/abs/2601.12307)]
- <u>AgentVerse</u>†: **"AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors"**. *Chen et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2308.10848)]
- <u>Mixture-of-Agents</u>†: **"Mixture-of-Agents Enhances Large Language Model Capabilities"**. *Wang et al.* arXiv 2024. [[Paper](https://arxiv.org/abs/2406.04692)]
- <u>Multi-Agent Survey</u>: **"Large Language Model Based Multi-Agents: A Survey of Progress and Challenges"**. *Guo et al.* IJCAI 2024. [[Paper](https://arxiv.org/abs/2402.01680)]
- <u>Concordia</u>†: **"Generative Agent-Based Modeling with Actions Grounded in Physical, Social, or Digital Space Using Concordia"**. *Vezhnevets et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2312.03664)]

#### 计算经济学

> **关键数据：**OpenRouter 报告**每周13T tokens**（2026年2月），每4周翻倍；AgencyBench 测量平均**1M tokens/任务**；预计2027年智能体计算量增长1000倍；AIOS 通过恰当的智能体调度实现**2.1×吞吐加速**。

- <u>State of AI Report</u>: **"State of AI: An Empirical 100 Trillion Token Study with OpenRouter"**. *Aubakirova et al.* Andreessen Horowitz (a16z) and OpenRouter Inc., December 2025. [[报告](https://openrouter.ai/state-of-ai)]
- <u>BentoML Inference Report</u>: **"Beyond Tokens-per-Second: How to Balance Speed, Cost, and Quality in LLM Inference"**. *Yang.* BentoML Blog, January 2026. [[博客](https://www.bentoml.com/blog/beyond-tokens-per-second-how-to-balance-speed-cost-and-quality-in-llm-inference)]
- <u>H100 Price Spike</u>: **"H100 Price Spike: Understanding the 10% Surge in GPU Rental Costs"**. *Li.* Silicon Data Blog, January 2026. [[博客](https://www.silicondata.com/blog/h100-price-spike)]
- <u>NVIDIA GTC 2026</u>: **"NVIDIA GTC 2026: Live Updates on What's Next in AI"**. *NVIDIA.* NVIDIA Blog, March 2026. [[博客](https://blogs.nvidia.com/blog/gtc-2026-news/)]
- <u>Repo2Run</u>†: **"Repo2Run: Automated Building Executable Environment for Code Repository at Scale"**. *Hu et al.* arXiv 2025. [[Paper](https://arxiv.org/abs/2502.13681)]
- <u>Policy-First</u>†: **"Guardrails as Infrastructure: Policy-First Control for Tool-Orchestrated Workflows"**. *Sigdel & Baral.* arXiv 2026. [[Paper](https://arxiv.org/abs/2603.18059)]

---

### 新兴主题

- <u>Harness Engineering for Language Agents</u>†: **"Harness Engineering for Language Agents: The Harness Layer as Control, Agency, and Runtime"**. *He et al.* Preprints 2026. [[论文](https://www.preprints.org)]
- <u>DeepAgent</u>†: **"Deepagent: A general reasoning agent with scalable toolsets"**. *Li et al.* arXiv 2025. [[论文](https://arxiv.org/abs/2510.21618)]
- <u>Natural-Language Harnesses</u>†: **"Natural-Language Agent Harnesses"**. *Pan et al.* arXiv 2026. [[论文](https://arxiv.org/abs/2603.25723)]
- <u>Self-Evolving Agents Survey</u>†: **"A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence"**. *Gao et al.* TMLR 2026. [[论文](https://arxiv.org/abs/2507.21046)]
- <u>Self-RAG</u>: **"Self-RAG: Learning to Retrieve, Generate, and Critique Through Self-Reflection"**. *Asai et al.* ICLR 2024. [[论文](https://arxiv.org/abs/2310.11511)]
- <u>Constitutional AI</u>: **"Constitutional AI: Harmlessness from AI Feedback"**. *Bai et al.* arXiv 2022. [[论文](https://arxiv.org/abs/2212.08073)]
- <u>AppAgent</u>†: **"AppAgent: Multimodal Agents as Smartphone Users"**. *Zhang et al.* arXiv 2023. [[论文](https://arxiv.org/abs/2312.13771)]

#### 相关综述

- <u>LLM Agents Survey</u>: **"A Survey on Large Language Model Based Autonomous Agents"**. *Wang et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2308.11432)]
- <u>Rise of LLM Agents</u>: **"The Rise and Potential of Large Language Model Based Agents: A Survey"**. *Xi et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2309.07864)]
- <u>LLM Survey</u>: **"A Survey of Large Language Models"**. *Zhao et al.* arXiv 2023. [[Paper](https://arxiv.org/abs/2303.18223)]
- <u>AI Agent Systems</u>†: **"AI Agent Systems: Architectures, Applications, and Evaluation"**. *Xu.* arXiv 2025. [[Paper](https://arxiv.org/abs/2601.01743)]

#### 业界实践报告与洞察

> 来自 Stripe、OpenAI、Cursor、METR 及其他前沿实践者的生产部署经验。

- <u>Building Effective Agents</u>: **"Building Effective Agents"**. *Anthropic.* Anthropic Engineering Blog, 2026. [[博客](https://www.anthropic.com/engineering)]
- <u>Demystifying Evals</u>: **"Demystifying Evals for AI Agents"**. *Anthropic.* Anthropic Engineering Blog, 2026. [[博客](https://www.anthropic.com/engineering)]
- <u>Context Engineering</u>: **"Context Engineering Our Way to Long-Horizon Agents"**. *Chase.* Sequoia Capital Podcast, 2026.
- <u>Agent Frameworks, Runtimes, and Harnesses</u>: **"Agent Frameworks, Runtimes, and Harnesses"**. *LangChain.* LangChain Blog, 2025. [[博客](https://blog.langchain.com/agent-frameworks-runtimes-and-harnesses-oh-my/)]
- <u>We Removed 80% of Our Agent's Tools</u>: **"We Removed 80% of Our Agent's Tools"**. *Qu.* Vercel Engineering Blog, 2025. [[博客](https://vercel.com/blog/we-removed-80-percent-of-our-agents-tools)]
- <u>Harness Problem</u>: **"I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed."**. *Can.* Personal blog (blog.can.ac), February 2026. [[博客](https://blog.can.ac/2026/02/12/the-harness-problem/)]
- <u>AI Adoption Journey</u>: **"My AI Adoption Journey"**. *Hashimoto.* Personal blog, February 2026. [[博客](https://mitchellh.com/writing/my-ai-adoption-journey)]
- <u>The Harness Gap</u>: **"The Harness Gap: AI Coding Output Rose 59% in 2025 While Teams Shipped 7% Less"**. *Zoom In AI.* Medium (Write A Catalyst), March 2026. [[博客](https://medium.com/write-a-catalyst/the-harness-gap-ai-coding-output-rose-59-in-2025-while-teams-shipped-7-less-082d3d07cff8)]
- <u>Stripe Minions</u>: **"Minions: Stripe's one-shot, end-to-end coding agents"**. *Gray.* Stripe Dev Blog, Feb 2026. [[博客](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)]
- <u>Harness Engineering (OpenAI)</u>: **"Harness engineering: leveraging Codex in an agent-first world"**. *Lopopolo.* OpenAI Blog, Feb 2026. [[博客](https://openai.com/index/harness-engineering/)]
- <u>Self-Driving Codebases</u>: **"Towards self-driving codebases"**. *Lin.* Cursor Blog, Feb 2026. [[博客](https://cursor.com/blog/self-driving-codebases)]
- <u>METR SWE-bench Analysis</u>: **"Many SWE-bench-Passing PRs Would Not Be Merged into Main"**. *Whitfill et al.* METR Notes, Mar 2026. [[报告](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/)]

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

## 引用

参见本 README 顶部的 BibTeX 引用格式。

---

## 更新日志

| 版本 | 日期 | 变更 |
|------|------|------|
|  v1 | 2026-04-03 | 首次预印本 |
|  v2 | 2026-04-07 | 仓库更新 |
|  v3 | 2026-04-09 | 预印本索引 |
|  v4 | 2026-04-14 | 引用更新 |

---

<p align="center">
  <i>† 表示预印本，尚未经同行评审。</i><br>
  <i>本综述正在积极开发中；完整手稿将于近期发布。</i><br>
  <i>由 Qianyu Meng， Yanan Wang与 Liyi Chen 维护。欢迎提交缺失论文或更新链接的 PR。</i>
</p>
