const copy = {
  en: {
    skip: "Skip to content", primaryNav: "Primary navigation", home:"Agent Harness survey home", navArgument: "Argument", navFramework: "Framework", navSystems: "Systems", navEvaluation: "Evaluation", navResearch:"Research", github: "GitHub repository",
    projectLine: "A survey of agent runtimes · 2026", title: "Agent Harness for Large Language Model Agents: A Survey",
    affiliations: "Minzu University of China · Dalian University of Technology · Xiaohongshu Inc. · University of Science and Technology of China",
    thesis: "Agent capability should be analyzed at the model–harness–environment configuration level. The harness is a consequential and frequently under-reported co-determinant of observed behavior.",
    paperLinks: "Paper and project links", paperV4: "Read Paper v4", doiV3:"DOI · archived v3", v5Status: "Paper v5 in revision",
    fig1Alt: "Diagram of a model, an agent harness, and an environment exchanging requests, actions, observations, and outcomes.",
    fig1Caption: "The model, harness, and environment form a configuration. Policy, budget, and evaluator specify the conditions under which its behavior is observed.",
    argumentKicker: "The research question", argumentTitle: "What shapes an agent result: model, harness, or environment?",
    argumentLead: "The survey asks which parts of observed capability come from the model, the harness, and the environment. It brings together first-party system evidence, controlled harness evaluations, and lifecycle studies to make those conditions inspectable.",
    resourceIndex: "Explore the living evidence index", frameworkKicker: "Analytical framework", frameworkTitle: "Six functions. One runtime.",
    frameworkIntro: "ETCSLV is a functional vocabulary for recurring governance responsibilities. It describes coverage and responsibility boundaries, not a maturity score.",
    etcslvLabel: "ETCSLV functions", fig2Alt: "Lifecycle diagram showing execution, tools, context, state, lifecycle controls, and evaluation evidence around an agent run.",
    fig2Caption: "ETCSLV functions across progress, suspension, recovery, and termination. The functions overlap in implementation.",
    systemsKicker: "System landscape", systemsTitle: "Evidence-coded system comparison",
    systemsIntro: "Each system is assessed against the same six functions using public first-party evidence. The matrix cutoff is 2026-10-12; per-source access dates are shown in the evidence details. Ratings describe documented coverage, not quality, adoption, or production maturity.",
    fig4Alt: "Taxonomy diagram of five harness groups and three adjacent analysis units.",
    fig4Caption: "Five system groups and three adjacent analysis units. Capability modules, evaluation infrastructure, and task environments remain separate.",
    matrixControls: "Filter system matrix", searchLabel: "Find a system", searchPlaceholder: "Search by name", groupLabel: "Group", allGroups: "All groups",
    groupAnchor: "Anchor systems", groupCoding: "Coding harnesses", groupRuntime: "General runtimes", groupPersistent: "Persistent, meta, and operational", groupWorkplace: "Workplace and personal agents",
    ratingLabel: "Contains rating", anyRating: "Any rating", ratingFull: "Full", ratingPartial: "Partial", ratingAbsent: "Absent", ratingUnverified: "Unverified", ratingLegend: "Rating legend", legendFull: "Full · built in and documented", legendPartial: "Partial · limited, optional, or delegated", legendAbsent: "Absent · explicitly not provided", legendUnverified: "Unverified · public evidence insufficient",
    matrixRegion: "Scrollable system evidence matrix", thSystem: "System", thGroup: "Group", thEvidence: "Evidence",
    titleE: "Execution loop", titleT: "Tool registry", titleC: "Context manager", titleS: "State store", titleL: "Lifecycle controls", titleV: "Evaluation interface",
    matrixNote: "The comparison set is evidence-driven, not a ranking. The snapshot cutoff is 12 October 2026; per-source access dates are shown in expanded evidence. Expand a row to inspect sources and version identifiers.", downloadMatrix:"Download the matrix data (JSON)",
    evaluationKicker: "Evaluation landscape", evaluationTitle: "Six areas of harness evaluation",
    evaluationIntro: "The categories include benchmark suites, evaluation methods, and infrastructure. They ask different questions and should not be read as six equivalent benchmark types.",
    fig6Alt: "Diagram grouping harness evaluation into six areas and separating task environments.",
    fig6Caption: "Evaluation areas span direct harness effects, change over time, lifecycle risk, long-horizon recovery, protocols, and evaluation infrastructure. Task environments are a separate layer.",
    taskEnvironmentNote: "Task environments such as OSWorld, WebArena, GAIA, and SWE-bench remain essential. They measure configured-system task performance; a harness-effect study adds controls that isolate runtime changes.",
    agendaKicker: "Research agenda", agendaTitle: "From component coverage to testable effects",
    agendaIntro: "The next step is controlled evidence about interactions, persistence, authority, and change—not a larger feature checklist.",
    fig8Alt: "Proposed outer loop for improving an agent harness through trajectory diagnosis, isolated candidate changes, independent evaluation, and release or rollback.",
    fig8Caption: "Proposed outer loop for evaluating harness changes. DeepSeek Harness provides a composable substrate; this diagram is a research design, not a reported experiment.",
    citationKicker: "Citation", citationTitle: "Cite the archived preprint",
    citationNote: "The repository PDF is v4. DOI 10.20944/preprints202604.0428.v3 resolves to the archived v3 preprint. Paper v5 is under revision and is not linked here.",
    doiLink: "Open DOI record", copyCitation: "Copy citation", copySuccess: "BibTeX copied.", copyFailure: "Copy failed. Select the BibTeX text and copy it manually.",
    latestKicker:"Literature update", latestTitle:"Latest research", latestIntro:"A targeted literature check on 18 October 2026 adds seven works across benchmarks, methods, implementation testing, and security. This supplement is not a complete benchmark census. The 34-system matrix remains a 12 October snapshot.", dataError:"Could not load systems-data.js. Check that the data file sits next to this page.",
    footerProject: "Official survey repository and living evidence index", footerCutoff: "System matrix snapshot: 12 October 2026; source access dates are recorded per row.",
    filterCount: (n) => `${n} of 34 systems`, showEvidence: "Sources", hideEvidence: "Hide sources", componentNames: {E:"Execution",T:"Tools",C:"Context",S:"State",L:"Lifecycle",V:"Evaluation"},
    ratings: {Full:"Full",Partial:"Partial",Absent:"Absent",Unverified:"Unverified"}, confidence: {high:"high confidence",medium:"medium confidence",low:"low confidence"}, versionLabel:"Version", accessedLabel:"accessed", evidenceTypes: {"first-party source/docs":"first-party source and documentation", "first-party architecture documentation":"first-party architecture documentation", "first-party product documentation":"first-party product documentation", "first-party docs":"first-party documentation", "first-party source":"first-party source"},
    contributions: [
      ["Joint unit of analysis", "Treat model behavior as a property of a named model–harness–environment configuration."],
      ["Six-function framework", "Use ETCSLV to locate recurring runtime responsibilities without turning coverage into a score."],
      ["Historical account", "Connect software testing, interactive environments, early agent patterns, and current runtimes."],
      ["Evidence-coded landscape", "Compare 34 systems and examine four anchor cases through the same lens."],
      ["Evaluation map", "Separate direct harness studies, evolving systems, lifecycle tests, protocols, infrastructure, and tasks."],
      ["Research agenda", "Identify testable questions about state, authority, evaluation, and bounded runtime change."]
    ],
    functions: {
      E:["Execution loop","Orders model calls and actions, enforces stopping conditions, and handles retry, delegation, and recovery."],
      T:["Tool registry","Defines the model-facing action set, schemas, routing, result handling, and execution contracts."],
      C:["Context manager","Selects and transforms instructions, history, observations, retrieved material, and summaries for each request."],
      S:["State store","Preserves conversation, workspace, checkpoints, memory, and pending work across turns or restarts."],
      L:["Lifecycle controls","Mediates permissions, approvals, credentials, sandbox selection, hooks, and audit around execution."],
      V:["Evaluation interface","Exposes trajectories, state, outcomes, costs, and configuration metadata to an evaluator."]
    },
    categories: {anchor:"Anchor systems",coding:"Coding harnesses",runtime:"General runtimes",persistent:"Persistent, meta, and operational",workplace:"Workplace and personal agents"},
    agenda: [
      ["Configuration effects", "Measure model, harness, environment, and policy interactions under matched conditions."],
      ["State continuity", "Test what survives compaction, restart, conflict, revocation, and deletion."],
      ["Independent evaluation", "Connect trajectories to environment outcomes and records outside the agent’s control."],
      ["Bounded evolution", "Evaluate versioned changes on held-out, out-of-distribution, regression, and safety tasks."]
    ],
    evaluations: [
      {title:"Harness effects", desc:"Compare runtime configurations or isolate components while controlling the model and task conditions.", links:[["Harness-Bench","https://arxiv.org/abs/2605.27922"],["Beyond the Model","https://arxiv.org/abs/2609.32459"],["LongHarness Bench","https://arxiv.org/abs/2609.38137"],["Harness the Memory","https://arxiv.org/abs/2608.15008"],["WildClawBench","https://arxiv.org/abs/2605.10912"]]},
      {title:"Harness evolution and continual evaluation", desc:"Measure adaptation and retention as tools, skills, sessions, or runtime components change.", links:[["EvoHarnessBench","https://arxiv.org/abs/2609.04280"],["SkillOpt","https://arxiv.org/abs/2605.23904"],["SCLATE","https://arxiv.org/abs/2609.32391"],["TaoLive","https://arxiv.org/abs/2608.15763"],["Meta-Harness","https://arxiv.org/abs/2603.28052"],["AutoHarness","https://arxiv.org/abs/2603.03329"],["VeRO","https://arxiv.org/abs/2602.22480"],["AgentSWE","https://arxiv.org/abs/2610.13361"]]},
      {title:"Lifecycle, security, and audit", desc:"Probe permissions, attack effects, recovery, and whether records support independent review.", links:[["HarnessRisk","https://arxiv.org/abs/2608.17597"],["HarnessSecurity-Bench","https://arxiv.org/abs/2610.07639"],["Hearsay","https://arxiv.org/abs/2609.32495"],["SandboxEscapeBench","https://arxiv.org/abs/2603.02277"],["HarnessAudit-Bench","https://arxiv.org/abs/2605.14271"]]},
      {title:"Long-horizon loops and recovery", desc:"Test sustained progress, accumulated obligations, and recovery from partial failures.", links:[["LoopsBench","https://arxiv.org/abs/2608.00267"],["Long-Horizon-Terminal-Bench","https://arxiv.org/abs/2607.08964"],["SWE-Chain","https://arxiv.org/abs/2605.14415"],["ChainSWE","https://arxiv.org/abs/2607.02606"],["Hell or High Water","https://arxiv.org/abs/2508.11027"]]},
      {title:"Protocol and tool substrate", desc:"Separate protocol conformance, tool selection, execution, and verified effects.", links:[["DynamicMCPBench","https://arxiv.org/abs/2607.20531"],["MCP-Bench","https://arxiv.org/abs/2508.20453"],["MCP-AgentBench","https://arxiv.org/abs/2509.09734"],["MCPAgentBench","https://arxiv.org/abs/2512.24565"]]},
      {title:"Evaluation infrastructure", desc:"Provide repeatable runs, interchangeable agents, environments, traces, and graders.", links:[["AgentCompass","https://arxiv.org/abs/2607.13705"],["Harbor","https://github.com/harbor-framework/harbor"],["HAL","https://arxiv.org/abs/2510.11977"]]}
    ],
    latestWorks:[
      {kind:"Benchmark",title:"Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",desc:"Benchmarks coding agents on long-horizon harness-engineering work.",url:"https://arxiv.org/abs/2610.20344"},
      {kind:"Benchmark and decision method",title:"JevAgentHarness: Benchmarking, Deploying and Training Decision Models That Share Control with LLMs",desc:"Combines a benchmark with decision-model training for control delegation between an LLM and runtime.",url:"https://arxiv.org/abs/2610.21412"},
      {kind:"Implementation testing",title:"Complex Agents, Shallow Tests: Demystifying and Enhancing Test Adequacy of Agent Harness in the Wild",desc:"Studies contract-aware testing of harness implementations and test adequacy.",url:"https://arxiv.org/abs/2610.04921"},
      {kind:"Security benchmark",title:"HarnessSafe: Evaluating Safety Across Persistent Carriers in Agent Harnesses",desc:"Evaluates safety risks as information and behavior persist across harness carriers.",url:"https://arxiv.org/abs/2608.06984"},
      {kind:"Optimization method",title:"HARDE: Optimizing Agent Harnesses for Runtime Risk Detection and Execution Control",desc:"Presents security-oriented harness optimization; it is a method, not a benchmark suite.",url:"https://arxiv.org/abs/2609.38291"},
      {kind:"Search method",title:"Harness-Search: Guiding Long-Horizon Search through Multi-Agent Coordination",desc:"Studies evidence retrieval for long-horizon search; its claim is search-specific, not a general coding-harness result.",url:"https://arxiv.org/abs/2610.05382"},
      {kind:"Evaluated system",title:"LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks",desc:"Evaluates an outer Manage–Execute–Audit execution system; this paper is distinct from the versioned software snapshot in the system matrix.",url:"https://arxiv.org/abs/2608.01964"}
    ]
  },
  zh: {
    skip: "跳至正文", primaryNav: "主导航", home:"Agent Harness 综述首页", navArgument: "研究主张", navFramework: "分析框架", navSystems: "系统版图", navEvaluation: "评测版图", navResearch:"研究动态", github: "GitHub 仓库",
    projectLine: "智能体运行时综述 · 2026", title: "Agent Harness for Large Language Model Agents: A Survey",
    affiliations: "中央民族大学 · 大连理工大学 · 小红书 · 中国科学技术大学",
    thesis: "智能体能力应在模型—harness—环境配置层面进行分析。Harness 是影响行为的重要因素，却经常未在报告中充分说明。",
    paperLinks: "论文与项目链接", paperV4: "阅读论文 v4", doiV3:"DOI · 已归档 v3", v5Status: "论文 v5 正在修订",
    fig1Alt: "模型、智能体 harness 与环境之间传递请求、动作、观察和结果的关系图。",
    fig1Caption: "模型、harness 与环境构成一个配置。策略、预算和评测器说明了观察其行为时所处的条件。",
    argumentKicker: "研究问题", argumentTitle: "智能体结果由什么决定：模型、Harness，还是环境？",
    argumentLead: "这篇综述追问：观察到的智能体能力分别来自模型、Harness 与环境的哪些部分？论文汇集第一方系统证据、受控 Harness 评测与生命周期研究，让这些条件可以被辨认和讨论。",
    resourceIndex: "查看持续更新的证据索引", frameworkKicker: "分析框架", frameworkTitle: "六项功能，同一个运行时。",
    frameworkIntro: "ETCSLV 为反复出现的治理职责提供一套功能性词汇，用于说明能力覆盖与责任边界，不构成成熟度评分。",
    etcslvLabel: "ETCSLV 六项功能", fig2Alt: "智能体运行过程中，执行、工具、上下文、状态、生命周期控制与评测证据之间的关系图。",
    fig2Caption: "ETCSLV 功能覆盖持续执行、挂起、恢复与终止；不同功能在具体实现中可能重叠。",
    systemsKicker: "系统版图", systemsTitle: "按证据编码的系统比较",
    systemsIntro: "每个系统均依据公开的第一方材料，按同一套六项功能进行评估。矩阵截止日期为 2026 年 10 月 12 日；各来源的访问日期见展开内容。评分描述有据可查的功能覆盖，不代表质量、采用度或生产成熟度。",
    fig4Alt: "将五类 harness 与三个相邻分析单元区分开的分类图。",
    fig4Caption: "五类系统与三个相邻分析单元。能力模块、评测基础设施和任务环境分别列出。",
    matrixControls: "筛选系统矩阵", searchLabel: "查找系统", searchPlaceholder: "按名称搜索", groupLabel: "类别", allGroups: "全部类别",
    groupAnchor: "重点案例", groupCoding: "编程 harness", groupRuntime: "通用运行时", groupPersistent: "持久型、上层编排型与运维型", groupWorkplace: "办公与个人智能体",
    ratingLabel: "包含评分", anyRating: "所有评分", ratingFull: "完整", ratingPartial: "部分", ratingAbsent: "缺失", ratingUnverified: "未核实", ratingLegend: "评分图例", legendFull: "完整 · 内置且有文档证明", legendPartial: "部分 · 有限、可选或由官方扩展提供", legendAbsent: "缺失 · 第一方材料明确说明不具备", legendUnverified: "未核实 · 公开证据不足",
    matrixRegion: "可横向滚动的系统证据矩阵", thSystem: "系统", thGroup: "类别", thEvidence: "证据",
    titleE: "执行循环", titleT: "工具注册表", titleC: "上下文管理器", titleS: "状态存储", titleL: "生命周期控制", titleV: "评测接口",
    matrixNote: "比较集依据证据筛选，并非排名。矩阵快照截至 2026 年 10 月 12 日；各来源访问日期见展开内容。展开系统行可查看来源和版本标识。", downloadMatrix:"下载矩阵数据（JSON）",
    evaluationKicker: "评测版图", evaluationTitle: "Harness 评测的六个方向",
    evaluationIntro: "这些类别涵盖基准套件、评测方法与基础设施。它们回答的问题不同，不应理解为六种同质的基准类型。",
    fig6Alt: "将 harness 评测分成六个方向，并将任务环境单独列出的关系图。",
    fig6Caption: "评测方向涵盖 harness 效应、系统演化、生命周期风险、长时恢复、协议以及评测基础设施。任务环境属于单独层次。",
    taskEnvironmentNote: "OSWorld、WebArena、GAIA 与 SWE-bench 等任务环境仍不可或缺。它们评测完整配置的任务表现；harness 效应研究还需增加控制变量，以隔离运行时变化。",
    agendaKicker: "研究议程", agendaTitle: "从功能覆盖走向可检验的效果",
    agendaIntro: "下一步需要关于交互、持久状态、权限与演化的受控证据，而不是继续增加功能清单。",
    fig8Alt: "Harness 改进闭环提案：分析执行轨迹，在隔离环境测试候选修改，独立评测后发布或回滚。",
    fig8Caption: "用于评测 harness 修改的外部闭环提案。DeepSeek Harness 提供可组合的实现基础；此图是研究设计，不是已报告的实验结果。",
    citationKicker: "引用", citationTitle: "引用已归档预印本",
    citationNote: "仓库公开的 PDF 为 v4。DOI 10.20944/preprints202604.0428.v3 对应已归档的 v3 预印本。论文 v5 仍在修订，此处不提供链接。",
    doiLink: "打开 DOI 记录", copyCitation: "复制引用", copySuccess: "BibTeX 已复制。", copyFailure: "复制失败，请选中 BibTeX 文本后手动复制。",
    latestKicker:"文献补充", latestTitle:"最新研究", latestIntro:"2026 年 10 月 18 日定向补检了七项研究，涉及基准、方法、实现测试与安全。该补充并非完整基准清单；34 个系统矩阵仍采用 2026 年 10 月 12 日快照。", dataError:"无法读取 systems-data.js，请确认数据文件与此页面位于同一目录。",
    footerProject: "综述官方仓库与持续更新的证据索引", footerCutoff: "系统矩阵快照：2026 年 10 月 12 日；各条来源访问日期见展开内容。",
    filterCount: (n) => `显示 ${n} / 34 个系统`, showEvidence: "来源", hideEvidence: "收起来源", componentNames: {E:"执行",T:"工具",C:"上下文",S:"状态",L:"生命周期",V:"评测"},
    ratings: {Full:"完整",Partial:"部分",Absent:"缺失",Unverified:"未核实"}, confidence: {high:"高置信度",medium:"中等置信度",low:"低置信度"}, versionLabel:"版本", accessedLabel:"访问于", evidenceTypes: {"first-party source/docs":"第一方代码与文档", "first-party architecture documentation":"第一方架构文档", "first-party product documentation":"第一方产品文档", "first-party docs":"第一方文档", "first-party source":"第一方代码"},
    contributions: [
      ["联合分析单元", "将智能体行为视为特定模型—harness—环境配置的结果。"],
      ["六功能框架", "用 ETCSLV 定位反复出现的运行时职责，不将覆盖度变成评分。"],
      ["历史梳理", "连接软件测试、交互环境、早期智能体范式与当代运行时。"],
      ["证据编码版图", "比较 34 个系统，并用同一框架深入分析四个重点案例。"],
      ["评测版图", "区分 harness 直接研究、系统演化、生命周期测试、协议、基础设施与任务环境。"],
      ["研究议程", "提出关于状态、权限、评测与运行时有界演化的可检验问题。"]
    ],
    functions: {
      E:["执行循环","编排模型调用与动作，设定终止条件，并处理重试、委派和恢复。"],
      T:["工具注册表","定义模型可见的动作集合、参数格式、路由、结果处理与执行契约。"],
      C:["上下文管理器","为每次请求筛选和转换指令、历史、观察、检索内容与摘要。"],
      S:["状态存储","跨轮次或进程重启保存对话、工作区、检查点、记忆与待办操作。"],
      L:["生命周期控制","在执行前后管理权限、审批、凭据、沙箱、钩子与审计。"],
      V:["评测接口","向评测器提供轨迹、状态、结果、成本与配置元数据。"]
    },
    categories: {anchor:"重点案例",coding:"编程 harness",runtime:"通用运行时",persistent:"持久型、上层编排型与运维型",workplace:"办公与个人智能体"},
    agenda: [
      ["配置效应", "在条件匹配的实验中测量模型、harness、环境与策略之间的交互。"],
      ["状态连续性", "检验信息如何跨越压缩、重启、冲突、权限撤销与删除。"],
      ["独立评测", "将执行轨迹与智能体无法自行控制的环境结果和记录相连接。"],
      ["有界演化", "在留出、分布外、回归与安全任务上评测带版本的修改。"]
    ],
    evaluations: [
      {title:"Harness 效应", desc:"控制模型与任务条件，比较运行时配置或隔离组件影响。", links:[["Harness-Bench","https://arxiv.org/abs/2605.27922"],["Beyond the Model","https://arxiv.org/abs/2609.32459"],["LongHarness Bench","https://arxiv.org/abs/2609.38137"],["Harness the Memory","https://arxiv.org/abs/2608.15008"],["WildClawBench","https://arxiv.org/abs/2605.10912"]]},
      {title:"Harness 演化与持续评测", desc:"随着工具、技能、会话或运行时组件变化，测量系统的适应与保持能力。", links:[["EvoHarnessBench","https://arxiv.org/abs/2609.04280"],["SkillOpt","https://arxiv.org/abs/2605.23904"],["SCLATE","https://arxiv.org/abs/2609.32391"],["TaoLive","https://arxiv.org/abs/2608.15763"],["Meta-Harness","https://arxiv.org/abs/2603.28052"],["AutoHarness","https://arxiv.org/abs/2603.03329"],["VeRO","https://arxiv.org/abs/2602.22480"],["AgentSWE","https://arxiv.org/abs/2610.13361"]]},
      {title:"生命周期、安全与审计", desc:"探查权限、攻击影响、故障恢复以及记录能否支持独立核查。", links:[["HarnessRisk","https://arxiv.org/abs/2608.17597"],["HarnessSecurity-Bench","https://arxiv.org/abs/2610.07639"],["Hearsay","https://arxiv.org/abs/2609.32495"],["SandboxEscapeBench","https://arxiv.org/abs/2603.02277"],["HarnessAudit-Bench","https://arxiv.org/abs/2605.14271"]]},
      {title:"长时循环与恢复", desc:"测试持续推进、累积义务与部分故障后的恢复。", links:[["LoopsBench","https://arxiv.org/abs/2608.00267"],["Long-Horizon-Terminal-Bench","https://arxiv.org/abs/2607.08964"],["SWE-Chain","https://arxiv.org/abs/2605.14415"],["ChainSWE","https://arxiv.org/abs/2607.02606"],["Hell or High Water","https://arxiv.org/abs/2508.11027"]]},
      {title:"协议与工具基础", desc:"分别评测协议一致性、工具选择、执行与经核验的效果。", links:[["DynamicMCPBench","https://arxiv.org/abs/2607.20531"],["MCP-Bench","https://arxiv.org/abs/2508.20453"],["MCP-AgentBench","https://arxiv.org/abs/2509.09734"],["MCPAgentBench","https://arxiv.org/abs/2512.24565"]]},
      {title:"评测基础设施", desc:"支持可重复运行、可替换智能体、环境、执行轨迹与评测器。", links:[["AgentCompass","https://arxiv.org/abs/2607.13705"],["Harbor","https://github.com/harbor-framework/harbor"],["HAL","https://arxiv.org/abs/2510.11977"]]}
    ],
    latestWorks:[
      {kind:"基准",title:"Doc2Harness: Benchmarking LLMs on Long-Horizon Harness Engineering of Coding Agents",desc:"评测编程智能体执行长时 harness 工程任务的能力。",url:"https://arxiv.org/abs/2610.20344"},
      {kind:"基准与决策方法",title:"JevAgentHarness: Benchmarking, Deploying and Training Decision Models That Share Control with LLMs",desc:"结合基准与决策模型训练，研究 LLM 与运行时之间的控制委派。",url:"https://arxiv.org/abs/2610.21412"},
      {kind:"实现测试",title:"Complex Agents, Shallow Tests: Demystifying and Enhancing Test Adequacy of Agent Harness in the Wild",desc:"研究基于契约的 harness 实现测试及其测试充分性。",url:"https://arxiv.org/abs/2610.04921"},
      {kind:"安全基准",title:"HarnessSafe: Evaluating Safety Across Persistent Carriers in Agent Harnesses",desc:"评测信息与行为在 harness 持久载体之间延续时的安全风险。",url:"https://arxiv.org/abs/2608.06984"},
      {kind:"优化方法",title:"HARDE: Optimizing Agent Harnesses for Runtime Risk Detection and Execution Control",desc:"提出面向运行时风险检测和执行控制的 harness 优化方法；它不是基准套件。",url:"https://arxiv.org/abs/2609.38291"},
      {kind:"搜索方法",title:"Harness-Search: Guiding Long-Horizon Search through Multi-Agent Coordination",desc:"研究长时搜索中的证据检索；结论限于搜索任务，不推广为通用编程 harness 结果。",url:"https://arxiv.org/abs/2610.05382"},
      {kind:"评测系统",title:"LongHorizon-Harness: Advancing Long-Horizon Agents for Real-World Tasks",desc:"评测采用 Manage–Execute–Audit 循环的外层执行系统；论文与系统矩阵中的软件快照是不同对象。",url:"https://arxiv.org/abs/2608.01964"}
    ]
  }
};

const componentOrder = ["E","T","C","S","L","V"];
let language = "en";
let systems = [];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function setLanguage(next) {
  language = next;
  const dict = copy[language];
  document.documentElement.lang = language;
  document.title = `${dict.title} | ${language === "en" ? "Survey" : "综述"}`;
  document.querySelectorAll("[data-i18n]").forEach(el => { const value=dict[el.dataset.i18n]; if (typeof value === "string") el.textContent=value; });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { const value=dict[el.dataset.i18nAria]; if (value) el.setAttribute("aria-label",value); });
  document.querySelectorAll("[data-i18n-title]").forEach(el => { const value=dict[el.dataset.i18nTitle]; if (value) el.title=value; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { const value=dict[el.dataset.i18nPlaceholder]; if (value) el.placeholder=value; });
  document.querySelectorAll("[data-i18n-alt]").forEach(el => { const value=dict[el.dataset.i18nAlt]; if (value) el.alt=value; });
  document.querySelectorAll("[data-image-en][data-image-zh]").forEach(el => { el.src=language === "en" ? el.dataset.imageEn : el.dataset.imageZh; });
  const toggle=document.getElementById("language-toggle");
  toggle.textContent=language === "en" ? "中文" : "English";
  toggle.setAttribute("aria-label",language === "en" ? "Switch language to Chinese" : "切换到英文");
  toggle.setAttribute("aria-pressed",String(language === "zh"));
  document.getElementById("contributions").innerHTML=dict.contributions.map(([title,desc])=>`<li><strong>${escapeHtml(title)}</strong><span>${escapeHtml(desc)}</span></li>`).join("");
  renderFunctions();
  renderEvaluation();
  renderAgenda();
  renderLatest();
  renderSystems();
}

function renderFunctions(selected="E") {
  const dict=copy[language];
  const picker=document.getElementById("function-picker");
  picker.innerHTML=componentOrder.map(code=>`<button type="button" class="function-button" data-code="${code}" aria-pressed="${code===selected}"><span class="function-code">${code}</span><span class="function-name">${escapeHtml(dict.functions[code][0])}</span></button>`).join("");
  picker.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>renderFunctions(btn.dataset.code)));
  const [name,description]=dict.functions[selected];
  document.getElementById("function-explanation").innerHTML=`<strong>${selected} · ${escapeHtml(name)}.</strong> ${escapeHtml(description)}`;
}

function renderEvaluation() {
  const dict=copy[language];
  document.getElementById("evaluation-list").innerHTML=dict.evaluations.map((group,index)=>`<article class="evaluation-area"><h3>${escapeHtml(group.title)}</h3><p>${escapeHtml(group.desc)}</p><ul class="benchmark-links">${group.links.map(([name,url])=>`<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a></li>`).join("")}</ul></article>`).join("");
}
function renderAgenda() {
  const dict=copy[language];
  document.getElementById("agenda-list").innerHTML=dict.agenda.map(([title,desc])=>`<li><strong>${escapeHtml(title)}.</strong> ${escapeHtml(desc)}</li>`).join("");
}
function renderLatest() {
  document.getElementById("latest-list").innerHTML=copy[language].latestWorks.map(work=>`<article class="latest-item"><p class="latest-kind">${escapeHtml(work.kind)}</p><h3><a href="${escapeHtml(work.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(work.title)}</a></h3><p class="latest-description">${escapeHtml(work.desc)}</p></article>`).join("");
}
function ratingClass(rating) { return ({Full:"full",Partial:"partial",Absent:"absent",Unverified:"unverified"})[rating] || "unverified"; }
function ratingLetter(rating) { return ({Full:"F",Partial:"P",Absent:"A",Unverified:"U"})[rating] || "U"; }
function confidenceText(value) { return copy[language].confidence[value] || value; }
function evidenceText(value) { return copy[language].evidenceTypes[value] || value; }
function rowDetails(system) {
  const dict=copy[language];
  return system.components.map(c=>`<div class="evidence-item"><strong>${c.id} · ${escapeHtml(dict.componentNames[c.id])}</strong><span>${escapeHtml(dict.ratings[c.rating])}</span><span class="confidence">${escapeHtml(confidenceText(c.confidence))} · ${escapeHtml(evidenceText(c.evidenceType))}<br>${escapeHtml(dict.versionLabel)}: ${escapeHtml(c.version)} · ${escapeHtml(dict.accessedLabel)} ${escapeHtml(system.accessDate)}</span><a href="${escapeHtml(c.source)}" target="_blank" rel="noopener noreferrer">${language === "en" ? "Source" : "来源"}</a></div>`).join("");
}
let openSystemGroups = new Set(["anchor"]);
function renderSystems() {
  const dict=copy[language];
  const query=document.getElementById("system-search").value.trim().toLocaleLowerCase();
  const category=document.getElementById("category-filter").value;
  const rating=document.getElementById("rating-filter").value;
  const filtered=systems.filter(s=>s.name.toLocaleLowerCase().includes(query) && (category==="all"||s.category===category) && (rating==="all"||s.components.some(c=>c.rating===rating)));
  const body=document.getElementById("system-rows");
  const groupOrder=["anchor","coding","runtime","persistent","workplace"];
  const filtering=query!=="" || category!=="all" || rating!=="all";
  body.innerHTML=groupOrder.map(group=>{
    const members=filtered.filter(s=>s.category===group);
    if(!members.length) return "";
    const expanded=filtering || openSystemGroups.has(group);
    const groupHeading=`<tr class="system-group-row"><th colspan="8"><button type="button" class="system-group-toggle" data-group="${group}" aria-expanded="${expanded}" ${filtering?'disabled':''}><span aria-hidden="true">${expanded?'−':'+'}</span> ${escapeHtml(dict.categories[group])} <small>${members.length}</small></button></th></tr>`;
    if(!expanded) return groupHeading;
    return groupHeading+members.map((s,index)=>{
    const safeId=`evidence-${group}-${index}`;
    const ratings=s.components.map(c=>`<td class="rating-cell"><span class="rating-dot ${ratingClass(c.rating)}" aria-label="${escapeHtml(dict.ratings[c.rating])}" title="${escapeHtml(dict.ratings[c.rating])}">${ratingLetter(c.rating)}</span></td>`).join("");
    return `<tr class="data-row"><th scope="row" class="system-name">${escapeHtml(s.name)}</th>${ratings}<td><button class="evidence-toggle" type="button" aria-expanded="false" aria-controls="${safeId}" data-show="${escapeHtml(dict.showEvidence)}" data-hide="${escapeHtml(dict.hideEvidence)}">${escapeHtml(dict.showEvidence)}</button></td></tr><tr class="evidence-row" id="${safeId}" hidden><td colspan="8"><div class="evidence-list">${rowDetails(s)}</div></td></tr>`;
    }).join("");
  }).join("");
  body.querySelectorAll(".system-group-toggle").forEach(btn=>btn.addEventListener("click",()=>{
    const group=btn.dataset.group;
    if(openSystemGroups.has(group)) openSystemGroups.delete(group); else openSystemGroups.add(group);
    renderSystems();
    body.querySelector(`[data-group="${group}"]`).focus({preventScroll:true});
  }));
  body.querySelectorAll(".evidence-toggle").forEach(btn=>btn.addEventListener("click",()=>{
    const row=document.getElementById(btn.getAttribute("aria-controls"));
    const open=btn.getAttribute("aria-expanded")==="true";
    btn.setAttribute("aria-expanded",String(!open)); row.hidden=open; btn.textContent=open?btn.dataset.show:btn.dataset.hide;
  }));
  const visibleCount=body.querySelectorAll(".data-row").length;
  document.getElementById("matrix-count").textContent=language==="zh" ? `匹配 ${filtered.length} / ${systems.length} 个系统 · 已展开 ${visibleCount} 个` : `${filtered.length} / ${systems.length} matched · ${visibleCount} visible`;
  document.getElementById("expand-groups").disabled=filtering;
  document.getElementById("collapse-groups").disabled=filtering;
}

async function copyBibtex() {
  const text=document.getElementById("bibtex").textContent;
  const status=document.getElementById("copy-status");
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const area=document.createElement("textarea"); area.value=text; area.setAttribute("readonly",""); area.style.position="fixed"; area.style.opacity="0"; document.body.appendChild(area); area.select();
      const copied=document.execCommand("copy"); area.remove(); if(!copied) throw new Error("copy unavailable");
    }
    status.textContent=copy[language].copySuccess;
  } catch (_) { status.textContent=copy[language].copyFailure; }
}

async function init() {
  if (window.HARNESS_SYSTEMS && Array.isArray(window.HARNESS_SYSTEMS.systems)) systems=window.HARNESS_SYSTEMS.systems;
  setLanguage("en");
  if (!systems.length) document.getElementById("matrix-count").textContent=copy[language].dataError;
  document.getElementById("language-toggle").addEventListener("click",()=>setLanguage(language==="en"?"zh":"en"));
  document.getElementById("system-search").addEventListener("input",renderSystems);
  document.getElementById("category-filter").addEventListener("change",renderSystems);
  document.getElementById("rating-filter").addEventListener("change",renderSystems);
  document.getElementById("expand-groups").addEventListener("click",()=>{openSystemGroups=new Set(["anchor","coding","runtime","persistent","workplace"]);renderSystems();});
  document.getElementById("collapse-groups").addEventListener("click",()=>{openSystemGroups=new Set();renderSystems();});
  document.getElementById("copy-citation").addEventListener("click",copyBibtex);
}

// Captions and figure scope synchronized with README at c77c747.
Object.assign(copy.en, {"p2_0Caption": "The model, harness, and environment form a feedback loop of observation, inference, and action. Context management selects model inputs; execution and tools translate outputs into actions; persistent state connects successive turns. Lifecycle hooks intervene at execution boundaries, while the evaluation interface collects events and trajectories. Together, these mechanisms explain how runtime design shapes agent behavior.", "p2_0Alt": "Agent harness architecture: execution, tools, context, state, lifecycle and evidence", "p2_1Caption": "A tool-using execution path connects condition checks, authorization, dispatch, execution, and result commitment, with retry and recovery following failure. The lanes relate these stages to ETCSLV responsibilities, showing how a model decision becomes a traceable and recoverable action.", "p2_1Alt": "Illustrative tool-using execution path", "p2_2Caption": "Contemporary harnesses draw on runtime ideas from software testing, interactive environments, and agent architectures. Representative contributions are organized by historical phase to trace how execution control, tool use, and state management became shared concerns in agent research.", "p2_2Alt": "Historical evolution of agent harnesses", "p2_3Caption": "The landscape distinguishes five groups of runtime systems from four adjacent research units. The former constitute the 34-system comparison; the latter supply capability modules, protocol and sandbox infrastructure, evaluation infrastructure, and task environments. This distinction connects complementary contributions while clarifying the unit of comparison.", "p2_3Alt": "Five runtime comparison groups and four adjacent analysis units", "p2_4Caption": "Documented coverage of execution, tools, context, state, lifecycle, and evaluation interfaces across 34 systems. F, P, A, and ? denote Full, Partial, Absent, and Unverified. Rows show each system’s allocation of responsibilities; columns support comparison of the same function across systems. Supporting sources appear in the table below.", "p2_4Alt": "Documentation-backed component coverage for 34 systems", "p2_5Caption": "Environment changes, task ambiguity, and harness configuration shape the interpretation of evaluation results. The diagram connects these attribution problems to controls and diagnostic methods, explaining why agent comparisons need to specify model, runtime, and environment conditions together.", "p2_5Alt": "Three sources of evaluation attribution risk", "p2_6Caption": "Tool governance spans registration, selection, dispatch, execution, result handling, and recovery. Interface contracts, authorization, isolation, and result checks appear at their respective execution stages, showing how reliable tool use depends on coordinated controls throughout the action path.", "p2_6Alt": "Tool governance across the execution lifecycle", "p2_7Caption": "Multi-agent organization determines how tasks are delegated, information is exchanged, and results are combined. The diagram compares identity, authority, shared-state, and recording responsibilities across coordination patterns, connecting topology to runtime design.", "p2_7Alt": "Multi-agent coordination patterns and runtime responsibilities", "p2_8Caption": "Meta-Harness connects candidate code, task evaluation, execution traces, and accumulated history in an optimization loop. It illustrates one route to harness evolution: translating execution experience into persistent implementation changes and assessing those changes in subsequent evaluations.", "p2_8Alt": "Reported Meta-Harness code-evaluation-history feedback loop", "openFigure": "Open full-resolution figure", "historyKicker": "Historical evolution", "historyTitle": "Where runtime responsibilities come from", "engineeringKicker": "Cross-cutting engineering", "engineeringTitle": "Tools and collaboration carry runtime obligations", "toolsTitle": "Tool governance across the execution loop", "coordinationTitle": "Coordination patterns and responsibility boundaries", "evolutionKicker": "Harness evolution", "evolutionTitle": "How harnesses change through experience", "evolutionIntro": "Harness evolution operates on different objects: reusable skills, executable runtime code, or the model and runtime together. The survey compares what changes, which feedback guides the change, and how improvements are evaluated.", "evolutionFigure": "Inspect the Meta-Harness code-optimization loop", "evoWork": "Work", "evoObject": "Object of change", "evoQuestion": "Role in the comparison", "evoSkill": "Reusable skill text", "evoSkillQ": "How can rollout feedback guide persistent skill edits?", "evoCode": "Executable harness code", "evoCodeQ": "How can traces and task scores guide runtime implementation search?", "evoAuto": "Task-specific harness and policy code", "evoAutoQ": "How can environment feedback guide action-validating code?", "evoBench": "Changing tools, skills, and agent configurations", "evoBenchQ": "How are adaptation and retention measured across stages?", "evoTao": "Model weights and runtime components", "evoTaoQ": "How does model training interact with a changing harness?", "frameworkIntro": "ETCSLV organizes six recurring runtime responsibilities and their interactions: execution, tools, context, state, lifecycle controls, and evaluation.", "evaluationIntro": "Six research questions organize the evaluation literature, connecting benchmark suites, evaluation methods, and the infrastructure needed to run them.", "agendaIntro": "The research agenda moves from documenting components to testing how their interactions shape task performance, state continuity, authority, and adaptation.", "latestTitle": "Selected research updates"});
Object.assign(copy.zh, {"p2_0Caption": "模型、harness 与环境通过观察、推理和行动构成反馈循环。上下文管理决定模型接收的信息，执行循环与工具注册表将输出转化为行动，状态存储维持跨轮次连续性；生命周期钩子介入关键执行节点，评测接口汇集事件与轨迹。这些机制共同解释了运行时如何影响智能体行为。", "p2_0Alt": "Harness 的执行、工具、上下文、状态、生命周期与证据架构", "p2_1Caption": "一次工具调用从任务推进到结果提交，经历条件检查、授权、分发和执行；失败后则进入重试或恢复。图中的泳道将各阶段与 ETCSLV 职责对应起来，说明一次模型决策如何成为可追踪、可恢复的行动。", "p2_1Alt": "工具调用子路径中的事件、授权、提交与重试", "p2_2Caption": "当代 harness 汇集了软件测试、交互式环境与智能体架构中的运行时思想。图按历史阶段梳理代表性贡献，展示执行控制、工具使用和状态管理如何逐步成为研究智能体系统的共同问题。", "p2_2Alt": "Agent harness 的代表性历史贡献", "p2_3Caption": "系统版图区分五组运行时系统与四类相邻研究对象。前者构成本文的 34 系统比较集，后者提供能力模块、协议与沙箱、评测基础设施及任务环境。这一区分明确了系统比较的层次，也解释了不同研究成果如何共同支撑智能体运行。", "p2_3Alt": "五组运行系统与四类相邻分析单元", "p2_4Caption": "34 个系统在执行、工具、上下文、状态、生命周期与评测接口上的文档证据覆盖。F、P、A、? 分别表示完整、部分、明确缺失与尚未核实。沿行可观察一个系统的职责配置，沿列可比较同一功能在不同系统中的实现覆盖；具体依据见下表。", "p2_4Alt": "34 个系统的 ETCSLV 文档证据覆盖", "p2_5Caption": "环境变化、任务歧义与 harness 配置共同影响评测结果的解释。图将三类归因问题与相应的控制和诊断方法对应起来，说明比较智能体表现时为何需要同时记录模型、运行时和环境条件。", "p2_5Alt": "环境漂移、任务歧义和 harness 耦合带来的归因风险", "p2_6Caption": "工具治理贯穿注册、选择、分发、执行、结果处理与恢复。图将接口契约、行动授权、执行隔离和结果检查放回各自发生的环节，说明可靠的工具使用依赖整条执行路径上的协同控制。", "p2_6Alt": "从工具注册到恢复的治理职责", "p2_7Caption": "多智能体协作的组织方式决定任务如何委派、信息如何传递以及结果如何汇总。图比较不同协同模式下的身份、权限、共享状态与记录职责，将拓扑选择与运行时设计联系起来。", "p2_7Alt": "多 Agent 协同模式及身份、权限、状态和证据职责", "p2_8Caption": "Meta-Harness 将候选代码、任务评测、执行轨迹与历史记录连接成优化循环。它展示了本文讨论的一条演化路径：把运行经验转化为对 harness 实现的持久修改，再通过后续评测检验修改效果。", "p2_8Alt": "Meta-Harness 的代码、评测、轨迹与历史反馈循环", "openFigure": "打开原尺寸图片", "historyKicker": "历史演进", "historyTitle": "运行时职责从何而来", "engineeringKicker": "贯穿系统的工程问题", "engineeringTitle": "工具调用与协作中的运行时职责", "toolsTitle": "贯穿执行循环的工具治理", "coordinationTitle": "协同模式与责任边界", "evolutionKicker": "Harness 演化", "evolutionTitle": "Harness 如何从运行经验中演化", "evolutionIntro": "Harness 演化涉及不同的修改对象：可复用技能、运行时代码，以及与运行时共同适应的模型。本文围绕“修改什么、依据什么反馈、如何检验收益”比较相关研究。", "evolutionFigure": "展开 Meta-Harness 的代码优化循环", "evoWork": "研究", "evoObject": "修改或评测对象", "evoQuestion": "在比较中回答的问题", "evoSkill": "可复用的技能文本", "evoSkillQ": "如何利用执行反馈指导持久的技能修改？", "evoCode": "可执行的 harness 代码", "evoCodeQ": "如何利用轨迹与任务评分搜索运行时实现？", "evoAuto": "面向任务的 harness 与策略代码", "evoAutoQ": "如何利用环境反馈生成检查行动有效性的代码？", "evoBench": "变化中的工具、技能与智能体配置", "evoBenchQ": "如何分阶段测量适应能力与能力保持？", "evoTao": "模型权重与运行时组件", "evoTaoQ": "模型训练如何与 harness 变化相互作用？", "frameworkIntro": "ETCSLV 将运行时组织为六项相互关联的职责：执行、工具、上下文、状态、生命周期控制与评测，为分析系统架构提供统一框架。", "evaluationIntro": "本文按六类研究问题组织评测文献，分别介绍相关基准、评测方法，以及支撑实验运行的基础设施。", "agendaIntro": "研究议程从描述组件转向检验组件间的相互作用，重点考察任务表现、状态连续性、权限控制和持续适应。", "latestTitle": "研究补充"});
Object.assign(copy.en, {coverageOverview:"View the full component-coverage figure"});
Object.assign(copy.zh, {coverageOverview:"展开完整组件覆盖图"});
Object.assign(copy.en,{expandGroups:"Expand all groups",collapseGroups:"Collapse all groups"});
Object.assign(copy.zh,{expandGroups:"展开全部组别",collapseGroups:"收起全部组别"});
Object.assign(copy.en, {"casesTitle": "Four architectures, four design questions", "caseClaude": "Claude Code integrates repository exploration, editing, commands, and delegated work into a coding workflow. It shows how context selection and action approval shape the path from a user goal to a tested artifact.", "caseCodex": "Codex connects model and tool events through an execution loop, persisted rollouts, and approval and sandbox controls. It makes the relationship between execution, recoverable state, and client interfaces central to architecture analysis.", "caseDeepSeek": "DeepSeek Harness exposes runtime components through plugins, profiles, and patches. Typed tools, session events, and replaceable services make it a case for studying component boundaries and controlled runtime modification.", "caseOpenClaw": "OpenClaw coordinates messaging channels, persistent sessions, and scheduled work through a gateway. It extends the comparison to agents whose identity, state, and authority remain relevant across interactions and over time.", "argumentLead": "The survey brings together first-party system evidence, controlled harness evaluations, and lifecycle studies to examine how the model, harness, and environment shape observed capability.", "latestIntro": "Seven studies added on 18 October 2026 cover benchmarks, methods, implementation testing, and security.", "citationTitle": "Paper versions and citation", "citationNote": "The repository PDF is v4; the DOI points to archived v3; v5 is in revision."});
Object.assign(copy.zh, {"casesTitle": "四个重点案例：不同架构如何组织运行时职责", "caseClaude": "Claude Code 将仓库检索、编辑、命令执行与任务委派整合为编程工作流。这个案例说明，上下文选择与行动审批如何共同影响从用户目标到可测试产物的执行过程。", "caseCodex": "Codex 通过执行循环组织模型与工具事件，以持久化运行记录支持恢复，并在行动路径上实施审批与沙箱控制。其分析重点是执行、可恢复状态与客户端交互之间的关系。", "caseDeepSeek": "DeepSeek Harness 通过插件、配置方案与补丁组织可替换的运行时组件。类型化工具、会话事件和可替换服务，使其成为研究组件边界与受控运行时修改的重要案例。", "caseOpenClaw": "OpenClaw 通过网关协调消息渠道、持久会话与定时任务。它将讨论扩展到持续运行的个人智能体：身份、状态与权限需要跨越多次交互，并在时间推移中保持一致。", "argumentLead": "本文汇集第一方系统资料、受控 harness 评测与生命周期研究，考察模型、harness 和环境如何共同塑造智能体表现。", "latestIntro": "2026 年 10 月 18 日补充七项研究，涵盖基准、方法、实现测试与安全。", "citationTitle": "论文版本与引用", "citationNote": "仓库 PDF 为 v4，DOI 对应已归档的 v3，v5 正在修订。"});
Object.assign(copy.en, {"definitionTitle": "What is an agent harness?", "definitionText": "An agent harness is the runtime software that connects a language model to tools and an environment. It manages the execution loop, assembles context, preserves state, controls actions, and records evidence for evaluation. This survey examines how these architectural choices shape agent behavior alongside the model and task environment.", "frameworkTitle": "Agent harness architecture: six runtime functions", "systemsTitle": "Comparing 34 agent harness systems", "evaluationTitle": "Agent harness evaluation: six research areas"});
Object.assign(copy.zh, {"definitionTitle": "什么是 agent harness？", "definitionText": "Agent harness 是连接语言模型、工具与环境的运行时软件。它管理执行循环、组织上下文、保存状态、控制行动，并记录评测所需的证据。本综述讨论这些架构选择如何与模型和任务环境共同影响智能体行为。", "frameworkTitle": "Agent harness 架构：六项运行时功能", "systemsTitle": "34 个 agent harness 系统的比较", "evaluationTitle": "Agent harness 评测：六类研究问题"});
init();
